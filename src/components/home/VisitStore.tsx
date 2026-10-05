import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export function VisitStore() {
  return (
    <section className="section-spacing border-t border-line bg-paper/70">
      <div className="container-catalogue grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
        <div className="relative aspect-[16/11] overflow-hidden bg-bone shadow-[0_4px_24px_rgba(20,19,18,0.04)]">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
            alt="Leather House boutique interior in Aminabad, Lucknow"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-4">
          <p className="text-eyebrow text-muted">
            Aminabad Flagship
          </p>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-[1.05] tracking-tight text-ink">
            Visit the house in Lucknow.
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed max-w-md">
            Experience the tactile grain, try on bespoke sizes, or discuss custom monogramming
            over tea. Our artisans and staff are on hand Monday through Saturday.
          </p>

          <div className="space-y-2 pt-2 text-xs text-ink/80 border-t border-line/60">
            <p className="flex items-center gap-2">
              <MapPin size={15} className="text-tobacco shrink-0" />
              <span>Near Gadbadjhala Market, Aminabad, Lucknow 226018</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={15} className="text-tobacco shrink-0" />
              <span>Monday – Saturday: 11:00 AM – 9:30 PM</span>
            </p>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <Link
              href="/store"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-xs font-semibold tracking-[0.14em] uppercase bg-ink text-warm-white hover:bg-charcoal transition-colors duration-200"
            >
              <span>Store directions</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-xs font-semibold tracking-[0.14em] uppercase border border-ink text-ink hover:bg-ink hover:text-warm-white transition-colors duration-200"
            >
              Shop the catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
