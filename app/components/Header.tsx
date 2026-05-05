"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Wordmark } from "./Wordmark";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works", match: "how-it-works" },
  { href: "/about", label: "About", match: "about" },
  { href: "/resources", label: "Resources", match: "resources" },
  { href: "/contact", label: "Contact", match: "contact" },
];

const SHOW_AT_TOP_THRESHOLD = 80;
const HIDE_DELTA = 6;

type HeaderProps = {
  current?: string;
};

export function Header({ current = "" }: HeaderProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < SHOW_AT_TOP_THRESHOLD) {
          setHidden(false);
        } else if (y - lastY > HIDE_DELTA) {
          setHidden(true);
        } else if (lastY - y > HIDE_DELTA) {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav ${hidden ? "is-hidden" : ""}`.trim()}
      aria-label="Primary"
    >
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="Latetwenties home">
          <Wordmark height={32} className="wordmark-mask" />
        </Link>
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
          <Link className="nav-cta" href="/contact">
            Free presence check →
          </Link>
        </div>
      </div>
    </nav>
  );
}
