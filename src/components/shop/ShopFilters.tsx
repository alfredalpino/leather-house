"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { ProductCategory, ProductSubcategory } from "@/lib/data/products";
import { categoryLabels, subcategoryLabels } from "@/lib/data/products";

const categoryOptions: Array<ProductCategory | "all"> = [
  "all",
  "leather",
  "footwear",
  "accessories",
  "fragrance",
];

const subsByCategory: Record<ProductCategory, ProductSubcategory[]> = {
  leather: ["jackets", "belts", "wallets", "bags"],
  footwear: ["formal", "casual", "boots"],
  accessories: ["ties", "cufflinks", "tie-pins"],
  fragrance: ["perfumes", "attar"],
};

type Props = {
  activeCategory?: ProductCategory;
  resultCount: number;
};

export function ShopFilters({ activeCategory, resultCount }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sub = searchParams.get("sub") ?? "";
  const sort = searchParams.get("sort") ?? "featured";
  const color = searchParams.get("color") ?? "";

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "all") params.delete(key);
    else params.set(key, value);
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const goCategory = (cat: ProductCategory | "all") => {
    if (cat === "all") router.push("/shop");
    else router.push(`/shop/${cat}`);
  };

  const subs = activeCategory ? subsByCategory[activeCategory] : [];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-3">
          Category
        </p>
        <ul className="space-y-2">
          {categoryOptions.map((cat) => {
            const selected =
              (cat === "all" && !activeCategory) || cat === activeCategory;
            return (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => goCategory(cat)}
                  className={`text-sm transition-colors ${
                    selected
                      ? "text-ink border-b border-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {cat === "all" ? "All" : categoryLabels[cat]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {subs.length > 0 && (
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-3">
            Type
          </p>
          <ul className="space-y-2">
            <li>
              <button
                type="button"
                onClick={() => setParam("sub", "")}
                className={`text-sm ${!sub ? "text-ink border-b border-ink" : "text-muted hover:text-ink"}`}
              >
                All types
              </button>
            </li>
            {subs.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => setParam("sub", s)}
                  className={`text-sm ${
                    sub === s
                      ? "text-ink border-b border-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {subcategoryLabels[s]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label
          htmlFor="sort"
          className="block text-[11px] tracking-[0.18em] uppercase text-muted mb-3"
        >
          Sort
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setParam("sort", e.target.value)}
          className="w-full h-11 border border-stone bg-warm-white px-3 text-sm rounded-[var(--radius-sm)]"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price · low to high</option>
          <option value="price-desc">Price · high to low</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="color"
          className="block text-[11px] tracking-[0.18em] uppercase text-muted mb-3"
        >
          Colour contains
        </label>
        <input
          id="color"
          value={color}
          onChange={(e) => setParam("color", e.target.value)}
          placeholder="e.g. tobacco"
          className="w-full h-11 border border-stone bg-warm-white px-3 text-sm rounded-[var(--radius-sm)] placeholder:text-muted"
        />
      </div>

      <p className="text-xs text-muted">{resultCount} objects</p>
    </div>
  );
}
