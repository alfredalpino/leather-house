"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/data/products";
import { formatPrice } from "@/lib/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [primaryFailed, setPrimaryFailed] = useState(false);
  const [secondaryFailed, setSecondaryFailed] = useState(false);

  const primary = product.images[0];
  const secondary = product.images[1] ?? product.images[0];
  const hasSwap = Boolean(product.images[1] && product.images[1] !== primary);
  const showPrimary = Boolean(primary) && !primaryFailed;
  const showSecondary = Boolean(secondary) && !secondaryFailed;

  return (
    <article
      className="group flex flex-col h-full select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bone shadow-[0_1px_8px_rgba(20,19,18,0.02)]">
        <Link
          href={`/product/${product.slug}`}
          className="absolute inset-0 block focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          aria-label={`View ${product.name}, ${formatPrice(product.price)}`}
        >
          {/* Secondary Swap Image */}
          {showSecondary && (
            <Image
              src={secondary}
              alt=""
              fill
              className={`object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                hovered ? "scale-[1.03]" : "scale-100"
              }`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              aria-hidden
              onError={() => setSecondaryFailed(true)}
            />
          )}

          {/* Primary Image */}
          {showPrimary ? (
            <Image
              src={primary}
              alt={product.name}
              fill
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className={`object-cover transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                hovered && hasSwap ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
              }`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setPrimaryFailed(true)}
            />
          ) : (
            /* Fallback placeholder when image is unavailable or loading fails */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-bone text-muted/60 p-4 text-center">
              <span className="font-display text-3xl text-muted/40 font-semibold mb-1">
                LH
              </span>
              <span className="text-[10px] font-sans tracking-[0.14em] uppercase">
                Aminabad Atelier
              </span>
            </div>
          )}
        </Link>

        {/* Status badges */}
        {product.availability === "limited" && (
          <span className="absolute left-2.5 top-2.5 z-10 bg-warm-white/95 text-ink text-[10px] font-sans font-semibold tracking-[0.14em] uppercase px-2 py-0.5 border border-line shadow-xs">
            Limited
          </span>
        )}
        {product.availability === "made-to-order" && (
          <span className="absolute left-2.5 top-2.5 z-10 bg-warm-white/95 text-tobacco text-[10px] font-sans font-semibold tracking-[0.14em] uppercase px-2 py-0.5 border border-line shadow-xs">
            Bespoke
          </span>
        )}

        {/* Quick hover affordance on desktop */}
        <Link
          href={`/product/${product.slug}`}
          tabIndex={hovered ? 0 : -1}
          className={`absolute inset-x-2.5 bottom-2.5 z-10 hidden md:flex items-center justify-center h-10 bg-warm-white/95 text-ink text-[11px] font-sans font-semibold tracking-[0.14em] uppercase border border-line/80 transition-all duration-300 shadow-sm ${
            hovered
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-1.5 pointer-events-none"
          }`}
        >
          View details
        </Link>
      </div>

      {/* Product metadata with stable vertical height */}
      <div className="mt-3.5 flex flex-col justify-between flex-1 space-y-1">
        <div>
          <p className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-muted">
            {product.category === "footwear" ? "Soft Footwear" : product.category}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="mt-0.5 block font-display text-[16px] sm:text-[17px] leading-snug text-ink group-hover:text-tobacco transition-colors line-clamp-1"
          >
            {product.name}
          </Link>
        </div>
        <p className="pt-0.5 text-xs sm:text-sm font-sans font-semibold text-ink/90">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
