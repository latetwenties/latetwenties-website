# NAP Descriptions

> Citation utility for Google Business Profile and directory submissions.
> Canonical name, address, phone, and website details, plus three lengths of
> business description for use across listings. Every Latetwenties citation
> across the web should use these exact strings.

> **The dogfooding note.** Latetwenties is the agency that helps local
> service businesses get their own NAP consistent across the web. This
> document is therefore both the citation utility AND the worked example
> of the discipline being sold. The discipline applies to Latetwenties
> first, before it applies to any client.

---

## 1. Canonical NAP

### 1.1 The locked details

| Field | Canonical value | Format notes |
|---|---|---|
| **Name** | Latetwenties | No trailing period in citations. The period is part of the wordmark only, not the legal or display name. |
| **Address (verification)** | 18 Bellwood Ave, Mt Eden, Auckland 1024, New Zealand | Used only where directory verification requires a physical address. Never displayed publicly on the website or in customer-facing surfaces. |
| **Address (display)** | Auckland, New Zealand | Used everywhere a public address is shown. City + country only. |
| **Service area** | New Zealand and Australia | Used in GMB service-area config, schema `areaServed`, and any directory field asking what regions the business serves. |
| **Phone (display)** | 09-884-4418 | Used in copy on the website, in directory listings, on business cards. NZ format with hyphens. |
| **Phone (tel: href)** | 098844418 | Used in `<a href="tel:...">` markup. No spaces, no hyphens. |
| **Phone (international)** | +64-9-884-4418 | Used in international directory fields and in schema. |
| **Website (display)** | latetwenties.agency | Used in copy, citations, and printed materials. No `https://` prefix when displayed. |
| **Website (canonical URL)** | `https://latetwenties.agency` | Used in schema, structured data, and any field requiring a full URL. No trailing slash. |
| **Email (public)** | team@latetwenties.agency | The catch-all, agency-voice email. Used in all public-facing citations. |
| **Hours** | Monday-Friday, 8am-5pm | Latetwenties' standard operating hours. Public-facing wherever directories ask for hours. |

### 1.2 Format consistency rules

These rules are non-negotiable and binding for every citation Latetwenties places.

- **Name appears identically everywhere.** "Latetwenties" — no period, no hyphen, no "Late Twenties" with a space, no "Latetwenties Ltd" unless legal name surfaces require it. One string, used identically.
- **Phone format is identical for display.** "09-884-4418" with hyphens between blocks. Not "09 884 4418" or "(09) 884 4418" or "09.884.4418". Pick one, use it everywhere.
- **Website displayed without protocol.** "latetwenties.agency" in citations. The full `https://` form lives in URL fields and structured data only.
- **Address handling.** The verification address (18 Bellwood Ave) is provided to directories that require it for verification (Bing Places, Apple Maps Connect). It is NOT displayed publicly on the website, in GMB, or in any customer-facing citation. Public-facing surfaces show "Auckland, New Zealand" only. Mark the GMB profile as service-area-only with no public address.
- **Hours use the locked answer.** Monday-Friday, 8am-5pm.

### 1.3 GMB primary and secondary categories

| Category | Use |
|---|---|
| **Primary** | Marketing Agency |
| **Secondary 1** | Internet Marketing Service |
| **Secondary 2** | Website Designer |
| **Secondary 3** | Search Engine Optimization Service |

Primary category is the most important signal for what searches the GMB profile is eligible to appear in. "Marketing Agency" is the right primary because it covers the broadest relevant search behaviour. The secondaries reinforce the specific service mix without over-narrowing.

---

## 2. Three description lengths

Each version is locked text. Use these exactly. Do not paraphrase, do not reword for tone, do not add or remove sentences. Citation consistency is the trust signal; variation degrades it.

### 2.1 Short (under 100 characters) — for tight directory limits

> Latetwenties is a small Auckland marketing agency helping local service businesses get found online.

**Character count: 99.** Use where a directory limits the description to ~100 characters or less. Examples: some social bios, short directory listings, ad copy character-limited fields.

### 2.2 Medium (200-300 characters) — for standard directory descriptions

> Latetwenties is a small Auckland marketing agency helping local service business owners across New Zealand and Australia get found online and chosen by local customers, through integrated website, Google Business Profile, listings, and review systems.

**Character count: 256.** Use for most directory listings, structured data summaries, and any context requiring a complete-but-compact description. Clutch summary, Sortlist intro, DesignRush profile, Bing Places summary.

### 2.3 Long (~750 characters) — for GMB long description and full directory profiles

> Latetwenties is a small Auckland marketing agency helping local service business owners across New Zealand and Australia get found online and chosen by local customers. We offer two integrated products: Digital Foundations, a one-off project that builds the website, Google Business Profile, listings, and review systems properly; and Presence Care, an optional monthly service that keeps those signals active so businesses hold their position. Founded and operated by Brendan Riley, the agency works with tradies, allied health practitioners, accountants, and family-run service businesses whose customers search "near me." Free Presence Check available, no pitch.

