import type { Metadata } from "next";
import PortfolioHero from "./PortfolioHero";
import PortfolioGrid from "./PortfolioGrid";
import CTABanner from "@/components/CTABanner";
import { SITE_URL } from "@/lib/site";

const description =
  "Selected work from PIXSL — websites and AI agents designed in Figma and shipped in 10-14 days for B2B service businesses.";

export const metadata: Metadata = {
  title: "Our Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — PIXSL Case Studies & Projects",
    description,
    url: `${SITE_URL}/work`,
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PortfolioHero />
      <PortfolioGrid />
      <CTABanner
        headline="Like what you see? Let's build yours next."
        body="90 minutes of your time. 10-14 days to launch. A website or AI agent that works as hard as you do."
        ctaText="Book A Call"
        ctaHref="/contact"
      />
    </div>
  );
}
