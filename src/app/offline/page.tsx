import type { Metadata } from "next";
import { OfflineClient } from "@/components/offline/OfflineClient";

export const metadata: Metadata = {
  title: "Offline · Leather House",
  description: "Offline fallback page for Leather House PWA.",
};

export default function OfflinePage() {
  return <OfflineClient />;
}
