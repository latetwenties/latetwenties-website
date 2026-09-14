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
    ];
  },
};

export default nextConfig;
