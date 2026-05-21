"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SplineScene from "@/components/SplineScene";

const stats = [
  { value: "14", label: "Day Website Delivery" },
  { value: "100%", label: "Leads Captured" },
  { value: "24/7", label: "AI Agents Working" },
  { value: "48h", label: "Retainer Response Time" },
];

export default function Hero() {
  return (
    <section className="relative pt-48 md:pt-64 pb-12 overflow-hidden flex flex-col items-center justify-start min-h-screen bg-[#0A0A0A]">
      
      {/* Background Spline Design */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-start justify-center opacity-60 pt-20 md:pt-32">
        <div className="w-full h-full max-w-[1400px] max-h-[800px] flex items-center justify-center">
          <SplineScene scene="https://prod.spline.design/WWLWmkxHs0fXE34q/scene.splinecode" />
        </div>
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8602A]/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Status Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-8"
        >
           <span className="w-2 h-2 rounded-full bg-[#E8602A] animate-pulse" />
           <span>Open for Projects — Q2 2026</span>
        </motion.div>

        <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="text-4xl md:text-[4rem] lg:text-[5.5rem] font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-7xl mx-auto"
        >
           Your Business Has Outgrown <br className="hidden md:block" />
           Your Systems. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A5C] to-[#E8602A]">We Fix That.</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto font-medium"
        >
           PIXSL builds websites, lead generation systems, and AI agents for B2B service businesses — so you stop losing credibility, stop losing leads, and stop running your operations on spreadsheets and hope.
        </motion.p>

        {/* CTAs */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
           <Link
              href="/contact"
              className="px-10 py-5 bg-[#E8602A] hover:bg-[#D94420] text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(232,96,42,0.4)] hover:shadow-[0_0_40px_rgba(232,96,42,0.6)] flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
           >
              Book A Call
           </Link>
           <Link
              href="#work"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
           >
              <ArrowUpRight className="w-5 h-5 text-[#E8602A]" />
              See Our Work
           </Link>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.5 }}
         className="relative z-20 w-full max-w-6xl mx-auto px-6 mt-auto mb-20"
      >
         <div className="bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-between shadow-[0_0_60px_rgba(0,0,0,0.6)] md:divide-x divide-white/10">
            {stats.map((stat, i) => (
               <div
                  key={i}
                  className={`flex flex-col items-center md:items-start text-center md:text-left gap-1 px-4 ${
                     i > 0 ? "md:pl-10" : ""
                  }`}
               >
                  <h4 className="text-4xl lg:text-5xl font-black text-white tracking-tight">{stat.value}</h4>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
                     {stat.label}
                  </span>
               </div>
            ))}
         </div>
      </motion.div>
    </section>
  );
}