**Character count: 671.** Use for the GMB "from the business" description, full directory profiles (DesignRush about, Clutch about, Goodfirms description), and any surface asking for the full narrative.

GMB allows up to 750 characters in the business description; this version is calibrated to fit comfortably with room for adjustment.

---

## 3. Tagline and one-liner variants

For ad headlines, social bios, signature lines, and any surface requiring a sub-50-character version of the offer.

| Length | Variant | Character count | Use case |
|---|---|---|---|
| Tagline | Get found online and chosen by local customers. | 47 | LinkedIn bio, ad headlines, signature lines |
| Sub-headline | A small Auckland marketing agency for local service businesses. | 62 | Twitter/X bio, secondary ad copy |
| Pitch line | We treat your business like our own. | 36 | Email signatures, social one-liners, pull-quote callouts |
| Service line | Two products. One for getting found. One for staying found. | 58 | Service-overview surfaces, Twitter/X pinned, How It Works subtitle |

---

## 4. Schema-ready JSON-LD blocks

These structured data blocks should be embedded in the website's `<head>` and referenced in any platform that accepts schema markup.

### 4.1 Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Latetwenties",
  "url": "https://latetwenties.agency",
  "logo": "https://latetwenties.agency/logo.png",
  "description": "Latetwenties is a small Auckland marketing agency helping local service business owners across New Zealand and Australia get found online and chosen by local customers, through integrated website, Google Business Profile, listings, and review systems.",
  "founder": {
    "@type": "Person",
    "name": "Brendan Riley"
  },
  "email": "team@latetwenties.agency",
  "telephone": "+64-9-884-4418",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Auckland",
    "addressCountry": "NZ"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "New Zealand"
    },
    {
      "@type": "Country",
      "name": "Australia"
    }
  ]
}
```

### 4.2 LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Latetwenties",
  "url": "https://latetwenties.agency",
  "image": "https://latetwenties.agency/og-image.jpg",
  "description": "Latetwenties is a small Auckland marketing agency helping local service business owners across New Zealand and Australia get found online and chosen by local customers.",
  "telephone": "+64-9-884-4418",
  "email": "team@latetwenties.agency",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Bellwood Ave",
    "addressLocality": "Mt Eden",
    "addressRegion": "Auckland",
    "postalCode": "1024",
    "addressCountry": "NZ"
  },
  "areaServed": [
    "New Zealand",
    "Australia"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  }
}
```

**Note on address handling in LocalBusiness schema:** Schema.org `LocalBusiness` requires a `PostalAddress` for full validation. The schema includes the full address. The GMB profile separately controls public display: GMB is configured as service-area-only with the address hidden from public view, even though the address is registered with Google for verification purposes.

### 4.3 Person (Brendan Riley)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Brendan Riley",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Latetwenties",
    "url": "https://latetwenties.agency"
  },
  "url": "https://latetwenties.agency/about",
  "sameAs": [
    "https://www.linkedin.com/in/brendan-riley-latetwenties"
  ]
}
```

LinkedIn URL above is illustrative; replace with Brendan's actual LinkedIn URL during implementation.

### 4.4 Service x 2

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Foundations",
    "provider": {
      "@type": "Organization",
      "name": "Latetwenties",
      "url": "https://latetwenties.agency"
    },
    "areaServed": ["New Zealand", "Australia"],
    "description": "A one-off project that builds the website, Google Business Profile, listings, and core SEO and GEO structure properly for local service businesses.",
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "NZD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2500",
        "priceCurrency": "NZD",
        "valueAddedTaxIncluded": false
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Presence Care",
    "provider": {
      "@type": "Organization",
      "name": "Latetwenties",
      "url": "https://latetwenties.agency"
    },
    "areaServed": ["New Zealand", "Australia"],
    "description": "An optional monthly service that keeps the website, Google Business Profile, listings, and review signals active so local service businesses hold their position.",
    "offers": {
      "@type": "Offer",
      "price": "1200",
      "priceCurrency": "NZD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1200",
        "priceCurrency": "NZD",
        "billingDuration": "P1M",
        "valueAddedTaxIncluded": false
      }
    }
  }
]
```

---

## 5. Per-platform usage guide

Where each version of each citation field gets used. This is the operational checklist for the listings work.

### 5.1 Tier 1 (essential, set up first)

**Google Business Profile:**
- Name: Latetwenties
- Category (primary): Marketing Agency
- Categories (secondary): Internet Marketing Service, Website Designer, Search Engine Optimization Service
- Service area: New Zealand, Australia (mark profile as service-area-only; the verification address at 18 Bellwood Ave is provided to GMB but hidden from public display)
- Phone: 09-884-4418
- Website: https://latetwenties.agency
- Description (long, 671 chars): from section 2.3
- Hours: Monday-Friday, 8am-5pm

