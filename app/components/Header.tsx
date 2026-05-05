import Link from "next/link";

import { Wordmark } from "./Wordmark";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works", match: "how-it-works" },
  { href: "/about", label: "About", match: "about" },
  { href: "/resources", label: "Resources", match: "resources" },
  { href: "/contact", label: "Contact", match: "contact" },
];

type HeaderProps = {
  current?: string;
};

export function Header({ current = "" }: HeaderProps) {
  return (
    <nav className="nav" aria-label="Primary">
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
