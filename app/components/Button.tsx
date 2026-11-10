import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "ink" | "accent";
};

// The shared .btn-primary pill (globals.css). External links open in a new tab.
export function Button({
  href,
  children,
  className = "",
  arrow = true,
  size = "md",
  variant = "ink",
}: ButtonProps) {
  const cls = [
    "btn-primary",
    size !== "md" ? `btn-${size}` : "",
    variant === "accent" ? "btn-accent" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const inner = (
    <>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden>
          →
        </span>
      )}
    </>
  );
  if (/^https?:/.test(href)) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

type GhostLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "default" | "strong" | "light";
  arrow?: boolean;
  className?: string;
};

// Mono underlined text link. "strong" is ink, "light" is for dark grounds.
export function GhostLink({
  href,
  children,
  tone = "default",
  arrow = true,
  className = "",
}: GhostLinkProps) {
  const cls = ["ghost-link", tone !== "default" ? `ghost-${tone}` : "", className]
    .filter(Boolean)
    .join(" ");
  const inner = (
    <>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </>
  );
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const ext = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        target={ext ? "_blank" : undefined}
        rel={ext ? "noopener" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
