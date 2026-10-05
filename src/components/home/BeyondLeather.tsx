import Image from "next/image";
import Link from "next/link";

const edits = [
  {
    title: "Ties & pins",
    href: "/shop/accessories",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&q=80",
  },
  {
    title: "Cufflinks",
    href: "/shop/accessories?sub=cufflinks",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=80",
  },
  {
    title: "Royal Fragrance & Itr",
    href: "/shop/fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1000&q=80",
  },
];

export function BeyondLeather() {
  return (
    <section className="py-20 md:py-28 grain">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            Beyond leather
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight">
            The details of how you carry yourself.
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
            Ties, hardware and fragrance finish how you present yourself, without
            pulling focus from the materials that define the house.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {edits.map((edit) => (
            <Link
              key={edit.title}
              href={edit.href}
              className="group relative aspect-[5/6] overflow-hidden bg-bone"
            >
              <Image
                src={edit.image}
                alt={edit.title}
                fill
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/35 transition-colors" />
              <p className="absolute left-5 bottom-5 font-display text-2xl text-warm-white">
                {edit.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
