"use client";

import Link from "next/link";
import { WifiOff, RefreshCw, ShoppingBag } from "lucide-react";

export function OfflineClient() {
  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center bg-paper/60 border border-line/80 p-8 sm:p-10 shadow-[0_8px_30px_rgba(20,19,18,0.04)]">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-bone text-ink">
          <WifiOff size={24} strokeWidth={1.75} />
        </div>

        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted mb-2">
          Connectivity Notice
        </p>

        <h1 className="font-display text-3xl sm:text-4xl text-ink font-medium tracking-tight mb-4">
          Browsing Offline
        </h1>

        <p className="text-sm text-muted leading-relaxed mb-8">
          You are currently disconnected from the internet. Your saved bag and
          previously cached catalogue collections remain intact.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            type="button"
            onClick={handleReload}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase bg-ink text-warm-white hover:bg-charcoal transition-colors"
          >
            <RefreshCw size={14} />
            Try Reconnecting
          </button>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase border border-line bg-warm-white text-ink hover:border-ink transition-colors"
          >
            <ShoppingBag size={14} />
            View Cached Shop
          </Link>
        </div>

        <div className="pt-6 border-t border-line text-left">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink mb-1">
            Aminabad Flagship Store
          </p>
          <p className="text-xs text-muted leading-relaxed">
            Aminabad, Lucknow, Uttar Pradesh · Mon–Sat 11:00 AM – 9:30 PM
          </p>
          <p className="text-xs text-tobacco mt-1 font-medium">
            Ph: +91 98390 12345 · Always open in person
          </p>
        </div>
      </div>
    </div>
  );
}
