"use client";

import { useEffect } from "react";

type TabTitleNudgeProps = {
  away?: string;
  delayMs?: number;
};

export function TabTitleNudge({
  away = "Still need a hand?",
  delayMs = 3000,
}: TabTitleNudgeProps) {
  useEffect(() => {
    const original = document.title;
    let pending: ReturnType<typeof setTimeout> | undefined;

    const onChange = () => {
      if (document.visibilityState === "hidden") {
        pending = setTimeout(() => {
          document.title = away;
        }, delayMs);
      } else {
        if (pending) clearTimeout(pending);
        document.title = original;
      }
    };

    document.addEventListener("visibilitychange", onChange);
    return () => {
      if (pending) clearTimeout(pending);
      document.title = original;
      document.removeEventListener("visibilitychange", onChange);
    };
  }, [away, delayMs]);

  return null;
}
