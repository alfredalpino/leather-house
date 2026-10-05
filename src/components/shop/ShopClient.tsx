"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  SlidersHorizontal,
  ArrowUpDown,
  X,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { ShopFilters } from "@/components/shop/ShopFilters";
import {
  categoryLabels,
  type Product,
  type ProductCategory,
  type ProductSubcategory,
} from "@/lib/data/products";

interface DepartmentCard {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  count: number;
}

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const sub = searchParams.get("sub");
  const color = searchParams.get("color");
  const sort = searchParams.get("sort");
  const showAll = searchParams.get("all") === "true";

  // Check if we should display the Category Department Hub or the Product View
  const isDepartmentHub = !category && !sub && !color && !showAll;

  // Department definitions with real-time product counts
  const departments: DepartmentCard[] = useMemo(() => [
    {
      title: "Belts",
      subtitle: "Full-Grain Leather & Brass Buckles",
      href: "/shop/leather?sub=belts",
      image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=900&q=80",
      count: products.filter((p) => p.subcategory === "belts").length,
    },
    {
      title: "Soft Footwear",
      subtitle: "Oxfords, Double Monks & Casuals",
      href: "/shop/footwear",
      image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=900&q=80",
      count: products.filter((p) => p.category === "footwear").length,
    },
    {
      title: "Boots",
      subtitle: "Cap-Toe & Handcrafted Ankle Boots",
      href: "/shop/footwear?sub=boots",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&q=80",
      count: products.filter((p) => p.subcategory === "boots").length,
    },
    {
      title: "Leather Bags",
      subtitle: "Office Briefcases, Daypacks & Backpacks",
      href: "/shop/leather?sub=bags",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
      count: products.filter((p) => p.subcategory === "bags").length,
    },
    {
      title: "Ladies' Purses",
      subtitle: "Saddle Flap Purses & Evening Clutches",
      href: "/shop/leather?sub=bags",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=80",
      count: products.filter((p) => p.slug.includes("purse") || p.slug.includes("clutch")).length,
    },
    {
      title: "Wallets & Cardholders",
      subtitle: "Vegetable-Tanned Bifolds & Card Sleeves",
      href: "/shop/leather?sub=wallets",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=80",
      count: products.filter((p) => p.subcategory === "wallets").length,
    },
    {
      title: "Leather Jackets",
      subtitle: "House Biker & Structured Outerwear",
      href: "/shop/leather?sub=jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
      count: products.filter((p) => p.subcategory === "jackets").length,
    },
    {
      title: "Pure Attar & Itr",
      subtitle: "Shamama-tul-Amber, Ruh Gulab & Mitti Attar",
      href: "/shop/fragrance?sub=attar",
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=900&q=80",
      count: products.filter((p) => p.subcategory === "attar").length,
    },
    {
      title: "Royal Oud",
      subtitle: "Wild Assam Agarwood & Safed White Oud",
      href: "/shop/fragrance?sub=oud",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&q=80",
      count: products.filter((p) => p.subcategory === "oud").length,
    },
    {
      title: "Royal Fragrance",
      subtitle: "Eau de Parfum, Fine Sprays & Woods",
      href: "/shop/fragrance",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80",
      count: products.filter((p) => p.category === "fragrance").length,
    },
    {
      title: "Formal Accessories",
      subtitle: "Silk Ties, Brass Cufflinks & Tie Bars",
      href: "/shop/accessories",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
      count: products.filter((p) => p.category === "accessories").length,
    },
  ], [products]);

  const filtered = useMemo(
    () => filterProducts(products, category, sub, color, sort),
    [products, category, sub, color, sort],
  );

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "all" || (key === "sort" && value === "featured")) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const activeFilterCount = (sub ? 1 : 0) + (color ? 1 : 0) + (sort && sort !== "featured" ? 1 : 0);

  // Dynamic Title & Description
  const title = useMemo(() => {
    if (sub === "belts") return "Belts";
    if (sub === "boots") return "Boots";
    if (sub === "jackets") return "Leather Jackets";
    if (sub === "wallets") return "Wallets & Cardholders";
    if (sub === "bags") return "Leather Bags & Purses";
    if (sub === "attar") return "Pure Attar & Itr";
    if (sub === "oud") return "Royal Oud & Dehn Al-Oud";
    if (sub === "perfumes") return "Artisanal Perfumes";
    if (sub === "formal") return "Formal Footwear";
    if (category === "fragrance") return "Royal Fragrance & Itr";
    if (category === "footwear") return "Soft Footwear";
    if (category === "leather") return "Leather Atelier";
    if (category === "accessories") return "Formal Accessories";
    return "All Products";
  }, [category, sub]);

  const description = useMemo(() => {
    if (category === "fragrance" || sub === "attar" || sub === "oud") {
      return "Authentic Awadhi & Persian attars, aged wild Assam agarwood ouds, and copper-deg distillations.";
    }
    if (category === "footwear" || sub === "boots") {
      return "Handcrafted calfskin footwear, Goodyear-feel oxfords and soft unlined loafers.";
    }
    if (category === "leather" || sub === "belts" || sub === "jackets" || sub === "bags") {
      return "Full-grain hides, vegetable-tanned straps, and heirloom pieces built to soften with wear.";
    }
    return "Handcrafted leather goods, footwear, formal accessories, and royal fragrances from Lucknow.";
  }, [category, sub]);

  // If at root /shop without category or subcategory selection: RENDER DEPARTMENT CATEGORIES HUB
  if (isDepartmentHub) {
    return (
      <div className="container-catalogue py-8 md:py-12">
        <div className="border-b border-line pb-6">
          <p className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-muted">
            Departments
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,4.5vw,3rem)] leading-tight text-ink">
            Shop by Category
          </h1>
          <p className="mt-2.5 max-w-xl text-sm md:text-base text-muted leading-relaxed">
            Select a collection below to browse full-grain leather goods, soft footwear, formal accessories, and royal Awadhi attars.
          </p>
        </div>

        {/* Categories / Departments Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
          {departments.map((dept) => (
            <Link
              key={dept.title}
              href={dept.href}
              className="group relative aspect-[3/4] overflow-hidden bg-bone shadow-[0_1px_8px_rgba(20,19,18,0.04)] border border-line/40 flex flex-col justify-end p-4 sm:p-5"
            >
              <Image
                src={dept.image}
                alt={dept.title}
                fill
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Dual gradient scrim for pristine text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-300 group-hover:from-ink/95" />

              <div className="relative z-10">
                <span className="inline-block text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-warm-white/70">
                  {dept.count} {dept.count === 1 ? "Product" : "Products"}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h2 className="font-display text-base sm:text-xl text-warm-white tracking-tight">
                    {dept.title}
                  </h2>
                  <ArrowRight
                    size={15}
                    className="text-warm-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-warm-white shrink-0 ml-1"
                  />
                </div>
                <p className="text-[11px] text-warm-white/75 line-clamp-1 mt-1 font-light hidden sm:block">
                  {dept.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all fallback */}
        <div className="mt-12 text-center border-t border-line/60 pt-8">
          <Link
            href="/shop?all=true"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            <span>Browse Complete Uncategorized Catalogue ({products.length} products)</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    );
  }

  // Subcategories mapping for horizontal scrolling filter rail
  const categorySubcategories = useMemo(() => {
    if (!category) return [];
    const mapping: Record<ProductCategory, Array<{ id: string; label: string }>> = {
      leather: [
        { id: "belts", label: "Belts" },
        { id: "jackets", label: "Jackets" },
        { id: "wallets", label: "Wallets" },
        { id: "bags", label: "Bags & Purses" },
      ],
      footwear: [
        { id: "formal", label: "Formal" },
        { id: "casual", label: "Casual" },
        { id: "boots", label: "Boots" },
      ],
      accessories: [
        { id: "ties", label: "Silk Ties" },
        { id: "cufflinks", label: "Cufflinks" },
        { id: "tie-pins", label: "Tie Bars" },
      ],
      fragrance: [
        { id: "attar", label: "Pure Attar & Itr" },
        { id: "oud", label: "Royal Oud" },
        { id: "perfumes", label: "Artisanal Perfumes" },
      ],
    };
    return mapping[category] ?? [];
  }, [category]);

  // Lock body scroll and listen for Escape key when filter drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFiltersOpen(false);
    };
    if (filtersOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filtersOpen]);

  // ACTIVE CATEGORY PRODUCT VIEW WITH REFINED TOOLBAR (FILTER & SORT IN SAME LINE)
  return (
    <div>
      <div className="container-catalogue py-6 md:py-10">
        {/* Breadcrumb / Back to All Departments */}
        <div className="pb-3">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] uppercase text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} />
            <span>All Departments</span>
          </Link>
        </div>

        {/* Category Header */}
        <div className="pt-1">
          <h1 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-tight text-ink">
            {title}
          </h1>
          <p className="mt-1.5 max-w-xl text-sm md:text-base text-muted leading-relaxed">
            {description}
          </p>
        </div>

        {/* Horizontal Subcategory Scrolling Chips (Luxury Affordance) */}
        {categorySubcategories.length > 0 && (
          <div className="mt-5 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-none overscroll-x-contain pb-1">
            <div className="flex items-center gap-2 min-w-max">
              <button
                type="button"
                onClick={() => setParam("sub", "")}
                className={`h-8 px-3.5 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors rounded-sm cursor-pointer whitespace-nowrap ${
                  !sub
                    ? "bg-ink text-warm-white"
                    : "bg-paper border border-line text-ink/80 hover:border-ink hover:text-ink"
                }`}
              >
                All {categoryLabels[category!]}
              </button>
              {categorySubcategories.map((item) => {
                const isSelected = sub === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setParam("sub", isSelected ? "" : item.id)}
                    className={`h-8 px-3.5 text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors rounded-sm cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "bg-ink text-warm-white"
                        : "bg-paper border border-line text-ink/80 hover:border-ink hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PRODUCT CATALOGUE TOOLBAR: Information on left, cohesive actions on right */}
        <div className="border-y border-line/80 py-2.5 sm:py-3 mt-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Left: Product Count (Contextual Information / Metadata) */}
            <p className="text-xs font-sans tracking-wide text-muted font-normal">
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </p>

            {/* Right: Actions Control Group (FILTERS + SORT) */}
            <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              {/* FILTERS Action Button */}
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="flex-1 sm:flex-none inline-flex h-9 items-center justify-center gap-2 border border-line bg-paper px-3 sm:px-3.5 text-[11px] font-sans font-semibold tracking-[0.1em] uppercase text-ink hover:border-ink hover:bg-bone/40 focus-visible:outline-2 focus-visible:outline-ink transition-colors cursor-pointer rounded-sm"
                aria-label="Open catalogue filters"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} className="text-ink/80" />
                <span>FILTERS</span>
                {activeFilterCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-ink text-warm-white text-[9px] font-semibold flex items-center justify-center ml-0.5">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* SORT Action Control */}
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={sort ?? "featured"}
                  onChange={(e) => setParam("sort", e.target.value)}
                  className="w-full sm:w-auto h-9 appearance-none bg-paper border border-line pl-3 pr-8 text-[11px] font-sans font-semibold uppercase tracking-[0.06em] text-ink hover:border-ink hover:bg-bone/40 focus:outline-none focus:border-ink focus-visible:outline-2 focus-visible:outline-ink cursor-pointer rounded-sm transition-colors text-left"
                  aria-label="Sort products"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-ink/70">
                  <ArrowUpDown size={11} strokeWidth={1.75} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filter Tags Row (Clean wrapped row that never squishes the toolbar) */}
        {(color || (sub && !category)) && (
          <div className="flex flex-wrap items-center gap-2 -mt-3 mb-6">
            <span className="text-[10px] tracking-wider uppercase text-muted font-medium">
              Active:
            </span>
            {sub && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-sm bg-paper text-ink border border-line">
                <span>{sub}</span>
                <button
                  type="button"
                  onClick={() => setParam("sub", "")}
                  className="hover:text-tobacco cursor-pointer ml-0.5"
                  aria-label={`Remove ${sub} filter`}
                >
                  <X size={11} />
                </button>
              </span>
            )}
            {color && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-sm bg-paper text-ink border border-line">
                <span>Colour: {color}</span>
                <button
                  type="button"
                  onClick={() => setParam("color", "")}
                  className="hover:text-tobacco cursor-pointer ml-0.5"
                  aria-label="Remove colour filter"
                >
                  <X size={11} />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                setParam("sub", "");
                setParam("color", "");
                setParam("sort", "");
              }}
              className="text-[11px] tracking-wider uppercase text-muted hover:text-ink underline ml-1 cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product Grid Area */}
        <div className="w-full">
          {filtered.length === 0 ? (
            <div className="py-16 text-center bg-paper/40 border border-line/50 p-6 rounded-sm">
              <p className="font-display text-2xl text-ink">No products match</p>
              <p className="mt-2 text-sm text-muted">
                Clear active filters to view all products in this department.
              </p>
              <button
                type="button"
                onClick={() => {
                  setParam("sub", "");
                  setParam("color", "");
                }}
                className="mt-5 inline-flex items-center justify-center h-10 px-5 text-xs font-semibold tracking-[0.12em] uppercase bg-ink text-warm-white hover:bg-ink/90 transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3.5 gap-y-8 sm:gap-x-5 sm:gap-y-12">
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  priority={index < 4}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Slide-over Filter Panel */}
      {filtersOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Catalogue filters"
        >
          {/* Backdrop Scrim */}
          <button
            type="button"
            className="fixed inset-0 bg-ink/50 backdrop-blur-xs transition-opacity cursor-pointer w-full h-full border-0"
            aria-label="Close filters backdrop"
            onClick={() => setFiltersOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-warm-white h-full p-5 sm:p-6 overflow-y-auto shadow-2xl flex flex-col justify-between z-10 animate-drawer-in">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-sans font-semibold tracking-[0.16em] uppercase text-ink">
                    FILTERS
                  </p>
                  {activeFilterCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-ink text-warm-white text-[9px] font-semibold flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="h-9 w-9 inline-flex items-center justify-center text-ink hover:text-tobacco transition-colors cursor-pointer rounded-sm"
                  aria-label="Close filters"
                  onClick={() => setFiltersOpen(false)}
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <ShopFilters activeCategory={category} resultCount={filtered.length} />
            </div>

            <div className="pt-6 border-t border-line mt-8 flex items-center gap-3">
              {(color || sub) && (
                <button
                  type="button"
                  onClick={() => {
                    setParam("sub", "");
                    setParam("color", "");
                  }}
                  className="h-11 px-4 border border-line text-xs font-semibold tracking-[0.12em] uppercase text-ink hover:border-ink transition-colors cursor-pointer"
                >
                  Reset
                </button>
              )}
              <button
                type="button"
                className="flex-1 h-11 bg-ink text-warm-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-ink/90 transition-colors cursor-pointer"
                onClick={() => setFiltersOpen(false)}
              >
                Show {filtered.length} {filtered.length === 1 ? "Product" : "Products"}
              </button>
            </div>
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
        <div className="container-catalogue py-20 text-muted">
          Loading catalogue…
        </div>
      }
    >
      <ShopInner products={products} category={category} />
    </Suspense>
  );
}
