// "What it's worth": searches a month x the share of searchers who tap one of
// the top three on the map. Kept deliberately conservative.
//
// Click-share benchmarks for map spots 1 to 3 (share of all clicks on the page):
// - Low:  BrightLocal Local Services Ads Click Study (2018): 16.1%, 10.4%, 2.9%
//         = 29.4%. https://www.brightlocal.com/research/local-services-ads-click-study/
// - High: First Page Sage, Google CTR by position (2026): 14.8%, 12.6%, 11.9%
//         = 39.3%. https://firstpagesage.com/reports/google-click-through-rates-ctrs-by-ranking-position/
// Higher figures circulate (42/18/8% via AWR) but their method couldn't be
// checked, so they are not used.
export const TOP3_SHARE_LOW = 0.294;
export const TOP3_SHARE_HIGH = 0.393;

// Below this many searches a month Google's numbers are too coarse (it rounds
// small volumes to 10) to put a figure on.
export const MIN_SEARCHES = 20;

// The visitor's optional job maths. Shown on the page as stated assumptions,
// not benchmarks: 1 in 10 people who tap a listing get in touch, and 1 in 3
// enquiries become a job.
export const ENQUIRY_RATE = 0.1;
export const WIN_RATE = 1 / 3;

const round = (n: number) => (n < 20 ? Math.round(n) : Math.round(n / 5) * 5);

export function topThree(searches: number) {
  return { low: round(searches * TOP3_SHARE_LOW), high: round(searches * TOP3_SHARE_HIGH) };
}

// What one business sitting in the top three gets: a third of the top-three
// taps. Using the whole top-three share for one business overstated it badly
// (a $500k builder came out at millions a month).
export function perTopBusiness(topThreeTaps: number) {
  return topThreeTaps / 3;
}

export function jobsAMonth(taps: number) {
  return taps * ENQUIRY_RATE * WIN_RATE;
}

// "2 to 3 jobs a month", "about 1 job a month", "about one job every 4 months".
export function jobsPhrase(low: number, high: number): string {
  const lo = Math.round(low);
  const hi = Math.round(high);
  if (high < 0.75) {
    const every = Math.round(2 / (low + high));
    return `about one job every ${every} months`;
  }
  if (lo === hi || lo < 1) return `about ${Math.max(hi, 1)} job${Math.max(hi, 1) > 1 ? "s" : ""} a month`;
  return `${lo} to ${hi} jobs a month`;
}
