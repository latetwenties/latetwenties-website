"use client";

import { useEffect, useState } from "react";

// The month we're "currently booking". Shows the current month, but once we're
// in the last 7 days it rolls to the next month, so we never say "booking July"
// on the last day of July. Computed on the client so it stays current on a
// statically generated page (no redeploy needed).
function bookingMonth(now: Date): string {
  const d = new Date(now);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  if (d.getDate() > lastDay - 7) {
    d.setMonth(d.getMonth() + 1);
  }
  return d.toLocaleString("en-NZ", { month: "long" });
}

export function BookingMonth() {
  const [month, setMonth] = useState(() => bookingMonth(new Date()));

  // Correct the build-time value to the visitor's actual date after mount.
  useEffect(() => {
    setMonth(bookingMonth(new Date()));
  }, []);

  return <span suppressHydrationWarning>{month}</span>;
}
