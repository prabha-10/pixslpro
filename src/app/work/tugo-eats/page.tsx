import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Compass,
  Coins,
  Lock,
  QrCode,
  Repeat,
  ShieldCheck,
  Gift,
  ArrowUpRight,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "Tugo Eats — Mobile App Case Study";
const description =
  "How PIXSL designed Tugo Eats, the diner-facing app in the zero-commission Entugo ecosystem. A physical-first loyalty mechanic that turns one-time visitors into regulars.";
const pageUrl = `${SITE_URL}/work/tugo-eats`;
const image = `${SITE_URL}/portfolio/entugo/reach.png`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/tugo-eats" },
  openGraph: {
    type: "article",
    title,
    description,
    url: pageUrl,
    images: [image],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: pageUrl,
    image,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: "Tugo Eats", item: pageUrl },
    ],
  },
];

const metaStrip = [
  { label: "Project", value: "Entugo" },
  { label: "Role", value: "Product Design & Build" },
  { label: "Platform", value: "Mobile App" },
  { label: "Model", value: "0% Commission" },
];

const mechanic = [
  {
    icon: Lock,
    step: "01",
    title: "The Pass is locked",
    desc: "A reward, say 20% off the next visit, sits visible in the app but locked. The diner can see the prize but cannot claim it from the couch.",
  },
  {
    icon: QrCode,
    step: "02",
    title: "Scan to unlock",
    desc: "To unlock it, the diner scans the table QR code in the venue. The unlock is tied to a real, physical visit and a real order.",
  },
  {
    icon: Repeat,
    step: "03",
    title: "Valid next time",
    desc: "Once unlocked, the reward applies to the next visit. Every redemption sets up another one, turning a single meal into a habit.",
  },
];

const features = [
  {
    icon: Compass,
    title: "Discovery marketplace",
    desc: "A feed of nearby independent restaurants with high-incentive offers, built to turn casual browsing into a booked table.",
  },
  {
    icon: Coins,
    title: "Tugo Coin wallet",
    desc: "A loyalty wallet where diners earn and track coins, then burn them on rewards. Earn rates are tuned by the venue to protect margins.",
  },
  {
    icon: Gift,
    title: "Unlocked rewards",
    desc: "A clean home for every coupon and return pass a diner has unlocked, so the next visit is always one tap away.",
  },
];

