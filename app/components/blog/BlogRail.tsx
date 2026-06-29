"use client";

import { useEffect, useRef, useState } from "react";

export type TocItem = { id: string; label: string };
export type KeyStat = { label: string; value: string; caption: string };

type BlogRailProps = {
  toc: TocItem[];
  keyStat?: KeyStat;
  ctaLine?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

// Client-side rail: auto-built table of contents with scroll-spy, a
// reading-progress fill, an optional per-article key-number callout, and a
// compact CTA. Renders a fixed top progress bar as a sibling so the feature
// survives below 920px, where the rail itself is hidden.
export function BlogRail({
  toc,
  keyStat,
  ctaLine = "Not sure where you stand?",
  ctaHref = "/contact",
  ctaLabel = "Free presence check",
}: BlogRailProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  const railFillRef = useRef<HTMLDivElement>(null);
  const fixedFillRef = useRef<HTMLDivElement>(null);

  // Reading progress, measured over the reading column.
  useEffect(() => {
    const region = document.querySelector<HTMLElement>("[data-bp-region]");
    if (!region) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = region.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const pct =
        total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      const width = `${pct}%`;
      if (railFillRef.current) railFillRef.current.style.width = width;
      if (fixedFillRef.current) fixedFillRef.current.style.width = width;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll-spy over the section headings.
  useEffect(() => {
    if (!toc.length) return;
    const headings = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!headings.length) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const firstVisible = toc.find((t) => visible.has(t.id));
        if (firstVisible) setActiveId(firstVisible.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      <aside className="bp-rail">
        <div className="bp-rail-inner">
          {toc.length > 0 && (
            <nav aria-label="On this page">
              <p className="bp-toc-eyebrow">In this article</p>
              <ul className="bp-toc-list">
                {toc.map((t, i) => (
                  <li
                    key={t.id}
                    className={`bp-toc-item${
                      activeId === t.id ? " is-active" : ""
                    }`}
                  >
                    <a className="bp-toc-link" href={`#${t.id}`}>
                      <span className="bp-toc-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="bp-toc-label">{t.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div>
            <div className="bp-progress-track" aria-hidden="true">
              <div className="bp-progress-fill" ref={railFillRef} />
            </div>
            <p className="bp-progress-cap">Reading progress</p>
          </div>

          {keyStat && (
            <div className="bp-stat">
              <p className="bp-stat-label">{keyStat.label}</p>
              <p className="bp-stat-value">{keyStat.value}</p>
              <p className="bp-stat-caption">{keyStat.caption}</p>
            </div>
          )}

          <div className="bp-cta-card">
            <p>{ctaLine}</p>
            <a className="bp-cta-link" href={ctaHref}>
              {ctaLabel}{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile fixed reading-progress bar (rail is hidden below 920px). */}
      <div className="bp-progress-fixed" ref={fixedFillRef} aria-hidden="true" />
    </>
  );
}
