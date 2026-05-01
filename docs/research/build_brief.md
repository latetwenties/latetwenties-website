# Build Brief

> Implementation contract for the Latetwenties website rebuild. This is the
> document Claude Code reads at build time. Every section below either lifts
> verbatim from a prior artefact or specifies an implementation decision that
> downstream stages have not yet covered. Where a section lifts, the source
> is named so Claude Code can re-read the original if needed.

> **The bar.** A coding agent with this brief, the four prior artefacts, and
> the asset bundle (logo, screenshots, blog posts, references) should produce
> a build that lands on first attempt. If a decision Claude Code needs is
> missing from this brief, it's a brief failure, not a build failure.

---

## 0. Brief contents

1. Project context and constraints
2. Tech stack and infrastructure
3. Voice rules (lifted from content_strategy)
4. Design rules (lifted from creative_anchor)
5. Positioning anchors (lifted from positioning_synthesis)
6. Page-by-page specifications
7. Build notes (assets, placeholders, sequencing)
8. SEO/GEO non-negotiables (technical and content)
9. CLAUDE.md guidance for the project root

---

## 1. Project context and constraints

**Project owner:** Brendan Riley, Latetwenties.
**Project type:** Marketing agency website rebuild.
**Migration:** Older site exists on Lovable + Netlify; rebuild is the production replacement.
**Launch target:** Site goes live with placeholders for assets not yet captured. Real assets swap in over time without site rework.
**Final domain:** latetwenties.agency (production), staging URL TBD by Vercel.
**Out of scope for v1:** Booking system integration beyond a calendar embed, payment processing on the site itself (Stripe is operational outside the site), client portal, dashboard.

**Hard constraints (not negotiable at build time):**
- All four prior artefacts are binding. Decisions made in market_research, positioning_synthesis, creative_anchor, and content_strategy do not get re-litigated at build time.
- The 12-URL page list is final. No additional pages, no industry-specific pages, no suburb-specific pages.
- The voice avoid list (content_strategy section 1) is binding for every word of copy.
- The design ban list (creative_anchor section "What NOT to do") is binding for every visual decision.

---

## 2. Tech stack and infrastructure

Lifted from Brendan's system prompt; locked.

**Frontend:**
- Next.js 14+ App Router
- TypeScript
- Tailwind CSS

**Hosting:**
- Vercel (production deployment)
- GitHub (source control)

**Backend (only where needed):**
- Supabase for any database or auth needs (none expected at v1; flagged for phase 2)
- Resend for transactional email (Free Presence Check booking confirmations, contact form submissions)

**Development environment:**
- Claude Code as primary development agent
- CLAUDE.md at project root as the brief Claude Code reads on every session

**Asset and content management:**
- All copy lives in version-controlled content files (MDX or TypeScript constants), not in a CMS, at v1
- Images optimised through Next.js Image component
- Custom font (Lust family) loaded via next/font with proper subsetting and display strategy

**Booking and forms:**
- Free Presence Check booking: TidyCal embed on /contact. Brendan already uses TidyCal in the operation; the calendar, time slots, capture fields, and confirmation emails are existing infrastructure. User picks a time, books, gets TidyCal's automatic confirmation. Brendan reviews bookings in TidyCal's dashboard.
- Onboarding: existing onboarding.latetwenties.agency Typeform-style flow remains. Not changed by this rebuild.
- Resend: kept available for any transactional email needs that emerge (e.g., a newsletter or a custom confirmation flow if TidyCal's defaults don't cover something). Not blocking launch.
- No standalone enquiry form on the marketing site at v1. The TidyCal widget handles "I want to talk" intent through the booking flow itself; the free-text field captures questions for prospects not ready to book yet.

**Analytics:**
- Plausible or Umami (privacy-respecting; specific choice at build time)
- No Google Analytics on the site itself (the irony of "we're an SEO agency that doesn't pollute users with GA" is on-brand; GSC is sufficient for our own purposes)

**Performance targets:**
- Lighthouse Performance score 90+ on mobile
- LCP under 2.5s on 4G
- CLS under 0.1
- Total page weight under 1.5 MB on the homepage including the hero photography
- Static generation (SSG) for all pages; ISR not needed at v1

---

## 3. Voice rules

