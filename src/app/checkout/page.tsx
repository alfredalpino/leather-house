import type { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Mock checkout for the Leather House frontend preview.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
