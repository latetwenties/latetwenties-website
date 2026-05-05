// JSON-LD schema helpers. Reference @id values link site-wide entities
// (Organization, LocalBusiness, Person) to per-page schema (Service, Article,
// Review, BreadcrumbList) without restating the full entity each time.

const BASE_URL = "https://latetwenties.agency";

export const ORG_ID = `${BASE_URL}/#organization`;
export const LB_ID = `${BASE_URL}/#localbusiness`;
export const PERSON_ID = `${BASE_URL}/#brendan`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

export type SchemaItem = Record<string, unknown>;

export function breadcrumbList(
  items: { name: string; href: string }[],
): SchemaItem {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function service(input: {
  name: string;
  description: string;
  price: string;
  currency?: string;
  unitText?: string;
  url?: string;
}): SchemaItem {
  const offer: SchemaItem = {
    "@type": "Offer",
    price: input.price,
    priceCurrency: input.currency ?? "NZD",
    availability: "https://schema.org/InStock",
  };
  if (input.unitText) {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price: input.price,
      priceCurrency: input.currency ?? "NZD",
      unitText: input.unitText,
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Australia" },
    ],
    offers: offer,
    ...(input.url ? { url: `${BASE_URL}${input.url}` } : {}),
  };
}

export function review(input: {
  author: string;
  body: string;
  rating: number;
}): SchemaItem {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: input.author },
    itemReviewed: { "@id": LB_ID },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(input.rating),
      bestRating: "5",
    },
    reviewBody: input.body,
  };
}

export function article(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}): SchemaItem {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${BASE_URL}${input.url}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-NZ",
  };
}

export function faqPage(
  items: { question: string; answer: string }[],
): SchemaItem {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
