import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=2000&q=85"
        alt="Leather jacket with visible grain and hardware"
        fill
        priority
        quality={90}
        className="object-cover object-center scale-[1.02] animate-[reveal-fade_900ms_var(--ease-out)_both]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(23,23,22,0.22) 0%, rgba(23,23,22,0.14) 40%, rgba(23,23,22,0.78) 100%)",
        }}
      />
      <div className="relative z-10 container-editorial w-full pb-16 pt-32 md:pb-24">
        <p className="font-display text-warm-white text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.02em] reveal-up">
          Leather House
        </p>
        <h1 className="mt-4 max-w-xl text-warm-white text-[clamp(1.35rem,3vw,1.85rem)] font-normal leading-snug reveal-up [animation-delay:120ms]">
          Objects with character.
        </h1>
        <p className="mt-3 max-w-lg text-warm-white/85 text-base md:text-lg leading-relaxed reveal-up [animation-delay:200ms]">
          Leather goods, footwear and finishing pieces from Aminabad, chosen
          for grain, construction and how they wear in.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 reveal-up [animation-delay:280ms]">
          <Button href="/shop" variant="inverse">
            Explore the House
          </Button>
          <Button
            href="/shop/leather"
            variant="secondary"
            className="border-warm-white text-warm-white hover:bg-warm-white hover:text-ink"
          >
            Shop leather
          </Button>
        </div>
      </div>
    </section>
  );
}
