import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { getSignatureProducts, products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description: "Signature edits across leather, footwear, accessories and fragrance.",
};

export default function CollectionsPage() {
  const signature = getSignatureProducts();
  const beyond = products.filter(
    (p) => p.category === "accessories" || p.category === "fragrance",
  );

  return (
    <div>
      <section className="border-b border-line bg-paper">
        <div className="container-catalogue py-10 md:py-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            Collections
          </p>
          <h1 className="mt-2 font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-tight">
            Curated edits
          </h1>
          <p className="mt-3 max-w-lg text-sm md:text-base text-muted">
            Focused selections across leather, footwear and finishing pieces.
          </p>
        </div>
      </section>

      <section id="signature" className="container-catalogue py-12 md:py-16 scroll-mt-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              Signature
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.25rem)]">
              House favourites
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
          {signature.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper py-12 md:py-16">
        <div className="container-catalogue grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              Leather
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.25rem)]">
              The leather edit
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md text-sm md:text-base">
              Jackets, belts, wallets and bags: the core of the house, selected
              for grain and construction.
            </p>
            <Button href="/shop/leather" className="mt-7">
              Shop leather
            </Button>
          </div>
          <Link href="/shop/leather" className="relative aspect-[16/11] overflow-hidden bg-bone">
            <Image
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80"
              alt="Leather bag"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Link>
        </div>
      </section>

      <section id="beyond" className="container-catalogue py-12 md:py-16 scroll-mt-28">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
          Finishing
        </p>
        <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.25rem)]">
          Beyond leather
        </h2>
        <p className="mt-3 max-w-xl text-sm md:text-base text-muted">
          Ties, cufflinks, fragrance and attar.
        </p>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-4 md:gap-y-10">
          {beyond.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
