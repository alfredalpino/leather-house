import Link from "next/link";
import { houseNav, primaryNav } from "@/lib/data/nav";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-warm-white">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl md:text-4xl">Leather House</p>
            <p className="mt-4 max-w-sm text-stone-cool/90 text-base leading-relaxed">
              A heritage-led house of leather goods, footwear, formal accessories
              and fragrance, rooted in Aminabad since 1982.
            </p>
            <p className="mt-6 text-[11px] tracking-[0.18em] uppercase text-stone">
              Objects with character
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.18em] uppercase text-stone mb-4">
              Shop
            </p>
            <ul className="space-y-2.5">
              {primaryNav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/85 hover:text-warm-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.18em] uppercase text-stone mb-4">
              House
            </p>
            <ul className="space-y-2.5">
              {houseNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/85 hover:text-warm-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.18em] uppercase text-stone mb-4">
              Visit
            </p>
            <address className="not-italic text-sm text-warm-white/85 leading-relaxed">
              Aminabad
              <br />
              Lucknow
              <br />
              <Link
                href="/store"
                className="mt-3 inline-block border-b border-stone/60 pb-0.5 hover:border-warm-white transition-colors"
              >
                Directions
              </Link>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-charcoal flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-stone">
          <p>© {new Date().getFullYear()} Leather House. Frontend mockup.</p>
          <p className="tracking-[0.08em] uppercase">Quality that acquires character</p>
        </div>
      </div>
    </footer>
  );
}
