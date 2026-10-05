"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Bag"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
            onClick={closeCart}
            aria-label="Close cart overlay"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 340 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-warm-white shadow-[-8px_0_40px_rgba(23,23,22,0.18)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone/60 px-5 h-14">
              <div className="flex items-center gap-2">
                <ShoppingBag size={17} strokeWidth={1.8} />
                <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink">
                  Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center text-ink hover:text-accent transition-colors"
                aria-label="Close bag"
                onClick={closeCart}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              {items.length === 0 ? (
                <div className="flex h-full min-h-[260px] flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-bone flex items-center justify-center text-stone mb-4">
                    <ShoppingBag size={28} strokeWidth={1.4} />
                  </div>
                  <p className="font-display text-2xl">Your bag is empty</p>
                  <p className="mt-2 text-sm text-muted max-w-[240px]">
                    Explore the house and discover leather goods and pure attars made to endure.
                  </p>
                  <Button href="/shop" className="mt-6" onClick={closeCart}>
                    Explore catalogue
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <motion.li
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={`${item.product.id}-${item.size ?? "default"}`}
                      className="grid grid-cols-[88px_1fr] gap-4"
                    >
                      <div className="relative aspect-[4/5] bg-bone overflow-hidden rounded-[1px] border border-stone/20">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="88px"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[11px] tracking-[0.14em] uppercase text-muted">
                              {item.product.category}
                            </p>
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="mt-1 block text-[15px] font-medium leading-snug hover:text-accent transition-colors"
                              onClick={closeCart}
                            >
                              {item.product.name}
                            </Link>
                            {item.size && (
                              <p className="mt-1 text-xs text-muted">Size {item.size}</p>
                            )}
                          </div>
                          <p className="text-sm font-medium shrink-0">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                        <div className="mt-auto pt-3 flex items-center justify-between">
                          <div className="inline-flex items-center border border-stone/80 rounded-[1px]">
                            <button
                              type="button"
                              className="h-8 w-8 inline-flex items-center justify-center hover:bg-stone/20 transition-colors"
                              aria-label="Decrease quantity"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                  item.size,
                                )
                              }
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="h-8 w-8 inline-flex items-center justify-center hover:bg-stone/20 transition-colors"
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                  item.size,
                                )
                              }
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <button
                            type="button"
                            className="text-[11px] tracking-[0.1em] uppercase text-muted hover:text-oxide border-b border-transparent hover:border-oxide transition-colors"
                            onClick={() => removeItem(item.product.id, item.size)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="border-t border-stone/60 bg-warm-white/95 px-5 py-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="tracking-[0.1em] uppercase text-muted">Subtotal</span>
                  <span className="text-lg font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-forest">
                  <span>Standard Shipping</span>
                  <span>Complimentary across India</span>
                </div>
                <Button href="/checkout" className="w-full" onClick={closeCart}>
                  Continue to checkout
                </Button>
                <button
                  type="button"
                  className="w-full text-center text-xs tracking-[0.12em] uppercase text-muted hover:text-ink transition-colors py-1"
                  onClick={closeCart}
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
