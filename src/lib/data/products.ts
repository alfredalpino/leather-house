export type ProductCategory =
  | "leather"
  | "footwear"
  | "accessories"
  | "fragrance";

export type ProductSubcategory =
  | "jackets"
  | "belts"
  | "wallets"
  | "bags"
  | "formal"
  | "casual"
  | "boots"
  | "ties"
  | "cufflinks"
  | "tie-pins"
  | "perfumes"
  | "attar"
  | "oud";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subcategory: ProductSubcategory;
  price: number;
  material: string;
  color: string;
  availability: "in-stock" | "limited" | "made-to-order";
  description: string;
  details: string[];
  construction: string;
  dimensions: string;
  care: string;
  sizes?: string[];
  images: string[];
  featured?: boolean;
  signature?: boolean;
};

export const categoryLabels: Record<ProductCategory, string> = {
  leather: "Leather",
  footwear: "Footwear",
  accessories: "Accessories",
  fragrance: "Fragrance",
};

export const subcategoryLabels: Record<ProductSubcategory, string> = {
  jackets: "Jackets",
  belts: "Belts",
  wallets: "Wallets",
  bags: "Bags",
  formal: "Formal",
  casual: "Casual",
  boots: "Boots",
  ties: "Ties",
  cufflinks: "Cufflinks",
  "tie-pins": "Tie Pins",
  perfumes: "Perfumes",
  attar: "Pure Attar & Itr",
  oud: "Royal Oud & Dehn Al-Oud",
};

