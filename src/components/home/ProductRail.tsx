"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
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
    const amount = Math.min(node.clientWidth * 0.75, 380);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="section-spacing-sm border-t border-line">
      <div className="container-catalogue">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="text-eyebrow text-muted">
              {eyebrow}
            </p>
            <h2 className="mt-1.5 font-display text-[clamp(1.85rem,3.4vw,2.5rem)] leading-tight tracking-tight text-ink">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink hover:border-ink hover:bg-paper transition-colors focus-visible:outline-2 focus-visible:outline-ink"
                aria-label="Scroll products left"
                onClick={() => scrollBy(-1)}
              >
                <ChevronLeft size={16} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink hover:border-ink hover:bg-paper transition-colors focus-visible:outline-2 focus-visible:outline-ink"
                aria-label="Scroll products right"
                onClick={() => scrollBy(1)}
              >
                <ChevronRight size={16} strokeWidth={1.75} />
              </button>
            </div>
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
            >
              <span>Explore all</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontally scrolling rail aligned with the container start */}
      <div className="mt-7 pl-[max(1rem,calc((100vw-1380px)/2+clamp(1rem,3.5vw,2.75rem)))]">
        <div
          ref={scrollerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pr-6 md:pr-10 snap-x snap-mandatory scrollbar-thin"
          tabIndex={0}
          role="region"
          aria-label={`${title} product carousel`}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[62vw] xs:w-[52vw] sm:w-[38vw] md:w-[260px] lg:w-[280px] shrink-0 snap-start"
            >
              <ProductCard product={product} priority={index < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
