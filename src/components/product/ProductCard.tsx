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

  const primary = product.images[0];
  const secondary = product.images[1] ?? product.images[0];
  const hasSwap = Boolean(product.images[1] && product.images[1] !== primary);
  const showPrimary = Boolean(primary) && !primaryFailed;

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bone">
        <Link href={`/product/${product.slug}`} className="absolute inset-0 block">
          <Image
            src={secondary}
            alt=""
            fill
            className={`object-cover transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              hovered ? "scale-[1.03]" : "scale-100"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
            aria-hidden
          />
          {showPrimary && (
            <Image
              src={primary}
              alt={product.name}
              fill
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className={`object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                hovered && hasSwap ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
              }`}
              sizes="(max-width: 768px) 50vw, 25vw"
              onError={() => setPrimaryFailed(true)}
            />
          )}
        </Link>
        {product.availability === "limited" && (
          <p className="absolute left-2 top-2 z-10 bg-warm-white/95 text-ink text-[10px] tracking-[0.14em] uppercase px-2 py-1">
            Limited
          </p>
        )}
        <Link
          href={`/product/${product.slug}`}
          tabIndex={hovered ? 0 : -1}
          className={`absolute inset-x-2 bottom-2 z-10 hidden md:flex items-center justify-center h-10 bg-warm-white/95 text-ink text-[11px] tracking-[0.14em] uppercase transition-all duration-300 ${
            hovered
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          View details
        </Link>
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[10px] tracking-[0.16em] uppercase text-muted">
          {product.category}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="block text-[15px] leading-snug text-ink hover:text-accent transition-colors"
        >
          {product.name}
        </Link>
        <p className="pt-0.5 text-sm text-ink/90">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
