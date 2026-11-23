import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every Vercel-assigned host (the project alias and every per-commit preview
  // URL) serves the whole site, so without this the client's site exists twice
  // and Google is free to index either copy. Keyed to the HOST, not to an
  // environment flag, which is what keeps it correct before launch, after
  // launch, and on preview deployments. Doctrine: seo-geo-standard.md 1.9.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  allowedDevOrigins: ["192.168.68.57"],

  // 301 redirects preserving SEO equity from the old (Netlify) site.
  // Add an entry here for any path that was indexed under a legacy URL
  // and now lives somewhere else.
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      // Nov 2026 rebuild: How it works became What we do, Resources became
      // Insights, and the lab prototype became the free search page.
      { source: "/how-it-works", destination: "/what-we-do", permanent: true },
      { source: "/resources", destination: "/insights", permanent: true },
      // The free search was taken down 2026-11-23 (temporary, so it can
      // come back). Its page and API code are kept; WGTC_ENABLED gates spend.
      { source: "/lab/who-gets-the-call", destination: "/contact", permanent: false },
      { source: "/local-search-check", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
