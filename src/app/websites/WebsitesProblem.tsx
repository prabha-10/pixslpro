"use client";

import { motion } from "framer-motion";
import { ShieldAlert, UserX, Clock } from "lucide-react";

const problems = [
  {
    icon: <ShieldAlert className="w-7 h-7 text-[#E8602A]" />,
    title: "The Credibility Gap",
    description:
      "Prospects Google your company before they ever speak to you. If your website looks like it was built in 2019, they've already formed an opinion — and it's not the one you want. You're losing credibility before the first conversation.",
  },
  {
    icon: <UserX className="w-7 h-7 text-[#E8602A]" />,
    title: "No Lead Capture",
    description:
      "You have a \"Contact Us\" page with an email address. Maybe a basic form. But there's no CTA, no lead magnet, no system behind it. Enquiries come in and sit in someone's inbox until they're forgotten. You have traffic. You just have no way to turn it into conversations.",
  },
  {
    icon: <Clock className="w-7 h-7 text-[#E8602A]" />,
    title: "The Never-Ending Redesign",
    description:
      "You've been \"meaning to redo the website\" for months. Maybe you hired a freelancer once and it took forever and the result was mediocre. You don't have 3 months to spend on this. You need someone who takes ownership and delivers fast.",
  },
];

export default function WebsitesProblem() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">SOUND FAMILIAR?</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Your website was built 3 years ago. Your business has changed. Your website hasn&apos;t.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#E8602A]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
