# Build Brief Review

> Final QA pass on `build_brief.md`. Reads the build brief against the four
> prior artefacts (market_research, positioning_synthesis, creative_anchor,
> content_strategy) and surfaces contradictions, gaps, drift, and open items
> before Claude Code begins implementation.

> **The bar for this stage.** A reviewer reading this document and the build
> brief together should be able to answer two questions: (1) Is the build
> brief implementation-ready, or are there blocking items? (2) Are there
> non-blocking items Brendan should address before, during, or after the
> build? This document doesn't restate the brief; it audits it.

---

## 1. Brief verdict

**Build brief is implementation-ready** with eight open items requiring Brendan input and four small voice-drift fixes worth making before handoff. None of the open items block Claude Code from starting work; they can be resolved during scaffolding while components are being built. The drift fixes are minor and surface in working-draft copy that will be refined at build time anyway.

Said differently: Claude Code can start tomorrow. The open items live in parallel and resolve as the build progresses.

---

## 2. Critical drift (must fix before handoff)

**None found.**

The build brief lifts cleanly from the four prior artefacts. The voice rules in section 3 match content_strategy section 1. The design rules in section 4 match creative_anchor steps 2-4. The positioning anchors in section 5 match positioning_synthesis sections 1-8. The page list in section 6 matches positioning_synthesis section 10.

The Core Message correction (the relational frame replacing the implicit-comparison frame) propagated correctly to build_brief section 5.1. Trust-stack item 2 reframing also propagated correctly. No leakage of the older draft language.

---

## 3. Open items requiring Brendan input

These are decisions only Brendan can make, ranked by urgency. Most can be resolved in parallel with the build; flagged here so they don't get lost.

**Resolved during review:**

- ✅ **Item 1 (resolved):** Canonical client name is **Boaz Developments**. Propagated across all five artefacts. Reece testimonial attribution updated.
- ✅ **Item 2 (resolved):** Email pattern is **`team@latetwenties.agency`** as primary public email (catch-all, agency-voice). **`brendan@latetwenties.agency`** is also active, used in the signed letter on About and personal email signatures.

**Still open:**

| # | Item | Urgency | Where it lands in the build |
|---|---|---|---|
| 3 | Provide the list of old URLs from the Lovable + Netlify site for 301 redirect mapping | Medium | SEO setup at deploy time |
| 4 | Confirm the cleared compressed form of the Reece testimonial for hero pull-quote use | Medium | Homepage proof section. Recommendation in section 10.2: *"From not showing, to #2 in our neighbouring towns on Google Maps. In under two months."* |
| 5 | TidyCal capture fields configured to include business, service or industry, suburb, and free-text question (in addition to standard name + email + phone) | Medium | Operational config inside TidyCal, not a site-build job. ~5 minutes inside TidyCal. |
| 6 | Confirm the family photo is available (or not) for the optional family signal section on About | Low | Conditional content. Skip cleanly if not available. |
| 7 | Confirm Plausible vs Umami for analytics | Low | Build-time decision. Either works; Brendan's preference governs. |
| 8 | Confirm whether to draft the CLAUDE.md at handoff or let Claude Code generate it from the brief at scaffold time | Low | First step of the build. Either approach works. Recommendation: let Claude Code generate it. |

**Item 3 (old URL list) is the only blocker for deploy.** The build can proceed in full without it; 301s only matter at the moment the new site replaces the old one in DNS. Brendan to provide before deploy day.

---

## 4. Voice drift found in working drafts

The build brief includes "working draft" copy for the homepage hero, the About page H1, the How It Works H1, and the closing CTA. These are explicitly flagged as drafts, not locks, and final wording happens at build time. Flagging four small drifts to address when those drafts are refined.

### 4.1 About H1 leans on "one person" framing

**Current draft (build_brief section 6.2):** *"The agency is one person. The work is everything."*

**Drift:** The first sentence frames the brand around team size rather than around the seriousness mechanism. Brendan's system prompt explicitly says "Never claim team size or imply people who don't exist" and "small Auckland agency is the correct frame, not one-person agency."

**Fix direction:** Stay on the practice rather than the person count. Options:
- *"The practice is small for a reason. The work is everything."*
- *"A small practice. The work is the work."*
- Return to "we" voice and let the photography below the H1 carry the personhood thread: *"We treat your business like our own."*

The third option is the cleanest because it pulls the Core Message into the About hero and lets the signed letter and Hogwarts portrait below do the personhood work editorially.

### 4.2 Hero diagnostic frame draft uses "actually rank"

**Current draft (build_brief section 6.1):** *"Type your service into Google. Add your suburb. Where do you actually rank?"*

**Drift:** "Actually" is a fine word but "where do you actually rank" reads as slightly accusatory at architectural Lust scale. The diagnostic frame is meant to be calm.

