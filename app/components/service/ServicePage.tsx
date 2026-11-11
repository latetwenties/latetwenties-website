import type { ReactNode } from "react";

import { breadcrumbList, faqPage, service } from "@/lib/schema";
import { FREE_SEARCH_HREF } from "@/lib/site";
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
  itemsTitle: ReactNode;
  items: ServiceItem[];
  proofTitle: ReactNode;
  proof: string[]; // case study hrefs, pulled from the shared /work tiles
  faqs: Faq[];
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
            <div className="h-hero-ctas">
              <Button href={FREE_SEARCH_HREF} size="lg">
                Run the free search
              </Button>
              <GhostLink href="/what-we-do" tone="strong" arrow={false}>
                How it works
              </GhostLink>
            </div>
          </div>
        </section>

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
            <CaseTileGrid only={c.proof} />
          </div>
        </section>

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
