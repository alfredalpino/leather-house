import type { Metadata } from "next";
import { CorporateForm } from "@/components/forms/CorporateForm";

export const metadata: Metadata = {
  title: "Corporate & Bulk",
  description: "Enquire for corporate gifting and bulk orders from Leather House.",
};

export default function CorporatePage() {
  return (
    <div>
      <div className="container-editorial py-14 md:py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">
            Corporate & bulk
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-tight">
            Request the catalogue.
          </h1>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Belts, wallets, bags and accessories for teams, events and gifting.
            Tell us quantities and timelines. The house will respond with options.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink/90">
            <li className="border-l border-stone pl-4">Corporate gifting sets</li>
            <li className="border-l border-stone pl-4">Uniform accessory programmes</li>
            <li className="border-l border-stone pl-4">Bulk leather essentials</li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <CorporateForm />
        </div>
      </div>
    </div>
  );
}
