import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
