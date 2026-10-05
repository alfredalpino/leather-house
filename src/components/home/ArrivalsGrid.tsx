import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";

export function ArrivalsGrid() {
  const items = getFeaturedProducts().slice(0, 4);

  return (
    <section className="section-spacing-sm border-t border-line">
      <div className="container-catalogue">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="text-eyebrow text-muted">
              Recent from the workshop
            </p>
            <h2 className="mt-1.5 font-display text-[clamp(1.85rem,3.4vw,2.5rem)] leading-tight tracking-tight text-ink">
              New arrivals
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            <span>View all arrivals</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-5 sm:gap-y-12">
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
