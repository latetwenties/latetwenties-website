"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

import { Reveal } from "../Reveal";

type Hotspot = {
  id: number;
  top: number;
  side: "left" | "right";
  title: string;
  body: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    top: 0.045,
    side: "right",
    title: "A quote form above the fold",
    body: "Name, phone, suburb, what you need. And a promise in plain words: Ronnie will call you back personally to book a site visit. The form matches how RBM actually works.",
  },
  {
    id: 2,
    top: 0.17,
    side: "left",
    title: "Plain-spoken local intro",
    body: "Who RBM is, where they're based, and the towns they serve, named in plain language. The same content gives Google, ChatGPT and Gemini the geographic context to recommend RBM when someone asks.",
  },
  {
    id: 3,
    top: 0.32,
    side: "right",
    title: "A page for every service",
    body: "Six services from house slabs to excavation, each with a dedicated page findable in its own right. Content depth signals expertise to Google and to customers comparing quotes.",
  },
  {
    id: 4,
    top: 0.46,
    side: "left",
    title: "Real pours, real sites",
    body: "Project photography from actual RBM jobs, named by town. Locals recognise the sites, and Google sees original imagery instead of a stock gallery.",
  },
  {
    id: 5,
    top: 0.72,
    side: "right",
    title: "Answers in the customer's language",
    body: "The questions people actually ask before booking a concreter, answered straight. Free quotes, price per square metre, weather delays, licensing. Built from research, not guesswork.",
  },
];

function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="cs-bw">
      <div className="cs-bw-bar">
        <span className="cs-bw-dot" />
        <span className="cs-bw-dot" />
        <span className="cs-bw-dot" />
        <div className="cs-bw-url">{url}</div>
      </div>
      <div className="cs-bw-body">
        {children}
        <div className="cs-bw-swipe-hint" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M12 5v14M6 11l6-6 6 6M6 13l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type Dims = { imgH: number; frameH: number };
const ZERO_DIMS: Dims = { imgH: 0, frameH: 0 };

function translateY(dims: Dims, progress: number) {
  const max = dims.imgH - dims.frameH;
  if (max <= 0) return 0;
  return -max * progress;
}

export function HomeShowcase() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [dims, setDims] = useState<Dims>(ZERO_DIMS);

  useEffect(() => {
    const measure = () => {
      const img = imgRef.current;
      if (img && img.parentElement) {
        setDims({
          imgH: img.clientHeight,
          frameH: img.parentElement.clientHeight,
        });
      }
    };
    measure();
    const img = imgRef.current;
    img?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      img?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = track.offsetHeight - vh;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      setProgress(scrolled / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const imgY = translateY(dims, progress);

  return (
    <section className="cs-compare">
      <div className="wrap cs-compare-intro">
        <Reveal>
          <h2 className="cs-ba-h2">
            The site, <em>built from nothing.</em>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="cs-ba-lede">
            No before screenshot this time. There wasn&rsquo;t a website to
            screenshot. This is the home page that went live, top to bottom.
            Hover the markers to see where each strategic decision lives.
          </p>
        </Reveal>
      </div>

      <div className="cs-compare-track cs-compare-track-single" ref={trackRef}>
        <div className="cs-compare-sticky">
          <div className="cs-compare-grid cs-compare-grid-single">
            <div className="cs-compare-col">
              <div className="cs-compare-tag cs-compare-tag-after">
                Live · day one
              </div>
              <BrowserFrame url="rbmconcrete.com.au">
                <Image
                  ref={imgRef}
                  className="cs-compare-img"
                  src="/images/case-studies/rbm/website-home.png"
                  alt="RBM Concrete & Excavation homepage. Dark editorial hero reading Concrete and excavation you can stand on, with a quote form above the fold, service pages, real project photography and answer-first FAQs."
                  width={2746}
                  height={14154}
                  sizes="(max-width: 920px) 100vw, 700px"
                  style={{ transform: `translateY(${imgY}px)` }}
                />
                <div className="cs-compare-spots">
                  {dims.imgH > 0 &&
                    dims.frameH > 0 &&
                    HOTSPOTS.map((h) => {
                      const targetY = h.top * dims.imgH;
                      const visibleY = targetY + imgY;
                      const visiblePct = (visibleY / dims.frameH) * 100;
                      const inFrame = visiblePct >= -10 && visiblePct <= 110;
                      return (
                        <button
                          key={h.id}
                          type="button"
                          className={`cs-spot cs-spot-${h.side} ${
                            activeHotspot === h.id ? "is-active" : ""
                          } ${inFrame ? "is-in" : ""}`}
                          style={{ top: `${visiblePct}%` }}
                          onMouseEnter={() => setActiveHotspot(h.id)}
                          onMouseLeave={() => setActiveHotspot(null)}
                          onFocus={() => setActiveHotspot(h.id)}
                          onBlur={() => setActiveHotspot(null)}
                          onClick={() =>
                            setActiveHotspot(
                              activeHotspot === h.id ? null : h.id,
                            )
                          }
                          aria-label={`Strategy point ${h.id}: ${h.title}`}
                        >
                          <span className="cs-spot-dot">{h.id}</span>
                          <span className="cs-spot-card">
                            <span className="cs-spot-title">{h.title}</span>
                            <span className="cs-spot-body">{h.body}</span>
                          </span>
                        </button>
                      );
                    })}
                </div>
              </BrowserFrame>
            </div>
          </div>

          <div
            className="cs-compare-rail cs-compare-rail-single"
            aria-hidden="true"
          >
            <div
              className="cs-compare-rail-fill"
              style={{ height: `${progress * 100}%` }}
            />
            {HOTSPOTS.map((h) => (
              <div
                key={h.id}
                className="cs-compare-rail-tick"
                style={{ top: `${h.top * 100}%` }}
              />
            ))}
          </div>

          <div className="cs-compare-hint">Scroll to explore</div>
        </div>
      </div>

      <div className="wrap cs-compare-notes">
        <p className="cs-compare-notes-eyebrow">What we focused on</p>
        <ul className="cs-compare-notes-list">
          <li>
            <strong>Research before design</strong>: how East Gippsland
            homeowners and builders actually choose a concreter, in their
            own words
          </li>
          <li>
            <strong>Dedicated service and location pages</strong>, each
            findable in its own right
          </li>
          <li>
            <strong>Heavy SEO and GEO foundations</strong>: schema,
            structured data, internal linking, AI-search markup
          </li>
          <li>
            <strong>Citations built outside Google</strong>: name, address
            and phone listed consistently across the directories that matter
          </li>
          <li>
            <strong>A quote path that matches how RBM works</strong>: site
            visit first, firm number after, Ronnie on the phone
          </li>
        </ul>
      </div>
    </section>
  );
}
