"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WebsitesHero() {
  return (
    <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8602A]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Website Design & Redesign for Service Businesses{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A5C] to-[#E8602A]">
            That Deserve Better.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto font-medium"
        >
          Your business has grown. Your website hasn&apos;t. We design and build professional websites for B2B service businesses — from scratch or as a complete redesign — in 10-14 days. You see the design before we write a single line of code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#E8602A] hover:bg-[#D94420] text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(232,96,42,0.4)] hover:shadow-[0_0_30px_rgba(232,96,42,0.6)] flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
          >
            Book A Call
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
          >
            <ArrowUpRight className="w-5 h-5" />
            See Website Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
