"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

import { GhostLink } from "../Button";

// Ported from the Milligram remake's GSAP section: the title pins, each
// channel pins under it in turn and gets pushed up by the next one, and each
// channel's word, line and tags animate in as it arrives.
export type PinnedItem = {
  word: string;
  label?: string;
  body: string;
  tags: string[];
};

export const CHANNELS: PinnedItem[] = [
  {
    word: "Google",
    body: "We build and look after your Google Business Profile and listings, so you show up when someone nearby searches your trade.",
    tags: [
      "Google Business Profile",
      "Map pack",
      "Local SEO",
      "Service pages",
      "Area pages",
      "Listings",
      "Citations",
    ],
  },
  {
    word: "AI search",
    body: "More people now ask ChatGPT who to call. We give it the facts it needs to name you: clear pages, matching listings and reviews in the right places.",
    tags: [
      "ChatGPT",
      "Google AI Overviews",
      "Perplexity",
      "Bing Places",
      "Clear answers",
      "Schema",
      "Review sites",
    ],
  },
  {
    word: "Websites",
    body: "A website should earn calls, not just look nice. Every page we build has a job, and it does it.",
    tags: [
      "Website build",
      "Rebuilds",
      "Mobile first",
      "Page speed",
      "Quote forms",
      "Call tracking",
      "Conversion tracking",
      "Schema",
      "Search Console",
      "Hosting",
    ],
  },
  {
    word: "Reviews",
    body: "Fresh reviews tell people you're the real deal. We help you keep them coming, after every good job.",
    tags: [
      "Review requests",
      "Review replies",
      "Google posts",
      "Project photos",
      "A one-page monthly update",
    ],
  },
  {
    word: "Ads",
    body: "Ads on Google and Meta put you in front of people searching right now. Calls this week, not next quarter. On when you want it, off when you don't.",
    tags: [
      "Google Ads",
      "Meta ads",
      "Keyword research",
      "Negative keywords",
      "Landing pages",
      "Retargeting",
      "Budgets",
    ],
  },
];

type Props = {
  id?: string;
  title?: string;
  items?: PinnedItem[];
  foot?: ReactNode;
};

const DEFAULT_FOOT = (
  <>
    <GhostLink href="/what-we-do" tone="strong">
      See how it works
    </GhostLink>
    <span className="mono-note">No lock-ins · Cancel anytime</span>
  </>
);

export function GetFoundWith({
  id = "get-found",
  title = "Get found with",
  items = CHANNELS,
  foot = DEFAULT_FOOT,
}: Props = {}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const styles = window.getComputedStyle(section);
      const TOP = parseFloat(styles.getPropertyValue("--pin-top")) || 200;
      const TAIL = parseFloat(styles.getPropertyValue("--tail-scroll")) || 160;
      const title = section.querySelector<HTMLElement>(".gfw-title");
      const blocks = Array.from(
        section.querySelectorAll<HTMLElement>(".gfw-block"),
      );
      if (!title || !blocks.length) return;

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.from(title, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 90%", once: true },
        });

        blocks.forEach((block) => {
          const inner = block.querySelector(".gfw-inner");
          if (!inner) return;
          const h = inner.querySelector(".gfw-word");
          const p = inner.querySelector(".gfw-body");
          const tags = Array.from(inner.querySelectorAll(".gfw-tag"));

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
          if (h) {
            tl.from(h, {
              yPercent: 30,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
            });
          }
          if (p) {
            tl.from(
              p,
              { y: 24, opacity: 0, duration: 0.72, ease: "power2.out" },
              "-=0.52",
            );
          }
          if (tags.length) {
            tl.from(
              tags,
              {
                y: 14,
                opacity: 0,
                duration: 0.45,
                stagger: 0.035,
                ease: "power2.out",
              },
              "-=0.42",
            );
          }
        });
      }

      const mm = gsap.matchMedia();
      mm.add("(min-width: 921px)", () => {
        ScrollTrigger.create({
          trigger: section,
          start: `top top+=${TOP}`,
          end: `bottom+=${TAIL} bottom`,
          pin: title,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        blocks.forEach((block, i) => {
          const inner = block.querySelector<HTMLElement>(".gfw-inner");
          const next = blocks[i + 1];
          const isLast = i === blocks.length - 1;
          if (!inner) return;

          ScrollTrigger.create({
            trigger: block,
            start: `top top+=${TOP}`,
            endTrigger: next || section,
            end: () => {
              if (!next) return `bottom+=${TAIL} bottom`;
              const padBottom =
                parseFloat(window.getComputedStyle(block).paddingBottom) || 0;
              return `top top+=${TOP + inner.offsetHeight + padBottom}`;
            },
            pin: inner,
            pinSpacing: isLast,
            invalidateOnRefresh: true,
          });
        });
      });
    }, section);

    // Fonts and images above can shift layout after mount; re-measure.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section className="gfw" id={id}>
      <div className="wrap">
        <div className="gfw-grid" ref={sectionRef}>
          <div>
            <h2 className="gfw-title">{title}</h2>
          </div>
          <div className="gfw-services">
            {items.map((c) => (
              <article key={c.word} className="gfw-block">
                <div className="gfw-inner">
                  <h3 className="gfw-word">{c.word}</h3>
                  {c.label && <p className="gfw-label">{c.label}</p>}
                  <p className="gfw-body">{c.body}</p>
                  <ul className="gfw-tags">
                    {c.tags.map((t) => (
                      <li key={t} className="gfw-tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="gfw-foot">{foot}</div>
      </div>
    </section>
  );
}
