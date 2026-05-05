"use client";

import { QUERIES, useRotatingQueries } from "@/lib/typewriter";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function SearchProof() {
  const { text, current } = useRotatingQueries(QUERIES);
  const showResults = text === current.q;
  const isAI = current.kind === "ai";

  return (
    <section className="searchproof" id="how">
      <div className="wrap">
        <div className="sp-head">
          <Reveal>
            <Eyebrow num="01">What it looks like</Eyebrow>
            <h2>
              That&rsquo;s what they type.
              <br />
              <em>Here&rsquo;s what they see.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="sp-lede">
              When someone searches, three or four results decide it. The work
              we do gets your business into that handful, and keeps it there.
            </p>
          </Reveal>
        </div>

        <Reveal className="sp-stage" delay={180}>
          <div className={`fake-search ${isAI ? "is-ai" : "is-local"}`}>
            {isAI ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            )}
            <span className="typed">{text}</span>
            <span className="caret" />
            <span className="domain">{isAI ? "ai answer" : "google.com"}</span>
          </div>

          <div
            className="results"
            style={{
              opacity: showResults ? 1 : 0.4,
              transition: "opacity 320ms",
            }}
          >
            {isAI ? (
              <div className="ai-answer">
                <div className="ai-answer-head">
                  <span className="ai-pill">AI answer</span>
                  <span className="ai-meta">
                    Drawn from reviews, listings and site content
                  </span>
                </div>
                <p className="ai-answer-body">
                  Based on local reviews and site quality,{" "}
                  <strong>your business</strong> stands out. Strong recent
                  reviews, fast site, and an active Google profile.
                </p>
                <div className="ai-citations">
                  <span className="cite">[1] yourbusiness.co.nz</span>
                  <span className="cite">[2] google maps</span>
                  <span className="cite">[3] localfix.nz</span>
                </div>
              </div>
            ) : (
              <>
                <div className="result you">
                  <div className="rank">#1</div>
                  <div className="biz">
                    Your business
                    <small>The one we just got found.</small>
                  </div>
                  <div className="stars">★ 5.0 · 47 reviews</div>
                </div>
                <div className="result">
                  <div className="rank">#2</div>
                  <div className="biz">
                    Competitor
                    <small>Been at it longer. Slower site.</small>
                  </div>
                  <div className="stars">★ 4.6 · 22</div>
                </div>
                <div className="result" style={{ opacity: 0.55 }}>
                  <div className="rank">#3</div>
                  <div className="biz">
                    Another one
                    <small>No website. Profile last updated 2022.</small>
                  </div>
                  <div className="stars">★ 4.2 · 8</div>
                </div>
              </>
            )}
          </div>
        </Reveal>

        <div className="sp-foot">
          <Reveal>
            <span className="sp-meta">
              Both Google and AI search · we cover both
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
