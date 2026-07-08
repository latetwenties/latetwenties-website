# Copy principles (offer-led rewrite)

Source: `docs/` handoff `01_HOMEPAGE_REWRITE.md` + `02_RATIONALE_AND_SITE_PRINCIPLES.md`
(the Hormozi-informed rewrite, July 2026). Apply to every page, current and
future. These sit under the voice rules in the project CLAUDE.md: adopt the
*structure* (promise, guarantee, proof, named system), never the *volume*. No
hype, no caps, no exclamation. A quiet sentence with a number in it is the brand.

## The value equation (why the site is shaped this way)

Value = (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort & Sacrifice)

- Dream Outcome: outcome language ("more local enquiries", "the phone rings with
  new names"), never vehicle language ("website, GBP, listings set up properly").
- Perceived Likelihood: the quantified 90-day promise, the work-free guarantee,
  proof moved up and date-stamped.
- Time Delay: name it ("90 days", "this week", "4 days to first lead"), never hedge.
- Effort & Sacrifice: claimed out loud ("the risk sits with me, not you"), and
  kept low (done-for-you, no lock-ins, short forms).

Biggest single fix: the site had proof but no promise. Proof without a promise is
a portfolio. Promise + guarantee + proof is an offer.

## The ten rules

1. Lead with the outcome, never the vehicle. If a heading names a deliverable,
   rewrite it to name a result.
2. Every page carries the promise: "More local enquiries in 90 days, or we work
   free until you get them" appears at least once (footer counts).
3. Numbers beat adjectives. Wherever copy says "properly", "strong", "moving up",
   ask if a number exists. If it does, use it.
4. Proof rules, in order: others saying it > us saying it; identical-to-them >
   different-from-them; newer > older; big > small; more > less. Date-stamp case
   studies, match proof to the visitor's trade where pages are trade-specific,
   add client quotes with names and trades, keep collecting fresh testimonials.
5. Reading level: keep it simple. Short words, short sentences. Kill any sentence
   a busy builder would read twice.
6. Voice stays NZ-understated. Structure yes, volume no.
7. Never write the reader's exit for them. No "if you're happy where you are, no
   problem at all". Warm is fine, doormat is not. End sections with a next step.
8. Reader > writer. Every "I/we" sentence must serve the reader. One founder-story
   moment of personality per page, max.
9. One named system: "The Found & Chosen System". Parts: Get Found / Stay Chosen /
   Ring This Week. Use consistently. Retire "Foundations" and "Presence Care" from
   customer-facing copy.
10. Truth constraint (hard rule). Never publish a guarantee, a scarcity claim, a
    number, or a testimonial that isn't real and confirmed by Brendan. If a claim
    isn't confirmed, ship the page without it and flag it. Get as close to the
    ideal without lying or exaggerating.

## Per-page adaptation notes (not yet applied beyond homepage)

- /how-it-works: restructure around time + effort, when the first visible result
  lands, when the guarantee clock starts. Rename steps to Get Found / Stay Chosen /
  Ring This Week. End with promise + Presence Report CTA. Real client-effort shape
  (confirmed by Brendan, do NOT invent a minutes figure): Brendan does all the
  website copywriting and sources the images. At onboarding the client just uploads
  their own project photos. After that the only asks are occasional new photos for
  Google Business updates, and a quick email sign-off when new content goes live.
  Genuinely minimal. Frame it as "upload your projects once, then it's the odd
  photo and a quick yes by email", not a fabricated number.
- /work: the perceived-likelihood engine. Each case study: trade, town, date,
  before-number, after-number, time taken, and a named client quote where it
  exists. Newest-first. Standing note inviting visitors to call the clients and
  check the numbers. CTA on every case study: "Want numbers like these? Get your
  free Presence Report."
- /about: keep Brendan's story but invert it: open with who it's for and the
  promise, then the story as the reason the guarantee exists. Close with proof
  strip + CTA.
- /contact: rename "Free Presence Check" to "Free Presence Report" everywhere. The
  offer becomes: we look first, then send a recorded video walkthrough of what's
  costing them enquiries, theirs to keep, no pitch. Form asks only name, business
  name, trade, town, best email/phone. NOTE: this changes the offer mechanism
  (recorded video vs booked call). Needs Brendan's operational sign-off before
  rollout, because he has to actually record the videos.
- /resources: each resource is a lead magnet. Solve one narrow problem completely,
  point to the system for the rest. Add the Presence Report CTA to every resource.

## Page-ship checklist (run before committing any page)

- [ ] Outcome in the H1, not the vehicle
- [ ] The 90-day promise appears at least once
- [ ] At least one real number above the fold
- [ ] Proof is dated, named, and matched to the reader where possible
- [ ] Reads easy, no sentence needs a second pass
- [ ] One CTA repeated, no exit-ramps written for the reader
- [ ] Every claim on the page is true and confirmed by Brendan

## Confirmed claims (homepage, 2026-07)

1. The 90-day guarantee is live and confirmed. It applies to clients who run the
   full 90 days: the foundations plus the first three months of ongoing care
   (Stay Chosen). The Promise section and fine print carry that condition. No
   lock-in contract still holds; the guarantee just needs the full run to be fair.
2. The "three new businesses a month" scarcity cap is confirmed and rendered in
   the final CTA. The booking month is computed automatically by
   `app/components/home/BookingMonth.tsx` (current month, rolling to the next in
   the last 7 days), so it stays honest without manual updates.

## Standing rule on dates

Case study dates are real but clustered (mostly May, June, July 2026). Decision
(confirmed by Brendan): leave month stamps OFF for now, everywhere, homepage AND
/work detail pages. With all three cases within a three-month window, stamping
months makes the whole offer read brand new, which works against us. Keep the
recency signal at section level ("recent work") plus the durations already in
the copy ("in one month", "four days"). Revisit once the case studies span a
wider date range. This overrides rule 4's "date-stamp all case studies" until
then.
