import Link from "next/link";

const footerLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Store", href: "/store" },
  { label: "The House", href: "/house" },
  { label: "Corporate", href: "/corporate" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-warm-white">
      <div className="container-catalogue py-8 md:py-10">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-[1.75rem] tracking-wide">Leather House</p>
            <p className="mt-1 text-sm text-stone-cool/90">Aminabad, Lucknow</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.12em] uppercase text-warm-white/80 hover:text-warm-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-6 pt-4 border-t border-charcoal text-xs text-stone">
          © {new Date().getFullYear()} Leather House
        </p>
      </div>
    </footer>
  );
}
