"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { useEffect } from "react";
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Cart">
      <button
        type="button"
        className="absolute inset-0 bg-ink/45 animate-overlay-in"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-warm-white shadow-[-8px_0_40px_rgba(23,23,22,0.12)] animate-drawer-in">
        <div className="flex items-center justify-between border-b border-stone/60 px-5 h-14">
          <p className="text-[13px] tracking-[0.14em] uppercase">Bag</p>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full min-h-[240px] flex-col items-center justify-center text-center">
              <p className="font-display text-2xl">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted max-w-[220px]">
                Explore the house and add objects worth keeping.
              </p>
              <Button href="/shop" className="mt-6" onClick={closeCart}>
                Explore leather
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size ?? "default"}`}
                  className="grid grid-cols-[88px_1fr] gap-4"
                >
                  <div className="relative aspect-[4/5] bg-bone overflow-hidden">
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
                          className="mt-1 block text-base leading-snug hover:text-tobacco transition-colors"
                          onClick={closeCart}
                        >
                          {item.product.name}
                        </Link>
                        {item.size && (
                          <p className="mt-1 text-sm text-muted">Size {item.size}</p>
                        )}
                      </div>
                      <p className="text-sm shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-stone">
                        <button
                          type="button"
                          className="h-9 w-9 inline-flex items-center justify-center"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.size,
                            )
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          className="h-9 w-9 inline-flex items-center justify-center"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.size,
                            )
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs tracking-[0.1em] uppercase text-muted hover:text-ink border-b border-transparent hover:border-ink transition-colors"
                        onClick={() => removeItem(item.product.id, item.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone/60 px-5 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="tracking-[0.1em] uppercase text-muted">Subtotal</span>
              <span className="text-base">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">
              Mock checkout. No payment is processed.
            </p>
            <Button href="/checkout" className="w-full" onClick={closeCart}>
              Continue to checkout
            </Button>
            <Button
              href="/shop"
              variant="secondary"
              className="w-full"
              onClick={closeCart}
            >
              Keep exploring
            </Button>
          </div>
        )}
      </aside>
    </div>
  );
}
