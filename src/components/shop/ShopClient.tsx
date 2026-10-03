"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { ShopFilters } from "@/components/shop/ShopFilters";
import {
  categoryLabels,
  type Product,
  type ProductCategory,
  type ProductSubcategory,
} from "@/lib/data/products";

function filterProducts(
  products: Product[],
  category: ProductCategory | undefined,
  sub: string | null,
  color: string | null,
  sort: string | null,
) {
  let list = [...products];
  if (category) list = list.filter((p) => p.category === category);
  if (sub) list = list.filter((p) => p.subcategory === (sub as ProductSubcategory));
  if (color?.trim()) {
    const c = color.trim().toLowerCase();
    list = list.filter((p) => p.color.toLowerCase().includes(c));
  }
  switch (sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }
  return list;
}

function ShopInner({
  products,
  category,
}: {
  products: Product[];
  category?: ProductCategory;
}) {
  const searchParams = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const sub = searchParams.get("sub");
  const color = searchParams.get("color");
  const sort = searchParams.get("sort");

  const filtered = useMemo(
    () => filterProducts(products, category, sub, color, sort),
    [products, category, sub, color, sort],
  );

  const title = category ? categoryLabels[category] : "Shop";

  return (
    <div className="pt-[72px]">
      <div className="container-editorial py-10 md:py-14">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
          Catalogue
        </p>
        <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.5rem)]">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          {category
            ? `Explore ${categoryLabels[category].toLowerCase()} selected for material quality and practical elegance.`
            : "Leather, footwear, accessories and fragrance. Browse the house."}
        </p>

        <div className="mt-8 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 border border-ink px-4 text-sm tracking-[0.1em] uppercase"
            onClick={() => setMobileFilters(true)}
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filters
          </button>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <aside className="hidden lg:block lg:col-span-3">
            <ShopFilters activeCategory={category} resultCount={filtered.length} />
          </aside>

          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-2xl">No objects match</p>
                <p className="mt-2 text-sm text-muted">
                  Clear filters or explore another category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filtered.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={index < 6}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/45"
            aria-label="Close filters"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,340px)] bg-warm-white p-6 overflow-y-auto animate-drawer-in [animation-name:none] translate-x-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[13px] tracking-[0.14em] uppercase">Filters</p>
              <button
                type="button"
                className="h-11 w-11 inline-flex items-center justify-center"
                aria-label="Close filters"
                onClick={() => setMobileFilters(false)}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <ShopFilters activeCategory={category} resultCount={filtered.length} />
          </div>
        </div>
      )}
    </div>
  );
}

export function ShopClient({
  products,
  category,
}: {
  products: Product[];
  category?: ProductCategory;
}) {
  return (
    <Suspense
      fallback={
        <div className="pt-[72px] container-editorial py-20 text-muted">
          Loading catalogue…
        </div>
      }
    >
      <ShopInner products={products} category={category} />
    </Suspense>
  );
}
