"use client";

import { useEffect, useRef, useState } from "react";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

function useCountAnim(from: number, to: number, active: boolean, ms = 1600) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, from, to, ms]);
  return v;
}

const SUBSTATS = [
  {
    value: "7 of the 12",
    label: "Enquiries that came from the ads",
    note: "A small search campaign, switched on once the site was ready. Each enquiry came in at about a third of the cost we'd allowed for.",
  },
  {
    value: "#1 on the map",
    label: "“Concreter near me”, around Sale",
    note: "Search it from anywhere in the Sale area and TMT comes up first. We check from 49 spots across the district every month, and in late June every one of them showed TMT on top.",
  },
  {
    value: "+68%",
    label: "Site visits",
    note: "203 visits in June against 121 in May, with over half staying and engaging.",
  },
];

export function TmtResults() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const fire = () => {
      if (!fired) {
        fired = true;
        setActive(true);
      }
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fire();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    const fb = setTimeout(fire, 800);
    return () => {
      io.disconnect();
      clearTimeout(fb);
    };
  }, []);

  const enquiries = useCountAnim(4, 12, active);

  return (
    <section className="cs-act cs-act-3" ref={ref}>
      <div className="wrap">
        <div className="cs-act-grid">
          <div className="cs-act-left">
            <Reveal>
              <Eyebrow num="03">The result</Eyebrow>
              <h2 className="cs-act-h2">
                One month in,
                <br />
                the numbers
                <br />
                <em>did the talking.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal as="div" className="cs-act-body" delay={80}>
            <p>
              June 2026 was the first full month with all of it running
              together: the new site, the local layer, the ads. TMT took 12
              enquiries for the month, up from 4 in May. Ten came through the
              quote forms, one from a phone tap on the site, and one call
              straight off an ad.
            </p>
          </Reveal>
        </div>

        <Reveal className={`cs-rank ${active ? "is-active" : ""}`} delay={120}>
          <div className="cs-rank-stats">
            <div className="cs-rank-label">
              Enquiries · May → June 2026
            </div>
            <div className="cs-rank-value">
              <span className="cs-rank-old">4</span>
              <span className="cs-rank-arrow">→</span>
              <span className="cs-rank-new">{enquiries}</span>
            </div>
            <div className="cs-rank-meta">
              <em>Three times May&rsquo;s enquiries</em> in the first full
              month with the site, the map and the ads all working. Counted
              from GA4 and Google Ads, June 2026.
            </div>
          </div>

          <div className="cs-rank-substats">
            {SUBSTATS.map((s) => (
              <div className="cs-rank-substat" key={s.label}>
                <div className="cs-rank-substat-value">{s.value}</div>
                <div className="cs-rank-substat-label">{s.label}</div>
                <div className="cs-rank-substat-note">{s.note}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="cs-proof" delay={120}>
          <div className="cs-proof-head">
            <Eyebrow num="04">In their words</Eyebrow>
            <h3 className="cs-proof-h3">
              &ldquo;Their communication has been excellent, they&rsquo;re
              responsive, transparent, and <em>genuinely invested in helping
              us grow.</em>{" "}The quality of their work has exceeded our
              expectations, and we&rsquo;ve already seen positive
              improvements to our online presence.&rdquo;
            </h3>
            <p className="cs-proof-sub">
              Nick MacDonald, TMT Concreting &amp; Maintenance
            </p>
          </div>
        </Reveal>

        <Reveal as="div" className="cs-summary" delay={140}>
          <div className="cs-summary-tag">In summary</div>
          <ul className="cs-summary-list">
            <li>
              <strong>Website:</strong> from a template site to a
              service-led home with a page for every job type and town.
            </li>
            <li>
              <strong>Local map:</strong>{" "}search &ldquo;concreter near
              me&rdquo; from anywhere around Sale and TMT comes up first.
            </li>
            <li>
              <strong>Google Ads:</strong> 7 of the 12 enquiries came
              straight off the ads, each at about a third of the cost we
              allowed for.
            </li>
            <li>
              <strong>Enquiries:</strong> 4 in May, 12 in June. Tracked end
              to end, so every one of them is counted, not guessed.
            </li>
            <li>
              <strong>Up next:</strong> hold the map, keep publishing, keep
              the ads inside their numbers.
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
