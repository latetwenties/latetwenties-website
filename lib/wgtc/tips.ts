// Rotating tips shown while the run waits on data. Each is a published
// figure, reworded short; keep them that way (no invented numbers).
export type Tip = { line: string; source: string };

export const TIPS: Tip[] = [
  {
    // Oldroyd / InsideSales Lead Response Management study (2007): odds of
    // qualifying a lead called in 5 minutes vs 30 drop 21 times.
    line: "Call new enquiries back inside 5 minutes, not 30. The odds of a real lead go up 21 times.",
    source: "Lead Response Management study",
  },
  {
    // BrightLocal Local Consumer Review Survey 2026: 74% look for reviews
    // written in the last three months.
    line: "74% of people only look at reviews from the last three months. Two a month beats thirty from last year.",
    source: "BrightLocal, 2026",
  },
  {
    // BrightLocal 2026: 31% only use businesses rated 4.5 stars or higher (17% in 2025).
    line: "Almost 1 in 3 people now only use businesses rated 4.5 stars or higher.",
    source: "BrightLocal, 2026",
  },
  {
    // BrightLocal 2026: 80% more likely to use a business that replies to all its reviews.
    line: "Reply to every review. 80% of people are more likely to use a business that does.",
    source: "BrightLocal, 2026",
  },
  {
    // BrightLocal 2026: generic or templated replies put off 50% of consumers.
    line: "Copy-paste review replies put off half of customers. Write each one yourself.",
    source: "BrightLocal, 2026",
  },
  {
    // Google Business Profile guidance: profiles with photos get 42% more
    // direction requests on Google Maps.
    line: "Google profiles with photos get 42% more requests for directions.",
    source: "Google",
  },
  {
    // Think with Google, "The need for mobile speed" (2016).
    line: "53% of people leave a website on their phone if it takes more than 3 seconds to load.",
    source: "Google",
  },
  {
    // Map spots 1 to 3 click share, see lib/wgtc/worth.ts (BrightLocal 2018, First Page Sage 2026).
    line: "The top three on the map take roughly a third of all the taps on the page.",
    source: "BrightLocal, First Page Sage",
  },
];
