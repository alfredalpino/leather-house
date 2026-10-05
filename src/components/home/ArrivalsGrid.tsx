import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";

export function ArrivalsGrid() {
  const items = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-10 md:py-12 border-t border-line">
      <div className="container-catalogue">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              Just in
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.35rem)] leading-tight">
              New arrivals
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs tracking-[0.14em] uppercase border-b border-ink pb-1 hover:border-accent transition-colors"
          >
            Shop all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-4 md:gap-y-10">
          {items.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
