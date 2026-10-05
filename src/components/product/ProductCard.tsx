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

  const categoryLabel =
    product.category === "footwear"
      ? "Soft Footwear"
      : product.category === "fragrance"
      ? "Royal Fragrance"
      : product.category === "leather"
      ? "Leather Atelier"
      : "Accessories";

  return (
    <article
      className="group flex flex-col h-full select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone shadow-[0_1px_6px_rgba(20,19,18,0.03)] border border-line/40">
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
              <span className="font-display text-2xl sm:text-3xl text-muted/40 font-semibold mb-1">
                LH
              </span>
              <span className="text-[10px] font-sans tracking-[0.14em] uppercase text-muted/70">
                Aminabad Atelier
              </span>
            </div>
          )}
        </Link>

        {/* Status badges - understated luxury */}
        {product.availability === "limited" && (
          <span className="absolute left-2.5 top-2.5 z-10 bg-warm-white/95 text-ink text-[9px] font-sans font-medium tracking-[0.14em] uppercase px-2 py-0.5 border border-line/60">
            Limited
          </span>
        )}
        {product.availability === "made-to-order" && (
          <span className="absolute left-2.5 top-2.5 z-10 bg-warm-white/95 text-tobacco text-[9px] font-sans font-medium tracking-[0.14em] uppercase px-2 py-0.5 border border-line/60">
            Bespoke
          </span>
        )}
      </div>

      {/* Product metadata with stable vertical height and aligned price baseline */}
      <div className="mt-3 flex flex-col justify-between flex-1">
        <div>
          <p className="text-[10px] font-sans font-medium tracking-[0.14em] uppercase text-muted truncate">
            {categoryLabel}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="mt-1 block font-display text-[15px] sm:text-[16px] leading-[1.3] text-ink group-hover:text-tobacco transition-colors line-clamp-2 min-h-[2.6em]"
            title={product.name}
          >
            {product.name}
          </Link>
        </div>
        <p className="pt-1.5 text-xs sm:text-[13px] font-sans font-semibold text-ink/90 tracking-wide border-t border-line/40 mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
