import Link from "next/link";
import { MapPin, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-warm-white border-t border-charcoal/80" aria-label="Site Footer">
      <div className="container-catalogue py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-charcoal">
          {/* Column 1: Brand & Provenance */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.02em] text-warm-white inline-block"
            >
              Leather House
            </Link>
            <p className="text-xs text-stone-cool/80 leading-relaxed max-w-sm">
              A heritage-led atelier of full-grain leather goods, soft footwear,
              formal accessories, and traditional Kannauj attars in Aminabad, Lucknow.
            </p>
            <div className="space-y-1.5 text-xs text-stone-cool/90 pt-1">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-brass shrink-0 mt-0.5" />
                <span>Near Gadbadjhala Market, Aminabad, Lucknow 226018</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-brass shrink-0" />
                <span>+91 98390 12345 · Mon–Sat 11:00 AM – 9:30 PM</span>
              </p>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-warm-white/90">
              The Collections
            </p>
            <ul className="space-y-2 text-xs text-stone-cool/80">
              <li>
                <Link href="/shop/leather" className="hover:text-warm-white transition-colors">
                  Full-Grain Leather
                </Link>
              </li>
              <li>
                <Link href="/shop/footwear" className="hover:text-warm-white transition-colors">
                  Soft Footwear & Boots
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="hover:text-warm-white transition-colors">
                  Formal Accessories & Ties
                </Link>
              </li>
              <li>
                <Link href="/shop/fragrance" className="hover:text-warm-white transition-colors">
                  Attar & Pure Perfumery
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-warm-white transition-colors">
                  Signature Curations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patron Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-warm-white/90">
              Patron Services
            </p>
            <ul className="space-y-2 text-xs text-stone-cool/80">
              <li>
                <Link href="/account" className="hover:text-warm-white transition-colors">
                  Patron Orders & Dispatches
                </Link>
              </li>
              <li>
                <Link href="/journal/leather-care-basics" className="hover:text-warm-white transition-colors">
                  Leather Care & Conditioning
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-warm-white transition-colors">
                  Aminabad Boutique Directions
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-warm-white transition-colors">
                  Corporate Gifting & Bespoke
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919839012345?text=Hello%20Leather%20House"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-white transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare size={12} className="text-brass" />
                  WhatsApp Master Craftsman
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Guild Standards */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-warm-white/90">
              Guild Standards
            </p>
            <ul className="space-y-2 text-xs text-stone-cool/80">
              <li>
                <Link href="/house" className="hover:text-warm-white transition-colors">
                  Our Story Since 1994
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-warm-white transition-colors">
                  The Workshop Journal
                </Link>
              </li>
              <li className="flex items-center gap-1.5 text-warm-white/90 pt-1">
                <ShieldCheck size={14} className="text-brass shrink-0" />
                <span>Lifetime Stitch Guarantee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-cool/60">
          <p>
            © {currentYear} Leather House · Aminabad, Lucknow, Uttar Pradesh.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>All prices in INR (₹)</span>
            <span>·</span>
            <span>Handcrafted in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
