"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, User } from "lucide-react";
import { motion } from "motion/react";

function PerfumeBottleIcon({
  size = 19,
  strokeWidth = 1.6,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Crystal stopper / atomizer cap */}
      <rect x="9.5" y="2" width="5" height="3.5" rx="0.75" />
      {/* Collar & neck */}
      <path d="M10.5 5.5v2h3v-2" />
      <line x1="8" y1="7.5" x2="16" y2="7.5" />
      {/* Flacon body with sculpted shoulders */}
      <path d="M6 11.5c0-1.8 1.4-3 3-3h6c1.6 0 3 1.2 3 3V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V11.5z" />
      {/* Central luxury label cartouche */}
      <rect x="9" y="12" width="6" height="4.5" rx="0.5" strokeWidth={Math.max(1, strokeWidth - 0.4)} />
    </svg>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isShop = pathname.startsWith("/shop") && !pathname.includes("/fragrance");
  const isFragrance = pathname.includes("/fragrance");
  const isAccount = pathname.startsWith("/account");

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 md:hidden mobile-bottom-nav bg-warm-white/94 backdrop-blur-md border-t border-line/80 shadow-[0_-6px_20px_rgba(20,19,18,0.06)] pb-[max(0.6rem,env(safe-area-inset-bottom,0px))] pt-1 px-3 select-none"
      aria-label="App Navigation"
    >
      <div className="grid grid-cols-4 items-center justify-items-center h-14">
        {/* Home */}
        <Link
          href="/"
          className={`relative flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors ${
            isHome ? "text-ink" : "text-muted hover:text-ink"
          }`}
          aria-current={isHome ? "page" : undefined}
        >
          <Home size={19} strokeWidth={isHome ? 2.2 : 1.6} />
          <span className="text-[10px] font-medium tracking-[0.06em] mt-1">
            Home
          </span>
          {isHome && (
            <motion.span
              layoutId="bottom-nav-active"
              className="absolute -top-1 w-6 h-0.5 bg-ink rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>

        {/* Shop */}
        <Link
          href="/shop"
          className={`relative flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors ${
            isShop ? "text-ink" : "text-muted hover:text-ink"
          }`}
          aria-current={isShop ? "page" : undefined}
          aria-label="Shop Catalogue"
        >
          <ShoppingBag size={19} strokeWidth={isShop ? 2.2 : 1.6} />
          <span className="text-[10px] font-medium tracking-[0.06em] mt-1">
            Shop
          </span>
          {isShop && (
            <motion.span
              layoutId="bottom-nav-active"
              className="absolute -top-1 w-6 h-0.5 bg-ink rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>

        {/* Fragrance - Royal Itr & Oud Collection */}
        <Link
          href="/shop/fragrance"
          className={`relative flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors ${
            isFragrance ? "text-tobacco font-semibold" : "text-muted hover:text-tobacco"
          }`}
          aria-current={isFragrance ? "page" : undefined}
          aria-label="Royal Fragrance & Itr Collection"
        >
          <div className="relative">
            <PerfumeBottleIcon size={19} strokeWidth={isFragrance ? 2.2 : 1.6} />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
          </div>
          <span className="text-[10px] font-medium tracking-[0.05em] mt-1">
            Fragrance
          </span>
          {isFragrance && (
            <motion.span
              layoutId="bottom-nav-active"
              className="absolute -top-1 w-6 h-0.5 bg-tobacco rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>

        {/* Profile */}
        <Link
          href="/account"
          className={`relative flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors ${
            isAccount ? "text-ink" : "text-muted hover:text-ink"
          }`}
          aria-current={isAccount ? "page" : undefined}
          aria-label="Patron Profile"
        >
          <User size={19} strokeWidth={isAccount ? 2.2 : 1.6} />
          <span className="text-[10px] font-medium tracking-[0.06em] mt-1">
            Profile
          </span>
          {isAccount && (
            <motion.span
              layoutId="bottom-nav-active"
              className="absolute -top-1 w-6 h-0.5 bg-ink rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>
      </div>
    </nav>
  );
}
