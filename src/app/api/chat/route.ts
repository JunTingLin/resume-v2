import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { buildSystemPrompt } from "@/lib/chatbot/knowledge";
import {
  checkIpLimit,
  checkAndIncrSessionTurns,
  MAX_TURNS_PER_SESSION,
} from "@/lib/chatbot/ratelimit";

export const runtime = "nodejs";
export const maxDuration = 30;

// ─── Input limits ────────────────────────────────────────────────────────────
const MAX_MESSAGES = 42;          // 20-turn cap × 2 roles + small buffer
const MAX_CHARS_PER_MESSAGE = 4_000;
const MAX_TOTAL_CHARS = 24_000;

function validateInput(messages: UIMessage[]): string | null {
  if (!Array.isArray(messages) || messages.length === 0)
    return "No messages provided.";
  if (messages.length > MAX_MESSAGES)
    return "Too many messages in this conversation.";

  let total = 0;
  for (const m of messages) {
    const text = m.parts
      .filter((p) => p.type === "text")
      .map((p: { type: string; text?: string }) => p.text ?? "")
      .join("");
    if (text.length > MAX_CHARS_PER_MESSAGE)
      return "One of your messages is too long (max 4 000 characters).";
    total += text.length;
  }
  if (total > MAX_TOTAL_CHARS)
    return "The conversation is too long. Please start a new chat.";

  return null;
}

// ─── LLM error classification ────────────────────────────────────────────────
function classifyLlmError(err: unknown): { status: number; message: string } {
  const msg = err instanceof Error ? err.message.toLowerCase() : String(err).toLowerCase();

  // Google quota / our own ratelimit hit at the API level
  if (msg.includes("429") || msg.includes("quota") || msg.includes("rate limit"))
    return { status: 503, message: "The AI service is busy right now. Please try again in a moment." };

  // Bad or expired API key
  if (msg.includes("401") || msg.includes("api_key") || msg.includes("api key") || msg.includes("authentication"))
    return { status: 503, message: "The AI service is temporarily unavailable. Please try again later." };

  // Safety filter triggered
  if (msg.includes("safety") || msg.includes("blocked") || msg.includes("harm"))
    return { status: 422, message: "I can't respond to that message." };

  // Model / network timeout
  if (msg.includes("timeout") || msg.includes("timed out") || msg.includes("deadline"))
    return { status: 504, message: "The AI took too long to respond. Please try again." };

  // Catch-all
  return { status: 500, message: "Something went wrong. Please try again." };
}

// ─── IP helper ───────────────────────────────────────────────────────────────
function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// ─── Route handler ───────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const body = (await req.json()) as { id?: string; messages: UIMessage[] };
  const { id: sessionId, messages } = body;

  // 1. Input validation
  const inputError = validateInput(messages);
  if (inputError) {
    return Response.json({ error: inputError }, { status: 400 });
  }

  // 2. IP rate limit
  const ip = getClientIp(req);
  const ipCheck = await checkIpLimit(ip);
  if (!ipCheck.success) {
    const minutes = Math.max(1, Math.ceil((ipCheck.resetMs - Date.now()) / 60_000));
    return Response.json(
      { error: `Daily chat limit reached for your IP. Try again in ~${minutes} minutes.` },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((ipCheck.resetMs - Date.now()) / 1_000)) },
      }
    );
  }

  // 3. Session turn cap
  if (sessionId) {
    const session = await checkAndIncrSessionTurns(sessionId);
    if (!session.success) {
      return Response.json(
        { error: `This chat has reached its ${MAX_TURNS_PER_SESSION}-turn limit. Please refresh to start a new conversation.` },
        { status: 429 }
      );
    }
  }

  // 4. LLM call — errors surface before the stream starts (auth, quota, safety)
  //    Mid-stream errors are handled by the SDK and closed gracefully.
  try {
    const result = streamText({
      model: google("gemini-2.5-flash-lite"),
      system: buildSystemPrompt(),
      messages: await convertToModelMessages(messages),
      maxOutputTokens: 1024,
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    const { status, message } = classifyLlmError(err);
    return Response.json({ error: message }, { status });
  }
}