export const products: Product[] = [
  {
    id: "1",
    slug: "aminabad-belt-tobacco",
    name: "Aminabad Belt",
    category: "leather",
    subcategory: "belts",
    price: 2490,
    material: "Full-grain leather",
    color: "Tobacco",
    availability: "in-stock",
    description:
      "A daily belt cut from full-grain leather with a restrained brass buckle. Built to soften and take on the mark of wear.",
    details: [
      "Full-grain leather strap",
      "Brass-toned buckle",
      "Edge-finished and burnished",
      "Width 3.5 cm",
    ],
    construction: "Single-piece strap with reinforced buckle attachment and hand-finished edges.",
    dimensions: "Adjustable; fits waist 30–38 in. Width 3.5 cm.",
    care: "Wipe with a soft dry cloth. Condition sparingly every few months. Avoid prolonged moisture.",
    sizes: ["30", "32", "34", "36", "38"],
    images: [
      "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=1200&q=80",
      "https://images.unsplash.com/photo-1664285612706-b32633c95820?w=1200&q=80",
      "https://images.unsplash.com/photo-1637868796504-32f45a96d5a0?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "2",
    slug: "house-biker-jacket",
    name: "House Biker Jacket",
    category: "leather",
    subcategory: "jackets",
    price: 18990,
    material: "Genuine leather",
    color: "Ink Black",
    availability: "limited",
    description:
      "A structured biker silhouette with clean hardware and a grain that rewards inspection. Selected for cut, weight and character.",
    details: [
      "Zip-front leather jacket",
      "Asymmetric closure",
      "Quilted shoulder panels",
      "Interior lining",
    ],
    construction: "Panelled leather shell with metal zippers and reinforced stress points.",
    dimensions: "Regular fit. Model reference: medium.",
    care: "Hang freely. Wipe dust with a soft cloth. Professional leather care recommended seasonally.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "3",
    slug: "fold-wallet-stone",
    name: "Fold Wallet",
    category: "leather",
    subcategory: "wallets",
    price: 1890,
    material: "Vegetable-tanned leather",
    color: "Stone Brown",
    availability: "in-stock",
    description:
      "A compact bifold with room for cards and notes. Designed to develop patina rather than stay pristine.",
    details: ["Bifold structure", "Card slots", "Cash compartment", "Unlined interior"],
    construction: "Stitched vegetable-tanned panels with clean edge paint.",
    dimensions: "11.5 × 9 cm closed.",
    care: "Keep dry. Occasional leather balm keeps the surface supple.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200&q=80",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "4",
    slug: "office-briefcase",
    name: "Office Briefcase",
    category: "leather",
    subcategory: "bags",
    price: 8990,
    material: "Buffalo leather",
    color: "Charcoal",
    availability: "in-stock",
    description:
      "A structured briefcase for documents and a laptop. Quiet hardware, durable grain, practical compartments.",
    details: [
      "Laptop sleeve up to 15 in",
      "Document compartments",
      "Top handle and shoulder strap",
      "Metal feet",
    ],
    construction: "Structured leather body with reinforced corners and lined interior.",
    dimensions: "40 × 30 × 10 cm.",
    care: "Wipe exterior after use. Store stuffed to retain shape.",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "5",
    slug: "formal-oxford-ink",
    name: "Formal Oxford",
    category: "footwear",
    subcategory: "formal",
    price: 6490,
    material: "Leather upper",
    color: "Ink",
    availability: "in-stock",
    description:
      "A clean oxford for work and occasion. Balanced last, leather sole feel, finished without excess polish theatre.",
    details: ["Lace-up oxford", "Leather upper", "Cushioned insole", "Rubber-finish outsole"],
    construction: "Cemented construction with reinforced heel counter.",
    dimensions: "Available UK 6–10.",
    care: "Use shoe trees. Polish lightly. Avoid rain when possible.",
    sizes: ["6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1668069226492-508742b03147?w=1200&q=80",
      "https://images.unsplash.com/photo-1552422554-0d5af0c79fc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1674499317153-d713a7a8532c?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "6",
    slug: "double-monk-tan",
    name: "Double Monk",
    category: "footwear",
    subcategory: "formal",
    price: 5990,
    material: "Polished leather",
    color: "Tan",
    availability: "in-stock",
    description:
      "A double-monk strap for days that need polish without a full lace ritual. Warm tan leather with quiet buckle hardware.",
    details: ["Double buckle straps", "Leather upper", "Cushioned insole", "Leather-finish outsole"],
    construction: "Cemented construction with reinforced heel counter.",
    dimensions: "Available UK 6–10.",
    care: "Use shoe trees. Polish lightly. Avoid rain when possible.",
    sizes: ["6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=1200&q=80",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "7",
    slug: "cap-toe-boot",
    name: "Cap-Toe Boot",
    category: "footwear",
    subcategory: "boots",
    price: 7990,
    material: "Leather",
    color: "Forest Brown",
    availability: "limited",
    description:
      "A lace-up cap-toe boot with a clean profile. Useful from office to travel, built for repeated wear.",
    details: ["Cap-toe lace-up", "Leather upper", "Metal eyelets", "Stacked heel"],
    construction: "Boot last with reinforced heel and durable outsole.",
    dimensions: "Available UK 6–10. Shaft height approx. 14 cm.",
    care: "Keep dry after rain. Condition leather seasonally.",
    sizes: ["6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=1200&q=80",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=1200&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "8",
    slug: "house-silk-tie",
    name: "House Silk Tie",
    category: "accessories",
    subcategory: "ties",
    price: 1290,
    material: "Silk blend",
    color: "Deep Forest",
    availability: "in-stock",
    description:
      "A formal tie with quiet pattern and a substantial hand. Selected to sit well with shirts and jackets alike.",
    details: ["Woven silk blend", "Standard blade width", "Tipped finish", "Keeper loop"],
    construction: "Bias-cut and lined for shape retention.",
    dimensions: "Length 148 cm. Blade width 8 cm.",
    care: "Hang after wear. Spot clean only.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "9",
    slug: "brass-cufflinks",
    name: "Brass Cufflinks",
    category: "accessories",
    subcategory: "cufflinks",
    price: 990,
    material: "Brass finish metal",
    color: "Brass",
    availability: "in-stock",
    description:
      "Simple round cufflinks with a restrained brass finish. Made to catch light without competing with the shirt.",
    details: ["Pair of cufflinks", "Toggle closure", "Brushed finish", "Gift box"],
    construction: "Metal face with secure toggle back.",
    dimensions: "Face diameter 16 mm.",
    care: "Wipe with a soft cloth. Store dry.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "10",
    slug: "tie-pin-bar",
    name: "Tie Pin Bar",
    category: "accessories",
    subcategory: "tie-pins",
    price: 690,
    material: "Metal",
    color: "Gunmetal",
    availability: "in-stock",
    description:
      "A slim tie bar for securing a formal knot. Minimal profile, practical hold.",
    details: ["Slide bar", "Spring clasp", "Gunmetal finish"],
    construction: "Single-piece bar with tension clasp.",
    dimensions: "Length 5.5 cm.",
    care: "Wipe after wear. Avoid moisture.",
    images: [
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80",
    ],
  },
  {
    id: "11",
    slug: "shahi-dehn-al-oud",
    name: "Shahi Dehn Al-Oud",
    category: "fragrance",
    subcategory: "oud",
    price: 6990,
    material: "Wild Assam Agarwood Oil",
    color: "Deep Molten Amber",
    availability: "limited",
    description:
      "The crown jewel of traditional oriental perfumery. Distilled in copper degs from aged Assam Aquilaria trees and matured over eight years in dark cellar flacons. Dense, balsamic, leathery, and deeply resinous with dark honeyed undertones that endure over 24 hours.",
    details: [
      "100% pure wild Assam agarwood oil",
      "Aged 8+ years in teak-lined cellars",
      "Non-alcoholic traditional attar oil",
      "Heavy cut-crystal flacon with dip rod",
      "12 ml (approx. 1 tola)",
    ],
    construction: "Fractional hydro-distillation in heritage copper degs, unblended and unadulterated.",
    dimensions: "12 ml crystal flacon with gold-finished stopper.",
    care: "Dab sparingly on pulse points and fabric lapels. A single drop projects for over twenty-four hours.",
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "12",
    slug: "safed-oud-white-oud",
    name: "Safed Oud (White Oud)",
    category: "fragrance",
    subcategory: "oud",
    price: 4490,
    material: "White Agarwood & Silver Musk",
    color: "Pearl Translucent",
    availability: "in-stock",
    description:
      "An ethereal, velvety distillation uniting rare white Cambodian agarwood, Himalayan silver cedar, soft white musk, and delicate Kashmiri amber. Whisper-soft, calming, and unmistakably imperial with an intimate, lingering sillage.",
    details: [
      "White Cambodian agarwood & silver musk",
      "Non-alcoholic concentrated perfume oil",
      "Matured in crystal flacons for six months",
      "Glass applicator wand included",
      "12 ml (approx. 1 tola)",
    ],
    construction: "Slow low-temperature hydro-distillation yielding a silky, non-staining oil.",
    dimensions: "12 ml faceted glass flacon in lined presentation case.",
    care: "Smooth a drop onto collarbone, cuffs, or beard. Store away from excessive heat.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "16",
    slug: "shamama-tul-amber",
    name: "Shamama-tul-Amber",
    category: "fragrance",
    subcategory: "attar",
    price: 5290,
    material: "Traditional Awadhi Herbal Formulation",
    color: "Dark Mahogany",
    availability: "in-stock",
    description:
      "Lucknow's most legendary royal formulation. A closely guarded Nawabi court recipe uniting over 40 wild Himalayan roots, herbs, saffron, and resinous mosses slow-distilled over weeks into pure aged sandalwood oil. Warming, earthy, spiced, and profound.",
    details: [
      "40+ indigenous herbs, roots & rare spices",
      "Pure Indian sandalwood oil base",
      "Slow-distilled over hardwood embers",
      "Historic Awadh perfumery heritage",
      "12 ml applicator flacon",
    ],
    construction: "Multi-stage deg-bhapka slow distillation over wood charcoal into sandalwood receiver.",
    dimensions: "12 ml heavy flacon with precision rod.",
    care: "Warm a drop between fingertips before smoothing onto collar or woolens for evening gatherings.",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1200&q=80",
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "17",
    slug: "ruh-gulab-damascena",
    name: "Ruh Gulab Damascena",
    category: "fragrance",
    subcategory: "attar",
    price: 5890,
    material: "First-Press Damask Rose Distillate",
    color: "Pale Golden Rose",
    availability: "limited",
    description:
      "Harvested by hand in Kannauj before the morning mist clears. Four tons of dew-kissed Rosa Damascena petals yield just a single tola of this pure, nectarous soul of the rose. Crisp green top notes opening into deep, honeyed floral velvet.",
    details: [
      "100% pure first-press Damask rose essence",
      "No carrier alcohol or synthetic fixatives",
      "Dewy, majestic Awadhi court floral heart",
      "Traditional copper still condensation",
      "6 ml (half tola) concentrated essence",
    ],
    construction: "Direct cold-condensation hydro-distillation of early-morning picked Damask roses.",
    dimensions: "6 ml crystal flacon with gold-embossed seal.",
    care: "Keep in a cool, shaded drawer. A single touch behind the ears lasts from dawn to dusk.",
    images: [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "18",
    slug: "mukhallat-sultani",
    name: "Mukhallat Sultani",
    category: "fragrance",
    subcategory: "attar",
    price: 7490,
    material: "Saffron, Ambergris & Cambodian Oud",
    color: "Royal Saffron Gold",
    availability: "limited",
    description:
      "An imperial Persian-Mughal composition formulated for grand courtly assemblies. Red Kashmiri saffron filaments, Taif rose essence, sweet oceanic ambergris, and vintage Cambodian oudh married into a commanding, regal presence.",
    details: [
      "Kashmiri saffron, ambergris & aged Cambodian oud",
      "Opulent, warm oriental sillage",
      "Artisan-blended in small seasonal batches",
      "Weighted glass flacon with crystal stopper",
      "12 ml (approx. 1 tola)",
    ],
    construction: "Infusion of macerated saffron stigmas into aged agarwood and botanical amber.",
    dimensions: "12 ml luxury flacon in velvet-lined casket.",
    care: "Apply lightly to pulse points. Complements formal attire and evening occasions.",
    images: [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ee9?w=1200&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "19",
    slug: "mitti-attar-lucknow",
    name: "Mitti Attar (Scent of First Rain)",
    category: "fragrance",
    subcategory: "attar",
    price: 3290,
    material: "Baked River Clay & Sandalwood",
    color: "Warm Golden Clay",
    availability: "in-stock",
    description:
      "The poetic fragrance of northern Indian summer breaking into monsoon. Sun-baked Gangetic alluvial clay hydro-distilled in traditional deg-bhapkas into pure aged Mysore sandalwood oil. Incomparably grounding, nostalgic, and meditative.",
    details: [
      "Authentic Gangetic baked clay distillation",
      "Pure Indian sandalwood receiver oil",
      "True natural petrichor fragrance",
      "Calming, peaceful everyday wear",
      "12 ml amber apothecary flacon",
    ],
    construction: "Hydro-distillation capturing baked earthen vapors directly into a sandalwood receiver.",
    dimensions: "12 ml amber flacon with glass wand.",
    care: "Best enjoyed by dabbing on wrists before quiet reflection, prayer, or evening reading.",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80",
      "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "20",
    slug: "kesar-kasturi-attar",
    name: "Kesar Kasturi Itr",
    category: "fragrance",
    subcategory: "attar",
    price: 4890,
    material: "Pampore Saffron & Botanical Musk",
    color: "Burnished Amber Gold",
    availability: "in-stock",
    description:
      "A warming Persian-Awadhi court formulation created for cool evenings. Certified royal grade saffron stigmas from Pampore married with wild ambrette seeds, sweet nutmeg, and balsamic resins for a radiant, enveloping aura.",
    details: [
      "Certified Pampore red saffron stigmas",
      "Botanical ambrette seed musk",
      "Radiant spiced-honey drydown",
      "Pure non-alcoholic perfume oil",
      "12 ml applicator flacon",
    ],
    construction: "Cold maceration of saffron filaments followed by low-heat fractional copper distillation.",
    dimensions: "12 ml flacon with glass applicator wand.",
    care: "A small touch on a silk pocket square or scarf leaves a refined scent trail for days.",
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "21",
    slug: "ruh-khus-green-vetiver",
    name: "Ruh Khus Green Vetiver",
    category: "fragrance",
    subcategory: "attar",
    price: 3790,
    material: "Wild River Vetiver Root Distillate",
    color: "Deep Emerald Green",
    availability: "in-stock",
    description:
      "Distilled from the tangled wild green roots of northern riverine vetiver using copper degs. Deeply cooling, earthy, smoky-sweet, and unmistakable in its natural emerald jade tint. The classic aristocratic cooling essence of Awadh.",
    details: [
      "Wild-harvested northern river vetiver roots",
      "Naturally vibrant emerald green distillate",
      "Intensely cooling & refreshing character",
      "Traditional deg-bhapka artisan method",
      "12 ml flacon with precision applicator",
    ],
    construction: "Copper-still hydro-distillation producing pure, uncut green vetiver oil.",
    dimensions: "12 ml flacon with precision glass rod.",
    care: "Ideal for warm seasons or humid climates. A drop behind the ears provides instant clarity.",
    images: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "22",
    slug: "zafraan-amber-eau-de-parfum",
    name: "Zafraan & Amber Eau de Parfum",
    category: "fragrance",
    subcategory: "perfumes",
    price: 4990,
    material: "Eau de Parfum Spray",
    color: "Warm Topaz Glass",
    availability: "in-stock",
    description:
      "A contemporary high-luxury spray formulation honoring historical Persian perfumery. Crisp saffron and cardamom opening into dry cedarwood, smoked frankincense, and a golden amber base with exceptional longevity.",
    details: [
      "100 ml Eau de Parfum",
      "Italian fine-mist atomizer",
      "Saffron, cardamom, dry cedar & amber",
      "Heavy weighted glass bottle",
      "100 ml spray",
    ],
    construction: "Matured 90 days in cold cellar before bottling with precision fine mist pump.",
    dimensions: "100 ml heavy glass bottle.",
    care: "Spritz lightly onto collarbone and garments from 15 cm distance.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "23",
    slug: "evening-cologne",
    name: "Evening Ambergris Cologne",
    category: "fragrance",
    subcategory: "perfumes",
    price: 3490,
    material: "Eau de parfum",
    color: "Amber glass",
    availability: "in-stock",
    description:
      "A composed evening scent with warm woods, smoked labdanum, and a dry finish. Selected to sit alongside leather goods and formal tailoring.",
    details: ["50 ml", "Woody base with ambergris nuance", "Moderate projection", "Glass bottle"],
    construction: "Alcohol-based eau de parfum.",
    dimensions: "50 ml bottle.",
    care: "Store away from direct sunlight and heat.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "24",
    slug: "aminabad-attar",
    name: "Aminabad Heritage Attar",
    category: "fragrance",
    subcategory: "attar",
    price: 2490,
    material: "Traditional Sandalwood & Amber Attar",
    color: "Deep amber",
    availability: "in-stock",
    description:
      "A concentrated heritage attar for those who prefer pure oil-based perfumery. Quiet intensity, long wear, and seamless cultural continuity with old Lucknow.",
    details: ["Oil-based attar", "Roller applicator", "Long-lasting", "Travel size", "12 ml"],
    construction: "Fragrance oil in glass vial with roller applicator.",
    dimensions: "12 ml.",
    care: "Keep upright. Avoid extreme heat.",
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "13",
    slug: "city-backpack",
    name: "City Backpack",
    category: "leather",
    subcategory: "bags",
    price: 7490,
    material: "Textured leather",
    color: "Ink Black",
    availability: "in-stock",
    description:
      "A structured day backpack with a quiet silhouette. Built for laptop, documents and the commute without looking technical.",
    details: [
      "Padded laptop sleeve",
      "Front zip pocket",
      "Top carry handle",
      "Adjustable shoulder straps",
    ],
    construction: "Panelled body with reinforced base and lined interior.",
    dimensions: "Approx. 42 × 30 × 14 cm.",
    care: "Wipe exterior after use. Store upright and dry.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=1200&q=80",
    ],
    featured: true,
    signature: true,
  },
  {
    id: "14",
    slug: "cognac-daypack",
    name: "Cognac Daypack",
    category: "leather",
    subcategory: "bags",
    price: 8290,
    material: "Full-grain leather",
    color: "Cognac",
    availability: "limited",
    description:
      "A warm cognac leather daypack with a rounded silhouette. Side pockets, front zip, and a grain that ages with use.",
    details: [
      "Leather body with zip top",
      "Front zip pocket",
      "Side bottle pockets",
      "Top carry handle",
    ],
    construction: "Panelled leather shell with reinforced base and lined interior.",
    dimensions: "Approx. 40 × 28 × 14 cm.",
    care: "Wipe exterior after use. Condition sparingly to deepen the colour.",
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "15",
    slug: "slim-card-holder",
    name: "Slim Card Holder",
    category: "leather",
    subcategory: "wallets",
    price: 1290,
    material: "Vegetable-tanned leather",
    color: "Tobacco",
    availability: "in-stock",
    description:
      "A minimal card sleeve for days you leave the full wallet behind. Thin profile, clean edges, quick patina.",
    details: ["Four card slots", "Central cash pocket", "Unlined interior", "Edge painted"],
    construction: "Stitched vegetable-tanned panels with burnished edges.",
    dimensions: "10.5 × 7.5 cm.",
    care: "Keep dry. Occasional leather balm keeps the surface supple.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200&q=80",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=1200&q=80",
    ],
    featured: true,
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: ProductCategory) {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}

export function getSignatureProducts() {
  return products.filter((p) => p.signature);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.color.toLowerCase().includes(q) ||
      p.subcategory.includes(q),
  );
}
