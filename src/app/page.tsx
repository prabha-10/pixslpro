import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TwoPillars from "@/components/TwoPillars";
import Benefits from "@/components/Benefits";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SOCIAL_LINKS,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: SITE_EMAIL,
      description: SITE_DESCRIPTION,
      ...(SOCIAL_LINKS.length
        ? { sameAs: SOCIAL_LINKS.map((s) => s.href) }
        : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      areaServed: "Worldwide",
      serviceType: [
        "B2B Website Design & Redesign",
        "AI Agent Implementation",
      ],
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={structuredData} />
      <Hero />
      <TwoPillars />
      <Benefits />
      <Industries />
      <Projects />
      <Process />
      <Pricing />
      <FAQ />
      <CTABanner />
    </div>
  );
}
