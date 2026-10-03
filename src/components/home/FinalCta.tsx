import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-charcoal) 0%, var(--color-ink) 45%, var(--color-forest) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(165,138,90,0.25), transparent 40%)",
        }}
      />
      <div className="container-editorial relative text-center text-warm-white">
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-balance max-w-3xl mx-auto">
          Find something worth keeping.
        </h2>
        <p className="mt-5 text-stone-cool/90 text-base md:text-lg max-w-lg mx-auto">
          Browse the digital house, or walk the Aminabad floor. Either way,
          choose with judgment.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/shop" variant="inverse">
            Explore the House
          </Button>
          <Button
            href="/store"
            variant="secondary"
            className="border-warm-white text-warm-white hover:bg-warm-white hover:text-ink"
          >
            Visit the store
          </Button>
        </div>
      </div>
    </section>
  );
}
