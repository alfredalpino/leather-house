import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CraftNote() {
  return (
    <section className="py-12 md:py-16 border-t border-line">
      <div className="container-catalogue grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            Craft
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
            Made to acquire character.
          </h2>
          <p className="mt-4 text-muted text-base leading-relaxed max-w-md">
            Full-grain leather, considered hardware and construction that softens
            with wear. Choose pieces that improve with time, not ones that ask to
            be replaced.
          </p>
          <Button href="/house" variant="secondary" className="mt-7">
            About the house
          </Button>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[16/10] overflow-hidden bg-bone">
          <Image
            src="https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1400&q=85"
            alt="Close detail of leather grain and stitching"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
