"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Bot, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <Monitor className="w-7 h-7 text-[#E8602A]" />,
    title: "Website Design & Redesign",
    description:
      "Your website should match the quality of work you deliver. We build professional, fast-loading websites for B2B service businesses — designed in Figma, built in WordPress or Next.js, and delivered in 10-14 days. Brand identity included. SEO baked in. No 3-month timelines.",
    tags: ["Website Design", "Website Redesign", "WordPress", "Next.js", "Brand Identity", "SEO"],
    cta: "Explore Websites",
    href: "/websites",
  },
  {
    icon: <Bot className="w-7 h-7 text-[#E8602A]" />,
    title: "AI Agents for Business",
    description:
      "Your team is doing work that AI should be handling. We implement custom AI agents that answer enquiries 24/7, qualify leads automatically, generate reports from messy data, and automate the multi-step processes that are eating your team's time. Practical AI — mapped to your business, not just plugged in.",
    tags: ["AI Chatbots", "Lead Qualification", "Internal AI Assistants", "Process Automation", "Custom AI Agents"],
    cta: "Explore AI Agents",
    href: "/ai-agents",
  },
];

export default function TwoPillars() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 overflow-hidden">
      {/* Ruby Gradient Background Video */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/Ruby%20Gradients%20-%2006.jpeg')" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ruby-bg.webm" type="video/webm" />
        </video>
      </div>
      
      {/* Subtle Overlay to ensure text pops */}
      <div className="absolute inset-0 bg-[#0A0A0A]/30 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">WHAT WE BUILD</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Two problems. Two services. One team that handles both.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#0D0D0D] border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-white/10 transition-all group relative overflow-hidden flex flex-col h-full shadow-2xl"
            >
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Secondary Blueish Glow (Matches first image reference) */}
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[160%] h-[80%] bg-[#0095FF]/30 blur-[120px] rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Primary Deep Blue/Cyan Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[90%] bg-gradient-to-t from-[#0095FF]/40 via-[#0095FF]/10 to-transparent blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Grainy Texture Overlay */}
                <div className="noise" />
                
                {/* Clean Bottom Gradient Fill */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0095FF]/30 via-[#0095FF]/10 to-transparent opacity-90" />
              </div>

              {/* The "Border Beam" RGB Neon Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-[2rem]">
                {/* Rotating Beam with intense tail */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-rotate-beam"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 80%, #00d2ff 88%, #9f7aea 92%, #f66d9b 96%, #00d2ff 100%)",
                  }}
                />
                {/* Inner Mask/Cutout to reveal only the border edge */}
                <div className="absolute inset-[3px] bg-[#0D0D0D] rounded-[calc(2rem-3px)] z-10" />
              </div>
              
              <div className="relative z-30 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {/* Icons are now themed with the same blue/cyan */}
                  <div className="text-[#0095FF]">
                    {pillar.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-12 font-medium opacity-90">
                  {pillar.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mb-14">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-bold uppercase tracking-[0.1em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all text-base group/btn w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  >
                    {pillar.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
