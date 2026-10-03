# Leather House — Frontend Mockup

Production-quality **frontend-only** Next.js mockup for Leather House (Aminabad), based on `prd-dsign.md`.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Client-side cart, search, filters, and form validation (no backend)

## Design direction

**The House of Materials** — heritage menswear & accessories house rooted in leather, not generic black/brown/gold luxury.

- Tokens from the PRD: Ink, Bone/Warm White, Stone, Tobacco, Forest, Brass (restrained)
- Typography: **Instrument Serif** (brand / display) + **Manrope** (UI, ~70%)
- Editorial grid, low radius (2–4px), image-led modules instead of card stacks
- Motions: hero reveal, sticky compact header, cart drawer slide, product hover swap + PDP material reveal

## Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage (arrival → house → material → signature → beyond leather → Aminabad → journal → CTA) |
| `/shop`, `/shop/[category]` | Catalogue with filters / sort |
| `/product/[slug]` | PDP with gallery, sizes, material reveal, add to bag |
| `/collections` | Signature / leather / beyond-leather edits |
| `/house` | Brand story & timeline |
| `/journal`, `/journal/[slug]` | Editorial list + article |
| `/store` | Aminabad location / hours / contact CTAs |
| `/corporate` | Bulk enquiry form (validated UI) |
| `/checkout` | Mock checkout (delivery or store pickup) |

Global UI: responsive header + mega menu, mobile nav, search overlay, cart drawer (persisted in `localStorage`).

## Deferred (per PRD / mockup scope)

- Real payments, accounts, inventory, CMS, POS sync
- Admin dashboard
- Full SEO/structured data wiring beyond basic metadata
- Verified heritage claims and exact store coordinates
