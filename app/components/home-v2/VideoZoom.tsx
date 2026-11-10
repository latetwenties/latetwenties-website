"use client";

import { useEffect, useRef } from "react";

import { FREE_SEARCH_HREF } from "@/lib/site";
import { GhostLink } from "../Button";

const NAV = 76;
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// The stop-motion video starts oversized with only its top-left corner
// peeking under the hero, then settles into a framed 16:9 box as you scroll.
// Geometry is written straight to the DOM each frame, no React state.
export function VideoZoom() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const capRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const box = boxRef.current;
    const cap = capRef.current;
    const video = videoRef.current;
    if (!section || !box || !cap || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;
      const narrow = vw < 920;
      const rect = section.getBoundingClientRect();
      const p = reduced ? 1 : clamp((vh - rect.top) / (2.1 * vh - NAV));
      const vp = reduced ? 1 : easeInOutCubic(clamp(p / 0.85));

      const sh = vh - NAV;
      const pad = narrow ? 24 : 40;
      const cw = Math.min(vw, 1320) - pad * 2;
      const Wf = Math.max(280, Math.min(cw, ((sh - 180) * 16) / 9));
      const Hf = (Wf * 9) / 16;
      const Lf = (vw - Wf) / 2;
      const Tf = Math.max(24, (sh - Hf - 110) / 2);
      const W0 = vw * 1.5;
      const L0 = vw * (narrow ? 0.18 : 0.3);
      const lerp = (a: number, b: number) => a + (b - a) * vp;

      const w = lerp(W0, Wf);
      box.style.left = `${lerp(L0, Lf).toFixed(1)}px`;
      box.style.top = `${lerp(0, Tf).toFixed(1)}px`;
      box.style.width = `${w.toFixed(1)}px`;
      box.style.height = `${((w * 9) / 16).toFixed(1)}px`;
      box.style.borderRadius = `${(vp * 6).toFixed(1)}px`;

      const on = reduced ? 1 : clamp((p - 0.82) / 0.15);
      cap.style.left = `${Lf.toFixed(1)}px`;
      cap.style.top = `${(Tf + Hf + 28).toFixed(1)}px`;
      cap.style.width = `${Wf.toFixed(1)}px`;
      cap.style.opacity = on.toFixed(3);
      cap.style.transform = `translateY(${(16 * (1 - on)).toFixed(1)}px)`;
      cap.style.pointerEvents = on > 0.5 ? "auto" : "none";

      // Load only once the section is near, play only while it's in view.
      const near = rect.top < vh * 1.5 && rect.bottom > -vh * 0.5;
      if (near && video.preload !== "auto") {
        video.preload = "auto";
        video.load();
      }
      const visible = rect.top < vh && rect.bottom > 0 && (reduced || p > 0.25);
      if (visible && video.paused) video.play().catch(() => {});
      else if (!visible && !video.paused) video.pause();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="vz" ref={sectionRef} aria-label="Stop-motion: from referrals to a steady flow of enquiries">
      <div className="vz-pin">
        <div className="vz-box" ref={boxRef}>
          <video
            ref={videoRef}
            src="/video/lego-enquiries.mp4"
            poster="/video/lego-enquiries-poster.jpg"
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        </div>
        <div className="vz-cap" ref={capRef} style={{ opacity: 0 }}>
          <p>
            Turn unpredictable referral work into{" "}
            <em className="v2-em">a reliable flow of quality enquiries</em>
          </p>
          <GhostLink href={FREE_SEARCH_HREF} tone="strong">
            Run the free search
          </GhostLink>
        </div>
      </div>
    </section>
  );
}
