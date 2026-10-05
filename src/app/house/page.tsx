import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The House",
  description:
    "The story of Leather House: heritage retail in Aminabad, material expertise and personal style.",
};

const timeline = [
  {
    year: "1982",
    title: "Established in Aminabad",
    copy: "Public listings place the founding in 1982. Verify this claim with the family before locking brand copy.",
  },
  {
    year: "Growth",
    title: "Assortment expands",
    copy: "Leather goods grow alongside footwear, ties, formal hardware and fragrance. A house, not a single category.",
  },
  {
    year: "Today",
    title: "Digital house",
    copy: "A considered online presence that extends the physical store without pretending to be a European atelier.",
  },
];

export default function HousePage() {
  return (
    <div>
      <section className="container-editorial py-14 md:py-20">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
          The House
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] max-w-3xl text-balance">
          Built one customer, one object and one detail at a time.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
          Leather House is a heritage-led house of leather goods, footwear,
          formal accessories and fragrance, rooted in Indian retail commerce
          and refined through decades of shop-floor judgment.
        </p>
      </section>

      <section className="relative aspect-[21/9] min-h-[280px] overflow-hidden bg-bone">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85"
          alt="Specialty retail atmosphere"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section className="container-editorial py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl">Craft without theatre</h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-ink/90 leading-relaxed">
          <p>
            We do not imitate European luxury codes. The opportunity is more
            distinctive: Lucknow heritage, material expertise and contemporary
            men&apos;s style: masculine in character, inclusive in commerce.
          </p>
          <p>
            Leather naturally becomes more interesting with use. That is the
            brand promise: quality that acquires character. A belt gets worn. A
            wallet gets carried. A fragrance becomes memory.
          </p>
        </div>
      </section>

      <section className="bg-charcoal text-warm-white py-20">
        <div className="container-editorial">
          <h2 className="font-display text-3xl md:text-4xl">A working timeline</h2>
          <ol className="mt-12 space-y-10">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="grid gap-3 md:grid-cols-12 border-t border-warm-white/15 pt-8"
              >
                <p className="md:col-span-3 text-[11px] tracking-[0.18em] uppercase text-stone">
                  {item.year}
                </p>
                <div className="md:col-span-9">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-stone-cool/90 leading-relaxed max-w-2xl">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-editorial py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="font-display text-2xl md:text-3xl max-w-lg">
          Visit the store, or explore the catalogue.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/store">Visit the house</Button>
          <Button href="/shop" variant="secondary">
            Explore the House
          </Button>
        </div>
      </section>
    </div>
  );
}
