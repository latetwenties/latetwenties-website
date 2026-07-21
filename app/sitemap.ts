import type { MetadataRoute } from "next";

import { getLivePosts } from "@/lib/posts";

const SITE = "https://latetwenties.agency";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Blog posts come from the date-gated registry, so future-dated posts stay
  // out of the sitemap until they publish.
  const blogRoutes = getLivePosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const staticRoutes = ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
  return [...staticRoutes, ...blogRoutes];
}
