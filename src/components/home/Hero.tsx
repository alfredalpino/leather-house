"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroSlide {
  id: string;
  title: string;
  italicTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
}

const slides: HeroSlide[] = [
  {
    id: "leather",
    title: "Objects with Character.",
    italicTitle: "Built for Decades.",
    description:
      "Full-grain calfskin, vegetable-tanned hides, and hand-finished pieces from Aminabad, chosen for material, make, and how they wear in.",
    image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=2000&q=90",
    imageAlt: "Leather jacket with visible grain and brass hardware",
  },
  {
    id: "fragrance",
    title: "Attar & Fragrance.",
    italicTitle: "Distilled in Copper Degs.",
    description:
      "Hydro-distilled Kannauj rose, aged Assam agarwood, and evening colognes crafted to linger alongside fine leather and formal dress.",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=2000&q=90",
    imageAlt: "Amber glass attar bottle and rose petals",
  },
  {
    id: "footwear",
    title: "Soft Footwear.",
    italicTitle: "Form and Comfort.",
    description:
      "Pliable leather shoes, unlined loafers, and everyday footwear designed for ease and repeated wear through the city.",
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=2000&q=90",
    imageAlt: "Soft leather footwear and clean tailoring",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through background scenes every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[64svh] sm:min-h-[72svh] md:min-h-[82svh] flex items-end overflow-hidden bg-ink select-none"
      aria-label="Hero Exhibition"
    >
      {/* Background Image Carousel with smooth cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
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

        {/* Dual Soft Scrim for effortless legibility without masking the grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,19,18,0.35) 0%, rgba(20,19,18,0.2) 40%, rgba(20,19,18,0.85) 100%)",
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container-catalogue w-full pb-8 pt-16 sm:pb-12 sm:pt-24 md:pb-16 md:pt-28">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="font-display text-warm-white text-[clamp(2.15rem,7vw,4.5rem)] leading-[0.96] tracking-[-0.015em] break-words text-balance">
                {slide.title}
                {slide.italicTitle && (
                  <span className="block italic font-normal text-warm-white/95 mt-1 font-serif">
                    {slide.italicTitle}
                  </span>
                )}
              </h1>

              <p className="text-warm-white/85 text-[13px] sm:text-sm md:text-base leading-relaxed max-w-lg font-light line-clamp-3 sm:line-clamp-none">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons: Primary dominates, Secondary stays subordinate */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 max-w-md">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase bg-warm-white text-ink hover:bg-paper transition-colors duration-200"
            >
              <span>Shop Catalogue</span>
              <ArrowRight size={13} />
            </Link>

            <Link
              href="/journal"
              className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-warm-white border border-warm-white/60 hover:bg-warm-white/10 hover:border-warm-white transition-colors duration-200"
            >
              <span>Discover Insights</span>
            </Link>
          </div>

          {/* Minimalist discreet slide position indicators */}
          <div className="pt-2 sm:pt-3 flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className="py-1 px-0.5 group focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-7 bg-warm-white"
                      : "w-2.5 bg-warm-white/40 group-hover:bg-warm-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
