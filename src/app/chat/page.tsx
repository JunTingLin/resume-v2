import { type Metadata } from "next";
import { ChatPanel } from "@/components/chat/ChatPanel";

export const metadata: Metadata = {
  title: "Chat",
  description:
    "Chat with Jun-Ting Lin's digital twin — ask about his background, projects, and experience.",
};

export default function ChatPage() {
  return (
    <section className="flex flex-col gap-6 max-w-2xl mx-auto">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Chat with my digital twin</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Ask anything about my background, projects, or experience.
          Powered by Gemini 2.5 Flash-Lite — limited to 20 turns per session,
          30 sessions per day per IP.
        </p>
      </header>

      <ChatPanel />
    </section>
  );
}
