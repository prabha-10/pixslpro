import type { Metadata } from "next";
import WebsitesHero from "./WebsitesHero";
import WebsitesProblem from "./WebsitesProblem";
import WebsitesSolution from "./WebsitesSolution";
import WebsitesProcess from "./WebsitesProcess";
import WebsitesIndustries from "./WebsitesIndustries";
import WebsitesBeforeAfter from "./WebsitesBeforeAfter";
import WebsitesPricing from "./WebsitesPricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Website Design & Redesign for B2B Service Businesses | PIXSL",
  description:
    "Professional website design and redesign for B2B service businesses. Designed in Figma, built in 14 days. Brand identity, SEO, and mobile-optimised — included.",
};

const websiteFaqs = [
  {
    question: "How long does a website redesign take?",
    answer:
      "10-14 days from the discovery call to going live. We move fast because we design everything in Figma first — you approve the design before we build, which eliminates the back-and-forth that makes most redesign projects drag on for months.",
  },
  {
    question: "Do you design the website before building it?",
    answer:
      "Every single time. We design the complete site in Figma — every page, desktop and mobile. You see it, give feedback, and approve it before we write any code. No surprises. No \"that's not what I asked for.\" This is non-negotiable in our process.",
  },
  {
    question: "WordPress or custom code — which do you recommend?",
    answer:
      "It depends on your needs. WordPress is great for content-heavy sites where you want to make updates yourself — blogs, service pages, team profiles. Next.js is better for performance-critical sites, custom functionality, or businesses that want a faster, more modern experience. We recommend during the discovery call.",
  },
  {
    question: "What if I already have a website and just need a redesign?",
    answer:
      "That's the majority of our projects. We take your existing content and brand, redesign it from scratch in Figma, and rebuild it on a modern stack. You keep what works. We fix what doesn't. Same 10-14 day timeline.",
  },
  {
    question: "Do you write the website copy too?",
    answer:
      "We can. If you have existing content that works, we restructure and optimise it for SEO and conversion. If you need copy written from scratch, we handle that during the discovery phase — it's included in the project scope.",
  },
  {
    question: "What about ongoing updates after launch?",
    answer:
      "Every project comes with documentation so you understand how to make basic edits. For ongoing updates, SEO monitoring, and new features — we offer a retainer starting at $350/month. Most clients find it pays for itself within the first month.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Our focus is B2B service businesses — consulting firms, staffing agencies, real estate companies, coaching businesses, and similar. We don't build e-commerce stores. If you sell services to other businesses and need a website that generates credibility and leads, that's exactly what we do.",
  },
];

export default function WebsitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <WebsitesHero />
      <WebsitesProblem />
      <WebsitesSolution />
      <WebsitesProcess />
      <WebsitesIndustries />
      <WebsitesBeforeAfter />
      <WebsitesPricing />
      <FAQ headline="Questions About Website Design" items={websiteFaqs} />
      <CTABanner
        headline="Prospects are Googling you right now. What do they see?"
        body="If your website doesn't match the quality of work you deliver, every day without a redesign is costing you credibility and leads. 90 minutes of your time. 14 days to launch."
        ctaText="Book A Call"
        ctaHref="/contact"
      />
    </div>
  );
}
