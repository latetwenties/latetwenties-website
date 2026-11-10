import type { MetadataRoute } from "next";

const SITE = "https://latetwenties.agency";

// AI and search crawlers explicitly allowed (seo-currency 2.3 list, Nov 2026)
// so the site is citable in AI search responses. bingbot matters because the
// Bing index feeds ChatGPT search and Copilot. Standard search engines covered by the
// default User-agent: * rule above.
const AI_USER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
