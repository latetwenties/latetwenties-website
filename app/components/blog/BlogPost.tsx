import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

import { Button } from "../Button";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { BlogRail, type KeyStat, type TocItem } from "./BlogRail";

type BlogPostProps = {
  title: string;
  lede: string;
  readTime: string;
  children: ReactNode;
  /** Drives the sticky rail's table of contents + scroll-spy. Omit for a
   *  plain single-column post (graceful fallback). */
  toc?: TocItem[];
  /** Optional per-article number callout shown in the rail. */
  keyStat?: KeyStat;
  /** Optional one-line prompt above the rail's mini CTA. */
  railCtaLine?: string;
  ctaTitle?: string;
  ctaBody?: string;
};

export function BlogPost({
  title,
  lede,
  readTime,
  children,
  toc,
  keyStat,
  railCtaLine,
  ctaTitle = "Want us to take a look?",
  ctaBody = "30 minutes, no pitch. We’ll come prepared with a look at where you sit and what’s costing you calls.",
}: BlogPostProps) {
  // Explicit toc wins (curated labels); otherwise build it from the <H2>
  // children so any post gets a rail with no per-heading authoring.
  const resolvedToc = toc ?? deriveToc(children);
  const hasRail = resolvedToc.length > 0;

  const reading = (
    <div className="bp-reading" data-bp-region>
      {children}
    </div>
  );

  return (
    <>
      <Header current="resources" />
      <main>
        <article>
          {/* Hero: full-width, left-aligned */}
          <header className="bp-hero">
            <div className="wrap">
              <p className="bp-eyebrow">
                <span className="bp-eyebrow-accent">Resources</span> / {readTime}
              </p>
              <h1 className="bp-h1">{title}</h1>
              <p className="bp-lede">{lede}</p>
            </div>
          </header>

          {/* Body: reading column + sticky rail (rail drops below 920px) */}
          <div className="bp-body">
            <div className="wrap">
              {hasRail ? (
                <div className="bp-grid">
                  {reading}
                  <BlogRail
                    toc={resolvedToc}
                    keyStat={keyStat}
                    ctaLine={railCtaLine}
                  />
                </div>
              ) : (
                reading
              )}

              <div className="bp-back">
                <a href="/resources">← Back to resources</a>
              </div>
            </div>
          </div>
        </article>

        {/* Closing CTA */}
        <section className="bp-cta">
          <div className="wrap">
            <div className="bp-cta-grid">
              <div>
                <h2 className="bp-cta-h2">{ctaTitle}</h2>
                <p className="bp-cta-body">{ctaBody}</p>
              </div>
              <Button href="/contact">Take a look</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ----------------------------------------------------------------
// Prose primitives. Use inside <BlogPost> children. Serif long-form
// register matching the rest of the site (case study, founder letter).
// ----------------------------------------------------------------

function nodeToText(node: ReactNode): string {
  if (node == null || node === false || node === true) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (
    typeof node === "object" &&
    "props" in node &&
    (node as { props?: { children?: ReactNode } }).props
  ) {
    return nodeToText(
      (node as { props: { children?: ReactNode } }).props.children,
    );
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’'"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Build a rail TOC from the post's <H2> children. The id matches what H2
// renders (explicit id, else slug of the heading text); the label drops any
// leading "1." numbering since the rail supplies its own.
function deriveToc(children: ReactNode): TocItem[] {
  return Children.toArray(children)
    .filter((c): c is ReactElement => isValidElement(c) && c.type === H2)
    .map((el) => {
      const props = el.props as { children?: ReactNode; id?: string };
      const text = nodeToText(props.children).replace(/\s+/g, " ").trim();
      return {
        id: props.id ?? slugify(text),
        label: text.replace(/^\d+\.\s*/, ""),
      };
    });
}

export function P({ children }: { children: ReactNode }) {
  return <p className="bp-p">{children}</p>;
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  const anchor = id ?? slugify(nodeToText(children));
  return (
    <h2 id={anchor} className="bp-h2">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="bp-h3">{children}</h3>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="bp-ul">{children}</ul>;
}

export function OL({ children }: { children: ReactNode }) {
  return <ol className="bp-ol">{children}</ol>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="bp-strong">{children}</strong>;
}

export function Pullquote({ children }: { children: ReactNode }) {
  return <p className="bp-pull">{children}</p>;
}

// The "At Latetwenties we help…" closing paragraph, set off with a rule.
export function Signoff({ children }: { children: ReactNode }) {
  return (
    <div className="bp-signoff">
      <p className="bp-p">{children}</p>
    </div>
  );
}

// In-article ledger / data card for the maths moments.
type LedgerRow = { label: string; value: string; subtotal?: boolean };

export function Ledger({
  caption,
  rows,
  total,
}: {
  caption: string;
  rows: LedgerRow[];
  total: { label: string; value: string };
}) {
  return (
    <div className="bp-ledger">
      <p className="bp-ledger-cap">{caption}</p>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`bp-ledger-row${row.subtotal ? " is-subtotal" : ""}`}
        >
          <span className="bp-ledger-label">{row.label}</span>
          <span className="bp-ledger-val">{row.value}</span>
        </div>
      ))}
      <div className="bp-ledger-total">
        <span className="bp-ledger-total-label">{total.label}</span>
        <span className="bp-ledger-result">{total.value}</span>
      </div>
    </div>
  );
}