**Fix direction:** The version Brendan or Claude Code lands on at build time should land softer. Options:
- *"Type your service into Google. Add your suburb. Have a look."*
- *"Type your service into Google. Add your suburb. See where you stand."*
- *"Search what your customers search. See what they see."*

The third version is interesting because it inverts the frame from "where do you rank" to "what do your customers see" — which is closer to the spine of the brand (the customer perspective leading the diagnosis).

### 4.3 Closing CTA draft is good but could go softer

**Current draft (build_brief section 6.1):** *"If your phone isn't ringing the way it should, we'll show you why."*

**Drift:** Minimal. The line is in voice. The "if/then" structure is slightly more leading than purely diagnostic. Worth keeping unless a softer version emerges naturally at build time.

### 4.4 The Hogwarts caption draft

**Current draft (build_brief section 6.2):** *"Brendan, in the office, on a Tuesday."*

**Drift:** None. This is good. Quietly funny, in voice, sits where it should. Keep.

---

## 5. Off-brief decisions check

This section would surface anywhere Claude Code's scaffold or implementation diverged from creative_anchor or content_strategy. Since Claude Code hasn't started, this section is a forward-looking checklist: things to watch for during the build.

**Watch for these defaults at build time:**

- **Sans-serif headlines.** The category default. Component libraries often ship sans-serif as the heading face. Lust must be loaded and applied to every H1, H2, H3 across the site, never substituted.
- **Pure white backgrounds.** Tailwind's `bg-white` is too cold. Cream / warm off-white is the canvas. The Tailwind config should define a custom `bg-cream` token and use it as the page background, not `bg-white`.
- **Default rounded corners on photographs.** Tailwind's component patterns often add `rounded-md` or `rounded-lg`. Photographs have hard edges throughout the build. Component-level overrides expected.
- **Default ease-out timing on transitions.** Considered timing required, not snappy. Specific easing curves picked at build time (probably `ease-out` with a longer duration like 600-800ms rather than the default 150-300ms).
- **Carousel components for testimonials.** No carousel. Single named testimonial only. If a third-party component library ships a carousel, it's not used here.
- **Service grid with icons.** Two products only, treated as pinned-scroll editorial sections, not as cards in a grid.
- **FAQ accordion as the dominant proof section.** The FAQ section appears only on /how-it-works and is one of several supporting sections, not the dominant proof pattern.
- **Loading states with spinners.** No spinners. Skeleton states or instant render.

---

## 6. Gaps that need filling

Items the build brief specified but didn't fully resolve.

### 6.1 The compressed Reece testimonial wording

**Gap:** Build_brief section 6.1 references "the cleared Reece text" and a "compressed pull-quote" without specifying the exact compressed version.

**Resolution:** Three forms exist (per market_research): (a) hero compressed, (b) mid-page substrate-landing line, (c) full testimonial in case study. The compressed hero form needs to be picked from the cleared text. Working assumption based on prior conversation:

**Hero compressed (working version):** *"From not showing, to #2 in our neighbouring towns on Google Maps. In under two months."* — Reece, Boaz Developments.

This needs Brendan's confirmation that the compressed form is the right cut. If it lands, this exact wording goes into the brief at build time.

### 6.2 Cookie consent / privacy banner

**Gap:** Build_brief section 8 specifies privacy-respecting analytics (Plausible or Umami) but doesn't explicitly address cookie banner requirements.

**Resolution:** Plausible and Umami both operate without cookies and without collecting personally identifiable information. Under the NZ Privacy Act 2020 and GDPR, no cookie consent banner is required when no cookies are set and no PII is collected. The privacy policy should disclose the use of the chosen analytics tool but no banner is needed. **No build action required, but worth confirming during privacy policy drafting.**

### 6.3 Auckland-street placeholder Unsplash sourcing

**Gap:** Build_brief section 7.2 specifies the aesthetic direction for placeholder Auckland-street photography. It doesn't specify whether Claude Code curates the Unsplash images or whether Brendan supplies them.

**Resolution:** Recommendation is that Claude Code curates a shortlist of 3-5 Unsplash images matching the direction, surfaces them in a build-time review, and Brendan picks the ones that land. Cleaner than either party doing it alone. **Workflow item, not a brief gap.**

### 6.4 Te Reo Māori greeting on About

**Gap:** Build_brief section 7.5 says "Te Reo Māori greeting on About is acceptable at v1; full bilingual is phase 2 if ever." It doesn't specify whether to include the greeting at v1.

**Resolution:** Brendan's call. If included, a single line on the About page ("Kia ora") at the start of the signed letter would land naturally. If not, About opens straight into English. **Default at v1: skip unless Brendan asks for it.** The gesture is meaningful and should be sincere; if Brendan doesn't have a relationship with the language, including it ornamentally would be hollow.

