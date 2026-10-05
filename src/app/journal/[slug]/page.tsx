import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/lib/data/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="container-editorial py-12 md:py-16 max-w-3xl">
        <Link
          href="/journal"
          className="text-xs tracking-[0.14em] uppercase text-muted hover:text-ink"
        >
          ← Journal
        </Link>
        <p className="mt-8 text-[11px] tracking-[0.16em] uppercase text-muted">
          {post.category} · {post.readTime} · {post.date}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-tight text-balance">
          {post.title}
        </h1>
        <p className="mt-5 text-lg text-muted leading-relaxed">{post.excerpt}</p>
      </div>

      <div className="relative aspect-[21/9] min-h-[240px] bg-bone">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container-editorial py-12 md:py-16 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-ink/90">
        {post.body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </article>
  );
}
