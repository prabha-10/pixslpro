"use client";

import { motion } from "framer-motion";
import { Briefcase, ClipboardList, Unlock, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: <Briefcase className="w-6 h-6 text-[#E8602A]" />,
    title: "Business-First, Not Tech-First",
    description:
      "Most AI agencies lead with the technology. We lead with your process. We've built websites, CRMs, automations, and dashboards for B2B service businesses — we understand how these businesses actually run. The AI is the tool. Understanding your operations is the skill.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-[#E8602A]" />,
    title: "Manual First, Automate Later",
    description:
      "We never automate something we don't fully understand. We map it manually, document every step, THEN design the AI workflow. Automation built on shallow understanding breaks. Automation built on deep understanding compounds.",
  },
  {
    icon: <Unlock className="w-6 h-6 text-[#E8602A]" />,
    title: "You Own Everything",
    description:
      "No vendor lock-in. No proprietary platforms you can't leave. We build on tools you can access and control. Documentation included. If you ever want to take it in-house or switch providers, you can — no hostage situations.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#E8602A]" />,
    title: "We Stick Around",
    description:
      "AI agents aren't set-and-forget. They need monitoring, tuning, and improvement as your business evolves. Our retainer covers ongoing agent monitoring, performance tuning, new agent builds, and monthly strategy calls.",
  },
];

export default function AgentsWhyUs() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">WHY US</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            We&apos;re not an AI company. We&apos;re a business operations team that implements AI where it makes sense.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#E8602A]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
