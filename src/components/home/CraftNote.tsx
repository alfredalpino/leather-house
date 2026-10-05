import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CraftNote() {
  return (
    <section className="section-spacing border-t border-line bg-warm-white">
      <div className="container-catalogue grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
          <p className="text-eyebrow text-muted">
            The Philosophy
          </p>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-[1.05] tracking-tight text-ink">
            Made to acquire character, not wear out.
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Full-grain leather, considered brass hardware, and hand-finished edge burnishing.
            In our Aminabad atelier, pieces are constructed to soften with body warmth, darkening
            naturally to record the story of the wearer.
          </p>
          <div className="pt-2">
            <Link
              href="/house"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-ink border-b border-ink pb-1 hover:text-tobacco hover:border-tobacco transition-colors"
            >
              <span>The Aminabad Story</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[16/11] overflow-hidden bg-bone shadow-[0_4px_24px_rgba(20,19,18,0.04)]">
          <Image
            src="https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1600&q=85"
            alt="Close detail of leather grain and hand stitching in workshop"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}
