"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deferred so the setState happens after the initial render commit,
    // satisfying React 19's no-setState-in-effect rule and avoiding any
    // hydration mismatch on the portal.
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const panel = (
    <div
      className={`mobile-menu-panel ${open ? "is-open" : ""}`.trim()}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="mobile-menu-bar">
        <span className="mobile-menu-eyebrow">Menu</span>
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={close}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      <nav className="mobile-menu-nav" aria-label="Mobile primary">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={close}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="mobile-menu-cta" onClick={close}>
        Free presence check <span aria-hidden="true">→</span>
      </Link>

      <div className="mobile-menu-foot">
        <a href="tel:+6498844418">09-884-4418</a>
        <a href="mailto:team@latetwenties.agency">
          team@latetwenties.agency
        </a>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {mounted && createPortal(panel, document.body)}
    </>
  );
}
