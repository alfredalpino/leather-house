import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function MaterialStory() {
  return (
    <section className="relative py-20 md:py-28 bg-forest text-warm-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(165,138,90,0.18), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(241,237,228,0.08), transparent 45%)",
        }}
      />
      <div className="container-editorial relative grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone">
            Material
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight">
            Look closer.
          </h2>
          <p className="mt-5 text-stone-cool/95 text-base md:text-lg leading-relaxed">
            Grain, stitching, hardware and construction. These are the details
            that separate a useful object from a disposable one. Quality that
            acquires character with wear.
          </p>
          <Button href="/house" variant="inverse" className="mt-8">
            Inside the craft
          </Button>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mt-8">
            <Image
              src="https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=900&q=80"
              alt="Close detail of leather grain and stitching"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=80"
              alt="Wallet leather surface detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
