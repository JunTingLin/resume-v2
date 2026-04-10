"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const SUGGESTED_PROMPTS = [
  "Which universities did you attend?",
  "Tell me about VisionTrader.",
  "What technologies do you work with?",
  "How can I contact you?",
];

interface ChatPanelProps {
  /** Compact mode: used inside the floating widget (smaller, no suggested-prompt cards) */
  compact?: boolean;
}

export function ChatPanel({ compact = false }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  // Keep message list scrolled to the bottom as new tokens arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isBusy) return;
    sendMessage({ text });
    setInput("");
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
  };

  // Our 429 responses return JSON { error: "..." }; surface that text when available.
  const errorMessage = error
    ? (() => {
        try {
          const parsed = JSON.parse(error.message);
          return typeof parsed.error === "string" ? parsed.error : error.message;
        } catch {
          return error.message;
        }
      })()
    : null;

  return (
    <div className={cn("flex flex-col", compact ? "h-full" : "gap-6")}>
      {/* Messages area */}
      <div
        ref={scrollRef}
        className={cn(
          "flex flex-col gap-3 overflow-y-auto",
          compact ? "flex-1 px-3 pt-3" : "min-h-[300px]"
        )}
      >
        {messages.length === 0 && !errorMessage && (
          <div className="flex flex-col gap-3">
            <p className="text-sm italic text-gray-400">
              {compact
                ? "Ask me anything 👋"
                : "No messages yet — try one of these:"}
            </p>
            {!compact && (
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="text-xs rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex flex-col max-w-[85%]",
              m.role === "user"
                ? "self-end items-end"
                : "self-start items-start"
            )}
          >
            <div className="text-xs text-gray-500 mb-1">
              {m.role === "user" ? "You" : "Jun-Ting (AI)"}
            </div>
            <div
              className={cn(
                "rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
                m.role === "user"
                  ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              )}
            >
              {m.parts.map((part, i) =>
                part.type === "text" ? <span key={i}>{part.text}</span> : null
              )}
            </div>
          </div>
        ))}

        {status === "submitted" && (
          <div className="self-start text-sm text-gray-400 italic">
            Thinking…
          </div>
        )}

        {errorMessage && (
          <div className="self-start rounded-lg px-3 py-2 text-sm bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 max-w-[85%]">
            {errorMessage}
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-2",
          compact
            ? "px-3 pb-3 pt-2 border-t border-gray-200 dark:border-gray-800"
            : "sticky bottom-4 bg-white dark:bg-zinc-950 py-2"
        )}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isBusy ? "Waiting…" : "Ask me anything…"}
          disabled={isBusy}
          className="flex-1 rounded border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500"
        />
        <button
          type="submit"
          disabled={isBusy || !input.trim()}
          className="rounded bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 px-3 py-2 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        >
          Send
        </button>
      </form>
    </div>
  );
}
