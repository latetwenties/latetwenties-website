"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { FREE_SEARCH_HREF } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { Wordmark } from "./Wordmark";

export const NAV_LINKS = [
  { href: "/what-we-do", label: "What we do", match: "what-we-do" },
  { href: "/work", label: "Our work", match: "work" },
  { href: "/insights", label: "Insights", match: "insights" },
  { href: "/contact", label: "Contact", match: "contact" },
];

const CTA = { href: FREE_SEARCH_HREF, label: "Who gets the call?" };

type HeaderProps = {
  current?: string;
};

// Sticky, always visible. The hairline under it only shows once the page
// has scrolled.
export function Header({ current = "" }: HeaderProps) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${stuck ? "is-stuck" : ""}`.trim()} aria-label="Primary">
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="Latetwenties home">
          <Wordmark height={26} className="wordmark-mask" />
        </Link>
        <div className="nav-right">
          <div className="nav-links">
            {NAV_LINKS.map((link) => {
              const isCurrent = current === link.match;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isCurrent ? "is-current" : undefined}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link className="btn-primary btn-sm nav-btn" href={CTA.href}>
            {CTA.label}
          </Link>
          <MobileMenu cta={CTA} />
        </div>
      </div>
    </nav>
  );
}
