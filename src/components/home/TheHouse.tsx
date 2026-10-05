import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Leather",
    href: "/shop/leather",
    image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1000&q=80",
    copy: "Belts, wallets, bags and jackets selected for grain and construction.",
  },
  {
    title: "Footwear",
    href: "/shop/footwear",
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=1000&q=80",
    copy: "Formal and everyday shoes built for repeated wear.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=80",
    copy: "Ties, pins and hardware for how you present yourself.",
  },
  {
    title: "Royal Fragrance",
    href: "/shop/fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1000&q=80",
    copy: "Aged Assamese oud, pure Awadhi attars, and copper-deg distillations.",
  },
];

export function TheHouse() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            The House
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-balance">
            More than leather. A house of materials and personal style.
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed max-w-xl">
            From the Aminabad floor to the digital catalogue: leather goods,
            footwear, formal accessories and fragrance under one considered roof.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/60">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group relative bg-warm-white focus-visible:z-10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-warm-white">
                  <p className="font-display text-2xl">{pillar.title}</p>
                  <p className="mt-2 text-sm text-warm-white/85 leading-relaxed">
                    {pillar.copy}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
