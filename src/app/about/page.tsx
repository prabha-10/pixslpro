import type { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  Rocket,
  KeyRound,
  UserCheck,
  Scale,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// The founder's first name is established; richer bio (full name, photo,
// LinkedIn, credentials) can be added by Prabha to strengthen Person schema.
const FOUNDER = { name: "Prabha", role: "Founder" };

const title = "About";
const description =
  "PIXSL is a founder-led studio that builds professional websites and practical AI agents for B2B service businesses. Fast, affordable, and owned by you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PIXSL",
    description,
    url: `${SITE_URL}/about`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About PIXSL",
  description,
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    founder: { "@type": "Person", name: FOUNDER.name },
  },
};

const principles = [
  {
    icon: PenTool,
    title: "Design first, always",
    desc: "We design every screen in Figma and you approve it before we write a line of code. No surprises, no expensive rework halfway through.",
  },
  {
    icon: Rocket,
    title: "Scope small, ship fast",
    desc: "Websites in ten to fourteen days. AI agents in weeks. We start with the smallest version that delivers real value, then build from proof.",
  },
  {
    icon: KeyRound,
    title: "You own everything",
    desc: "No locked-in platforms, no holding your site hostage. You own the code, the accounts, and the assets. We are here because you want us, not because you are stuck.",
  },
  {
    icon: UserCheck,
    title: "Founder-led, on purpose",
    desc: "You work directly with the person designing and building your project, not an account manager passing notes to a team you never meet.",
  },
  {
    icon: Scale,
    title: "Honest pricing",
    desc: "Priced for a five to fifty person firm, not an enterprise. We tell you what something costs and what it does not, before you commit.",
  },
  {
    icon: Wrench,
    title: "Built to last",
    desc: "Clean, fast, maintainable work. We build things that hold up after launch, not demos that fall apart the first time you need to change them.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <JsonLd data={structuredData} />

      {/* Hero */}
      <section className="relative pt-40 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full noise opacity-20" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8602A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="section-tag mb-4 block">About PIXSL</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight text-white mb-8 leading-[0.95]">
            Two things every service firm needs.{" "}
            <span className="text-[#FF8A5C]">One team that does both.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl font-medium leading-relaxed">
            PIXSL builds professional websites and practical AI agents for B2B
            service businesses. Designed properly, shipped fast, and priced for a
            small team.
          </p>
        </div>
      </section>

      {/* Why PIXSL exists */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-4 block">Why We Exist</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
            The gap we kept seeing
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Small B2B service firms get a bad deal on both sides of their
              digital setup. The good web agencies are slow and expensive, with
              projects that drag on for months. The cheap options are risky and
              look it. And on the AI side, most vendors are either selling hype
              or charging enterprise rates for things a fifty-person firm does
              not need at that scale.
            </p>
            <p>
              So the website falls behind the quality of the actual work, and the
              practical, money-saving AI never gets built because separating the
              useful from the noise is its own full-time job. Meanwhile the firm
              keeps losing leads to competitors who simply look more credible
              online and respond faster.
            </p>
            <p>
              PIXSL exists to close that gap from one place. A credible website
              and practical AI, delivered fast, affordably, and by the same team.
              Almost no one sells both well to the same buyer, and that
              intersection is exactly where a growing service firm needs help.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="section-tag mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight">
              Six rules we do not break
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E8602A]/10 flex items-center justify-center mb-6">
                  <p.icon className="w-6 h-6 text-[#E8602A]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder-led */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-4 block">Who You Work With</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
            Small on purpose
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              When you work with PIXSL, you work directly with the person
              designing and building your project. There is no account manager
              relaying messages, no offshore handoff, no team you never meet.
              That is the point of a founder-led studio: fewer layers, faster
              decisions, and one person who actually owns whether your project
              succeeds.
            </p>
            <p>
              PIXSL is led by {FOUNDER.name}, who started the studio to give
              small service firms access to the same quality of website and
              automation that larger companies take for granted, without the
              agency price tag or the timeline. The bar is simple: ship work we
              would be happy to put our own name on, and that you are proud to
              send a prospect to.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="section-tag mb-4 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight">
              Two services, one stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/websites"
              className="group bg-[#111111] border border-[#222222] rounded-3xl p-10 hover:border-[#E8602A]/30 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">B2B Websites</h3>
                <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Design and redesign for service businesses. Figma-first, fast,
                mobile-optimised, and set up for search from day one.
              </p>
            </Link>
            <Link
              href="/ai-agents"
              className="group bg-[#111111] border border-[#222222] rounded-3xl p-10 hover:border-[#E8602A]/30 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">AI Agents</h3>
                <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Practical agents for lead qualification, enquiries, and internal
                work. Scoped to a real problem and priced for a small team.
              </p>
            </Link>
          </div>

          <Link
            href="/work"
            className="group mt-6 flex items-center justify-between gap-6 bg-transparent border border-white/10 rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
          >
            <div>
              <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-2">
                The proof
              </div>
              <div className="text-white text-xl font-bold">See our work</div>
            </div>
            <ArrowUpRight className="w-7 h-7 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </div>
      </section>

      <CTABanner
        headline="Let's talk about what your business actually needs"
        body="Book a discovery call. Ninety minutes of your time, a clear plan at the end, and no obligation to work with us."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
