"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isBusy) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <section className="flex flex-col gap-6 max-w-2xl mx-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Chat with my digital twin</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Ask anything about my background, projects, or experience.
          This is a v0 prototype — no rate limit yet, and I only know what&apos;s in my system prompt.
        </p>
      </header>

      <div className="flex flex-col gap-4 min-h-[300px]">
        {messages.length === 0 && (
          <p className="text-sm italic text-gray-400">No messages yet. Say hi 👋</p>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col max-w-[85%] ${
              m.role === "user" ? "self-end items-end" : "self-start items-start"
            }`}
          >
            <div className="text-xs text-gray-500 mb-1">
              {m.role === "user" ? "You" : "Jun-Ting (AI)"}
            </div>
            <div
              className={`rounded-lg p-3 whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              {m.parts.map((part, i) =>
                part.type === "text" ? <span key={i}>{part.text}</span> : null
              )}
            </div>
          </div>
        ))}

        {status === "submitted" && (
          <div className="self-start text-sm text-gray-400 italic">Thinking…</div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="sticky bottom-4 flex gap-2 bg-white dark:bg-gray-900 py-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isBusy ? "Waiting for reply…" : "Ask me anything…"}
          disabled={isBusy}
          className="flex-1 rounded border border-gray-300 dark:border-gray-700 px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isBusy || !input.trim()}
          className="rounded bg-blue-600 text-white px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </section>
  );
}
