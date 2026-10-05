"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
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

  return (
    <>
      <header
        className={`sticky top-9 z-50 border-b border-line bg-warm-white/96 backdrop-blur-md transition-[height] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          compact ? "h-14" : "h-16"
        }`}
      >
        <div className="flex h-full items-center gap-1 px-3 md:px-8 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))]">
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center text-ink"
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
            className="shrink-0 font-display text-[1.15rem] leading-none tracking-[0.01em] text-ink sm:text-[1.35rem] lg:text-[1.75rem]"
            onClick={closeMobileNav}
          >
            Leather House
          </Link>

          <nav
            className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-0.5"
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

          <div className="ml-auto flex shrink-0 items-center">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-ink"
              aria-label="Search"
              onClick={openSearch}
            >
              <Search size={18} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center text-ink"
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

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-[320ms] ${
          mobileNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-ink/35"
          aria-label="Close menu overlay"
          onClick={closeMobileNav}
        />
        <nav
          className={`absolute left-0 top-0 h-full w-[min(100%,340px)] bg-warm-white pt-[calc(var(--announce-h)+4.5rem)] px-6 pb-10 overflow-y-auto transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Mobile"
        >
          <ul className="space-y-5">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-display text-[1.75rem] text-ink tracking-wide"
                  onClick={closeMobileNav}
                >
                  {item.label}
                </Link>
                {item.links && (
                  <ul className="mt-2.5 space-y-2 border-l border-line pl-4">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted hover:text-ink transition-colors"
                          onClick={closeMobileNav}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-10 pt-6 border-t border-line space-y-3">
            <Link
              href="/store"
              className="block text-xs font-medium tracking-[0.12em] uppercase"
              onClick={closeMobileNav}
            >
              Visit store
            </Link>
            <Link
              href="/corporate"
              className="block text-xs font-medium tracking-[0.12em] uppercase"
              onClick={closeMobileNav}
            >
              Corporate & bulk
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
