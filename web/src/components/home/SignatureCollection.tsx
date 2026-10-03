import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getSignatureProducts } from "@/lib/data/products";

export function SignatureCollection() {
  const items = getSignatureProducts().slice(0, 6);

  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              Signature
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight">
              Selected for material, construction and character.
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-sm tracking-[0.12em] uppercase border-b border-ink pb-1 self-start md:self-auto hover:border-tobacco transition-colors"
          >
            View collection
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {items.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
