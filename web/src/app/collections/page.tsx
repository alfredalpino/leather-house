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
    <div className="pt-[72px]">
      <section className="relative min-h-[55svh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1800&q=85"
          alt="Leather jacket collection visual"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/20" />
        <div className="relative z-10 container-editorial pb-14 pt-28 text-warm-white">
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone">
            Collections
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            Edits from the house.
          </h1>
          <p className="mt-4 max-w-lg text-warm-white/85">
            Focused selections, not an endless catalogue dump.
          </p>
        </div>
      </section>

      <section id="signature" className="container-editorial py-20 scroll-mt-20">
        <h2 className="font-display text-3xl md:text-4xl">Signature Edit</h2>
        <p className="mt-3 max-w-xl text-muted">
          Objects selected for material, construction and character.
        </p>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 gap-y-10">
          {signature.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-bone/80 py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">The Leather Edit</h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              Core brand territory: jackets, belts, wallets and bags that define
              the house name without limiting it.
            </p>
            <Button href="/shop/leather" className="mt-8">
              Shop leather
            </Button>
          </div>
          <Link href="/shop/leather" className="relative aspect-[16/11] overflow-hidden bg-stone">
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

      <section id="beyond" className="container-editorial py-20 scroll-mt-20">
        <h2 className="font-display text-3xl md:text-4xl">Beyond Leather</h2>
        <p className="mt-3 max-w-xl text-muted">
          Ties, cufflinks, fragrance and attar. The finishing materials of style.
        </p>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 gap-y-10">
          {beyond.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
