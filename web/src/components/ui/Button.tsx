import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "inverse";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-warm-white hover:bg-charcoal border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-warm-white",
  tertiary:
    "bg-transparent text-ink border-b border-ink rounded-none px-0 h-auto pb-1 hover:border-tobacco",
  inverse:
    "bg-warm-white text-ink border border-warm-white hover:bg-bone",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & {
  href: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const base =
    "inline-flex items-center justify-center gap-2 h-12 px-6 text-sm tracking-[0.04em] uppercase font-medium transition-colors duration-[160ms] rounded-[var(--radius-sm)] disabled:opacity-50";

  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
