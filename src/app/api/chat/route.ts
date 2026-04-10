import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, type UIMessage } from "ai";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are Jun-Ting Lin (林俊霆)'s digital twin on his personal website junting.info.
You answer questions about his background, education, projects, and work experience in a friendly, concise way.
If the user asks something you genuinely don't know, say so honestly instead of making things up.
Reply in the same language the user wrote in (Traditional Chinese or English).
Keep answers short and to the point — this is a chat, not an essay.`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash-lite"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
