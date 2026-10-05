import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductRail } from "@/components/home/ProductRail";
import { CraftNote } from "@/components/home/CraftNote";
import { ArrivalsGrid } from "@/components/home/ArrivalsGrid";
import { getSignatureProducts } from "@/lib/data/products";

export default function HomePage() {
  const essentials = getSignatureProducts().slice(0, 8);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductRail
        eyebrow="Essentials"
        title="House favourites"
        href="/collections"
        products={essentials}
      />
      <CraftNote />
      <ArrivalsGrid />
    </>
  );
}
