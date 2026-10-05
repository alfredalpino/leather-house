import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function VisitStore() {
  return (
    <section className="py-10 md:py-12 border-t border-line bg-paper">
      <div className="container-catalogue grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
        <div className="relative aspect-[16/10] overflow-hidden bg-bone">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
            alt="Specialty retail interior suggesting the Aminabad store"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            Aminabad, Lucknow
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.15rem)] leading-tight">
            Visit the house.
          </h2>
          <p className="mt-3 text-muted text-sm md:text-base leading-relaxed max-w-md">
            See and feel the pieces in person, or browse the catalogue online.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/store">Find the store</Button>
            <Button href="/shop" variant="secondary">
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
