import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "inverse";
  className?: string;
  arrow?: boolean;
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-3 px-12 py-5 text-base hover:opacity-85";
  const variantClass =
    variant === "primary"
      ? "bg-ink text-cream"
      : variant === "inverse"
        ? "bg-cream text-ink"
        : "border border-ink text-ink hover:bg-ink hover:text-cream";

  return (
    <a
      href={href}
      className={`${base} ${variantClass} ${className}`}
      style={{
        transition: `opacity 500ms ${EASE}, background-color 500ms ${EASE}, color 500ms ${EASE}`,
      }}
    >
      {children}
      {arrow && (
        <span aria-hidden className="inline-block">
          →
        </span>
      )}
    </a>
  );
}
