"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useUi } from "@/lib/ui-context";
import { formatPrice, searchProducts } from "@/lib/data/products";

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useUi();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = searchProducts(query);

  useEffect(() => {
    if (!searchOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
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

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Search">
      <button
        type="button"
        className="absolute inset-0 bg-ink/50 animate-overlay-in"
        aria-label="Close search"
        onClick={closeSearch}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(100%-1.5rem,720px)] bg-warm-white border border-stone/50 animate-overlay-in">
        <div className="flex items-center gap-3 border-b border-stone/60 px-4">
          <Search size={18} strokeWidth={1.5} className="text-muted shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search leather, footwear, fragrance…"
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
            aria-label="Search products"
          />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center"
            aria-label="Close search"
            onClick={closeSearch}
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-4">
          {!query.trim() && (
            <p className="text-sm text-muted px-1 py-3">
              Try “belt”, “oxford”, “attar”, or “jacket”.
            </p>
          )}
          {query.trim() && results.length === 0 && (
            <p className="text-sm text-muted px-1 py-3">
              No matches for “{query}”. Browse the shop instead.
            </p>
          )}
          <ul className="space-y-2">
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/product/${product.slug}`}
                  className="flex items-center gap-4 p-2 hover:bg-bone transition-colors"
                  onClick={closeSearch}
                >
                  <div className="relative h-16 w-14 shrink-0 overflow-hidden bg-bone">
                    <Image
                      src={product.images[0]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] tracking-[0.14em] uppercase text-muted">
                      {product.category}
                    </p>
                    <p className="truncate text-base">{product.name}</p>
                  </div>
                  <p className="text-sm shrink-0">{formatPrice(product.price)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