export default function TugoEatsCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <JsonLd data={structuredData} />

      {/* Hero */}
      <section className="relative pt-40 md:pt-48 pb-16 md:pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full noise opacity-20" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8602A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-[#E8602A]/10 text-[#FF8A5C] border border-[#E8602A]/30">
            Case Study • Mobile App
          </span>
          <h1 className="text-6xl md:text-8xl font-playfair font-bold tracking-tight text-white mb-8 leading-[0.9]">
            Tugo Eats
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-medium leading-relaxed mb-10">
            The diner-facing app in the zero-commission Entugo ecosystem. It
            turns one-time visitors into regulars by making rewards something
            you unlock by showing up, not by scrolling.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
              <Smartphone className="w-4 h-4 text-[#E8602A]" />
              Consumer Mobile App
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#E8602A]" />
              Zero Commission
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
              <Repeat className="w-4 h-4 text-[#E8602A]" />
              Built for Retention
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {metaStrip.map((m) => (
            <div key={m.label}>
              <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold mb-2">
                {m.label}
              </div>
              <div className="text-white font-semibold">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-4 block text-red-500">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
            Diners discover restaurants through apps that own the relationship
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              For an independent restaurant, the modern customer journey is a
              trap. Diners discover places through aggregators that charge the
              restaurant up to thirty percent in commission, keep the customer
              data, and own the relationship. The restaurant pays to acquire a
              guest it never actually gets to know, and has no clean way to bring
              that guest back.
            </p>
            <p>
              Loyalty apps were supposed to fix this, but most made it worse.
              They let people claim deals from their sofa, training customers to
              chase discounts rather than build a habit. The restaurant gives up
              margin and still does not get a second visit. Tugo Eats was
              designed to break that pattern from the diner&apos;s side of the
              screen.
            </p>
          </div>
        </div>
      </section>

      {/* The solution */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-4 block">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
            An app diners want to open, that rewards them for showing up
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Tugo Eats is the consumer half of Entugo, a flat-fee platform that
              lets independent restaurants run discovery, loyalty, and rewards
              without paying aggregator commissions. The app gives diners a
              reason to choose a local restaurant and a reason to come back,
              while the restaurant keeps its margin and its customer data.
            </p>
            <p>
              Our job was the experience that diners actually touch. That meant
              designing something that feels like a consumer app people enjoy
              opening, not a corporate loyalty card. Discovery had to feel
              effortless. Earning and spending rewards had to feel rewarding. And
              the one piece of friction we kept, the in-venue unlock, had to feel
              like part of the fun rather than a hurdle.
            </p>
          </div>
        </div>
      </section>

      {/* The mechanic */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="section-tag mb-4 block">The Mechanic</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-6">
              Physical-first rewards
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The idea that makes Tugo Eats work is simple. Unlike coupon apps
              where you claim a deal from anywhere, Tugo Eats enforces footfall.
              A reward is visible but locked until you are physically in the
              venue. That single rule aligns the diner, the restaurant, and the
              platform around the same outcome: real visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mechanic.map((m) => (
              <div
                key={m.step}
                className="bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8602A]/10 flex items-center justify-center">
                    <m.icon className="w-6 h-6 text-[#E8602A]" />
                  </div>
                  <span className="text-4xl font-playfair font-bold text-white/10">
                    {m.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                <p className="text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the app */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="section-tag mb-4 block">Inside the App</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight">
              Three things the diner came for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass rounded-3xl p-8 border-white/5"
              >
                <f.icon className="w-8 h-8 text-[#E8602A] mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ecosystem link */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-4 block">One Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight mb-8">
            The diner&apos;s app is one of three connected parts
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-10">
            <p>
              Tugo Eats does not work alone. Every scan, coin, and unlocked
              reward flows through the Entugo client portal, where restaurant
              owners manage menus, campaigns, and loyalty rules, and through a
              staff scanner that redeems rewards at the table. We designed the
              diner experience to stay in lockstep with both in real time, so a
              reward unlocked at the table is instantly valid and instantly
              accounted for.
            </p>
            <p>
              The full system, the architecture behind it, and the business
              model are covered in the companion case study.
            </p>
          </div>

          <Link
            href="/work/entugo"
            className="group flex items-center justify-between gap-6 bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
          >
            <div>
              <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-2">
                Companion case study
              </div>
              <div className="text-white text-xl font-bold leading-snug">
                Entugo: the zero-commission growth engine
              </div>
              <p className="text-gray-400 mt-2">
                The owner portal, staff scanner, and architecture behind Tugo Eats.
              </p>
            </div>
            <ArrowUpRight className="w-7 h-7 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </div>
      </section>

      {/* Model stats */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">
              Restaurant Commission
            </div>
            <div className="text-5xl md:text-7xl font-playfair font-bold text-white">
              0<span className="text-[#E8602A]">%</span>
            </div>
            <div className="text-[#FF8A5C] text-sm mt-4 font-bold tracking-[0.3em] uppercase">
              vs 30% Aggregators
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">
              Customer Data
            </div>
            <div className="text-5xl md:text-7xl font-playfair font-bold text-white">
              100<span className="text-[#E8602A]">%</span>
            </div>
            <div className="text-[#FF8A5C] text-sm mt-4 font-bold tracking-[0.3em] uppercase">
              Owned by the Venue
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">
              Reward Unlock
            </div>
            <div className="text-5xl md:text-7xl font-playfair font-bold text-white">
              In<span className="text-[#E8602A]">-Venue</span>
            </div>
            <div className="text-[#FF8A5C] text-sm mt-4 font-bold tracking-[0.3em] uppercase">
              Footfall Guaranteed
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want an app your customers actually want to open?"
        body="We design and build consumer and B2B products that change behaviour, not just screens. Let's talk about what yours needs to do."
        ctaText="Book A Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
