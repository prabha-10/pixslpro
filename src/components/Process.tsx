"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Discovery & Brief",
    description:
      "One 90-minute call. We map your business, understand what's broken, and scope the right solution — whether that's a website, an AI agent, or both.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "You see everything before we build. Website designs in Figma. AI agent workflows mapped visually. You approve it. Then we build.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    description:
      "Websites in 10-14 days. AI agents in 2-4 weeks. We move fast because we plan thoroughly and use AI-assisted development to deliver in weeks what others quote in months.",
  },
  {
    step: "04",
    title: "Maintain & Improve",
    description:
      "We don't disappear. Website updates within 48 hours. AI agent monitoring and tuning. Monthly strategy calls. One team that knows your systems inside out.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative border-t border-white/5 bg-[#0A0A0A] overflow-hidden">
      {/* Fractal Maze Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fractal-maze.webp"
          alt="Fractal Maze Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 pointer-events-none"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">OUR PROCESS</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            From first call to live system — in weeks, not months.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#E8602A]/50 transition-colors relative group"
            >
              <div className="text-sm font-bold text-[#E8602A] mb-4 tracking-widest uppercase flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#E8602A]" />
                Step {item.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black text-white">{item.step}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
