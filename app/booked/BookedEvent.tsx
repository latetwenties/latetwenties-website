"use client";

import { useEffect } from "react";

import { track } from "@/lib/analytics";

// Fires book_call once per browser session, so a refresh of /booked doesn't
// count a second booking.
export function BookedEvent() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("lt_booked")) return;
      sessionStorage.setItem("lt_booked", "1");
    } catch {
      // Storage blocked: still count it once for this page view.
    }
    track("book_call", { source: "tidycal" });
  }, []);
  return null;
}