**This section lifts verbatim from `content_strategy.md` section 1.** Claude Code treats these rules as binding. Where copy needs to be written or refined at build time, these rules govern.

### 3.1 Voice in one sentence

*A plain-spoken Kiwi marketing partner who treats your business with the same seriousness you treat it yourself.*

### 3.2 Personality traits

1. Plain-speaking. No jargon, no marketing fluff.
2. Considered, never hyped. Earned adjectives only.
3. Warm but direct. Manaakitanga as operating value translates to copy that respects the reader's time.
4. Relational, not transactional. Speaks to the client as the person they are.
5. Quietly confident. The bar is set by the work, not by claims.

### 3.3 POV rules

- **First-person plural ("we"):** default voice for service and product copy.
- **First-person singular ("I", Brendan named):** signed letter on About, named pull-quotes, LinkedIn content.
- **Third-person ("Brendan"):** sidebar facts, case study attribution, editorial trust signals.
- **Second-person ("you"):** the reader, always.

### 3.4 Words to use (use freely)

ringing, the phone ringing, calls, jobs, work, found, chosen, showing up, sorted, properly, treat your business like our own, the same seriousness you treat it yourself, we'll have a look for you, tell you straight, no pitch, on the tools, up the road, your patch, your area, neighbours, small, once properly, keep the signals active, what's working / what isn't.

Sparingly: honestly, frankly, real, just (Kiwi understatement).

### 3.5 Words to avoid (banned)

**Hype:** supercharge, unlock, leverage, premium, game-changing, elevate, transform, revolutionise, disrupt, world-class, cutting-edge, next-level, best-in-class, empower.

**Marketing fluff:** professional (use "reliable" or "considered" instead), passionate, peace of mind, quality workmanship, trusted local, bespoke, holistic, comprehensive, end-to-end, solutions.

**Bully copy:** dominate, smash, crush, beat, outrank (in customer copy), destroy, demolish.

**Implicit-comparison framing:** "with the seriousness most agencies reserve for X", "unlike other agencies", "the agencies that get this wrong". The relational frame is between Latetwenties and the client; competitors are not in the sentence.

**Register bans:** em dashes anywhere, exclamation marks (very rare exception), all-caps for emphasis, manipulative rhetorical questions.

**Topic bans:** industry-specific page targets, suburb-specific page targets.

### 3.6 Sentence rhythm

Mix of punchy declarations and measured explanations. Short sentences for assertions, longer for explanation. Paragraphs of 2-4 sentences in body copy. Single-sentence paragraphs allowed for emphasis. No walls of text. No three-stacked rhetorical questions.

### 3.7 Emoji and hashtag policy

**Emoji:** none in primary site copy. Acceptable in GMB posts and LinkedIn captions where they aid scannability. Never in headlines.

**Hashtags:** none on the website. On LinkedIn or Instagram, 2-4 per post maximum, location and category only.

### 3.8 Re-read

Where copy is in doubt, re-read content_strategy section 1 for the full specification. This brief surfaces the rules; content_strategy is the source of truth.

---

## 4. Design rules

**This section lifts verbatim from `creative_anchor.md` steps 2-4.** Claude Code treats these rules as binding for every visual decision.

### 4.1 Ambition register

**LOUDER (editorial-forward) visual register, calm copy register.**

This is the structural opening. The visual register is loud (oversized Lust serif, architectural-scale type, two-beat reveals, real photography at editorial weight). The copy register is calm (no bully copy, plain-spoken, big-and-honest, no hype words). This combination is unusual in the category and is the brand's structural opening.

### 4.2 Type system

- **Display heading face:** Lust Pro / Didone (the wordmark family) at oversized scale for hero statements and section breaks.
- **Section heading face:** same Lust family at moderate display weight.
- **Body face:** a complementary modern sans, picked at build time based on real component testing. Pairing strategy is editorial *serif headline + sans body* with strong weight contrast.
- **Lust Stencil cut:** reserved for ONE moment that earns it (likely a single pull-quote or section break). Used sparingly becomes signature; used everywhere becomes ornament.

**Forbidden type names:** Inter, Inter Display, Roboto, Open Sans, Montserrat, Poppins, Lato. Other premium typefaces other than Lust. Don't pair Lust with these.

**Build-time call:** Pair Lust with whichever sans best supports its character at body sizes. Test at multiple sizes before locking.

