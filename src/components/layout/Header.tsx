"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  MapPin,
  Menu,
  MessageSquare,
  Search,
  ShoppingBag,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { primaryNav } from "@/lib/data/nav";
import { useCart } from "@/lib/cart-context";
import { useUi } from "@/lib/ui-context";

export function Header() {
  const { itemCount, openCart } = useCart();
  const { openSearch, mobileNavOpen, toggleMobileNav, closeMobileNav } = useUi();
  const [compact, setCompact] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>("Leather");

  return (
    <>
      <header
        className={`sticky top-9 z-50 border-b border-line bg-warm-white/96 backdrop-blur-md transition-[height] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          compact ? "h-14" : "h-16"
        }`}
      >
        <div className="container-catalogue flex h-full items-center justify-between gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center text-ink rounded-sm hover:bg-paper transition-colors"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              onClick={toggleMobileNav}
            >
              {mobileNavOpen ? (
                <X size={20} strokeWidth={1.75} />
              ) : (
                <Menu size={20} strokeWidth={1.75} />
              )}
            </button>

            <Link
              href="/"
              className="shrink-0 font-display text-[1.2rem] leading-none tracking-[0.01em] text-ink sm:text-[1.4rem] lg:text-[1.75rem]"
              onClick={closeMobileNav}
            >
              Leather House
            </Link>
          </div>

          <nav
            className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-1"
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              const isOpen = activeMega === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMega(item.label)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex h-11 items-center px-3 text-[12px] font-medium tracking-[0.12em] uppercase transition-colors ${
                      isOpen ? "text-ink" : "text-ink/85 hover:text-ink"
                    }`}
                    onFocus={() => setActiveMega(item.label)}
                    aria-expanded={item.links ? isOpen : undefined}
                  >
                    <span
                      className={`border-b pb-0.5 transition-[border-color] duration-200 ${
                        isOpen ? "border-ink" : "border-transparent"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-ink hover:text-accent transition-colors"
              aria-label="Search"
              onClick={openSearch}
            >
              <Search size={18} strokeWidth={1.75} />
            </button>
            <Link
              href="/account"
              className="hidden sm:inline-flex h-11 w-11 items-center justify-center text-ink hover:text-accent transition-colors"
              aria-label="Patron Profile"
            >
              <User size={18} strokeWidth={1.75} />
            </Link>
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center text-ink hover:text-accent transition-colors"
              aria-label={`Bag, ${itemCount} items`}
              onClick={openCart}
            >
              <ShoppingBag size={18} strokeWidth={1.75} />
              {itemCount > 0 && (
                <span className="absolute right-1.5 top-1.5 min-w-[16px] h-4 px-1 rounded-[1px] bg-ink text-warm-white text-[10px] font-medium leading-4 text-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div
          className={`hidden lg:block absolute inset-x-0 top-full transition-opacity duration-[320ms] ${
            activeMega ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => activeMega && setActiveMega(activeMega)}
          onMouseLeave={() => setActiveMega(null)}
        >
          {primaryNav.map((item) =>
            item.label === activeMega && item.links ? (
              <div
                key={item.label}
                className="border-b border-line bg-warm-white shadow-[0_10px_30px_rgba(20,19,18,0.06)]"
              >
                <div className="container-catalogue grid grid-cols-12 gap-8 py-7">
                  <div className="col-span-5 flex flex-col gap-4">
                    <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted">
                      {item.label}
                    </p>
                    <ul className="space-y-2.5">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group block"
                            onClick={() => setActiveMega(null)}
                          >
                            <span className="text-[15px] font-medium text-ink group-hover:text-accent transition-colors">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="mt-0.5 block text-sm text-muted">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {item.image && (
                    <div className="col-span-7 relative aspect-[16/9] overflow-hidden bg-bone">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 50vw, 640px"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu - 100% Screen Width & Height */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden bg-warm-white flex flex-col transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileNavOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none -translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Fullscreen Top Bar */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-line bg-warm-white shrink-0">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink rounded-full hover:bg-bone transition-colors"
            aria-label="Close menu"
            onClick={closeMobileNav}
          >
            <X size={22} strokeWidth={1.75} />
          </button>

          <Link
            href="/"
            className="font-display text-xl text-ink font-medium tracking-tight"
            onClick={closeMobileNav}
          >
            Leather House
          </Link>

          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-ink hover:text-accent transition-colors"
              aria-label="Search"
              onClick={() => {
                closeMobileNav();
                openSearch();
              }}
            >
              <Search size={19} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center text-ink hover:text-accent transition-colors"
              aria-label={`Bag, ${itemCount} items`}
              onClick={() => {
                closeMobileNav();
                openCart();
              }}
            >
              <ShoppingBag size={19} strokeWidth={1.75} />
              {itemCount > 0 && (
                <span className="absolute right-1 top-1 min-w-[16px] h-4 px-1 rounded-[1px] bg-ink text-warm-white text-[10px] font-medium leading-4 text-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Fullscreen Content */}
        <nav
          className="flex-1 overflow-y-auto px-5 py-6 pb-28 space-y-6"
          aria-label="Mobile Fullscreen Navigation"
        >
          {/* Primary Navigation Accordion */}
          <div className="divide-y divide-line/70">
            {primaryNav.map((item) => {
              const isExpanded = expandedMobileCategory === item.label;
              const hasLinks = item.links && item.links.length > 0;
              const isFragrance = item.label.toLowerCase() === "fragrance";

              return (
                <div key={item.label} className="py-3.5">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="font-display text-[1.85rem] text-ink hover:text-accent transition-colors tracking-tight flex items-center gap-2"
                      onClick={closeMobileNav}
                    >
                      <span>{item.label}</span>
                      {isFragrance && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-sans font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-tobacco text-warm-white">
                          <Sparkles size={10} />
                          Attar & Scent
                        </span>
                      )}
                    </Link>

                    {hasLinks && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMobileCategory(isExpanded ? null : item.label)
                        }
                        className="p-2 text-muted hover:text-ink transition-colors"
                        aria-label={`Toggle ${item.label} subcategories`}
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-ink" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasLinks && isExpanded && (
                    <div className="mt-3 pl-3 border-l-2 border-tobacco/50 space-y-2.5">
                      {item.links?.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-sm text-ink/80 hover:text-ink font-medium transition-colors"
                          onClick={closeMobileNav}
                        >
                          {link.label}
                          {link.description && (
                            <span className="block text-xs text-muted font-normal mt-0.5">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Shortcuts */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link
              href="/account"
              className="flex items-center gap-2.5 p-3.5 bg-paper border border-line hover:border-ink transition-colors text-ink rounded-sm"
              onClick={closeMobileNav}
            >
              <User size={16} className="text-tobacco" />
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase">Patron Profile</p>
                <p className="text-[11px] text-muted">Orders & Dispatches</p>
              </div>
            </Link>

            <Link
              href="/store"
              className="flex items-center gap-2.5 p-3.5 bg-paper border border-line hover:border-ink transition-colors text-ink rounded-sm"
              onClick={closeMobileNav}
            >
              <MapPin size={16} className="text-tobacco" />
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase">Aminabad Store</p>
                <p className="text-[11px] text-muted">Directions & Hours</p>
              </div>
            </Link>
          </div>

          {/* Bespoke Artisan WhatsApp Card */}
          <div className="border border-line bg-paper/70 p-4 space-y-2 rounded-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-tobacco font-semibold">
                Bespoke Atelier Service
              </span>
              <span className="text-[10px] text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full font-medium">
                Artisan Online
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Inquire about custom leather fitting, monogramming, or bespoke attar formulation directly from our Aminabad workshop.
            </p>
            <a
              href="https://wa.me/919839012345?text=Hello%20Leather%20House,%20I%20would%20like%20to%20consult%20an%20artisan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-ink hover:text-tobacco pt-1"
            >
              <MessageSquare size={14} />
              Chat with Master Craftsman
            </a>
          </div>

          {/* Aminabad Lucknow Footer */}
          <div className="pt-4 border-t border-line text-left space-y-1 text-xs text-muted">
            <p className="font-semibold text-ink uppercase tracking-wider text-[11px]">
              The House in Aminabad
            </p>
            <p>Aminabad, Lucknow, Uttar Pradesh · Mon–Sat 11:00 AM – 9:30 PM</p>
            <p className="text-tobacco font-medium">Ph: +91 98390 12345 · Lifetime Care Guarantee</p>
          </div>
        </nav>
      </div>
    </>
  );
}
