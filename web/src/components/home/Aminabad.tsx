import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Aminabad() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-bone">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
            alt="Specialty retail interior suggesting the Aminabad store"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="lg:col-span-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            Aminabad · Lucknow
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight">
            Find us in Aminabad.
          </h2>
          <p className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-lg">
            A long-established men&apos;s goods retailer in one of Lucknow&apos;s densest
            commercial markets. The digital house extends the physical one.
            Browse online, visit in person, choose with judgment.
          </p>
          <p className="mt-4 text-sm text-ink/80">
            Public listings place the business since 1982. Confirm founding
            details with the house before final brand claims.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/store">Visit the house</Button>
            <Button href="/house" variant="secondary">
              Read the story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
