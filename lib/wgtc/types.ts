// Shapes shared by the /api/wgtc routes and the page.
import type { Business } from "./dataforseo";

export type { Business };

export type Centre = { name: string; lat: number; lng: number; country: string; km: number };

export type FindResult = { centre: Centre; candidates: Business[] };

export type SearchResult = {
  query: string;
  ads: { name: string; domain?: string; line: string }[];
  youAdvertising: boolean;
  pack: Business[];
  youInPack: number | null;
  aio: { text: string; namesYou: boolean } | null;
  organicRank: number | null;
};

export type GridResult = {
  // `base` marks the extra cell searched from the business's own address.
  cells: { name: string; rank: number | null; shown: number; base?: boolean }[];
  // Kept for the lead email only; the page never names other businesses in
  // a comparison.
  leaders: { name: string; top3: number; rating?: number; reviews?: number }[];
  // Average Google review count of the top three at the centre point, the
  // visitor excluded. Null when it couldn't be read.
  topReviews: number | null;
};

export type Engine = "chatgpt" | "aimode" | "perplexity" | "claude";

export type AiAnswer = {
  engine: Engine;
  label: string;
  answer: string; // plain text, trimmed for the phone
  youNamed: boolean;
};

export type AiResult = {
  question: string;
  // One per assistant that answered; a failed assistant is left out.
  answers: AiAnswer[];
};

export type WorthResult = {
  // Average monthly searches across the phrases below, or null when Google
  // counts too few to put a number on.
  searches: number | null;
  phrases: { keyword: string; from: string; volume: number }[];
  // People a month who tap one of the top three on the map, from published
  // click-share benchmarks (see lib/wgtc/worth.ts).
  topThreeLow: number | null;
  topThreeHigh: number | null;
};

export type SiteResult = {
  url: string;
  loadSeconds: number; // Largest Contentful Paint on a mid-range phone, lab test
  screenshot: string | null; // data: URI of the page as the phone sees it
};
