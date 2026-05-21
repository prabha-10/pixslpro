"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Website Design & Redesign",
    price: "$900",
    interval: "One-time",
    description:
      "5-7 page professional website, brand identity, mobile-optimised, SEO setup, delivered in 10-14 days.",
    features: [
      "5-7 page professional website",
      "Brand identity (logo, colours, typography)",
      "Mobile-optimised & performance-tuned",
      "Contact form + WhatsApp click-to-chat",
      "On-page SEO setup",
      "Google Analytics & Search Console",
      "Delivered in 10-14 days",
    ],
    cta: "See Full Details",
    href: "/websites",
    popular: false,
  },
  {
    name: "AI Agent Implementation",
    price: "$1,500",
    interval: "One-time",
    description:
      "Custom AI agent mapped to your business — lead qualification, customer enquiries, internal automation, or process agents. Scoped to your needs.",
    features: [
      "Discovery & process mapping",
      "Agent workflow design",
      "Build & train on your data",
      "Testing against real scenarios",
      "Deployment + monitoring",
      "Full documentation & handover",
      "Scoped to your business",
    ],
    cta: "See Full Details",
    href: "/ai-agents",
    popular: true,
  },
  {
    name: "Ongoing Retainer",
    price: "$350",
    interval: "month",
    description:
      "Website maintenance, AI agent monitoring & tuning, 2-4 new automation flows/month, SEO monitoring, priority support, monthly strategy call.",
    features: [
      "Website updates within 48 hours",
      "AI agent monitoring & tuning",
      "2-4 new automation flows/month",
      "SEO monitoring & reporting",
      "Priority support",
      "Monthly strategy call",
      "3-month minimum",
    ],
    cta: "Talk to Us",
    href: "/contact",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">TRANSPARENT PRICING</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Clear pricing. No proposals that take 3 meetings. Pick your starting point.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "rounded-2xl p-8 border hover:-translate-y-2 transition-transform duration-500",
                plan.popular
                  ? "bg-gradient-to-b from-[#1C1411] to-[#0A0A0A] border-[#E8602A] shadow-2xl relative z-10"
                  : "bg-[#111111] border-[#222222] hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-[#E8602A] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#E8602A]/30">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-8">
                <span className="text-lg font-bold text-[#FF8A5C] block mb-4 pr-12">{plan.name}</span>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 font-medium pb-1.5">/ {plan.interval}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <Link
                href={plan.href}
                className={cn(
                  "block w-full py-4 text-center rounded-xl font-bold transition-all mb-10",
                  plan.popular
                    ? "bg-[#E8602A] hover:bg-[#D94420] text-white shadow-[0_0_20px_rgba(232,96,42,0.3)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}
              >
                {plan.cta}
              </Link>

              <div>
                <span className="text-sm font-semibold text-white block mb-6 uppercase tracking-wider">
                  What&apos;s included:
                </span>
                <ul className="space-y-4 text-sm text-gray-300">
                  {plan.features.map((feature, fIdx) => (
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
      </div>
    </section>
  );
}
