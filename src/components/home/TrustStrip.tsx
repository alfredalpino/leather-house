const promises = [
  { label: "Inspected for make", detail: "Grain, stitch and hardware" },
  { label: "Ships with care", detail: "Packed for lasting pieces" },
  { label: "Visit Aminabad", detail: "See and feel in person" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="container-catalogue grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
        {promises.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-1 px-4 py-4 text-center"
          >
            <p className="text-[11px] tracking-[0.18em] uppercase text-ink font-medium">
              {item.label}
            </p>
            <p className="text-xs text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
