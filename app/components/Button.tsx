import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

// Renders the shared .btn-primary pill (defined in globals.css). Keeps
// blog post CTAs consistent with the homepage primary button.
export function Button({
  href,
  children,
  className = "",
  arrow = true,
}: ButtonProps) {
  return (
    <Link href={href} className={`btn-primary ${className}`.trim()}>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden>
          →
        </span>
      )}
    </Link>
  );
}
