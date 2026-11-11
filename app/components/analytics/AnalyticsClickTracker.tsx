"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { track } from "@/lib/analytics";

// One document-level listener for every tel:, mailto: and booking link on
// the site, so no individual component needs wiring.
export function AnalyticsClickTracker() {
  const pathname = usePathname();
  const pathRef = useRef(pathname);
  useEffect(() => {
    pathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    function handler(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href) return;
      const location =
        anchor.getAttribute("data-cta-location") || pathRef.current || "unknown";

      if (href.startsWith("tel:")) track("phone_click", { cta_location: location });
      else if (href.startsWith("mailto:")) track("email_click", { cta_location: location });
      else if (href.includes("tidycal.com/")) track("booking_click", { cta_location: location });
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
