"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABanner({
  headline = "Outdated website. Leads going cold. Manual processes eating your team's time. Pick your problem.",
  body = "Whether it's a website that doesn't reflect your business or operations that should be handled by AI — we've built the fix. One call to scope it. Weeks to deliver it.",
  ctaText = "Book A Call",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/5 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#E8602A]/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#E8602A]/20 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E8602A]/30 blur-[60px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            {headline}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            {body}
          </p>

          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8602A] hover:bg-[#D94420] text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(232,96,42,0.4)] hover:shadow-[0_0_30px_rgba(232,96,42,0.6)] text-lg group"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
