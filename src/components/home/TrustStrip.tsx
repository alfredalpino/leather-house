import { Award, ShieldCheck, Sparkles } from "lucide-react";

const promises = [
  {
    icon: Award,
    label: "Full-Grain Hides",
    detail: "Vegetable-tanned calfskin cut to soften and patina over time.",
  },
  {
    icon: Sparkles,
    label: "Copper-Deg Attar",
    detail: "Hydro-distilled rose and oudh crafted by Kannauj master perfumers.",
  },
  {
    icon: ShieldCheck,
    label: "Lifetime Conditioning",
    detail: "Complimentary edge burnishing and stitch care in Aminabad.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-paper/60" aria-label="Guild Standards">
      <div className="container-catalogue">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
          {promises.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3.5 px-4 py-4 md:py-5 text-left md:justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-bone flex items-center justify-center shrink-0 text-tobacco">
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-ink">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted leading-tight mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
