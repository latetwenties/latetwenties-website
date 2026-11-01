// Shapes shared by the /api/wgtc routes and the page.
import type { Business } from "./dataforseo";

export type { Business };

export type Centre = { name: string; lat: number; lng: number; country: string };

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
  cells: { name: string; rank: number | null; shown: number }[];
  leaders: { name: string; top3: number; rating?: number; reviews?: number }[];
};

export type AiResult = {
  question: string;
  answer: string;
  named: string[];
  youNamed: boolean;
};
