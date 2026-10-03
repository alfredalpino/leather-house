import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopClient } from "@/components/shop/ShopClient";
import {
  categoryLabels,
  products,
  type ProductCategory,
} from "@/lib/data/products";

const categories = Object.keys(categoryLabels) as ProductCategory[];

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!categories.includes(category as ProductCategory)) return {};
  const label = categoryLabels[category as ProductCategory];
  return {
    title: label,
    description: `Shop ${label.toLowerCase()} at Leather House, Aminabad.`,
  };
}

export default async function CategoryShopPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!categories.includes(category as ProductCategory)) notFound();
  return (
    <ShopClient
      products={products}
      category={category as ProductCategory}
    />
  );
}
