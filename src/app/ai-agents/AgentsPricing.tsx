"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter — Single AI Agent",
    price: "$1,500",
    interval: "One-time",
    bestFor: "One clear use case — lead qualification chatbot, FAQ agent, or a single internal automation.",
    features: [
      "Discovery & process mapping",
      "Agent workflow design",
      "Build & training on your data",
      "Testing against real scenarios",
      "Deployment + 2 weeks monitoring",
      "Full documentation & handover",
    ],
    cta: "Book a Discovery Call",
    popular: false,
  },
  {
    name: "Advanced — Multi-Agent System",
    price: "$3,500",
    interval: "Starts at",
    bestFor: "End-to-end process automation — onboarding flows, multi-step workflows, systems that require coordinated agents.",
    features: [
      "Deep process mapping & scoping",
      "Multi-agent architecture design",
      "Build, train & integrate across tools",
      "Comprehensive testing & edge cases",
      "Deployment + 4 weeks monitoring",
      "Documentation + team training session",
    ],
    cta: "Book a Discovery Call",
    popular: true,
  },
  {
    name: "Custom — Enterprise Scope",
    price: "Custom",
    interval: "quote",
    bestFor: "Complex implementations spanning multiple departments, large-scale data processing, or integrations with legacy systems.",
    features: [
      "Full-scope discovery & audit",
      "Custom architecture design",
      "Multi-department integration",
      "Legacy system connectivity",
      "Extended monitoring & support",
      "Dedicated account management",
    ],
    cta: "Contact Us to Scope",
    popular: false,
  },
];

export default function AgentsPricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">INVESTMENT</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Scoped to your business. Priced by complexity, not by the hour.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "rounded-2xl p-8 border hover:-translate-y-2 transition-transform duration-500",
                tier.popular
                  ? "bg-gradient-to-b from-[#1C1411] to-[#0A0A0A] border-[#E8602A] shadow-2xl relative z-10"
                  : "bg-[#111111] border-[#222222] hover:border-white/20"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-[#E8602A] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#E8602A]/30">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-8">
                <span className="text-lg font-bold text-[#FF8A5C] block mb-4 pr-12">{tier.name}</span>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-white">{tier.price}</span>
                  <span className="text-gray-500 font-medium pb-1.5">/ {tier.interval}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{tier.bestFor}</p>
              </div>

              <Link
                href="/contact"
                className={cn(
                  "block w-full py-4 text-center rounded-xl font-bold transition-all mb-10",
                  tier.popular
                    ? "bg-[#E8602A] hover:bg-[#D94420] text-white shadow-[0_0_20px_rgba(232,96,42,0.3)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}
              >
                {tier.cta}
              </Link>

              <div>
                <span className="text-sm font-semibold text-white block mb-6 uppercase tracking-wider">
                  Includes:
                </span>
                <ul className="space-y-4 text-sm text-gray-300">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#E8602A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Retainer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-white/[0.03] to-[#E8602A]/10 border border-[#E8602A]/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#E8602A]/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex-1">
            <h4 className="text-2xl font-bold text-white mb-3">AI agents need care. We provide it.</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI agents aren&apos;t fire-and-forget. Your business changes. New edge cases appear. Performance needs tuning. Our retainer covers ongoing monitoring, accuracy optimization, new agent builds, and a monthly strategy call to plan what&apos;s next.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end shrink-0 relative z-10">
            <span className="text-2xl font-black text-white mb-2">
              From $500<span className="text-lg text-gray-500 font-medium">/month</span>
            </span>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-4">3-month minimum</p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#0A0A0A] font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              Ask About Retainers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
