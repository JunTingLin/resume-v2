"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChatPanel } from "./ChatPanel";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // The /chat page is the full chat experience — no need for the widget there.
  if (pathname === "/chat") return null;

  return (
    <>
      {/* Floating action button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Chat with my digital twin"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 shadow-lg flex items-center justify-center hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
      >
        {isOpen ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Popup panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-950 shadow-xl flex flex-col overflow-hidden">
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
            <div>
              <p className="text-sm font-semibold">Chat with Jun-Ting (AI)</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Digital twin · Gemini 2.5 Flash-Lite
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Chat content */}
          <ChatPanel compact />
        </div>
      )}
    </>
  );
}
