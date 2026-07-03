// Single source of truth for site-wide constants used by metadata, robots,
// sitemap, JSON-LD, and the contact page. Defined once so the production
// domain and booking link live in exactly one place.

// Public base URL, normalized without a trailing slash so we can safely
// concatenate paths (e.g. `${SITE_URL}/sitemap.xml`).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pixsl.pro"
).replace(/\/+$/, "");

export const SITE_NAME = "PIXSL";

export const SITE_DESCRIPTION =
  "PIXSL builds professional websites and implements AI agents for B2B service businesses. From website redesign to intelligent automation — built fast, maintained forever.";

export const SITE_EMAIL = "hello@pixsl.pro";

// Calendly / Cal.com booking link for the contact page. Empty string means
// the contact page falls back to the email CTA.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

// Real, public social profiles. Filling these in populates BOTH the footer
// links and the Organization `sameAs` (entity SEO). Leave empty to omit.
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  // { label: "LinkedIn", href: "https://www.linkedin.com/company/pixsl" },
  // { label: "Twitter / X", href: "https://x.com/pixsl" },
  // { label: "Instagram", href: "https://www.instagram.com/pixsl" },
  // { label: "Dribbble", href: "https://dribbble.com/pixsl" },
];
