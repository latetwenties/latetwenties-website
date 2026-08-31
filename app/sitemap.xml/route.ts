import { NextResponse } from "next/server";

import { getLivePosts } from "@/lib/posts";

// The sitemap used to be a metadata route (app/sitemap.ts), which Next builds
// statically. Two attempted fixes (`export const revalidate = 3600` and the
// publish cron calling `revalidatePath("/sitemap.xml")`) both demonstrably
// left it frozen at build in production: posts published 20 and 30 Aug 2026
// were live for days while absent from the sitemap, and the only regeneration
// trigger that ever worked was a deploy. So the sitemap is now a plain route
// handler rendered on every request. It is a couple of dozen URLs; it can
// afford that, and a sitemap whose freshness depends on cache plumbing has
// failed twice already.
export const dynamic = "force-dynamic";

const SITE = "https://latetwenties.agency";

type StaticRoute = { path: string; priority: number; changeFrequency: string };

const ROUTES: StaticRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work", priority: 0.7, changeFrequency: "monthly" },
  { path: "/work/boaz-developments", priority: 0.7, changeFrequency: "monthly" },
  { path: "/work/tmt-concreting", priority: 0.7, changeFrequency: "monthly" },
  { path: "/work/rbm-concrete", priority: 0.7, changeFrequency: "monthly" },
  { path: "/work/kd-bookworks", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry(fields: {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: number;
}): string {
  const lastmod = fields.lastmod
    ? `\n    <lastmod>${fields.lastmod}</lastmod>`
    : "";
  return [
    "  <url>",
    `    <loc>${escapeXml(fields.loc)}</loc>${lastmod}`,
    `    <changefreq>${fields.changefreq}</changefreq>`,
    `    <priority>${fields.priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function GET(): NextResponse {
  const staticEntries = ROUTES.map(({ path, priority, changeFrequency }) =>
    urlEntry({ loc: `${SITE}${path}`, changefreq: changeFrequency, priority }),
  );

  // Blog posts come from the date-gated registry, so future-dated posts stay
  // out of the sitemap until they publish (a queued post's URL 404s, and a
  // sitemap must never advertise a 404).
  const blogEntries = getLivePosts().map((post) =>
    urlEntry({
      loc: `${SITE}/blog/${post.slug}`,
      lastmod: post.publishedAt,
      changefreq: "monthly",
      priority: 0.6,
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...blogEntries,
    "</urlset>",
    "",
  ].join("\n");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Dynamic at origin, but let the CDN hold it briefly so a crawler burst
      // does not hammer the function. Five minutes is invisible next to a
      // daily publish cadence.
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
