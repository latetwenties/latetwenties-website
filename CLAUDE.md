@AGENTS.md

# Latetwenties build brief for Claude Code

This is the brief you read on every session. It is condensed. The seven research
artefacts in `docs/research/` are the source of truth; when this file is
incomplete or contradicts them, the artefact wins and this file gets corrected.

## What this project is

A rebuild of the Latetwenties marketing-agency website. Owner: Brendan Riley,
Auckland. Audience: local service business owners across NZ and AU who have
been burnt by an agency before, or watched a peer get burnt, and have stopped
trying. The site is the codified version of the screen-share moment that
closes Latetwenties' best calls: a calm diagnostic frame ("type your service
into Google, add your suburb, see where you stand"), pricing shown plainly,
real case studies treated editorially, no bully copy. Editorial register on
cream ground, Lust serif at architectural scale, real photography only.

## Stack

- Next.js 16 App Router with TypeScript and Turbopack
- Tailwind v4 (CSS-based config in `app/globals.css` via `@theme inline`)
- Vercel hosting, production domain `latetwenties.agency`
- Body: Geist via `next/font/google`. Display: Lust Pro Size 4 (regular and
  italic) via `next/font/local` from `app/fonts/`. Stencil: Lust Stencil via
  `next/font/local` (reserved for one earned moment)
- TidyCal embed for the Free Presence Check booking on `/contact`
- Plausible for analytics (no Google Analytics on the site)
- Resend for transactional email when needed
- Static generation across every page; no ISR at v1

Next 16 ships breaking changes from earlier versions. When using a Next API
that may have moved, read `node_modules/next/dist/docs/01-app/` before writing
code.

## Voice (lifted from `docs/research/content_strategy.md` §1)

### One sentence

A plain-spoken Kiwi marketing partner who treats your business with the same
seriousness you treat it yourself.

### Personality

1. Plain-speaking. No jargon, no marketing fluff.
2. Considered, never hyped. Earned adjectives only.
3. Warm but direct. Manaakitanga as operating value.
4. Relational, not transactional.
5. Quietly confident.

### POV

- "we" is the default for service and product copy.
- "I" (Brendan named) appears in the signed letter on About, in named
  pull-quotes, and in LinkedIn content.
- "Brendan" appears in About sidebar facts, case study attribution, and
  editorial trust signals.
- "you" addresses the reader, always.

### Words to use

ringing, the phone ringing, calls, jobs, work, found, chosen, showing up,
sorted, properly, treat your business like our own, the same seriousness you
treat it yourself, we'll have a look for you, tell you straight, no pitch,
on the tools, up the road, your patch, your area, neighbours, small,
once properly, keep the signals active, what's working / what isn't.

Sparingly: honestly, frankly, real, just (Kiwi understatement).

### Words to avoid (binding)

**Hype:** supercharge, unlock, leverage, premium, game-changing, elevate,
transform, revolutionise, disrupt, world-class, cutting-edge, next-level,
best-in-class, empower.

**Marketing fluff:** professional (use "reliable" or "considered" instead),
passionate, peace of mind, quality workmanship, trusted local, bespoke,
holistic, comprehensive, end-to-end, solutions.

**Bully copy:** dominate, smash, crush, beat, outrank (in customer copy),
destroy, demolish.

**Implicit-comparison framing:** "with the seriousness most agencies reserve
for X", "unlike other agencies", "the agencies that get this wrong". The
relational frame is between Latetwenties and the client; competitors are
not in the sentence.

**Register bans:** em dashes anywhere (hard rule), exclamation marks in
primary copy, all-caps for emphasis, manipulative rhetorical questions
("Are you tired of agencies that...").

