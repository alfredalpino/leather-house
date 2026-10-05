"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/lib/data/products";

export function ProductRail({
  eyebrow,
  title,
  href,
  products,
}: {
  eyebrow: string;
  title: string;
  href: string;
  products: Product[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(node.clientWidth * 0.8, 360);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-12 border-t border-line">
      <div className="container-catalogue">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.35rem)] leading-tight">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink hover:border-ink transition-colors"
                aria-label="Scroll products left"
                onClick={() => scrollBy(-1)}
              >
                <ChevronLeft size={16} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink hover:border-ink transition-colors"
                aria-label="Scroll products right"
                onClick={() => scrollBy(1)}
              >
                <ChevronRight size={16} strokeWidth={1.75} />
              </button>
            </div>
            <Link
              href={href}
              className="text-xs tracking-[0.14em] uppercase border-b border-ink pb-1 hover:border-accent transition-colors"
            >
              View all
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 pl-[max(1rem,calc((100vw-1280px)/2+1rem))] md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
        <div
          ref={scrollerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto pb-2 pr-4 md:pr-8 snap-x snap-mandatory scrollbar-thin"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[46vw] sm:w-[38vw] md:w-[240px] lg:w-[260px] shrink-0 snap-start"
            >
              <ProductCard product={product} priority={index < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
