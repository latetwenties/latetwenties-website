// The "three moves" are rules over the live results, not generated text, so
// every line traces back to something the visitor was just shown. They never
// name another business: comparisons are against "the businesses Google shows
// first", not a competitor by name.
import type { AiResult, Business, GridResult, SearchResult, SiteResult } from "./types";

export type Move = { title: string; body: string };

const list = (names: string[]) =>
  names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;

export function moves(
  you: Business,
  area: string,
  job: string,
  search: SearchResult | null,
  grid: GridResult | null,
  ai: AiResult | null,
  site: SiteResult | null,
): Move[] {
  const out: Move[] = [];
  const centre = grid?.cells.find((c) => c.name === area) ?? null;

  if (!you.cid) {
    out.push({
      title: "Get your Google profile found",
      body: `We couldn't match a Google listing to you near ${area}. Without one you can't appear on the map at all, and the map is where most local calls start.`,
    });
  }

  if (you.cid && centre && (centre.rank === null || centre.rank > 3)) {
    const where = centre.rank ? `you came up #${centre.rank}` : "you weren't in the top results we could see";
    out.push({
      title: `Get onto the map in ${area}`,
      body: `Searched from ${area}, ${where}. The top three on the map get most of the taps, and everyone below them shares what's left.`,
    });
  }

  if (you.cid && grid?.topReviews && (you.reviews ?? 0) * 2 < grid.topReviews) {
    out.push({
      title: "Close the review gap, steadily",
      body: `You have ${you.reviews ?? 0} Google reviews. The businesses Google shows first here average ${grid.topReviews}. Reviews are one of the biggest things Google weighs for the map, and asking every finished job, every week, beats a one-off push.`,
    });
  }

  const missing = grid?.cells.filter((c) => c.rank === null || c.rank > 3).map((c) => c.name) ?? [];
  const winning = grid?.cells.filter((c) => c.rank !== null && c.rank <= 3).map((c) => c.name) ?? [];
  if (winning.length && missing.length) {
    out.push({
      title: "Win the suburbs next door",
      body: `You show in the top three from ${list(winning.slice(0, 3))}, but not from ${list(missing.slice(0, 3))}. Pages and photos that name those suburbs help Google connect you to them.`,
    });
  }

  if (ai?.answers.length) {
    const named = ai.answers.filter((a) => a.youNamed).length;
    if (named < ai.answers.length) {
      const missed = ai.answers.filter((a) => !a.youNamed).map((a) => a.label);
      out.push({
        title: "Get recommended by AI assistants",
        body: `Asked who's best for ${job} in ${area}, ${list(missed)} didn't name you. They lean on your reviews, what your website says you do, and other sites that mention you.`,
      });
    }
  } else if (search?.aio && !search.aio.namesYou) {
    out.push({
      title: "Get into Google's AI answer",
      body: "Google now writes a short answer above the results for this search, and it doesn't mention you. It draws on the same signals as the map: reviews, your website and your Google profile.",
    });
  }

  if (site && site.loadSeconds > 2.5) {
    out.push({
      title: "Make your website quicker on a phone",
      body: `Your homepage took ${site.loadSeconds} seconds to show its main content on a phone. Google's own mark for good is 2.5 seconds, and people searching for a tradie don't wait.`,
    });
  }

  if (search && search.ads.length && !search.youAdvertising) {
    out.push({
      title: "Decide on ads, with your eyes open",
      body: `${search.ads.length} ${search.ads.length === 1 ? "business is" : "businesses are"} paying to sit above everyone on this search. Ads are the fastest way onto the page while the rest builds, if the numbers work for your jobs.`,
    });
  }

  if (you.cid && !you.domain) {
    out.push({
      title: "Give customers a website to land on",
      body: "We couldn't find a website on your Google listing. Most people check one before they ring, and Google and the AI assistants all read it.",
    });
  } else if (you.domain && search && search.organicRank === null) {
    out.push({
      title: `Give ${area} its own page for ${job}`,
      body: `Your website isn't in the top ten results for "${search.query}". A page that names the job and the suburb is one of the clearest signals you can send.`,
    });
  }

  return out.slice(0, 3);
}