### 4.3 Colour system

- **Primary:** black (#000000). Foreground type, primary CTAs, emphasis. Dominant text colour.
- **Secondary canvas:** warm cream / off-white. Background canvas across most surfaces. Specific hex within the warm-cream range, deliberately not pure white. Reference points: Omai's hero ground, warmer end of editorial publication paper.
- **Accent (optional):** single warm-tonal accent (warm grey, terracotta-adjacent) for hover states, link emphasis, sparing visual punctuation. May be omitted entirely if the palette holds without it. Rare usage rule: fewer than one moment per scroll.
- **Neutral scale:** 4-6 stops from cream canvas to deep black foreground.
- **Contrast pairings:** black on cream meets WCAG AA at all type sizes. Lighter neutrals only where decorative.

### 4.4 Motion

- **Personality:** considered. Cinematic but never showy.
- **Timing feel:** not snappy. Easing curves and ms values picked at build time to produce considered feel.
- **Reveal vocabulary:** fade-up. Used consistently. Don't mix reveal types.
- **Hover behaviour:** subtle. Lift, fade, or colour shift. Not scale, not bounce.

### 4.5 Imagery

- **Aspect ratios:** wide landscape for heroes and break sections; portrait for case studies, About hero, founder portrait moments.
- **Treatment:** full-colour, high-contrast, editorial register.
- **Edges:** hard. No rounded corners on photographs.
- **Sourcing:** real photography only. Hierarchy in section 7 of this brief.

### 4.6 Layout archetypes (homepage)

- **Hero:** H1 (Editorial Title Block) into H3 (Full-Bleed Image with Offset Wordmark). Two-beat Omai pattern.
- **Services / Products:** Custom variant of S1 (Editorial List with Hover Preview), executed as Juanmora pinned-scroll. Two products only. Architectural-scale type pinned, body and pricing fade in beneath.
- **Proof:** P3 (Single Hero Quote) + P5 (Inline Embedded Proof). Reece testimonial standalone, Boaz screenshots inline.
- **About preview:** A2 (Letter-from-the-Owner + Sidebar of Facts) at compressed scale.
- **Closing CTA:** C1 (Full-Bleed Statement + Single Action).

### 4.7 Signature moment

ONE bespoke creative element: the Hogwarts micro-motion on Brendan's About-page portrait. Static at first glance, animates as a short loop when scrolled into view. Used once. This is the build's permission slip for animation that exists for emotional reasons rather than functional ones.

### 4.8 Bans (visual)

Sans-serif headlines, pure white backgrounds, performance-graph imagery leading homepage, stock photography, founder-pensive-at-laptop photography, team-meeting-handshake imagery, 4-card "Why us" grids, hairline dividers as dominant section rhythm, carousel testimonials, trust badge walls on homepage, service grids with more than 2 items, snappy timing, scale-on-hover above 1.02, parallax-heavy hero, count-up stats animations, multiple reveal patterns mixed, loading spinners.

### 4.9 Re-read

Where a visual decision is in doubt, re-read creative_anchor.md for the full specification.

---

## 5. Positioning anchors

**This section lifts from `positioning_synthesis.md`.** These are the strategic claims every page must reinforce.

### 5.1 Core message

*"Get found online and chosen by local customers, by a marketing partner who treats your business like their own."*

This sentence governs the H1, the meta description, and the GMB long description. Phrasing can be adjusted for length-fit on each surface; meaning cannot.

### 5.2 Positioning angle

*"Latetwenties is the marketing agency for local service business owners in New Zealand and Australia who want their business taken as seriously by their marketing partner as they take it themselves."*

### 5.3 Three strategic insights

1. The category sells dashboards. Owners want jobs.
2. The Defected ICP isn't reachable through sales register. The diagnostic frame is the only way in.
3. The category cannot structurally deliver continuity from pitch to delivery. Latetwenties can.

### 5.4 Trust stack (ranked, in order of leverage)

1. Real case studies with named clients (Boaz, Hooper, TMT-when-live)
2. Named principal visibility (Brendan)
3. Direct testimonial with name and business (Reece, Boaz Developments)
4. Pricing visibility ($2,500 Foundations / $1,200 Presence Care monthly)
5. 10+ years experience (operator, framed honestly)

### 5.5 Canonical entity description

*Latetwenties is a small Auckland marketing agency helping local service business owners across New Zealand and Australia get found online and chosen by local customers. The agency offers two integrated products: Digital Foundations, a one-off project that builds the website, Google Business Profile, listings, and review systems properly; and Presence Care, an optional monthly service that keeps those signals active so businesses hold their position. Founded and operated by Brendan Riley, Latetwenties is built on manaakitanga as its operating value: the care and seriousness with which work placed in our hands is treated.*

### 5.6 What NOT to lead with

- 10+ years experience (sidebar / footer only)
- "We use the same systems we sell" (About quiet line, never hero)
- "We're a small agency" (calmly stated fact, never lead frame)
- "We don't lock you into long contracts" (How It Works fact, never hero)
- "Manaakitanga is our operating value" (demonstrated editorially on About, never tagline)

---

## 6. Page-by-page specifications

12 URLs at launch. Spec each one at section level: structure, copy direction, assets, schema, conversion treatment.

### 6.1 Homepage (`/`)

**Purpose:** The diagnostic frame, two-product reveal, proof, About preview, closing CTA. The screen-share moment codified.

**Section sequence:**

**SECTION 1: Hero (H1 → H3 two-beat reveal).**
- Beat 1 (cream ground, ~2-3 seconds): Centered or top-left wordmark. Headline at architectural Lust scale presenting the diagnostic frame. Minimal nav.
- Beat 2: Full-bleed photography fades in (placeholder at launch: Auckland-street atmospheric or type-only). Type repositions to editorial layout. Wordmark moves to header position.
- Headline copy direction: the diagnostic frame as invitation, not pitch. Working draft (final to be refined at build time): *"Type your service into Google. Add your suburb. Where do you actually rank?"* Or similar phrasing that lands the screen-share moment as text.
- Sub-head copy direction: relational follow-up. Working draft: *"We'll have a look for you. No pitch."*
- Primary CTA: Free Presence Check booking. Secondary text link: "or read what we do →" linking to /how-it-works.
- Schema: WebPage, BreadcrumbList.

**SECTION 2: The two products (S1-with-Juanmora-pinned-scroll).**
- Foundations and Presence Care, in sequence.
- Each product gets architectural-scale type pinned as user scrolls. Body copy and pricing fade in beneath.
- Foundations content direction: one-off project, ~2-4 weeks, $2,500 starting point. The "fix the foundations once, properly" frame. Three to five components named (website, GMB, listings, core SEO/GEO structure, review systems).
- Presence Care content direction: optional monthly service, $1,200/month, 3-month minimum then month-to-month. The "keep the signals active" frame. What's included (review generation, content, listings upkeep, GMB posts, iterative SEO, monthly artefact reporting).
- Each product closes with one CTA: "Start with Foundations" / "Add Presence Care".
- Schema: Service x 2 (one per product).

**SECTION 3: Proof (P3 + P5).**
- P3 standalone: Reece testimonial at oversized Lust scale. Compressed pull-quote from the cleared Reece text. Attributed: "Reece, Boaz Developments".
- P5 inline: Boaz before/after map pack and GMB screenshots embedded contextually. The "from not showing to #2 in neighbouring towns in under two months" claim made visible.
- Hooper case study mention: brief mid-page line linking to Work page.
- Schema: Review, AggregateRating if applicable.

**SECTION 4: About preview (A2 compressed).**
- Brendan portrait (placeholder at launch if not yet captured: type-only treatment with editorial pull-quote at Lust scale).
- Opening line of the signed letter from About page.
- Three sidebar facts: 10+ years across agencies, startups, corporates / Auckland-based, NZ + AU service / Two named clients.
- CTA: "Read more about Latetwenties →" linking to /about.

**SECTION 5: Closing CTA (C1).**
- Single bold sentence on cream ground.
- Working draft: *"If your phone isn't ringing the way it should, we'll show you why."* (Final wording at build time.)
- Single button: Free Presence Check.
- Generous whitespace.

**Page-level schema:** Organization (Latetwenties), LocalBusiness (Auckland HQ), WebSite, BreadcrumbList.

**Meta description:** *"Latetwenties helps local service business owners across New Zealand and Australia get found online and chosen by local customers. Plain-spoken Kiwi marketing partner that treats your business like its own."* (Or similar within 150-160 char target.)

### 6.2 About (`/about`)

**Purpose:** Founder presence, manaakitanga as practice, named credentials, trust stack at full strength.

**Section sequence:**

**SECTION 1: Hero — full A2 treatment.**
- Brendan portrait at editorial weight (placeholder at launch: type-only with first sentence of the signed letter at Lust scale; the Hogwarts moment lands here when the real shoot happens).
- Page H1: relational opener. Working draft: *"The agency is one person. The work is everything."* (Final at build time.)

**SECTION 2: Signed letter from Brendan.**
- First-person (I), real piece of writing under Brendan's name, italicised treatment.
- Length: 200-350 words.
- Content beats: why the agency exists, what manaakitanga means in this practice, why "we" voice is used elsewhere (the practice acts on the reader's behalf), what Brendan does himself.
- Lift the existing About-page manaakitanga passage from the current site if it lands. The "It's about recognising the inherent value in every person you encounter" passage is gold and should be retained or lightly polished.

**SECTION 3: The Hogwarts moment.**
- Brendan portrait close-cropped, 2-3 second loop on scroll-into-view.
- Caption beneath: short line in voice. Working draft: *"Brendan, in the office, on a Tuesday."*

**SECTION 4: Family signal (if family photo provided).**
- Single static photograph of Brendan with family, treated editorially.
- Caption: *"My kids think they help."* (Or similar.)
- Optional. Skip if photo not available.

**SECTION 5: Sidebar of facts (or inline section if mobile-first wins).**
- 10+ years across agencies, startups, corporates
- Auckland-based, NZ + AU service area
- Named clients: Boaz Developments, Hooper Electrical, TMT Concreting, PhysioPlus, [other named clients]
- Quiet credentials when earned: Google Partner (when achieved), Meta Business Partner (if relevant)

**SECTION 6: Closing CTA (C1 variant).**
- Single sentence inviting Free Presence Check.

**Page-level schema:** AboutPage, Person (Brendan Riley), Organization.

### 6.3 How It Works (`/how-it-works`)

**Purpose:** Detail on Foundations and Presence Care, with pricing prominently. Replaces a separate Services page; existing URL preserves equity.

**Section sequence:**

**SECTION 1: Hero.**
- Section H1 in voice. Working draft: *"Two products. One for getting found. One for staying found."*
- Brief sub-head explaining the distinction.

**SECTION 2: Foundations (full detail).**
- Heading: "Digital Foundations"
- Pricing prominently: "From $2,500"
- What's included: website, Google Business Profile setup and optimisation, listings, core SEO/GEO structure, review systems setup.
- Timeline: 2-4 weeks typically.
- Why it matters: the "fix the foundations once, properly" frame.
- Who it's for: anyone whose foundations aren't sorted yet.
- CTA: "Book a Free Presence Check" (the entry point, not a direct purchase).

**SECTION 3: Presence Care (full detail).**
- Heading: "Presence Care"
- Pricing prominently: "$1,200 per month, flat. 3-month minimum, then month-to-month."
- What's included: review generation cadence, GMB posts (weekly), listings monitoring and upkeep, iterative SEO, monthly artefact (one-page summary or short Loom video naming what was done, what changed, what's next).
- Why it matters: keeping the signals active so the rankings hold.
- Who it's for: businesses with foundations sorted, in competitive markets, where ongoing work earns its keep.
- The "honest about fit" beat happens on calls, not on this page; do not write "Presence Care isn't right for everyone" as recurring copy.
- CTA: "Add Presence Care" (after Foundations) or "Talk to us about ongoing work".

**SECTION 4: How we work together (the engagement model).**
- Brief plain-language section on what working with Latetwenties looks like: the listening process, the build cadence, the monthly artefact, the no-lock-in posture.
- "We don't lock you in" appears here as a calm fact, not as a competitive lead.

**SECTION 5: FAQ (earned, not padded).**
- 4-6 real questions from the prospect language bank in section 3.3 of this brief / content_strategy section 3.
- Each answer 2-4 sentences, in voice.
- No "What makes you different from other agencies?" filler.

**SECTION 6: Closing CTA (C1).**

**Page-level schema:** Service x 2 (Foundations, Presence Care), FAQPage.

### 6.4 Work (`/work`)

**Purpose:** Editorial case studies. Boaz long-form, Hooper tighter, TMT placeholder.

**Structure:** Each case study is its own scrolled feature, not a card on an index page. The /work page itself can be either an index (cards linking to /work/boaz, /work/hooper, etc.) or a single long-scroll page with each case study as a section. Recommendation: single long-scroll page at v1 because content is limited; convert to index when more case studies exist.

**Boaz Developments section (long-form):**
- Hero: Boaz logo or business name treatment, brief context line.
- The problem: where they were (not showing on Google for their service area, the specific scenario).
- The work: what Foundations did for them (in plain language, not jargon).
- The result: the "from not showing to #2 in neighbouring towns in under two months" specific claim, with the actual map pack and GMB screenshots embedded.
- **AI-visibility evidence line:** Boaz also surfaces in ChatGPT when prospects ask about builders near Langs Beach. Add as a quiet evidence beat at the end of the results section, with the actual ChatGPT screenshot embedded. Frame as a natural consequence of doing the foundations work properly, not as a separate service offering. Suggested copy direction: *"They also show up when people ask AI search engines for builders in their patch."* (Final wording at build time.)
- The Reece testimonial in full.
- Optional: a closing line in voice from Brendan, attributed.

**Hooper Electrical section (tighter):**
- Hero: Hooper context line.
- The work: brief plain-language summary.
- The result: "#1 organic for electrician Red Beach", with the actual SERP screenshot.
- One-sentence editorial close.

**TMT Concreting section (placeholder until live):**
- Brief "what's coming" treatment, named.
- Replace with full case study when TMT launches.

**Page-level schema:** CollectionPage, with embedded Article schema per case study.

### 6.5 Resources (`/resources`)

**Purpose:** Hub for the four migrated blog posts. Category-leadership content over time.

**Section structure:**

**SECTION 1: Brief hub intro.**
- Section H1: "Resources" or "Notes from the practice"
- One paragraph framing the hub: practical advice for local service business owners on getting found online. Plain language, no marketing fluff.

**SECTION 2: Article cards (or editorial list).**
- Four migrated blog posts, each with title, brief teaser line, read time.
- Layout: editorial list rather than card grid. Single column on mobile, two columns on desktop.

**SECTION 3: Closing line.**
- "More to come" or similar. No newsletter signup at v1.

**Migrated blog post pages (`/blog/google-ranking`, `/blog/google-business-profile`, `/blog/google-ads-framework`, `/blog/google-ranking-factors`):**
- Each lifts the existing post content, lightly polished against the voice rules in section 3 of this brief.
- Each closes with a single editorial CTA inviting Free Presence Check.
- Each cross-links to the relevant case study where natural.
- Each has Article schema.
- URLs preserved exactly; 301 only if a slug must change.

### 6.6 Contact (`/contact`)

**Purpose:** The conversion endpoint. Free Presence Check booking + email + phone.

**Section structure:**

**SECTION 1: Hero.**
- Section H1: "Free Presence Check. No pitch."
- Brief explainer paragraph: what the Presence Check is, what to expect, how long it takes (15-20 minutes), what you'll come away with (a clear picture of where you stand).

**SECTION 2: Booking widget (TidyCal embed).**
- TidyCal embed for the Free Presence Check booking. Brendan already uses TidyCal in the operation; the calendar, time slots, capture fields, and confirmation emails are existing infrastructure.
- TidyCal embed approach: standard iframe embed via `next/script` or a server component. Style the wrapper to sit inside the editorial layout (cream ground, generous whitespace around the embed, no hard borders). The widget chrome should feel as quiet as the surrounding page.
- Submission flow: user picks a time, books through TidyCal, gets TidyCal's confirmation email automatically. Brendan reviews bookings in TidyCal's dashboard. No separate form-and-reply step.
- Capture fields configured inside TidyCal (not on the page): name, business, service or industry, suburb, email, phone (optional), one free-text "anything you want us to know" field.
- Phase 2: optional separate enquiry form for prospects who want to ask a question without booking a call yet. Skip at v1; the booking widget with the free-text field handles both intents.

**SECTION 3: Direct contact.**
- Email displayed publicly: `team@latetwenties.agency`. The catch-all and the agency-voice email. This is what appears in the footer, on the contact page, in schema, and in any public mailto link.
- `brendan@latetwenties.agency` is also active and routable. It is referenced in two specific places: at the foot of the signed letter on About (where Brendan signs personally), and in any email signature when Brendan replies as himself rather than as the practice. It does not appear as a public site-level contact.
- Phone: 09-8844418 (display) / tel:098844418 (href)
- Auckland location (Mt Eden) named without full address.

**Page-level schema:** ContactPage.

### 6.7 Privacy Policy (`/privacy-policy`)

**Purpose:** Footer-only utility page.

**Structure:** Standard NZ Privacy Act 2020 compliant privacy policy. Plain language where possible. Sections covering what data is collected, how it's used, who it's shared with, retention, contact for privacy questions.

**Note for build:** Use a known good template (Iubenda or similar) rather than generating from scratch. Brendan to review before launch.

---

## 7. Build notes (assets, placeholders, sequencing)

### 7.1 Asset hierarchy at launch

From creative_anchor section "Photography priority":

| # | Asset | Status | Build action |
|---|---|---|---|
| 1 | Brendan working at desk | 🟡 Needs capture | Type-only placeholder for About hero at launch. Real photo swaps in later. |
| 2 | Brendan Hogwarts portrait | 🟡 Needs capture (video) | Type-only placeholder at launch. Real loop swaps in when shoot done. |
| 3 | Boaz before/after assets | ✅ Available now | Use as provided. Embed in homepage proof + Boaz case study. |
| 4 | Hooper ranking screenshot | ✅ Available now | Use as provided. Embed in Hooper case study. |
| 5 | Reece styling assets | ⚪ Optional placeholder | Skip if not provided. Quote works alone. |
| 6 | Auckland streets | 🟡 Needs capture (atmospheric) | Considered Unsplash placeholder at launch (see direction). Real shots swap in later. |
| 7 | Reece / Boaz crew portrait | ⚪ Optional placeholder | Skip if not provided. Quote works alone. |

### 7.2 Auckland-street direction (placeholder Unsplash sourcing)

Specific search direction for placeholder:
- Mt Eden village shopfronts in late afternoon light, weathered signage, real businesses
- Ponsonby side streets with old fences, leaning power poles, painted brick
- Grey Lynn villas with cracked footpaths, untrimmed plants, real doors
- Avoid: skyline shots, the Sky Tower, manicured cafes, Auckland tourism imagery
- Lean into: warmth, texture, age, signs of actual use, low-saturation light, slightly overcast or golden-hour conditions
- The aesthetic frame: New Yorker street photo, not real-estate listing

### 7.3 Placeholder code conventions

Every placeholder asset is flagged in the code with a `TODO(asset):` comment naming the swap-in expected. Example:

```tsx
// TODO(asset): Replace with real Brendan-at-desk photo when captured
<Image src="/placeholders/about-hero-typetreatment.jpg" alt="..." />
```

This makes the swap-in process trivial: grep for `TODO(asset):` and replace.

### 7.4 Build sequencing

Recommended order of work:
1. Project scaffold (Next.js + TypeScript + Tailwind + Lust font loading + colour tokens)
2. Component library (typography components, layout primitives, button system, form primitives)
3. Homepage (proves the pattern: two-beat hero, pinned products, P3+P5 proof, A2 preview, C1 close)
4. About (extends the pattern: full A2, Hogwarts moment placeholder, signed letter)
5. How It Works (extends the pattern: product detail, FAQ, pricing prominence)
6. Work (case study format)
7. Resources + blog post migrations
8. Contact (form + Resend integration)
9. Privacy
10. Schema implementation across all pages
11. Performance pass
12. Pre-launch checklist (this becomes build_brief_review)

### 7.5 Things explicitly left for phase 2

- Standalone enquiry form (separate from the TidyCal booking widget) for prospects who want to ask without booking
- Newsletter signup (only when content cadence resumes)
- Client portal (not in scope at v1)
- Multi-language (Te Reo Māori greeting on About is acceptable at v1; full bilingual is phase 2 if ever)
- Dark mode (not relevant for editorial cream-on-black brand)
- **"AI search visibility" content angle.** The Boaz / ChatGPT citation is real evidence that Latetwenties' Foundations work translates into AI-surface visibility, not just Google-surface visibility. Worth developing into a content angle (potentially a sixth content pillar, a service-page sub-section, or cornerstone content) once launch is settled. Supporting stat: 45% of consumers used AI search for a buying decision in the past year vs 6% the year before (source to be verified before public use). The launch artefacts already include the technical foundations for this (AI-crawler allowlist, llms.txt, answer-first structure, schema priority); the phase 2 work is articulating it as a positioning angle and a content theme.

---

## 8. SEO/GEO non-negotiables

Lifted from positioning_synthesis section 11, applied at build time.

### 8.1 Schema priority

**Critical (must launch with):**
- Organization
- LocalBusiness (Auckland HQ, NZ + AU service area)
- WebSite
- BreadcrumbList

**Recommended (must launch with where applicable):**
- Service x 2 (Foundations, Presence Care)
- Article x 4 (one per migrated blog post)
- Person (Brendan Riley)
- Review (Reece testimonial)

**Phase 2:**
- FAQPage (when /how-it-works FAQ section is finalised)
- HowTo (where blog content fits)

### 8.2 Answer-first structure

Every page's first 40-60 words of body copy stand alone as a complete extractable answer. Hero/H1 exempt. First 2-3 sentences of every H2 stand alone. First 2-3 sentences of every FAQ answer stand alone.

This is the AEO/GEO requirement: AI overviews and featured snippets pull the first answer-shaped block they find.

### 8.3 Statistics and citation density

Every product page section and case study contains at least one specific stat, named source, or concrete proof figure. Vague claims are anti-trust signals.

Specifically:
- Boaz case study uses "from not showing to #2 in neighbouring towns in under two months" with the actual screenshots
- Hooper case study uses "#1 organic for electrician Red Beach" with the actual SERP screenshot
- Pricing visible: "$2,500 starting point" / "$1,200 per month flat"
- Experience: "10+ years across agencies, startups, corporates" (operator framing)

### 8.4 robots.txt AI crawler allowlist

Allowed:
- GPTBot
- PerplexityBot
- ClaudeBot
- Google-Extended
- anthropic-ai
- CCBot
- OAI-SearchBot

Latetwenties as an agency benefits from being cited in AI answers about NZ marketing. Explicitly allow.

### 8.5 llms.txt

Standard format. Surfaces:
- What Latetwenties does (canonical entity description from section 5.5)
- Who it serves (the ICP from positioning_synthesis section 3)
- How to engage (Free Presence Check as the entry point)
- Direct link to the canonical entity description on About

### 8.6 Sitemap.xml and 301 redirects

- Sitemap auto-generated by Next.js, including all 12 URLs.
- 301 redirects from old Lovable + Netlify URLs to the new structure. Brendan to provide the old URL list for mapping.
- The four blog post slugs preserved exactly (no redirect needed if URLs match).

### 8.7 Performance

- Lighthouse Performance 90+ on mobile
- LCP under 2.5s on 4G
- CLS under 0.1
- Total page weight under 1.5 MB on the homepage including hero photography
- Static generation (SSG) for all pages

---

## 9. CLAUDE.md guidance for the project root

The CLAUDE.md file at the project root is the brief Claude Code reads on every session. It should be a *condensed* version of this build_brief, not a duplicate. Recommended structure for that file:

**CLAUDE.md sections (recommended):**

1. **Project at a glance** (3-5 sentence summary of what this is)
2. **Tech stack** (1-line each: Next.js, TypeScript, Tailwind, Vercel, Resend, Supabase if relevant)
3. **Voice rules** (the use list, the avoid list, the POV rules; lifted directly from this brief section 3)
4. **Design rules** (the type system, colour, motion, imagery rules from section 4)
5. **The 12 URLs** (named, with purpose in one line each)
6. **Asset placeholders** (status table from section 7.1)
7. **The bans** (visual + voice + topic, condensed)
8. **Where to read more** (pointers to the four prior artefacts in `docs/research/` or wherever they live in the repo)

CLAUDE.md should be **maximum 300 lines**. Anything longer becomes scanning rather than reading at session start.

---

*End of Build Brief. The brief is implementation-binding: every decision in this document is a contract. Anything not specified here that needs a decision at build time should be made in the spirit of the four prior artefacts. Anything specified here that conflicts with a prior artefact: the prior artefact wins, and this brief gets corrected. The next stage is build_brief_review, which performs final QA against this brief before Claude Code begins the build.*
