// Example data for the prototype. Every business name here is invented.
// Nothing on this page calls a live API yet: the live build swaps this file
// for a DataForSEO pull (SERP, map pack, grid, LLM answers) per run.

export type Listing = {
  name: string;
  rating: number;
  reviews: number;
  note: string;
};

export const DEMO = {
  ads: [
    { name: "Ridgeline Driveways", line: "Driveways from $95/m². Free measure and quote." },
    { name: "Totara Paving Co", line: "North Shore driveway specialists. 20 years local." },
  ],
  mapPack: [
    { name: "Kowhai Concrete", rating: 4.9, reviews: 212, note: "Open · Replies to reviews" },
    { name: "Ridgeline Driveways", rating: 4.8, reviews: 140, note: "Open · 32 photos this month" },
    { name: "Totara Paving Co", rating: 4.7, reviews: 96, note: "Open · Driveway page for Albany" },
  ] satisfies Listing[],
  yourPosition: 9,
  yourReviews: 18,
  aiOverview:
    "Popular options for concrete driveways in this area include Kowhai Concrete, known for exposed aggregate work, and Ridgeline Driveways, which lists fixed per-metre pricing.",
  chatgpt:
    "Here are three well-reviewed driveway concreters near you:\n1. Kowhai Concrete: 200+ Google reviews, strong on exposed aggregate.\n2. Ridgeline Driveways: clear pricing on their website.\n3. Totara Paving Co: has a page specifically for this suburb.",
  winner: "Kowhai Concrete",
  // Map position for "concrete driveway" searched from each suburb.
  grid: [
    { suburb: "Albany", pos: 9 },
    { suburb: "Oteha", pos: 7 },
    { suburb: "Rosedale", pos: 12 },
    { suburb: "Pinehill", pos: 4 },
    { suburb: "Unsworth Hts", pos: 15 },
    { suburb: "Greenhithe", pos: 20 },
    { suburb: "Schnapper Rock", pos: 6 },
    { suburb: "Northcross", pos: 3 },
    { suburb: "Fairview Hts", pos: 5 },
    { suburb: "Glenfield", pos: 20 },
    { suburb: "Browns Bay", pos: 11 },
    { suburb: "Torbay", pos: 2 },
  ],
  moves: [
    {
      title: "Give Albany its own driveway page",
      body: "The three businesses above you each have a page that names the suburb and the job. You have one services page covering everything.",
    },
    {
      title: "Close the review gap, steadily",
      body: "You have 18 reviews against the leader's 212. Asking every finished job, every week, matters more than a one-off push.",
    },
    {
      title: "Get named in AI answers",
      body: "ChatGPT pulls from your reviews, your website wording and other sites that mention you. Right now none of those say what you're best at.",
    },
  ],
};
