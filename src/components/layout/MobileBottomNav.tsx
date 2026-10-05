"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Sparkles, User } from "lucide-react";
import { motion } from "motion/react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isShop = pathname.startsWith("/shop") && !pathname.includes("/fragrance");
  const isFragrance = pathname.includes("/fragrance");
  const isAccount = pathname.startsWith("/account");

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-warm-white/94 backdrop-blur-md border-t border-line/80 shadow-[0_-6px_20px_rgba(20,19,18,0.06)] pb-[max(0.6rem,env(safe-area-inset-bottom,0px))] pt-1 px-3 select-none"
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

        {/* Catalogue */}
        <Link
          href="/shop"
          className={`relative flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors ${
            isShop ? "text-ink" : "text-muted hover:text-ink"
          }`}
          aria-current={isShop ? "page" : undefined}
        >
          <Grid size={19} strokeWidth={isShop ? 2.2 : 1.6} />
          <span className="text-[10px] font-medium tracking-[0.06em] mt-1">
            Catalogue
          </span>
          {isShop && (
            <motion.span
              layoutId="bottom-nav-active"
              className="absolute -top-1 w-6 h-0.5 bg-ink rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>

        {/* Attar & Scent - Prominently featured */}
        <Link
          href="/shop/fragrance"
          className={`relative flex flex-col items-center justify-center w-full h-full py-1 text-center transition-colors ${
            isFragrance ? "text-tobacco font-semibold" : "text-muted hover:text-tobacco"
          }`}
          aria-current={isFragrance ? "page" : undefined}
        >
          <div className="relative">
            <Sparkles size={19} strokeWidth={isFragrance ? 2.2 : 1.6} />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
          </div>
          <span className="text-[10px] tracking-[0.04em] mt-1">
            Attar & Scent
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
