"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/data/products";
import { formatPrice } from "@/lib/data/products";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [qty, setQty] = useState(1);
  const [reveal, setReveal] = useState(0);
  const [error, setError] = useState("");

  const availabilityLabel = {
    "in-stock": "In stock",
    limited: "Limited availability",
    "made-to-order": "Made to order",
  }[product.availability];

  const onAdd = () => {
    if (product.sizes?.length && !size) {
      setError("Select a size");
      return;
    }
    setError("");
    addItem(product, { size: size || undefined, quantity: qty });
  };

  return (
    <div>
      <div className="container-catalogue py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-muted tracking-[0.06em]">
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-ink capitalize">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-bone">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                quality={90}
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `scale(${1 + reveal * 0.08})`,
                  objectPosition: `${50 + reveal * 10}% ${40 + reveal * 15}%`,
                }}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="mt-3 flex gap-2">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-16 overflow-hidden border ${
                    activeImage === i ? "border-ink" : "border-transparent"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <label className="block text-[11px] tracking-[0.18em] uppercase text-muted mb-3">
                Material reveal
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={reveal * 100}
                onChange={(e) => setReveal(Number(e.target.value) / 100)}
                className="w-full accent-forest"
                aria-label="Reveal material detail"
              />
              <p className="mt-2 text-sm text-muted">
                Look closer: grain, stitching and finish.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted">
              {product.category} · {product.material}
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-xl">{formatPrice(product.price)}</p>
            <p className="mt-2 text-sm text-muted">{availabilityLabel}</p>
            <p className="mt-6 text-base leading-relaxed text-ink/90">
              {product.description}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted">Colour</dt>
                <dd className="mt-1">{product.color}</dd>
              </div>
              <div>
                <dt className="text-muted">Material</dt>
                <dd className="mt-1">{product.material}</dd>
              </div>
            </dl>

            {product.sizes && (
              <div className="mt-8">
                <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-3">
                  Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setSize(s);
                        setError("");
                      }}
                      className={`min-w-11 h-11 px-3 border text-sm transition-colors ${
                        size === s
                          ? "border-ink bg-ink text-warm-white"
                          : "border-stone hover:border-ink"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-3">
                Quantity
              </p>
              <div className="inline-flex border border-stone">
                <button
                  type="button"
                  className="h-11 w-11"
                  aria-label="Decrease"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="h-11 w-12 inline-flex items-center justify-center text-sm border-x border-stone">
                  {qty}
                </span>
                <button
                  type="button"
                  className="h-11 w-11"
                  aria-label="Increase"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-sm text-oxide" role="alert">
                {error}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3">
              <Button type="button" onClick={onAdd} className="w-full">
                Add to bag
              </Button>
              <Button href="/store" variant="secondary" className="w-full">
                See it in the store
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 border-t border-stone/60 pt-12">
          <div>
            <h2 className="font-display text-2xl">Details</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/90">
              {product.details.map((d) => (
                <li key={d} className="pl-4 border-l border-stone">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="text-[11px] tracking-[0.18em] uppercase text-muted">
                Construction
              </h3>
              <p className="mt-2">{product.construction}</p>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.18em] uppercase text-muted">
                Dimensions
              </h3>
              <p className="mt-2">{product.dimensions}</p>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.18em] uppercase text-muted">
                Care
              </h3>
              <p className="mt-2">{product.care}</p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl md:text-3xl">Also in the house</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
