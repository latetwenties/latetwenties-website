// The "five moves" are rules over the live results, not generated text, so
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

  if (you.cid && typeof you.rating === "number" && you.rating < 4.6) {
    out.push({
      title: "Lift your star rating",
      body: `Your Google rating is ${you.rating}. People comparing three listings on the map often skip anything under about 4.5 stars. Fresh reviews from happy customers lift the average, and replying to the poor ones shows the next customer how you handle problems.`,
    });
  }

  const missing = grid?.cells.filter((c) => c.rank === null || c.rank > 3).map((c) => c.name) ?? [];
  const winning = grid?.cells.filter((c) => c.rank !== null && c.rank <= 3).map((c) => c.name) ?? [];
  if (winning.length && missing.length) {
    out.push({
      title: "Win the suburbs next door",
      body: `You show in the top three from ${list(winning.slice(0, 3))}, but not from ${list(missing.slice(0, 3))}. Pages and photos that name those suburbs help Google connect you to them.`,
    });
  } else if (you.cid && !winning.length && missing.length > 1) {
    out.push({
      title: "Win one suburb at a time",
      body: `You weren't in the top three from any of the ${missing.length} spots we searched, including ${list(missing.slice(0, 3))}. Pick the one closest to your base, name it on a page and in your Google profile, win it, then move to the next.`,
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
  }
  if (search?.aio && !search.aio.namesYou) {
    out.push({
      title: "Get into Google's AI answer",
      body: "Google now writes a short answer above the results for this search, and it doesn't mention you. It draws on the same signals as the map: reviews, your website and your Google profile.",
    });
  }

  if (site && site.loadSeconds > site.goodMark) {
    out.push({
      title: "Make your website quicker on a phone",
      body: `Your homepage took ${site.loadSeconds} seconds for the ${site.measure} to show on a phone. Google's own mark for good is ${site.goodMark} seconds, and people searching for a tradie don't wait.`,
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

  if (search && search.ads.length && !search.youAdvertising) {
    out.push({
      title: "Decide on ads, with your eyes open",
      body: `${search.ads.length} ${search.ads.length === 1 ? "business is" : "businesses are"} paying to sit above everyone on this search. Ads are the fastest way onto the page while the rest builds, if the numbers work for your jobs.`,
    });
  } else if (search && !search.ads.length) {
    out.push({
      title: "Test ads while the top is empty",
      body: `Nobody was running ads on "${search.query}" when we searched, so the very top of the page is open. A small, tightly targeted test would show quickly whether it brings in jobs.`,
    });
  }

  // Fillers for businesses already doing well, so there are always five.
  const holdsAll = grid ? grid.cells.length > 0 && missing.length === 0 : false;
  if (holdsAll) {
    out.push({
      title: "Protect the spots you hold",
      body: "You're in the top three from every spot we checked. Map positions move every month, and a competitor with a steady run of reviews can pass you, so keep doing what got you here.",
    });
  }
  if (you.cid && !out.some((m) => m.title.startsWith("Close the review gap"))) {
    out.push({
      title: "Keep reviews coming every month",
      body: "Google looks at how recent your reviews are, not only how many. A few new ones every month, asked for when the job is finished, beats one big push.",
    });
  }
  out.push({
    title: "Know which calls came from Google",
    body: "Most trades can't say which jobs came from the map, ads or the website. Call tracking and a tagged enquiry form show what's working, so time and money go to what wins jobs.",
  });

  return out.slice(0, 5);
}
