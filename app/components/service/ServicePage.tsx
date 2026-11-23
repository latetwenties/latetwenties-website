import Link from "next/link";
import type { ReactNode } from "react";

import { getLivePosts } from "@/lib/posts";

import { breadcrumbList, faqPage, service } from "@/lib/schema";
import { CONTACT_HREF } from "@/lib/site";
import { Button, GhostLink } from "../Button";
import { CaseTileGrid } from "../CaseTileGrid";
import { Eyebrow } from "../Eyebrow";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { JsonLd } from "../JsonLd";
import { HomeCTA } from "../home-v2/HomeCTA";
import { type Faq, HomeFaq } from "../home-v2/HomeFaq";
import { Reveal } from "../Reveal";

export type ServiceItem = { title: string; body: string };

export type ServiceContent = {
  path: string;
  eyebrow: string;
  name: string; // schema + breadcrumb name
  h1: ReactNode;
  // Answer-first: stands alone as a complete answer for AI retrieval.
  lede: string;
  // Visible freshness line under the lede, e.g. "Updated November 2026".
  // Only set it when the page has actually been revised.
  updated?: string;
  // Optional plain-prose section between the hero and the list, for pages
  // that need body copy with in-line links (not only the list and proof row).
  body?: { title: ReactNode; paras: ReactNode[] };
  itemsTitle: ReactNode;
  items: ServiceItem[];
  proofTitle: ReactNode;
  proof: string[]; // case study hrefs, pulled from the shared /work tiles
  // Optional sentence or two above the tiles naming the result in words.
  proofNote?: ReactNode;
  faqs: Faq[];
  // Blog slugs to feature. Only posts already live are shown, so a queued
  // post never links to a 404.
  articles?: string[];
};

// One template for every service page: answer-first hero, what the owner
// gets (obstacle-first), proof from the shared case-study tiles, FAQ, close.
export function ServicePage({ c }: { c: ServiceContent }) {
  return (
    <>
      <Header current="what-we-do" />
      <main>
        <section className="v2-hero is-short">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>{c.eyebrow}</Eyebrow>
            </div>
            <h1>{c.h1}</h1>
            <p className="v2-sub svc-lede">{c.lede}</p>
            {c.updated ? <p className="svc-updated">{c.updated}</p> : null}
            <div className="h-hero-ctas">
              <Button href={CONTACT_HREF} size="lg">
                Get in touch
              </Button>
              <GhostLink href="/what-we-do" tone="strong" arrow={false}>
                What we do
              </GhostLink>
            </div>
          </div>
        </section>

        {c.body ? (
          <section className="svc">
            <div className="wrap svc-grid">
              <Reveal as="div" className="svc-head">
                <h2>{c.body.title}</h2>
              </Reveal>
              <div className="svc-body">
                {c.body.paras.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="svc">
          <div className="wrap svc-grid">
            <Reveal as="div" className="svc-head">
              <h2>{c.itemsTitle}</h2>
            </Reveal>
            <ol className="svc-list">
              {c.items.map((it, i) => (
                <li key={it.title}>
                  <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="svc-proof">
          <div className="wrap">
            <div className="svc-proof-head">
              <h2>{c.proofTitle}</h2>
              <GhostLink href="/work" tone="strong">
                All case studies
              </GhostLink>
            </div>
            {c.proofNote ? <p className="svc-proof-note">{c.proofNote}</p> : null}
            <CaseTileGrid only={c.proof} />
          </div>
        </section>

        {(() => {
          const live = getLivePosts();
          const posts = (c.articles ?? [])
            .map((slug) => live.find((p) => p.slug === slug))
            .filter((p): p is NonNullable<typeof p> => !!p);
          if (!posts.length) return null;
          return (
            <section className="svc-reading">
              <div className="wrap">
                <div className="svc-proof-head">
                  <h2>
                    Further reading, <em>from our Insights.</em>
                  </h2>
                  <GhostLink href="/insights" tone="strong">
                    All insights
                  </GhostLink>
                </div>
                <ul className="ins-list">
                  {posts.map((post) => (
                    <li key={post.slug} className="ins-row">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="ins-title">{post.title}</h3>
                        <span className="ins-meta">{post.readTime}</span>
                        <p className="ins-sum">{post.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })()}

        <HomeFaq faqs={c.faqs} />
        <HomeCTA />
      </main>
      <Footer />
      <JsonLd
        schema={service({ name: c.name, description: c.lede, url: c.path })}
      />
      <JsonLd schema={faqPage(c.faqs)} />
      <JsonLd
        schema={breadcrumbList([
          { name: "Home", href: "/" },
          { name: "What we do", href: "/what-we-do" },
          { name: c.name, href: c.path },
        ])}
      />
    </>
  );
}
