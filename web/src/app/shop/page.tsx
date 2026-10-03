import type { Metadata } from "next";
import { ShopClient } from "@/components/shop/ShopClient";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse leather, footwear, accessories and fragrance from Leather House.",
};

export default function ShopPage() {
  return <ShopClient products={products} />;
}
