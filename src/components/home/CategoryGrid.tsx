import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Leather",
    subtitle: "Bags, Belts & Jackets",
    href: "/shop/leather",
    image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1000&q=80",
  },
  {
    title: "Soft Footwear",
    subtitle: "Loafers, Boots & Mules",
    href: "/shop/footwear",
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=1000&q=80",
  },
  {
    title: "Accessories",
    subtitle: "Ties, Cufflinks & Brass",
    href: "/shop/accessories",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=80",
  },
  {
    title: "Royal Fragrance",
    subtitle: "Pure Attar & Royal Oud",
    href: "/shop/fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1000&q=80",
  },
];

export function CategoryGrid() {
  return (
    <section className="section-spacing-sm">
      <div className="container-catalogue">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
          <div>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.5rem)] leading-tight tracking-tight text-ink">
              Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            <span>View complete shop</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden bg-bone shadow-[0_2px_12px_rgba(20,19,18,0.03)]"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Dual scrim for clean legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-300 group-hover:from-ink/85" />

              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 flex flex-col justify-end">
                <p className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-warm-white/75 truncate">
                  {category.subtitle}
                </p>
                <div className="flex items-center justify-between mt-0.5">
                  <h3 className="font-display text-lg sm:text-2xl text-warm-white tracking-tight">
                    {category.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-warm-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-warm-white"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs tracking-[0.14em] uppercase text-ink border-b border-ink pb-1 font-medium"
          >
            <span>Explore complete shop</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
