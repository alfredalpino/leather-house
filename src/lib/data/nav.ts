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
    label: "Shop",
    href: "/shop",
    links: [
      {
        label: "All Departments",
        href: "/shop",
        description: "Browse the category department hub",
      },
      {
        label: "Belts",
        href: "/shop/leather?sub=belts",
        description: "Full-grain bridle leather with solid brass buckles",
      },
      {
        label: "Soft Footwear & Boots",
        href: "/shop/footwear",
        description: "Handcrafted oxfords, loafers and Chelsea boots",
      },
      {
        label: "Bags & Purses",
        href: "/shop/leather?sub=bags",
        description: "Briefcases, duffles and saddle flap purses",
      },
      {
        label: "Wallets & Cardholders",
        href: "/shop/leather?sub=wallets",
        description: "Vegetable-tanned bifolds and slim sleeves",
      },
      {
        label: "Leather Jackets",
        href: "/shop/leather?sub=jackets",
        description: "Bikers, suede overshirts and flight jackets",
      },
      {
        label: "Royal Attar & Itr",
        href: "/shop/fragrance?sub=attar",
        description: "Pure copper deg distillations: Shamama, Ruh Gulab & Mitti",
      },
      {
        label: "Royal Oud",
        href: "/shop/fragrance?sub=oud",
        description: "Aged Assam Agarwood & Safed White Oud",
      },
      {
        label: "Formal Accessories",
        href: "/shop/accessories",
        description: "Silk ties, brass cufflinks and tie pins",
      },
    ],
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
    imageAlt: "Leather goods collection",
  },
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
      {
        label: "Royal Attar & Itr",
        href: "/shop/fragrance?sub=attar",
        description: "Copper deg distillations: Shamama, Ruh Gulab & Mitti",
      },
      {
        label: "Oud & Dehn Al-Oud",
        href: "/shop/fragrance?sub=oud",
        description: "Aged Assam Agarwood & velvety Safed White Oud",
      },
      {
        label: "Artisanal Perfumes",
        href: "/shop/fragrance?sub=perfumes",
        description: "Eau de parfum with dry cedar, saffron & ambergris",
      },
      {
        label: "All Fragrances",
        href: "/shop/fragrance",
        description: "Explore the complete royal olfactory cellar",
      },
    ],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&q=80",
    imageAlt: "Royal amber fragrance flacon",
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
