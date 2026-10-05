"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const messages = [
  "Free shipping in India",
  "Visit the house in Aminabad",
  "Selected for grain and construction",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-[60] bg-ink text-warm-white">
      <div className="container-catalogue flex h-9 items-center justify-center gap-3">
        <button
          type="button"
          className="hidden sm:inline-flex h-7 w-7 items-center justify-center text-warm-white/70 hover:text-warm-white transition-colors"
          aria-label="Previous announcement"
          onClick={() =>
            setIndex((current) => (current - 1 + messages.length) % messages.length)
          }
        >
          <ChevronLeft size={14} strokeWidth={1.75} />
        </button>
        <p
          key={index}
          className="truncate px-2 text-[10px] sm:text-xs tracking-[0.12em] uppercase text-center text-warm-white/95 reveal-fade"
        >
          {messages[index]}
        </p>
        <button
          type="button"
          className="hidden sm:inline-flex h-7 w-7 items-center justify-center text-warm-white/70 hover:text-warm-white transition-colors"
          aria-label="Next announcement"
          onClick={() => setIndex((current) => (current + 1) % messages.length)}
        >
          <ChevronRight size={14} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
