import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Server-rendered long-form content. Adds depth and extractable prose for
// search and AI engines, and links out to proof and the sister service.
export default function WebsitesValue() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-tag mb-4 block">Why It Matters</span>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
          Your website is doing sales calls while you sleep
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            For a B2B service business, the website is rarely the thing that
            closes the deal. It is the thing that decides whether you get the
            chance to. A prospect hears your name, searches you, and forms a
            judgement in seconds. If the site looks dated, loads slowly, or
            reads like it was written for a different company, you have lost
            credibility before a conversation ever starts.
          </p>
          <p>
            A professional website fixes that quietly and constantly. It frames
            what you do, who you do it for, and why you are the safe choice. It
            answers the obvious questions, shows proof, and makes the next step
            easy. Done well, it lifts the quality of every lead that reaches you
            because the wrong-fit enquiries filter themselves out and the
            right-fit ones arrive already half-convinced.
          </p>
          <p>
            That is the standard we build to. Every site is designed in Figma
            first, so you approve the look and the words before a line of code
            is written. It is fast by default, optimised for mobile, and set up
            for search from day one with proper metadata, a sitemap, and
            analytics you can actually read. You own it outright. No locked-in
            platform, no surprise dependency on us.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-14 mb-5">
          Built for service firms, not online stores
        </h3>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            We focus on B2B service businesses: consulting firms, staffing and
            recruitment agencies, real estate teams, coaching and training
            practices, professional services, and logistics operators. These
            companies do not need a shopping cart. They need a credible presence
            that turns attention into booked calls, and they need it without a
            six-month agency project.
          </p>
          <p>
            That focus is why we move in ten to fourteen days instead of
            quarters. We are not reinventing the process each time. We know what
            a service-firm site has to do, we design it, you approve it, and we
            ship it. If you also want to automate the work behind the site, our{" "}
            <Link
              href="/ai-agents"
              className="text-[#FF8A5C] font-medium underline underline-offset-4 hover:text-white transition-colors"
            >
              AI agents
            </Link>{" "}
            plug straight into the same stack.
          </p>
        </div>

        {/* Proof callout */}
        <Link
          href="/work/entugo"
          className="group mt-12 flex items-center justify-between gap-6 bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
        >
          <div>
            <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-2">
              See it in practice
            </div>
            <div className="text-white text-xl font-bold leading-snug">
              How we designed and built the Entugo platform
            </div>
            <p className="text-gray-400 mt-2">
              A full web product, from research to a shipped dashboard.
            </p>
          </div>
          <ArrowUpRight className="w-7 h-7 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
        </Link>
      </div>
    </section>
  );
}
