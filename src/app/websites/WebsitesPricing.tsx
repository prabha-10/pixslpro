"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "5-7 page professional website (WordPress or Next.js)",
  "Brand identity (logo, colours, typography, guidelines)",
  "Mobile-optimised & performance-tuned",
  "Contact form + WhatsApp click-to-chat",
  "On-page SEO setup (meta tags, sitemap, alt text)",
  "Google Analytics & Search Console configuration",
  "Figma source files included",
  "2 rounds of revisions",
  "Delivered in 10-14 days",
  "1 month hosting included",
];

export default function WebsitesPricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">PRICING</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            One package. Everything included. No surprises.
          </motion.h2>
        </div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-[#E8602A]/50 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-lg font-bold text-[#FF8A5C] block mb-2">
                Launchpad — Website Design & Redesign
              </span>
              <div className="flex items-end gap-2">
                <span className="text-5xl md:text-6xl font-black text-white">$900</span>
                <span className="text-gray-500 font-medium pb-2">/ One-time</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#E8602A] hover:bg-[#D94420] text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(232,96,42,0.3)] text-center"
            >
              Book A Call to Get Started
            </Link>
          </div>

          <div className="border-t border-white/10 pt-8">
            <span className="text-sm font-semibold text-white block mb-6 uppercase tracking-wider">
              Everything included:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#E8602A] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Retainer Add-On */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-white/[0.03] to-[#E8602A]/10 border border-[#E8602A]/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#E8602A]/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex-1">
            <h4 className="text-2xl font-bold text-white mb-3">Keep it running. Keep it growing.</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              After launch, most clients move to a retainer — website updates within 48 hours, SEO monitoring, blog automation, form fixes, and a monthly strategy call. One person who knows your site inside out.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end shrink-0 relative z-10">
            <span className="text-2xl font-black text-white mb-2">
              From $350<span className="text-lg text-gray-500 font-medium">/month</span>
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