### 6.5 The Boaz / ChatGPT screenshot

**Gap:** Build_brief section 6.4 references the ChatGPT citation as an evidence beat in the Boaz case study. The actual screenshot lives in the conversation thread, not in the asset bundle.

**Resolution:** Brendan to export the screenshot and include it in the asset bundle for build time. **Easy, not blocking.**

### 6.6 CLAUDE.md draft

**Gap:** Build_brief section 9 specifies what should go in CLAUDE.md but doesn't draft the file itself.

**Resolution:** Two options: (a) I draft the CLAUDE.md as a separate deliverable now; (b) Claude Code generates the CLAUDE.md as the first scaffolding step using build_brief section 9 as the structure. **My recommendation is (b).** It exercises Claude Code on the brief immediately, surfaces any reading issues, and produces a CLAUDE.md that Claude Code will actually use rather than one Brendan or I wrote for it.

---

## 7. Phase compliance

What's in scope at v1, what's deferred to phase 2, audited against the system prompt and the locked decisions across all artefacts.

### Phase 1 (launch) — confirmed in scope

- 12 URLs (homepage, about, how-it-works, work, resources, contact, privacy + 4 blog posts at existing slugs)
- Voice rules locked, design rules locked, positioning anchors locked
- Schema priority list at launch (Organization, LocalBusiness, WebSite, BreadcrumbList, Service x 2, Article x 4, Person, Review)
- Asset placeholder strategy (type-only for personhood photography, considered Unsplash for atmospherics, real assets for Boaz/Hooper)
- TidyCal booking widget on /contact
- Resources hub with 4 migrated blog posts
- Privacy policy
- AI crawler allowlist + llms.txt
- Plausible or Umami analytics
- Performance targets: Lighthouse 90+, LCP < 2.5s, CLS < 0.1, page weight < 1.5MB

### Phase 2 — confirmed out of scope

- Standalone enquiry form alongside TidyCal
- Newsletter signup
- Client portal
- Multi-language (full bilingual)
- Dark mode
- AI search visibility content angle (sixth content pillar / cornerstone content)
- FAQPage and HowTo schema
- Calendar embeds beyond TidyCal

### Phase compliance verdict

**Clean.** No items in the build brief drift across the v1 / phase 2 boundary. The brief explicitly defers what should be deferred and ships what should ship.

---

## 8. SEO Master Playbook compliance

Audit against the standard SEO Master Playbook items.

| Item | Status | Notes |
|---|---|---|
| Schema priority list at launch | ✅ Specified | Critical + recommended schemas listed in build_brief 8.1 |
| Answer-first structure rule | ✅ Specified | First 40-60 words extractable; per build_brief 8.2 |
| Statistics + citation density | ✅ Specified | Specific stats named (Boaz, Hooper, pricing, experience); per build_brief 8.3 |
| robots.txt AI crawler allowlist | ✅ Specified | All 7 named bots; per build_brief 8.4 |
| llms.txt | ✅ Specified | Standard format with canonical entity description; per build_brief 8.5 |
| Sitemap.xml | ✅ Specified | Auto-generated by Next.js; per build_brief 8.6 |
| 301 redirects from old URLs | ⚠️ Partial | Specified but old URL list pending from Brendan (open item 3) |
| Performance targets | ✅ Specified | Lighthouse 90+, LCP, CLS, page weight all named |
| Image optimisation | ✅ Specified | Next.js Image component, per build_brief 2 |
| Custom font loading strategy | ✅ Specified | next/font with subsetting, per build_brief 2 |
| Static generation (SSG) | ✅ Specified | All pages SSG, no ISR needed at v1 |
| Mobile-first responsive | ✅ Implicit | Tailwind + Next.js default; not explicitly named in brief but standard |
| Open Graph + Twitter Card meta | ⚠️ Implicit | Not explicitly specified per page; standard expected |
| Canonical URL handling | ⚠️ Implicit | Standard Next.js handling expected |
| `lang="en-NZ"` on the html tag | ⚠️ Implicit | Should be explicit |

**Three implicit items worth making explicit during build:**
1. Open Graph and Twitter Card meta on every page (image, title, description)
2. Canonical URL handling per page
3. `lang="en-NZ"` on the html tag (vs default `en`)

These are standard Next.js / SEO defaults but should be confirmed during the SEO setup pass at build time, not assumed.

**SEO compliance verdict:** Strong, with three implicit items that should be made explicit during build.

---

## 9. Strengths to preserve

The build brief makes several strong calls that should be protected during implementation. Listing them so they don't get lost.

1. **Two-beat hero pattern with type-only placeholder fallback.** Lets the build ship without Brendan's photos blocking launch. Type-only placeholder is editorial-coherent, not a degraded experience.

