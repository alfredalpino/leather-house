export type MegaLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  image?: string;
  imageAlt?: string;
  links?: MegaLink[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Collections",
    href: "/collections",
    links: [
      {
        label: "Signature Edit",
        href: "/collections#signature",
        description: "Pieces chosen for material, make and how they wear",
      },
      {
        label: "The Leather Edit",
        href: "/shop/leather",
        description: "Jackets, belts, wallets and bags",
      },
      {
        label: "Beyond Leather",
        href: "/collections#beyond",
        description: "Ties, hardware and fragrance to finish the look",
      },
    ],
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
    imageAlt: "Leather jacket detail",
  },
  {
    label: "Leather",
    href: "/shop/leather",
    links: [
      { label: "Jackets", href: "/shop/leather?sub=jackets" },
      { label: "Belts", href: "/shop/leather?sub=belts" },
      { label: "Wallets", href: "/shop/leather?sub=wallets" },
      { label: "Bags", href: "/shop/leather?sub=bags" },
      { label: "All leather", href: "/shop/leather" },
    ],
    image: "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=900&q=80",
    imageAlt: "Leather belt",
  },
  {
    label: "Footwear",
    href: "/shop/footwear",
    links: [
      { label: "Formal", href: "/shop/footwear?sub=formal" },
      { label: "Casual", href: "/shop/footwear?sub=casual" },
      { label: "Boots", href: "/shop/footwear?sub=boots" },
      { label: "All footwear", href: "/shop/footwear" },
    ],
    image: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=900&q=80",
    imageAlt: "Formal leather shoe",
  },
  {
    label: "Accessories",
    href: "/shop/accessories",
    links: [
      { label: "Ties", href: "/shop/accessories?sub=ties" },
      { label: "Cufflinks", href: "/shop/accessories?sub=cufflinks" },
      { label: "Tie pins", href: "/shop/accessories?sub=tie-pins" },
      { label: "All accessories", href: "/shop/accessories" },
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
    imageAlt: "Formal accessories",
  },
  {
    label: "Fragrance",
    href: "/shop/fragrance",
    links: [
      { label: "Perfumes", href: "/shop/fragrance?sub=perfumes" },
      { label: "Attar", href: "/shop/fragrance?sub=attar" },
      { label: "All fragrance", href: "/shop/fragrance" },
    ],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80",
    imageAlt: "Fragrance bottle",
  },
  {
    label: "Stories",
    href: "/journal",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "The House", href: "/house" },
      { label: "Visit the store", href: "/store" },
      { label: "Corporate & bulk", href: "/corporate" },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    imageAlt: "Retail interior",
  },
];

export const houseNav = [
  { label: "Our Story", href: "/house" },
  { label: "The Store", href: "/store" },
  { label: "Journal", href: "/journal" },
  { label: "Corporate & Bulk", href: "/corporate" },
];
