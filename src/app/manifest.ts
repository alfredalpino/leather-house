import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leather House · Lucknow",
    short_name: "Leather House",
    description:
      "Heritage leather goods, footwear, formal accessories, and traditional attar from Aminabad, Lucknow.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#141312",
    orientation: "portrait-primary",
    scope: "/",
    id: "/",
    lang: "en",
    dir: "ltr",
    categories: ["shopping", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Shop Catalogue",
        short_name: "Shop",
        url: "/shop",
        description: "Browse footwear, jackets, belts and bags",
      },
      {
        name: "Royal Fragrance & Itr",
        short_name: "Fragrance",
        url: "/shop/fragrance",
        description: "Artisanal Awadhi attar, aged oud and royal essences",
      },
      {
        name: "Patron Profile",
        short_name: "Profile",
        url: "/account",
        description: "View order dispatches and bespoke concierge",
      },
      {
        name: "Visit Store",
        short_name: "Store",
        url: "/store",
        description: "Heritage boutique in Aminabad, Lucknow",
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
