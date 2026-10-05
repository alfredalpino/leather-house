import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { journalPosts } from "@/lib/data/journal";

export function JournalTeaser() {
  const posts = journalPosts.slice(0, 3);

  return (
    <section className="section-spacing border-t border-line bg-paper/40">
      <div className="container-catalogue">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-line pb-4">
          <div>
            <p className="text-eyebrow text-muted">
              The Journal
            </p>
            <h2 className="mt-1.5 font-display text-[clamp(1.85rem,3.4vw,2.5rem)] leading-tight tracking-tight text-ink">
              Materials, style and care
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-ink/80 hover:text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            <span>Read all dispatches</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="group block space-y-3">
              <div className="relative aspect-[16/10] overflow-hidden bg-bone shadow-[0_2px_12px_rgba(20,19,18,0.03)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-muted">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="font-display text-xl text-ink leading-snug group-hover:text-tobacco transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
