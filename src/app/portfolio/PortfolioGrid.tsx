"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Tag = "Websites" | "AI Agents";

const caseStudies = [
  {
    title: "Entugo",
    tag: "Web Dashboard",
    category: "UX Case Study",
    description:
      "End-to-end UX for a web dashboard — from research to shipped product.",
    href: "/portfolio/entugo",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Tugo Eats",
    tag: "Mobile App",
    category: "UX Case Study",
    description:
      "Mobile food-ordering experience designed and built for everyday use.",
    href: "/portfolio/tugo-eats",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  },
];

const projects: {
  title: string;
  tag: Tag;
  category: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Advisory Firm Website Redesign",
    tag: "Websites",
    category: "Website Design + Brand Identity",
    description:
      "Complete rebrand and redesign for a boutique financial advisory firm. Built in Next.js with a custom CMS.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "AI Lead Qualification Agent",
    tag: "AI Agents",
    category: "Custom AI Agent + CRM Integration",
    description:
      "An AI agent that qualifies inbound leads, books meetings, and syncs directly into HubSpot.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Logistics Operations Dashboard",
    tag: "Websites",
    category: "Custom Web Application",
    description:
      "Real-time dashboard for a logistics operator — replaced a tangle of spreadsheets with a single source of truth.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4bffa41?q=80&w=2076&auto=format&fit=crop",
  },
  {
    title: "24/7 Client Enquiry Agent",
    tag: "AI Agents",
    category: "AI Chatbot + WhatsApp Automation",
    description:
      "WhatsApp-first AI assistant handling after-hours enquiries for a real estate brokerage.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "B2B SaaS Marketing Site",
    tag: "Websites",
    category: "Website Design + SEO",
    description:
      "A high-performance marketing site for a Series A SaaS — Lighthouse 100s across the board.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sales Outreach AI Agent",
    tag: "AI Agents",
    category: "Cold Outreach + Personalisation",
    description:
      "An AI agent researching prospects and drafting personalised outreach at scale — booked 40+ meetings in month one.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
  },
  {
    title: "Staffing Agency Website",
    tag: "Websites",
    category: "Website Design + Job Board",
    description:
      "Modern recruiting site with an integrated job board and applicant tracking.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Onboarding AI Agent",
    tag: "AI Agents",
    category: "Customer Onboarding Automation",
    description:
      "Guides new customers through setup, answers questions, and escalates to humans only when needed.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
];

const filters: ("All" | Tag)[] = ["All", "Websites", "AI Agents"];

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured case studies */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <span className="inline-block px-3 py-1 mb-3 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#E8602A]/10 text-[#FF8A5C] border border-[#E8602A]/30">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                UX Case Studies
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={cs.href} className="group block">
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] border border-white/10 bg-white/5">
                    <div className="absolute inset-0 bg-[#E8602A]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-[#0A0A0A]">
                        {cs.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-10 h-10 rounded-full bg-[#E8602A] flex items-center justify-center shadow-lg shadow-[#E8602A]/30 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <p className="text-[#FF8A5C] text-xs mt-0 uppercase tracking-wide font-semibold mb-2">
                      {cs.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF8A5C] transition-colors leading-tight">
                      {cs.title}
                    </h3>
                    <p className="text-gray-500 text-base mt-3 leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  isActive
                    ? "bg-[#E8602A] text-white border-[#E8602A] shadow-[0_0_20px_rgba(232,96,42,0.4)]"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] border border-white/10 bg-white/5">
                  <div className="absolute inset-0 bg-[#E8602A]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        project.tag === "Websites"
                          ? "bg-[#E8602A]/90 text-white"
                          : "bg-white/90 text-[#0A0A0A]"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40">
                    <div className="w-16 h-16 rounded-full bg-[#E8602A] flex items-center justify-center shadow-xl shadow-[#E8602A]/20">
                      <span className="text-white font-bold text-sm tracking-wider uppercase">
                        View
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF8A5C] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide font-semibold">
                    {project.category}
                  </p>
                  <p className="text-gray-500 text-base mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
