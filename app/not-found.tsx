import type { Metadata } from "next";
import Link from "next/link";

import { Eyebrow } from "./components/Eyebrow";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "Hmm, this page doesn't ring a bell. Try one of these instead.",
};

const SUGGESTIONS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/work", label: "Recent work" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="not-found">
          <div className="wrap">
            <Eyebrow num="404">Not found</Eyebrow>
            <h1 className="not-found-h1">
              Hmm. This page <em>doesn&rsquo;t ring a bell.</em>
            </h1>
            <p className="not-found-lede">
              Try one of these instead:
            </p>
            <ul className="not-found-links">
              {SUGGESTIONS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
