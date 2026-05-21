"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Map the Manual Process",
    description:
      "Before we touch any AI, we map out exactly how the process works today. Who does what, when, and why. We document every step, every decision point, every exception. This is the step most AI agencies skip — and it's why most AI implementations fail.",
  },
  {
    step: "02",
    title: "Design the Agent Workflow",
    description:
      "We design the AI agent's workflow visually — what triggers it, what it accesses, what decisions it makes, how it escalates to humans. You see the entire logic before we build it. No black boxes.",
  },
  {
    step: "03",
    title: "Build & Train",
    description:
      "We build the agent using the right tool for the job — OpenAI, Claude, or open-source models depending on your requirements. We train it on YOUR data: your FAQs, your documentation, your tone of voice, your qualification criteria. Not generic knowledge. Your business.",
  },
  {
    step: "04",
    title: "Test with Real Scenarios",
    description:
      "We run the agent against real queries and real edge cases from your business. We test what happens when it doesn't know the answer. We test handoff to humans. We test every failure mode before a single customer sees it.",
  },
  {
    step: "05",
    title: "Deploy & Monitor",
    description:
      "Go live with monitoring from day one. We track accuracy, response quality, escalation rate, and user satisfaction. We tune the agent weekly in the first month. Then ongoing via retainer.",
  },
];

export default function AgentsProcess() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">OUR APPROACH</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            We understand your business first. Then we implement the AI. Never the other way around.
          </motion.h2>
        </div>

        {/* Vertical stepper */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E8602A] via-[#E8602A]/50 to-transparent" />

          <div className="space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex items-start gap-8 pl-4"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-9 h-9 rounded-full bg-[#E8602A] flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-lg shadow-[#E8602A]/20">
                  {item.step}
                </div>

                <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8 flex-1 hover:border-[#E8602A]/30 transition-all">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
