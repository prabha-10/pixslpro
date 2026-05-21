"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    day: "Day 1",
    title: "Discovery & Brief",
    description:
      "One 90-minute call. We learn your business, your competitors, your goals, and what's not working. You talk. We listen and document everything. No questionnaires. No homework.",
  },
  {
    step: "02",
    day: "Day 2-4",
    title: "Design in Figma",
    description:
      "We design the complete website in Figma — every page, every section, mobile and desktop. You review it and approve it before we touch a single line of code. This is how \"that's not what I expected\" never happens.",
  },
  {
    step: "03",
    day: "Day 4-10",
    title: "Build",
    description:
      "WordPress or Next.js — whichever fits your scale. Mobile-first development. Performance-optimised. Content integrated. Forms connected. SEO configured. All of it.",
  },
  {
    step: "04",
    day: "Day 10-14",
    title: "Review & Launch",
    description:
      "You review the live site. Up to 2 rounds of revisions included. We set up Google Analytics and Search Console. Final QA on every device. We hit publish. You get the keys and full documentation.",
  },
];

export default function WebsitesProcess() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">OUR PROCESS</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            90 minutes of your time. 14 days. Done.
          </motion.h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E8602A] via-[#E8602A]/50 to-transparent" />

          <div className="space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E8602A] border-4 border-[#0A0A0A] z-10 mt-8" />

                {/* Content */}
                <div className={`flex-1 ml-14 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#E8602A]/30 transition-all">
                    <span className="text-sm font-bold text-[#E8602A] tracking-widest uppercase">{item.day}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