**Topic bans:** industry-specific page targets ("marketing for builders
Auckland"), suburb-specific page targets ("marketing in Mt Eden").

## Design (lifted from `docs/research/creative_anchor.md`)

### Register

LOUDER (editorial-forward) visual register, calm copy register. Architectural
Lust serif, real photography at editorial weight, plain-spoken big-and-honest
copy. The combination is the brand's structural opening.

### Type

- **Display:** Lust Pro Size 4 via `next/font/local`, regular + italic at
  weight 400, loaded from `app/fonts/lust-pro-no-4*.woff2`. CSS variable
  `--font-display`, Tailwind `font-display`. For hero statements, section
  breaks, wordmark, architectural-scale type. Request more weights from
  Brendan rather than pairing with substitute serifs.
- **Stencil:** Lust Stencil via `next/font/local` from `app/fonts/`,
  reserved for ONE earned moment (a single pull-quote or section break).
  CSS variable `--font-stencil`, Tailwind `font-stencil`.
- **Body:** Geist via `next/font/google`. CSS variable `--font-geist-sans`,
  Tailwind `font-sans` (default).
- **Wordmark:** `public/latetwenties-logo-pro.svg` set in Lust Pro with
  `fill="currentColor"`. Rendered through the `Wordmark` component via CSS
  `mask-image` + `background-color: currentColor`, so any parent's `color`
  drives its tone. That is how the two-beat hero swaps the logo from ink
  to cream during the reveal.
- **Forbidden type names:** Inter, Roboto, Open Sans, Montserrat, Poppins,
  Lato, or any specific premium typeface other than Lust.

### Colour

- **Cream canvas** `#f4efe5` (warm magazine paper). Tailwind `bg-cream`.
  Variants `cream-light` (`#faf6ee`), `cream-deep` (`#ebe2d0`).
- **Ink** `#000000` primary foreground. Tailwind `text-ink` / `bg-ink`.
  Soft variant `ink-soft` (`#1c1a17`) for muted contexts.
- **Stone scale:** Tailwind defaults available for warm-grey neutrals.
- **Pure white is banned.** Always cream or warm off-white.
- **Optional accent:** a single warm-tonal accent (warm grey,
  terracotta-adjacent) used sparingly. May be omitted entirely.

### Motion

- Reveal vocabulary: fade-up. Used consistently. Don't mix.
- Easing curve: `cubic-bezier(0.16, 1, 0.3, 1)` (CSS variable
  `--ease-considered`).
- Timing: 1200 to 1600ms for considered transitions. Not snappy.
- Hover: subtle (lift, fade, colour shift). No scale > 1.02, no bounce.
- `prefers-reduced-motion: reduce` is honoured globally in `app/globals.css`.

### Imagery

- Aspect ratios: wide landscape for heroes / breaks. Portrait for case
  studies, About hero, founder portrait moments.
- Treatment: full-colour, high-contrast, editorial register.
- Edges: hard. No rounded corners on photographs.
- Sourcing: real photography only. No stock. No founder-pensive-at-laptop.
  No team-meeting-handshake. No tradie-smiling-at-camera-with-tools.
- Auckland-street atmospherics: Mt Eden / Ponsonby / Grey Lynn weathered
  detail. Warm, lived-in. Not skyline, not Sky Tower.

### Layout archetypes (homepage)

1. **Hero:** H1 (Editorial Title Block) → H3 (Full-Bleed Image with Offset
   Wordmark). Two-beat Omai pattern.
2. **Products:** Custom variant of S1 executed as Juanmora pinned-scroll.
   Two products only (Foundations and Presence Care).
3. **Proof:** P3 (Single Hero Quote) + P5 (Inline Embedded Proof). Reece
   testimonial standalone, Boaz screenshots inline.
4. **About preview:** A2 (Letter-from-the-Owner + Sidebar of Facts),
   compressed.
5. **Closing CTA:** C1 (Full-Bleed Statement + Single Action).

### Signature moment (one only)

Hogwarts micro-motion on Brendan's About-page portrait. Static at first
glance, animates as a 2-3s loop on scroll-into-view. Used once. Don't add
emotional animations elsewhere.

## The 12 URLs at launch

| URL | Purpose |
|---|---|
| `/` | Diagnostic frame, two-product reveal, proof, About preview, closing CTA |
| `/about` | Founder presence, manaakitanga as practice, named credentials |
| `/how-it-works` | Foundations + Presence Care detail with pricing prominent |
| `/work` | Editorial case studies (Boaz long-form, Hooper tighter, TMT placeholder) |
| `/resources` | Hub for the four migrated blog posts |
| `/contact` | Free Presence Check booking via TidyCal embed, email, phone |
| `/privacy-policy` | Footer-only utility |
| `/blog/google-ranking` | Migrated post |
| `/blog/google-business-profile` | Migrated post |
| `/blog/google-ads-framework` | Migrated post |
| `/blog/google-ranking-factors` | Migrated post |

No additional pages. No industry-specific pages. No suburb-specific pages.

## Asset placeholders

Every placeholder is flagged in code with `// TODO(asset):` so swap-in is
greppable.

| Asset | Status | Build action |
|---|---|---|
| Brendan-at-desk photo | Needs capture | Type-only placeholder for About hero |
| Brendan Hogwarts portrait video | Needs capture | Type-only placeholder; Stencil pull-quote fallback if shoot deferred |
| Boaz before/after assets | Available | Use as provided in homepage proof + Boaz case study |
| Hooper ranking screenshot | Available | Use as provided in Hooper case study |
| Reece styling assets | Optional | Skip if not provided |
| Auckland-street atmospherics | Needs capture | Considered Unsplash placeholder at launch |
| Reece / Boaz crew portrait | Optional | Skip if not provided |

## Positioning anchors (binding for every page)

- **Core message:** Get found online and chosen by local customers, by a
  marketing partner who treats your business like their own.
- **Position:** For local service business owners in NZ and AU who want their
  business taken as seriously by their marketing partner as they take it
  themselves.
- **Trust stack** (ranked by leverage): real case studies (Boaz, Hooper, TMT
  when live) → named principal (Brendan) → direct testimonial (Reece, Boaz
  Developments) → pricing visibility ($3,700 Foundations including the first
  30 days of Presence Care, then $1,200/mo continuation) → 10+ years operator
  experience.
- **Phone (canonical, per `nap_descriptions.md` §1.1):** `09-884-4418`
  display, `098844418` for `tel:` href, `+64-9-884-4418` international.
  Note: build_brief §6.6 has an older format without internal hyphens; NAP
  is the citation SSOT and wins.

### Never lead with

- 10+ years experience (sidebar / footer only).
- "We use the same systems we sell" (About quiet line, never hero).
- "We're a small agency" (calmly stated fact, never lead frame).
- "We don't lock you into long contracts" (How It Works fact, never hero).
- "Manaakitanga is our operating value" (demonstrated editorially on About,
  never tagline).

## SEO/GEO non-negotiables

- **Schema priority:** Organization, LocalBusiness, WebSite, BreadcrumbList
  (critical at launch). Service x 2, Article x 4, Person, Review
  (recommended). Use the canonical JSON-LD blocks in
  `docs/research/nap_descriptions.md` §4.
- **Answer-first structure:** the first 40 to 60 words of body copy on every
  page stand alone as a complete extractable answer. Hero / H1 exempt. First
  2-3 sentences of every H2 stand alone. First 2-3 sentences of every FAQ
  answer stand alone.
- **Statistics + citation density:** every product page section and case
  study contains at least one specific stat, named source, or concrete proof
  figure. Vague claims are anti-trust signals.
- **robots.txt AI crawler allowlist:** GPTBot, PerplexityBot, ClaudeBot,
  Google-Extended, anthropic-ai, CCBot, OAI-SearchBot.
- **llms.txt** at root with the canonical entity description.
- **`lang="en-NZ"`** on the html tag (already set).
- **Open Graph + Twitter Card** meta on every page.
- **Sitemap auto-generated.** Static generation across all pages.
- **Performance targets:** Lighthouse Performance 90+ on mobile, LCP < 2.5s
  on 4G, CLS < 0.1, total page weight < 1.5MB on the homepage.

## Working drafts (refine at build time, don't treat as locks)

Per `docs/research/build_brief_review.md` §4:

- **Homepage hero diagnostic frame** (currently in `app/page.tsx`):
  *"Type your service into Google. Add your suburb. See where you stand."*
  Softened from the build_brief draft "where do you actually rank?" which
  reads accusatory at architectural scale.
- **About H1:** the build_brief draft "The agency is one person. The work is
  everything." drifts toward team-size framing the brand explicitly forbids.
  Recommended replacement: *"We treat your business like our own."* Pulls
  the Core Message into the About hero and lets the photography, signed
  letter, and Hogwarts moment do personhood work editorially.
- **Reece compressed pull-quote** (homepage proof, hero placement): *"From
  not showing, to #2 in our neighbouring towns on Google Maps. In under
  two months."* Attributed to Reece, Boaz Developments. Pending Brendan's
  confirmation.
- **Closing CTA:** *"If your phone isn't ringing the way it should, we'll
  show you why."*

## Visual + voice bans (condensed)

**Visual:** sans-serif headlines anywhere; pure white backgrounds;
performance-graph imagery leading homepage; stock photography of any kind;
founder-pensive-at-laptop / team-meeting-handshake imagery; 4-card "Why us"
grids with icons (the Farmform pattern); hairline dividers as dominant
section rhythm; carousel testimonials; trust badge walls on homepage; service
grids with more than 2 items; snappy timing; scale-on-hover above 1.02;
parallax-heavy hero; count-up stats animations; mixed reveal patterns;
loading spinners; rounded corners on photographs.

**Voice:** em dashes anywhere; hype words; marketing-fluff words; bully copy;
implicit-comparison framing; industry / suburb-specific page targets.

## Where to read more

The artefacts in `docs/research/`:

- `market_research.md`: audience, customer language, gaps, competitors.
- `positioning_synthesis.md`: strategic spine.
- `creative_anchor.md`: visual personality.
- `content_strategy.md`: voice (single source of truth).
- `build_brief.md`: implementation contract; the doc you'll read most.
- `build_brief_review.md`: QA pass with open items.
- `nap_descriptions.md`: canonical NAP, schema-ready JSON-LD.

When in doubt, the artefact wins. This file is condensed reference, not
truth.
