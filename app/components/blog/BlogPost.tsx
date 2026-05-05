import type { ReactNode } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { Footer } from "../Footer";
import { Header } from "../Header";

type BlogPostProps = {
  title: string;
  lede: string;
  readTime: string;
  children: ReactNode;
};

export function BlogPost({ title, lede, readTime, children }: BlogPostProps) {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <article>
          {/* Hero */}
          <header className="py-24 sm:py-32">
            <Container>
              <p className="text-xs uppercase tracking-[0.28em] opacity-55">
                Resources / {readTime}
              </p>
              <h1
                className="font-display mt-8 max-w-[22ch] tracking-tight"
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                  lineHeight: "1.04",
                }}
              >
                {title}
              </h1>
              <p className="mt-8 max-w-[60ch] text-base leading-[1.7] sm:text-lg">
                {lede}
              </p>
            </Container>
          </header>

          {/* Body */}
          <div className="pb-24 sm:pb-32">
            <Container>
              <div className="max-w-[64ch]">{children}</div>

              <div className="mt-20 max-w-[64ch] border-t border-ink/10 pt-10">
                <p className="text-sm">
                  <a
                    href="/resources"
                    className="underline underline-offset-4 hover:opacity-65 transition-opacity"
                  >
                    ← Back to resources
                  </a>
                </p>
              </div>
            </Container>
          </div>
        </article>

        {/* CTA */}
        <section className="border-t border-ink/10 py-24 sm:py-32">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="lg:col-span-7">
                <h2
                  className="font-display max-w-[22ch] tracking-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    lineHeight: "1.06",
                  }}
                >
                  Want me to take a look?
                </h2>
                <p className="mt-6 max-w-[52ch] text-base leading-[1.7] sm:text-lg">
                  30 minutes, no pitch. I’ll come prepared with a look at
                  where you sit and what’s costing you calls.
                </p>
              </div>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <Button href="/contact">Take a look</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Prose primitives. Use these inside <BlogPost> children to keep typography
// consistent across all migrated posts.

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-base leading-[1.75] sm:text-lg">{children}</p>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-display mt-16 tracking-tight"
      style={{ fontSize: "clamp(1.5rem, 2.75vw, 2rem)", lineHeight: "1.15" }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3
      className="font-display mt-10 tracking-tight"
      style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", lineHeight: "1.2" }}
    >
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-[1.75] sm:text-lg">
      {children}
    </ul>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium">{children}</strong>;
}

export function Pullquote({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-display mt-12 max-w-[28ch] tracking-tight"
      style={{ fontSize: "clamp(1.5rem, 2.75vw, 2rem)", lineHeight: "1.15" }}
    >
      {children}
    </p>
  );
}
