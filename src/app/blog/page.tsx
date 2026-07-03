import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/content/blog";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "Insights";
const description =
  "Practical insights on B2B websites and AI agents. Costs, comparisons, and how-tos for service businesses that want to grow without the hype.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "PIXSL Insights — Websites & AI for Service Businesses",
    description,
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${SITE_NAME} Insights`,
      url: `${SITE_URL}/blog`,
      description,
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.date,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <JsonLd data={structuredData} />

      {/* Hero */}
      <section className="relative pt-40 md:pt-48 pb-16 md:pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8602A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-4 block">Insights</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight text-white mb-6 leading-[0.95]">
            Plain answers on <span className="text-[#FF8A5C]">web &amp; AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#E8602A]/10 text-[#FF8A5C] border border-[#E8602A]/30">
                    {p.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#FF8A5C] transition-colors">
                  {p.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 flex-1">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <time dateTime={p.date}>{p.dateLabel}</time>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>{p.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have a question these posts didn't answer?"
        body="Book a discovery call. We'll give you a straight answer on your website or AI agent, scoped to your business. No obligation."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
