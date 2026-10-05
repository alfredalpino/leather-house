import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Leather",
    href: "/shop/leather",
    image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1000&q=80",
  },
  {
    title: "Footwear",
    href: "/shop/footwear",
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=1000&q=80",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=80",
  },
  {
    title: "Fragrance",
    href: "/shop/fragrance",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000&q=80",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-10 md:py-12">
      <div className="container-catalogue">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              Shop by category
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.35rem)] leading-tight">
              The catalogue
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex text-xs tracking-[0.14em] uppercase border-b border-ink pb-1 hover:border-accent transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden bg-bone"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <p className="font-display text-xl md:text-2xl text-warm-white tracking-wide">
                  {category.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/shop"
          className="mt-6 sm:hidden inline-flex text-xs tracking-[0.14em] uppercase border-b border-ink pb-1"
        >
          View all
        </Link>
      </div>
    </section>
  );
}
