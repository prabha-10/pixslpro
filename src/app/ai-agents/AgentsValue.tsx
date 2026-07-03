import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Server-rendered long-form content. Adds depth and extractable prose for
// search and AI engines, and links to proof, the blog, and the sister service.
export default function AgentsValue() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-tag mb-4 block">Why It Matters</span>
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
          The work AI should be doing in your business
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Most small service firms are not short on AI ideas. They are short
            on time to separate the hype from the handful of things that would
            genuinely help. An AI agent is not a magic employee. It is software
            that handles a specific, repetitive task on its own: qualifying
            leads, answering the enquiries you get fifty times a week, turning
            messy inputs into clean records, or moving a process along without
            someone babysitting it.
          </p>
          <p>
            The value is rarely the novelty. It is the hours given back and the
            leads that stop slipping through the cracks. When an agent answers a
            prospect at midnight, qualifies them against your real criteria, and
            books the call before a competitor replies, that is not a gimmick.
            That is revenue you were leaving on the table.
          </p>
          <p>
            We build agents the boring, reliable way. We map the process first,
            because automating a broken process just makes the mess faster. We
            connect to the tools you already use rather than asking you to learn
            a new platform. We set guardrails so the agent only answers what it
            should and escalates cleanly when it is out of its depth. Then we
            test it against real queries before it ever touches a customer.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-14 mb-5">
          Priced for a small team, not an enterprise
        </h3>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            The AI automation market is full of vendors charging enterprise
            rates for work a five to fifty person firm does not need at that
            scale. We start small and specific. We find the single most
            expensive hour in your week, build an agent against it, and prove the
            return before expanding. That keeps the cost sane and the risk low.
          </p>
          <p>
            If you want the full picture on what this costs and what drives the
            price, we wrote it down:{" "}
            <Link
              href="/blog/ai-agent-implementation-cost-2026"
              className="text-[#FF8A5C] font-medium underline underline-offset-4 hover:text-white transition-colors"
            >
              AI agent implementation cost in 2026
            </Link>
            . And if you need the website those agents sit behind, that is our
            other half:{" "}
            <Link
              href="/websites"
              className="text-[#FF8A5C] font-medium underline underline-offset-4 hover:text-white transition-colors"
            >
              B2B websites
            </Link>
            .
          </p>
        </div>

        {/* Proof callout */}
        <Link
          href="/work"
          className="group mt-12 flex items-center justify-between gap-6 bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
        >
          <div>
            <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-2">
              See how we build
            </div>
            <div className="text-white text-xl font-bold leading-snug">
              Explore our work
            </div>
            <p className="text-gray-400 mt-2">
              The same rigour we bring to AI, shown across our shipped projects.
            </p>
          </div>
          <ArrowUpRight className="w-7 h-7 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
        </Link>
      </div>
    </section>
  );
}
