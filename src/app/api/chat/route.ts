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

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  const body = (await req.json()) as { id?: string; messages: UIMessage[] };
  const { id: sessionId, messages } = body;

  const ip = getClientIp(req);
  const ipCheck = await checkIpLimit(ip);
  if (!ipCheck.success) {
    const minutes = Math.max(1, Math.ceil((ipCheck.resetMs - Date.now()) / 60000));
    return Response.json(
      {
        error: `Daily chat limit reached for your IP. Try again in ~${minutes} minutes.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((ipCheck.resetMs - Date.now()) / 1000)),
        },
      }
    );
  }

  if (sessionId) {
    const session = await checkAndIncrSessionTurns(sessionId);
    if (!session.success) {
      return Response.json(
        {
          error: `This chat has reached its ${MAX_TURNS_PER_SESSION}-turn limit. Please refresh to start a new conversation.`,
        },
        { status: 429 }
      );
    }
  }

  const result = streamText({
    model: google("gemini-2.5-flash-lite"),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 1024,
  });

  return result.toUIMessageStreamResponse();
}
