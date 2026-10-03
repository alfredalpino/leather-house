import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Store",
  description: "Visit Leather House in Aminabad, Lucknow. Location, hours and contact.",
};

export default function StorePage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50svh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800&q=85"
          alt="Retail storefront atmosphere"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="relative z-10 container-editorial pb-12 pt-28 text-warm-white">
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone">
            The Store
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.25rem)]">
            Find us in Aminabad.
          </h1>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-[11px] tracking-[0.18em] uppercase text-muted">
              Address
            </h2>
            <p className="mt-3 text-lg leading-relaxed">
              Leather House
              <br />
              Aminabad, Lucknow
              <br />
              Uttar Pradesh, India
            </p>
            <p className="mt-2 text-sm text-muted">
              Exact landmark and pin to be confirmed with the shop.
            </p>
          </div>
          <div>
            <h2 className="text-[11px] tracking-[0.18em] uppercase text-muted">
              Hours
            </h2>
            <p className="mt-3 text-lg leading-relaxed">
              Open daily
              <br />
              Approx. 11:00 – 21:00
            </p>
            <p className="mt-2 text-sm text-muted">
              Mock hours for the design preview. Confirm before launch.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href="https://maps.google.com/?q=Leather+House+Aminabad+Lucknow"
              variant="primary"
            >
              Get directions
            </Button>
            <Button href="tel:+910000000000" variant="secondary">
              Call the house
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden bg-bone border border-stone/50">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
              alt="Specialty retail interior suggesting the Aminabad store"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="bg-warm-white/95 px-4 py-3 max-w-sm">
                <p className="font-display text-xl">Leather House</p>
                <p className="text-sm text-muted mt-1">
                  Aminabad · Lucknow. Pin this visit on your next trip to the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone/50">
        <div className="container-editorial py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-display text-2xl max-w-md">
            Prefer WhatsApp for a quick enquiry?
          </p>
          <Button href="https://wa.me/910000000000" variant="secondary">
            Message on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
