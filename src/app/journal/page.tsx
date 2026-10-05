import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Materials, style, guides and stories from Leather House.",
};

export default function JournalPage() {
  return (
    <div>
      <div className="container-editorial py-14 md:py-20">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
          Journal
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)]">
          Materials, style and guides.
        </h1>
        <p className="mt-4 max-w-xl text-muted text-lg">
          Useful writing, not SEO filler. Care, selection and dressing with judgment.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {journalPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden bg-bone ${
                  i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  priority={i === 0}
                />
              </div>
              <p className="mt-4 text-[11px] tracking-[0.16em] uppercase text-muted">
                {post.category} · {post.readTime}
              </p>
              <h2
                className={`mt-2 group-hover:text-accent transition-colors ${
                  i === 0 ? "font-display text-3xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                {post.title}
              </h2>
              <p className="mt-2 text-muted leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
