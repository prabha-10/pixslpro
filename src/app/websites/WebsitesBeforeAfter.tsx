"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    client: "Advisory firm, 15 employees, UAE",
    before: ["Outdated WordPress theme", "No mobile responsiveness", "No CTA"],
    after: ["Custom design", "Lead capture form", "WhatsApp integration", "1.8s load time"],
    timeline: "12 days",
  },
  {
    client: "Staffing agency, 25 employees, UK",
    before: ["DIY Wix site", "Broken contact form", "No analytics"],
    after: ["Professional Next.js build", "SEO-optimised", "Google Analytics configured"],
    timeline: "14 days",
  },
];

export default function WebsitesBeforeAfter() {
  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">THE TRANSFORMATION</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Same business. Different first impression.
          </motion.h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                <p className="text-gray-400 text-sm font-medium">{project.client}</p>
                <span className="px-3 py-1.5 bg-[#E8602A]/10 border border-[#E8602A]/20 rounded-full text-xs font-bold text-[#E8602A] uppercase tracking-wider">
                  {project.timeline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                {/* Before */}
                <div>
                  <h4 className="text-sm font-bold text-red-400/80 uppercase tracking-wider mb-4">Before</h4>
                  <ul className="space-y-3">
                    {project.before.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center h-full pt-8">
                  <ArrowRight className="w-8 h-8 text-[#E8602A]" />
                </div>

                {/* After */}
                <div>
                  <h4 className="text-sm font-bold text-emerald-400/80 uppercase tracking-wider mb-4">After</h4>
                  <ul className="space-y-3">
                    {project.after.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