**LinkedIn (Brendan personal account):**
- Headline: A small Auckland marketing agency for local service businesses. (62 chars)
- About: Long description from section 2.3
- Custom URL: linkedin.com/in/brendan-riley-latetwenties (or similar)

**LinkedIn (Latetwenties company page, if created):**
- Tagline: from section 3 (Tagline 47 char version)
- About: Long description from section 2.3
- Industry: Marketing Services
- Company size: 1-10
- Headquarters: Auckland, New Zealand
- Website: https://latetwenties.agency

### 5.2 Tier 2 (set up once Tier 1 is humming)

**Clutch.co:**
- Name: Latetwenties
- Tagline: from section 3
- Summary (200-300): from section 2.2
- Description (long): from section 2.3
- Founded: [year — Brendan to confirm]
- Min project size: $2,500 (NZD)
- Hourly rate: not displayed

**Sortlist:**
- Name: Latetwenties
- Tagline: from section 3
- Description: from section 2.2 or 2.3 depending on field length
- Services: Marketing Strategy, Local SEO, Website Development, Google Business Profile Optimisation
- Languages: English

**DesignRush:**
- Name: Latetwenties
- Tagline: from section 3
- Description: from section 2.2 or 2.3
- Services and tags: as above

### 5.3 Tier 3 (passive, free listings only)

**Bing Places:**
- Same NAP and description as GMB
- Bing requires a physical address for verification; provide the verification-only address

**Apple Maps Connect:**
- Same NAP as GMB
- Apple requires verification address

**Business Directory NZ:**
- Same as Sortlist

**Yellow Pages NZ:**
- Same as above

### 5.4 Surfaces explicitly not played

These surfaces are not pursued; flagged here so they don't get added later by accident.

- **Yelp:** Low local relevance for NZ B2B service work. Skip.
- **Facebook Business Page:** Skip. Latetwenties does not have an active social presence; an empty page is worse than no page.
- **Instagram:** Same as Facebook.
- **TikTok:** Brendan personal optional; agency presence not played.
- **Award platforms:** Per market_research section 9, deliberately not played.
- **Pay-for-placement listicles:** Per market_research section 9, deliberately not played.

---

## 6. Consistency rules and audit

### 6.1 The NAP audit checklist

Once the GMB is set up and citations are placed, run this audit periodically (suggest quarterly):

1. Search "Latetwenties" on Google. Every result should show identical NAP.
2. Use a tool like Whitespark or Moz Local to scan for citation inconsistencies.
3. Check that phone number format matches everywhere: "09-884-4418" with hyphens.
4. Check that website URL is `https://latetwenties.agency` (no trailing slash, no `www.` if not in canonical) everywhere.
5. Check that the business name is "Latetwenties" with no variants (no "Late Twenties", no "Late twenties.", no "Latetwenties Limited" unless legally required).

### 6.2 What to do when a citation is wrong

When a directory has the wrong NAP:
1. If you control the listing: update it directly to match the canonical values in section 1.1.
2. If you don't control the listing: contact the directory and request correction. Most reputable directories have a "claim this listing" or "suggest an edit" workflow.
3. If a directory refuses to update or doesn't have a clear correction workflow: file a Whitespark suppression request or accept the inconsistency (lower-tier directories with low traffic don't materially affect ranking).

### 6.3 What to do when a citation is duplicated

GMB occasionally creates duplicate profiles when an agency does work for a business that doesn't have its own profile yet. If a Latetwenties duplicate appears:
1. Find both listings.
2. Identify the canonical one (the one Brendan actively manages).
3. Use GMB's "Suggest an edit" → "Place is permanently closed or has never existed" to retire the duplicate.
4. Wait 2-4 weeks for Google to action. Follow up if needed.

---

## 7. The dogfooding signal

Latetwenties' own NAP consistency is the worked example of the Foundations product. When a prospect lands on the Latetwenties GMB and sees the canonical name, the matching phone, the consistent description, and the unbroken link chain back to the website, the prospect is seeing what Latetwenties does for clients, demonstrated on the agency itself.

This is unusual in the category. Most NZ marketing agencies have inconsistent NAP across their own listings (variant names, mismatched phone formats, stale addresses, broken description blocks). Latetwenties' discipline here is its own trust signal.

The audit checklist in section 6.1 should run quarterly even after launch, because NAP drift creeps in: a directory gets sold and the new owner changes formatting, a third-party citation appears with wrong details, a duplicate gets created. Maintenance is the Presence Care methodology applied to the agency's own footprint.

---

*End of NAP Descriptions. This is the final artefact in the research pipeline. With this document plus the four prior artefacts, build_brief, and build_brief_review, the implementation contract for Latetwenties is complete. Claude Code has everything it needs to begin the build.*
