"use client";

import { ReactNode, useState } from "react";

export type StageItem = { title: string; body: string };

export type Stage = {
  id: string;
  num: string;
  name: string;
  when: string;
  headline: ReactNode;
  summary: string;
  lede: string;
  meta: ReactNode;
  items: StageItem[];
  extra?: ReactNode;
};

// The three stages sit side by side as one sequence, each with a short
// overview. "See what's included" opens the full detail for one stage at a
// time. Every panel stays in the HTML so the detail is still crawlable.
export function SystemStages({ stages }: { stages: Stage[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="sys-grid">
      {stages.map((s) => {
        const isOpen = open === s.id;
        const panelId = `sys-panel-${s.id}`;
        return [
          <article
            key={`${s.id}-card`}
            className={`sys-card${isOpen ? " is-open" : ""}`}
          >
            <div className="sys-card-num">
              <span className="num-i">{s.num}</span> / {s.name}
            </div>
            <div className="sys-card-when">{s.when}</div>
            <h3 className="sys-card-h">{s.headline}</h3>
            <p className="sys-card-p">{s.summary}</p>
            <button
              type="button"
              className="sys-toggle"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : s.id)}
            >
              {isOpen ? "Close" : "See what’s included"}
              <span className="sys-toggle-icon" aria-hidden="true" />
            </button>
          </article>,
          <div
            key={`${s.id}-panel`}
            id={panelId}
            className="sys-panel"
            hidden={!isOpen}
          >
            <div className="sys-panel-grid">
              <div className="sys-panel-left">
                <div className="eyebrow">{s.name}</div>
                <p className="sys-panel-lede">{s.lede}</p>
                <div className="prod-price-meta">{s.meta}</div>
              </div>
              <div className="sys-panel-right">
                <div className="eyebrow">What&rsquo;s included</div>
                <ul className="prod-items">
                  {s.items.map((item) => (
                    <li key={item.title} className="prod-item">
                      <h4 className="prod-item-h">{item.title}</h4>
                      <p className="prod-item-p">{item.body}</p>
                    </li>
                  ))}
                </ul>
                {s.extra}
              </div>
            </div>
          </div>,
        ];
      })}
    </div>
  );
}
