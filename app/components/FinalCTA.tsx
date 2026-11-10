import type { ReactNode } from "react";

import { HomeCTA } from "./home-v2/HomeCTA";

// Legacy props are accepted so older pages keep compiling, but every page now
// closes on the same thing: the free search, then 15 minutes with Brendan.
type FinalCTAProps = {
  num?: string;
  label?: string;
  heading?: ReactNode;
  body?: ReactNode;
  cta?: string;
  note?: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FinalCTA(_props: FinalCTAProps = {}) {
  return <HomeCTA />;
}
