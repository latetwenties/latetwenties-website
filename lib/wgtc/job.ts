// Turns what a visitor types in the job box into the phrase we search and the
// question we put to the AI assistants. People type things like "builder, new
// builds" or "electrician / switchboards", so a list is read as a trade plus
// the job they want more of:
//   "electrician"              search "electrician",  ask "Who's the best electrician in X?"
//   "new builds"               search "new builds",   ask "Who should I use for new builds in X?"
//   "builder, new builds"      search "new builds",   ask "Who's the best builder for new builds in X?"
//   "builders and renovations" search "renovations",  ask "Who's the best builder for renovations in X?"
export type Job = {
  search: string; // what goes in Google and the search counts, before the area
  trade: string | null; // singular, for the AI question
  work: string | null; // the kind of job, when it isn't just the trade
};

// A trade is a word for a person: builder, electrician, plumber, landscaper,
// carpenter, concreter, painter, roofer, drainlayer, plasterer, arborist.
const TRADE_END = /(?:er|or|ian|ist|man|men)s?$/;
const TRADE_WORDS = new Set(["sparky", "sparkies", "chippy", "chippie", "tradie", "tradies", "builder", "builders"]);

const isTrade = (part: string) => {
  const last = part.split(" ").at(-1) ?? "";
  return TRADE_WORDS.has(last) || TRADE_END.test(last);
};

const singular = (part: string) =>
  part.replace(/men$/, "man").replace(/(er|or|ian|ist|ie|y)s$/, "$1").replace(/ies$/, "y");

export function parseJob(raw: string): Job {
  const parts = raw
    .toLowerCase()
    .split(/\s*(?:,|\/|&|\+|;|\band\b|\bor\b)\s*/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (!parts.length) return { search: "", trade: null, work: null };
  if (parts.length === 1) {
    const p = parts[0];
    return isTrade(p) ? { search: p, trade: singular(p), work: null } : { search: p, trade: null, work: p };
  }
  const trade = parts.find(isTrade) ?? null;
  // The first part that isn't the trade is the job they want more of.
  const work = parts.find((p) => p !== trade) ?? null;
  return { search: work ?? trade ?? parts[0], trade: trade ? singular(trade) : null, work };
}

export function aiQuestion(job: Job, area: string, where = area): string {
  const ask = job.trade && job.work
    ? `Who's the best ${job.trade} for ${job.work} in ${where}?`
    : job.trade
      ? `Who's the best ${job.trade} in ${where}?`
      : `Who should I use for ${job.work} in ${where}?`;
  return `${ask} Name up to 5 local businesses.`;
}
