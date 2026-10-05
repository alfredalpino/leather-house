"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data/products";

export function CartToast() {
  const { lastNotification, dismissNotification, openCart } = useCart();
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!lastNotification) return;

    setProgress(100);
    const duration = 4000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= step) {
          clearInterval(timer);
          dismissNotification();
          return 0;
        }
        return prev - step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [lastNotification, dismissNotification]);

  return (
    <AnimatePresence>
      {lastNotification && (
        <motion.div
          key={lastNotification.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="fixed bottom-20 lg:bottom-8 right-4 left-4 sm:left-auto sm:w-[400px] z-[55] pointer-events-auto"
          role="status"
          aria-live="polite"
        >
          <div className="relative overflow-hidden rounded-[2px] bg-warm-white border border-stone/70 shadow-[0_12px_36px_rgba(20,19,18,0.18)] p-3.5 sm:p-4">
            {/* Countdown line */}
            <div
              className="absolute top-0 left-0 h-[2px] bg-brass transition-all duration-75"
              style={{ width: `${progress}%` }}
            />

            <div className="flex items-start gap-3.5">
              {/* Product Thumbnail */}
              <div className="relative h-16 w-14 shrink-0 overflow-hidden bg-bone rounded-[1px] border border-stone/30">
                <Image
                  src={lastNotification.product.images[0]}
                  alt={lastNotification.product.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-forest">
                  <Check size={13} strokeWidth={2.5} />
                  <span>Added to Bag</span>
                </div>
                <h4 className="mt-0.5 truncate text-[14px] font-medium text-ink">
                  {lastNotification.product.name}
                </h4>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-muted">
                  <span>{formatPrice(lastNotification.product.price)}</span>
                  {lastNotification.size && (
                    <>
                      <span>•</span>
                      <span>Size {lastNotification.size}</span>
                    </>
                  )}
                  {lastNotification.quantity > 1 && (
                    <>
                      <span>•</span>
                      <span>Qty {lastNotification.quantity}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Dismiss */}
              <button
                type="button"
                onClick={dismissNotification}
                className="shrink-0 p-1 text-muted hover:text-ink transition-colors"
                aria-label="Dismiss notification"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="mt-3 flex items-center gap-2 pt-2 border-t border-line/60">
              <button
                type="button"
                onClick={() => {
                  dismissNotification();
                  openCart();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 bg-ink text-warm-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-charcoal transition-colors active:scale-[0.98]"
              >
                <ShoppingBag size={13} />
                <span>View Bag</span>
              </button>
              <Link
                href="/checkout"
                onClick={dismissNotification}
                className="flex-1 inline-flex items-center justify-center h-9 border border-stone text-ink text-xs font-medium tracking-[0.1em] uppercase hover:border-ink hover:bg-stone/10 transition-colors active:scale-[0.98]"
              >
                Checkout
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