2. **Pinned-scroll products section as the signature scroll moment.** This is where the visual personality lives. Don't let it slip into a card grid at build time because card grids are easier to build.

3. **Hogwarts micro-motion as the single signature animation.** The discipline of "one signature moment" is what makes it work. Don't let other animations creep in.

4. **TidyCal-only contact approach.** Cleaner than form-plus-calendar. Leverages existing operational infrastructure. One less moving part.

5. **CLAUDE.md guidance section.** Important for Claude Code's daily session work. The 300-line ceiling is the right discipline.

6. **Placeholder code conventions (`TODO(asset):`).** Easy to grep and swap when real assets land.

7. **Asset hierarchy with status tags.** Clear what blocks launch (nothing) and what doesn't.

8. **The relational Core Message after the correction.** The "treats your business like their own" frame keeps competitors out of the sentence. Build copy should reinforce this everywhere; if Claude Code drifts toward "with the seriousness most agencies..." anywhere, flag and correct.

9. **Pricing visibility throughout.** $2,500 / $1,200 named on /how-it-works prominently. Don't bury it behind a "request a quote" gate. The category convention is to hide pricing; the brand's posture is to show it.

10. **The named Reece testimonial.** One specific named testimonial in three placements. Beats a carousel of vague ones.

---

## 10. Strategic recommendations

Three recommendations, in order of leverage.

### 10.1 Lock the About H1 before build

The "The agency is one person. The work is everything." draft drifts toward the team-size frame Brendan's brand rules explicitly forbid. Worth picking the replacement before Claude Code starts on the About page so the H1 is locked when the page is built.

**Recommended:** *"We treat your business like our own."* (Pulls the Core Message into the About hero. Let the photography, signed letter, and Hogwarts moment do the personhood work editorially.)

### 10.2 Confirm the Reece compressed wording before build

The build brief references "the cleared compressed pull-quote" without quoting the exact text. Better to lock the exact wording before build starts than at the moment a designer is implementing the homepage proof section.

**Recommended:** *"From not showing, to #2 in our neighbouring towns on Google Maps. In under two months."* — Reece, Boaz Developments.

This is the version that emerged in the earlier compaction summary as cleared. Brendan to confirm.

### 10.3 Address open items 1-3 before, not during, build

Items 1 (Boaz name), 2 (email address), and 3 (old URL list for 301s) are easy to resolve and unblock specific build surfaces. Recommend Brendan resolves these in the next 24-48 hours so they aren't surfacing in the middle of build sessions.

The remaining open items (4-8) can resolve in parallel with the build.

---

## 11. The final build bar

What Claude Code needs to deliver to clear this brief. Concrete, checkable.

1. **Voice compliance.** Every page's copy passes the avoid list in build_brief section 3.5. No hype words, no marketing fluff, no bully copy, no implicit-comparison framing, no em dashes. Spot-checkable by greppable string match against the avoid list.

2. **Design compliance.** Every page uses Lust serif for headlines, cream-not-white background, hard-edged photography, fade-up reveal vocabulary, subtle hover behaviour. No banned visual patterns from build_brief section 4.8.

3. **Positioning reinforcement.** The Core Message lands on the homepage hero, the About page, and the closing CTA. The trust stack signals (case studies, named principal, named testimonial, pricing, experience) appear in their specified placements. The canonical entity description is used verbatim or with minor adjustments where it's specified to appear.

4. **All 12 URLs at launch.** Built to the section-level specs in build_brief section 6. No additional pages, no industry-specific pages, no suburb-specific pages.

5. **Phase 1 SEO/GEO non-negotiables.** Schema priority list implemented, answer-first structure throughout, AI crawler allowlist in robots.txt, llms.txt at root, sitemap.xml auto-generated, 301 redirects in place when URL list arrives.

6. **Asset placeholder strategy.** Type-only placeholders for Brendan-at-desk and Hogwarts portrait. Considered Unsplash for Auckland-street atmospherics. Real assets for Boaz before/afters and Hooper ranking screenshot. Every placeholder flagged in code with `TODO(asset):` comment.

7. **Performance targets.** Lighthouse Performance 90+ on mobile. LCP < 2.5s. CLS < 0.1. Total page weight < 1.5MB on the homepage. Static generation across all pages.

8. **CLAUDE.md at project root.** Following the structure in build_brief section 9. Maximum 300 lines. Generated by Claude Code at scaffold time, not pre-written.

If Claude Code delivers a build that hits all eight items, the brief is cleared. Anything missed is a build correction, not a brief failure.

---

*End of Build Brief Review. Build is implementation-ready; eight open items track in parallel; four small voice-drift fixes are lined up for build-time refinement; no critical drift found. Next stage: nap_descriptions.md, the citation utility for GMB and listings.*
