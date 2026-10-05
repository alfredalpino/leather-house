import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="border-t border-line bg-ink text-warm-white py-16 md:py-20">
      <div className="container-catalogue text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone">
          The house
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-tight text-balance max-w-2xl mx-auto">
          Find something worth keeping.
        </h2>
        <p className="mt-4 text-stone-cool/90 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Browse online or walk the Aminabad floor. Either way, choose with judgment.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/shop" variant="inverse">
            Shop now
          </Button>
          <Button
            href="/store"
            variant="secondary"
            className="border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-ink"
          >
            Visit the store
          </Button>
        </div>
      </div>
    </section>
  );
}
