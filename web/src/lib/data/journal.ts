export type JournalPost = {
  slug: string;
  title: string;
  category: "Materials" | "Style" | "Guides" | "Stories";
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "how-to-choose-a-leather-belt",
    title: "How to choose a leather belt",
    category: "Guides",
    excerpt:
      "Width, buckle, leather grade and occasion. A practical guide without marketplace jargon.",
    readTime: "5 min",
    date: "2026-03-12",
    image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1200&q=80",
    body: [
      "A belt should disappear into the outfit until you look for it. Then it should hold up to inspection: grain, stitching, buckle weight and edge finish.",
      "For trousers with loops, a 3.2–3.5 cm width is usually right. Thinner belts suit tailored trousers; wider ones belong with more casual wear.",
      "Full-grain leather will mark and soften. That is not damage. It is the point. If you want a belt that stays identical forever, synthetic finishes will serve you better than leather.",
    ],
  },
  {
    slug: "leather-care-basics",
    title: "Leather care without the ritual",
    category: "Materials",
    excerpt:
      "Keep objects dry, clean and occasionally conditioned. Skip the theatre.",
    readTime: "4 min",
    date: "2026-02-28",
    image: "https://images.unsplash.com/photo-1664285612706-b32633c95820?w=1200&q=80",
    body: [
      "Dust and moisture do more harm than use. Wipe after rain. Let leather dry at room temperature, never on a heater.",
      "Conditioning every few months is enough for most wallets, belts and bags. Over-oiling darkens and softens excessively.",
      "Shoes benefit from trees and light polish. Jackets prefer a soft cloth and space to hang.",
    ],
  },
  {
    slug: "formal-dressing-in-aminabad-heat",
    title: "Formal dressing in Aminabad heat",
    category: "Style",
    excerpt:
      "Ties, shoes and leather details that stay composed when the city does not.",
    readTime: "6 min",
    date: "2026-01-18",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    body: [
      "Formal dress in Lucknow needs breathability as much as correctness. A silk-blend tie and a lighter oxford often outperform heavier European conventions.",
      "Leather accessories should be chosen for finish and feel, not for looking expensive in isolation.",
      "Fragrance oil or a moderate cologne can finish the presentation without overwhelming a closed room.",
    ],
  },
  {
    slug: "objects-with-character",
    title: "Objects with character",
    category: "Stories",
    excerpt:
      "Why we talk about wear, patina and use instead of perfection.",
    readTime: "3 min",
    date: "2025-12-05",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    body: [
      "Leather House is not built on untouched surfaces. Belts crease. Wallets darken. Bags take the shape of what they carry.",
      "That is the brand promise in practice: quality that acquires character.",
      "The digital house should feel the same: considered, durable and better on closer inspection.",
    ],
  },
];

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
