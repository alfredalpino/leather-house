"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useUi } from "@/lib/ui-context";
import { formatPrice, searchProducts } from "@/lib/data/products";

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useUi();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = searchProducts(query);

  useEffect(() => {
    if (!searchOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [searchOpen, closeSearch]);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-start p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-ink/55 backdrop-blur-[3px]"
            onClick={closeSearch}
            aria-label="Close search overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            className="relative z-10 mt-[8vh] sm:mt-[12vh] w-full max-w-[680px] bg-warm-white border border-stone/60 shadow-[0_16px_50px_rgba(20,19,18,0.22)] rounded-[2px] overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-stone/50 px-4">
              <Search size={19} strokeWidth={1.75} className="text-muted shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search leather belts, jackets, attar, cologne…"
                className="h-14 w-full bg-transparent text-base sm:text-lg outline-none placeholder:text-stone font-sans"
                aria-label="Search products"
              />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center text-muted hover:text-ink transition-colors"
                aria-label="Close search"
                onClick={closeSearch}
              >
                <X size={19} strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick Suggestions / Results */}
            <div className="max-h-[55vh] overflow-y-auto p-4 scrollbar-thin">
              {!query.trim() && (
                <div className="py-3 px-2">
                  <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted mb-2">
                    Popular Collections
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Full-Grain Belts", "Aminabad Attar", "Leather Jackets", "Evening Cologne", "Card Holders"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1.5 bg-bone/70 hover:bg-bone text-xs font-medium tracking-wide text-ink rounded-[1px] transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {query.trim() && results.length === 0 && (
                <div className="py-8 text-center text-muted">
                  <p className="text-base font-display text-ink">No products found</p>
                  <p className="text-sm mt-1">No products match &ldquo;{query}&rdquo;.</p>
                </div>
              )}

              {results.length > 0 && (
                <ul className="space-y-1.5">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-4 p-2.5 rounded-[1px] hover:bg-bone transition-colors group"
                        onClick={closeSearch}
                      >
                        <div className="relative h-16 w-14 shrink-0 overflow-hidden bg-bone border border-stone/20">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="56px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] tracking-[0.14em] uppercase text-muted">
                              {product.category}
                            </span>
                            {product.subcategory && (
                              <span className="text-[10px] text-stone">
                                · {product.subcategory}
                              </span>
                            )}
                          </div>
                          <p className="truncate text-base font-medium text-ink group-hover:text-accent transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted truncate mt-0.5">
                            {product.material}
                          </p>
                        </div>
                        <p className="text-sm font-medium shrink-0 text-ink">
                          {formatPrice(product.price)}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
