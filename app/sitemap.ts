import type { MetadataRoute } from "next";

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
  { path: "/blog/what-a-customer-costs-you", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/google-ranking", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/google-ranking-factors", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/google-business-profile", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/google-ads-framework", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
