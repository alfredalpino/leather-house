import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/data/journal";

export function JournalTeaser() {
  const posts = journalPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-t border-stone/50">
      <div className="container-editorial">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
              Journal
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)]">
              Materials, style and guides.
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-sm tracking-[0.12em] uppercase border-b border-ink pb-1 self-start hover:border-tobacco transition-colors"
          >
            Read the journal
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-bone">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-4 text-[11px] tracking-[0.16em] uppercase text-muted">
                {post.category} · {post.readTime}
              </p>
              <h3 className="mt-2 text-xl leading-snug group-hover:text-tobacco transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
