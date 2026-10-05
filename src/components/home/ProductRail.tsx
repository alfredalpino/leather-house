"use client";

import { useRef, useState, useEffect } from "react";
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const node = scrollerRef.current;
    if (!node) return;
    const { scrollLeft, scrollWidth, clientWidth } = node;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    const node = scrollerRef.current;
    if (!node) return;
    node.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      node.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [products]);

  const scrollBy = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const scrollAmount = node.clientWidth * 0.9;
    node.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
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
                className={`inline-flex h-9 w-9 items-center justify-center border border-line text-ink transition-all ${
                  canScrollLeft
                    ? "hover:border-ink hover:bg-paper cursor-pointer"
                    : "opacity-30 cursor-not-allowed border-line/50 text-muted"
                } focus-visible:outline-2 focus-visible:outline-ink`}
                aria-label="Previous products"
                disabled={!canScrollLeft}
                onClick={() => scrollBy(-1)}
              >
                <ChevronLeft size={16} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                className={`inline-flex h-9 w-9 items-center justify-center border border-line text-ink transition-all ${
                  canScrollRight
                    ? "hover:border-ink hover:bg-paper cursor-pointer"
                    : "opacity-30 cursor-not-allowed border-line/50 text-muted"
                } focus-visible:outline-2 focus-visible:outline-ink`}
                aria-label="Next products"
                disabled={!canScrollRight}
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

        {/* Product track: perfectly container-bounded, 4 items on desktop, 3 on tablet, 2 on mobile */}
        <div className="mt-7">
          <div
            ref={scrollerRef}
            className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none scroll-smooth"
            tabIndex={0}
            role="region"
            aria-label={`${title} product carousel`}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.95rem)] shrink-0 snap-start"
              >
                <ProductCard product={product} priority={index < 4} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
