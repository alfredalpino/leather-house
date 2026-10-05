import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[68svh] md:min-h-[78svh] flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=2000&q=85"
        alt="Leather jacket with visible grain and hardware"
        fill
        priority
        quality={90}
        className="object-cover object-center scale-[1.01] animate-[reveal-fade_900ms_var(--ease-out)_both]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,19,18,0.18) 0%, rgba(20,19,18,0.12) 42%, rgba(20,19,18,0.72) 100%)",
        }}
      />
      <div className="relative z-10 container-catalogue w-full pb-12 pt-28 md:pb-20">
        <p className="font-display text-warm-white text-[clamp(2.8rem,9vw,5.25rem)] leading-[0.92] tracking-[-0.02em] reveal-up">
          Leather House
        </p>
        <h1 className="mt-4 max-w-lg text-warm-white text-[clamp(1.15rem,2.4vw,1.55rem)] font-light leading-snug reveal-up [animation-delay:100ms]">
          Objects with character.
        </h1>
        <p className="mt-3 max-w-md text-warm-white/82 text-sm md:text-base leading-relaxed reveal-up [animation-delay:180ms]">
          Leather goods, footwear and finishing pieces from Aminabad, chosen for
          material, make and how they wear in.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 reveal-up [animation-delay:260ms]">
          <Button href="/shop" variant="inverse">
            Shop the catalogue
          </Button>
          <Button
            href="/shop/leather"
            variant="secondary"
            className="border-warm-white/80 text-warm-white hover:bg-warm-white hover:text-ink"
          >
            Shop leather
          </Button>
        </div>
      </div>
    </section>
  );
}
