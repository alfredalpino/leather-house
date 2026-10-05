"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Package,
  Award,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  italicTitle?: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  imageAlt: string;
  featuredProduct: {
    name: string;
    material: string;
    price: string;
    image: string;
    href: string;
    badge: string;
  };
}

const slides: HeroSlide[] = [
  {
    id: "leather",
    tag: "CRAFT 01 · THE AMINABAD ATELIER",
    title: "Objects with Character.",
    italicTitle: "Built for Decades.",
    subtitle: "Full-grain calfskin and vegetable-tanned hides that wear in, not out.",
    description:
      "Hand-cut leather jackets, burnished belts, and travel pieces stitched in our Lucknow workshop to develop a deep, personal patina.",
    primaryCtaText: "Shop the Catalogue",
    primaryCtaHref: "/shop",
    secondaryCtaText: "The Leather Edit",
    secondaryCtaHref: "/shop/leather",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=2000&q=90",
    imageAlt: "Full-grain leather jacket with aged brass hardware",
    featuredProduct: {
      name: "House Biker Jacket",
      material: "Full-Grain Obsidian Calfskin",
      price: "₹24,900",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
      href: "/product/house-biker-jacket",
      badge: "Signature Guild Piece",
    },
  },
  {
    id: "fragrance",
    tag: "CRAFT 02 · TRADITIONAL ATTAR & SCENT",
    title: "Kannauj Rose & Smoked Oudh.",
    italicTitle: "Distilled in Copper Degs.",
    subtitle: "Artisanal attars and colognes formulated to harmonize with fine leather.",
    description:
      "Hydro-distilled over slow wood fires in Uttar Pradesh, matured in seasoned leather casks, and poured into heavy amber glass flacons.",
    primaryCtaText: "Discover Attar & Scent",
    primaryCtaHref: "/shop/fragrance",
    secondaryCtaText: "Read Scent Journal",
    secondaryCtaHref: "/journal/objects-with-character",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=2000&q=90",
    imageAlt: "Amber glass attar bottle surrounded by rose petals",
    featuredProduct: {
      name: "Aminabad Attar",
      material: "Pure Hydro-Distilled Extrait · 12ml",
      price: "₹2,190",
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
      href: "/product/aminabad-attar",
      badge: "Small Batch 2026",
    },
  },
  {
    id: "footwear",
    tag: "CRAFT 03 · WELTED FOOTWEAR & HARDWARE",
    title: "Hand-Welted Precision.",
    italicTitle: "From Boardroom to Bazaars.",
    subtitle: "Structured cap-toe boots, oxfords, and solid brass accessories.",
    description:
      "Engineered with stacked leather soles, cork-filled footbeds, and edge burnishing that cushions the foot while holding a sharp, formal silhouette.",
    primaryCtaText: "Shop Footwear",
    primaryCtaHref: "/shop/footwear",
    secondaryCtaText: "Bespoke Size Fitting",
    secondaryCtaHref: "/store",
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=2000&q=90",
    imageAlt: "Artisanal hand-welted leather footwear",
    featuredProduct: {
      name: "Aminabad Cap-Toe Boot",
      material: "Oiled Calfskin · Vibram Stud Sole",
      price: "₹6,990",
      image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=600&q=80",
      href: "/product/aminabad-cap-toe-boot",
      badge: "Hand-Welted Stitch",
    },
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slide = slides[currentSlide];

  // Auto-advance timer (6.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative min-h-[82svh] md:min-h-[88svh] flex flex-col justify-between overflow-hidden bg-ink select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Exhibition"
    >
      {/* Background Image Slider with smooth cross-fade and Ken Burns scale */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dual Luxury Gradient Scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,19,18,0.55) 0%, rgba(20,19,18,0.25) 35%, rgba(20,19,18,0.82) 80%, rgba(20,19,18,0.96) 100%)",
          }}
        />

        {/* Subtle vignette border */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(20,19,18,0.6)] pointer-events-none" />
      </div>

      {/* Top Heritage Badge */}
      <div className="relative z-10 container-catalogue pt-6 md:pt-8">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-warm-white/10 backdrop-blur-md border border-warm-white/20 rounded-full text-warm-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase">
            {slide.tag}
          </span>
        </div>
      </div>

      {/* Main Center/Lower Content Grid */}
      <div className="relative z-10 container-catalogue w-full py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Provocative Editorial Copy */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                <h1 className="font-display text-warm-white text-[clamp(2.4rem,6.8vw,4.8rem)] leading-[0.96] tracking-[-0.01em]">
                  {slide.title}
                  {slide.italicTitle && (
                    <span className="block italic font-normal text-warm-white/95 mt-1 font-serif">
                      {slide.italicTitle}
                    </span>
                  )}
                </h1>

                <p className="max-w-xl text-warm-white/90 text-sm md:text-lg font-light leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Featured Pill (Shown only on small screens) */}
            <div className="md:hidden pt-1">
              <Link
                href={slide.featuredProduct.href}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-warm-white/15 backdrop-blur-md border border-warm-white/25 text-warm-white text-xs"
              >
                <span className="w-2 h-2 rounded-full bg-brass" />
                <span className="font-medium">{slide.featuredProduct.name}</span>
                <span className="text-warm-white/70">· {slide.featuredProduct.price}</span>
                <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href={slide.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-xs font-semibold tracking-[0.12em] uppercase bg-warm-white text-ink hover:bg-paper transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-[var(--radius-sm)]"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href={slide.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 text-xs font-semibold tracking-[0.12em] uppercase text-warm-white border border-warm-white/50 hover:border-warm-white hover:bg-warm-white/10 transition-all duration-200 backdrop-blur-xs rounded-[var(--radius-sm)]"
              >
                {slide.secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Signature Object Glassmorphic Card (Tablet & Desktop) */}
          <div className="hidden md:flex lg:col-span-4 justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-xs bg-warm-white/95 backdrop-blur-md border border-line p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] rounded-sm"
              >
                <div className="flex items-center justify-between pb-3 border-b border-line/60">
                  <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-tobacco">
                    {slide.featuredProduct.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    In Atelier
                  </span>
                </div>

                <div className="flex gap-3 pt-3">
                  <div className="relative w-20 h-20 bg-bone shrink-0 rounded-sm overflow-hidden border border-line">
                    <Image
                      src={slide.featuredProduct.image}
                      alt={slide.featuredProduct.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <p className="font-display text-base font-semibold text-ink truncate">
                        {slide.featuredProduct.name}
                      </p>
                      <p className="text-xs text-muted leading-tight mt-0.5 line-clamp-1">
                        {slide.featuredProduct.material}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-sm font-semibold text-ink font-sans">
                        {slide.featuredProduct.price}
                      </span>
                      <Link
                        href={slide.featuredProduct.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-tobacco hover:underline"
                      >
                        View <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Strip & Trust Indicators */}
      <div className="relative z-10 border-t border-warm-white/15 bg-ink/75 backdrop-blur-md">
        <div className="container-catalogue py-3.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Interactive Chapter Selector Pills */}
            <div className="flex items-center gap-2 sm:gap-4 w-full md:w-auto overflow-x-auto scrollbar-thin">
              {slides.map((s, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative text-left py-2 px-3 transition-colors shrink-0 ${
                      isActive
                        ? "text-warm-white font-medium"
                        : "text-warm-white/50 hover:text-warm-white/80 font-normal"
                    }`}
                  >
                    <span className="text-xs tracking-[0.14em] uppercase block">
                      0{idx + 1} · {s.id === "leather" ? "Leather Atelier" : s.id === "fragrance" ? "Attar & Scent" : "Footwear Guild"}
                    </span>

                    {/* Active slide progress line */}
                    {isActive && (
                      <motion.span
                        layoutId="hero-active-tab-line"
                        className="absolute bottom-0 inset-x-3 h-0.5 bg-brass"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-warm-white/30 text-warm-white flex items-center justify-center hover:bg-warm-white/15 hover:border-warm-white transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-warm-white/30 text-warm-white flex items-center justify-center hover:bg-warm-white/15 hover:border-warm-white transition-colors"
                aria-label="Next story"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Micro Heritage Trust Bar */}
        <div className="border-t border-warm-white/10 py-2.5 bg-ink/90">
          <div className="container-catalogue flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[11px] font-medium tracking-[0.1em] uppercase text-warm-white/70">
            <span className="flex items-center gap-1.5">
              <Award size={13} className="text-brass" />
              100% Full-Grain Vegetable Tanned
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-brass" />
              Hydro-Distilled Copper Deg Attar
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-brass" />
              Lifetime Care & Conditioning
            </span>
            <span className="flex items-center gap-1.5">
              <Package size={13} className="text-brass" />
              Complimentary Pan-India Express
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
