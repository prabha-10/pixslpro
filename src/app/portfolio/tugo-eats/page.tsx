import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Tugo Eats — Mobile App Case Study | PIXSL",
  description:
    "UX case study for Tugo Eats — a mobile app designed and built by PIXSL.",
};

export default function TugoEatsCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative pt-40 md:pt-48 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8602A]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-20">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E8602A]/10 text-[#FF8A5C] border border-[#E8602A]/30">
            Case Study — Mobile App
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Tugo Eats
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-medium">
            {/* TODO: one-line summary */}
            Case study summary goes here.
          </p>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-y border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold mb-2">Client</div>
            <div className="text-white font-semibold">{/* TODO */}—</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold mb-2">Role</div>
            <div className="text-white font-semibold">{/* TODO */}—</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold mb-2">Timeline</div>
            <div className="text-white font-semibold">{/* TODO */}—</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold mb-2">Platform</div>
            <div className="text-white font-semibold">Mobile App</div>
          </div>
        </div>
      </section>

      {/* Content placeholders */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-gray-400 leading-relaxed">{/* TODO: problem content */}Add problem statement here.</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research & Discovery</h2>
            <p className="text-gray-400 leading-relaxed">{/* TODO: research */}Add research content here.</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-gray-400 leading-relaxed">{/* TODO: solution */}Add solution content here.</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Outcome</h2>
            <p className="text-gray-400 leading-relaxed">{/* TODO: outcome */}Add outcome / metrics here.</p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want results like this for your business?"
        body="Let's talk about what we can build together."
        ctaText="Book A Call"
        ctaHref="/contact"
      />
    </div>
  );
}
