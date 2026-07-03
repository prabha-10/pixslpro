import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import BlogProse from "@/components/BlogProse";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/content/blog";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Only the slugs we ship exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const otherPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/about` },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <JsonLd data={structuredData} />

      {/* Header */}
      <section className="relative pt-36 md:pt-44 pb-10 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E8602A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          </nav>

          <span className="inline-block px-3 py-1 mb-6 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#E8602A]/10 text-[#FF8A5C] border border-[#E8602A]/30">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold tracking-tight text-white mb-8 leading-[1.05]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500">
            <span className="text-gray-300">By {SITE_NAME}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <BlogProse>{post.content}</BlogProse>

          {/* Footer / author */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8">
              <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-3">
                Written by PIXSL
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                We build professional websites and practical AI agents for B2B
                service businesses. Designed fast, scoped to a real problem,
                priced for a small team.{" "}
                <Link href="/about" className="text-[#FF8A5C] hover:text-white underline underline-offset-4 transition-colors">
                  More about us
                </Link>
                .
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all insights
              </Link>
            </div>
          </div>

          {/* Keep reading */}
          {otherPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                Keep reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-[#111111] border border-[#222222] rounded-2xl p-6 hover:border-[#E8602A]/30 transition-all"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A5C] mb-2">
                      {p.category}
                    </div>
                    <div className="text-white font-semibold leading-snug group-hover:text-[#FF8A5C] transition-colors">
                      {p.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTABanner
        headline="Ready to stop reading and start building?"
        body="Book a discovery call. We'll scope your website or AI agent and give you a clear plan, timeline, and price."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
