"use client";

import { useEffect, useRef, useState } from "react";

// Word for word from our Google reviews. Boaz is the one edited version,
// approved by the client.
export const REVIEWS = [
  {
    name: "Finn Glengarry",
    business: "Glenbuild",
    quote:
      "Brendan is exceptional to deal with. He really listens and understands our business needs.",
  },
  {
    name: "Reece Fortune",
    business: "Boaz Developments",
    quote:
      "We went from doing zero advertising to a complete, professional online presence: active social media, a fully optimised Google Business Profile, an Apple Maps listing, and a website that genuinely represents our business. Latetwenties delivered a draft so spot-on we didn’t need to change a single thing before going live.",
  },
  {
    name: "Rees Vinsen",
    business: "No Ordinary Company",
    quote:
      "Brendan is a master strategist and practitioner who brings excellent insight and calm confident stewardship to any project. I've had the pleasure of working with Brendan for a long while now across a multitude of jobs, and wouldn't hesitate to put any scope of work in front of him big or small.",
  },
  {
    name: "Karen Dunford",
    business: "KD Bookworks",
    quote:
      "Latetwenties solved all my marketing issues all at once which would have taken me hours of research to do.",
  },
  {
    name: "Nick MacDonald",
    business: "TMT Concreting",
    quote:
      "From the very beginning, they took the time to understand our business and provided clear, practical advice without all the usual marketing jargon.",
  },
  {
    name: "Kaila Britton",
    business: "MB Designs",
    quote:
      "I explained my workflow and what I needed, and he was able to turn that into the perfect website that suits my business exactly.",
  },
  {
    name: "Nicki Smith",
    business: "AA Solar",
    quote:
      "Outstanding service for six years. From search and analytics to lead tracking and web development, he delivered every time.",
  },
  {
    name: "Ness Johnson",
    business: "NJ Management",
    quote:
      "Brendan is exceptional at what he does: communicates clearly, listens carefully to who you are/what your need is and works fast to come up with a brilliant solution offering creative insights and really clever ways of moving forward together. Sometimes showing more enthusiasm for my business than I was!",
  },
  {
    name: "Nikki Flexman",
    business: "Sir John Kirwan Foundation",
    quote:
      "If you are lucky enough to get a chance for him to work with you and for you...go for it!",
  },
];

function Card({ r, hidden }: { r: (typeof REVIEWS)[number]; hidden?: boolean }) {
  return (
    <figure className="tm-card" aria-hidden={hidden || undefined}>
      <span className="tm-stars" role="img" aria-label="5 stars">
        ★★★★★
      </span>
      <blockquote>{r.quote}</blockquote>
      <figcaption>
        <span className="tm-name">{r.name}</span>
        <span className="tm-biz">{r.business}</span>
      </figcaption>
    </figure>
  );
}

// The one infinite motion on the site: a slow drift that pauses on hover.
export function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const paused = useRef(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setReduced(true), 0);
      return () => clearTimeout(id);
    }
    let last = performance.now();
    let offset = 0;
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const track = trackRef.current;
      if (track) {
        if (!paused.current) offset += dt * 0.035;
        const half = track.scrollWidth / 2;
        if (half > 0) track.style.transform = `translateX(${(-(offset % half)).toFixed(1)}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="tm" id="reviews">
      <div className="wrap tm-head">
        <h2>
          Don&rsquo;t just take it <em>from us.</em>
        </h2>
        <span className="mono-note">5.0 ★ on Google</span>
      </div>
      <div
        className={`tm-rail ${reduced ? "is-static" : ""}`.trim()}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="tm-track" ref={trackRef}>
          {REVIEWS.map((r) => (
            <Card key={r.name} r={r} />
          ))}
          {!reduced && REVIEWS.map((r) => <Card key={`${r.name}-2`} r={r} hidden />)}
        </div>
      </div>
    </section>
  );
}
