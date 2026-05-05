import type { MetadataRoute } from "next";

const SITE = "https://latetwenties.agency";

// AI crawlers explicitly allowed per the brief in CLAUDE.md so the site is
// citable in AI search responses. Standard search engines covered by the
// default User-agent: * rule above.
const AI_USER_AGENTS = [
  "GPTBot",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
  "anthropic-ai",
  "CCBot",
  "OAI-SearchBot",
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
