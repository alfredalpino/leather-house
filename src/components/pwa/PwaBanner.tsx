"use client";

import { usePwa } from "@/lib/pwa-context";
import { WifiOff, Download, X, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function PwaBanner() {
  const {
    isOnline,
    isStandalone,
    canInstall,
    isIOS,
    promptInstall,
    showInstallBanner,
    dismissInstallBanner,
  } = usePwa();

  return (
    <>
      {/* Offline Alert Pill */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <div className="pointer-events-auto bg-charcoal/95 text-warm-white text-xs px-4 py-2 shadow-lg backdrop-blur-md border border-line/30 rounded-full flex items-center gap-2">
              <WifiOff size={14} className="text-stone" />
              <span>Offline Mode · Cached catalogue active</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Install Prompt (if browser supports beforeinstallprompt) */}
      <AnimatePresence>
        {!isStandalone && showInstallBanner && canInstall && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-warm-white border border-line shadow-[0_12px_36px_rgba(20,19,18,0.12)] p-4 select-none"
          >
            <div className="flex items-start gap-3.5">
              <div className="relative w-11 h-11 shrink-0 bg-ink rounded-sm overflow-hidden flex items-center justify-center border border-brass/40">
                <span className="font-display text-warm-white text-lg font-semibold tracking-tight">
                  LH
                </span>
              </div>

              <div className="flex-1 min-w-0 pr-2">
                <p className="text-xs font-semibold text-ink tracking-tight">
                  Add Leather House to Home Screen
                </p>
                <p className="text-[11px] text-muted leading-snug mt-0.5">
                  Instant loading, offline browsing, and quick access to your
                  Lucknow orders.
                </p>

                <div className="flex items-center gap-2 mt-2.5">
                  <button
                    type="button"
                    onClick={promptInstall}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink text-warm-white text-[11px] font-medium tracking-[0.08em] uppercase hover:bg-charcoal transition-colors rounded-sm"
                  >
                    <Download size={13} />
                    Install App
                  </button>
                  <button
                    type="button"
                    onClick={dismissInstallBanner}
                    className="px-2.5 py-1.5 text-muted hover:text-ink text-[11px] font-medium transition-colors"
                  >
                    Later
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={dismissInstallBanner}
                className="text-muted hover:text-ink p-1 -mr-1"
                aria-label="Dismiss install banner"
              >
                <X size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
