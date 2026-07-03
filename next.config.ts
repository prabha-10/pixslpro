import type { NextConfig } from "next";

// Security/quality headers applied to every response. HSTS only takes effect
// over HTTPS (ignored on localhost), so it's safe in development.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Permanent (308) redirects for the /portfolio → /work migration.
  // Sources are exact (no wildcard) so image requests under
  // /portfolio/<slug>/* still resolve from the public/ folder.
  async redirects() {
    return [
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/portfolio/entugo", destination: "/work/entugo", permanent: true },
      {
        source: "/portfolio/tugo-eats",
        destination: "/work/tugo-eats",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
