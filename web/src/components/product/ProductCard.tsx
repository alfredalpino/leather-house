"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
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
  const [saved, setSaved] = useState(false);
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
          {/* Always-visible base; stays if primary fails or fades on hover */}
          <Image
            src={secondary}
            alt=""
            fill
            className={`object-cover transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              hovered ? "scale-[1.04]" : "scale-100"
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
        <button
          type="button"
          className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center bg-warm-white/90 text-ink hover:bg-warm-white transition-colors"
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={saved}
          onClick={() => setSaved((v) => !v)}
        >
          <Heart
            size={18}
            strokeWidth={1.5}
            className={saved ? "fill-ink" : ""}
          />
        </button>
        {product.availability === "limited" && (
          <p className="absolute left-2 bottom-2 z-10 bg-ink/90 text-warm-white text-[10px] tracking-[0.14em] uppercase px-2 py-1">
            Limited
          </p>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[11px] tracking-[0.14em] uppercase text-muted">
          {product.category}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="block text-base leading-snug hover:text-tobacco transition-colors"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between gap-3 pt-0.5">
          <p className="text-sm">{formatPrice(product.price)}</p>
          <p className="text-xs text-muted truncate">{product.material}</p>
        </div>
      </div>
    </article>
  );
}
