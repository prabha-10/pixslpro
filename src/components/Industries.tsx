"use client";

import { motion } from "framer-motion";
import { Building2, Users, Home, GraduationCap, Scale, Truck } from "lucide-react";

const industries = [
  {
    icon: <Building2 className="w-6 h-6 text-[#E8602A]" />,
    name: "Consulting & Advisory",
    description: "Your reputation is built in boardrooms. Your website should match.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E8602A]" />,
    name: "Staffing & Recruitment",
    description: "You're managing hundreds of candidates. Your systems should keep up.",
  },
  {
    icon: <Home className="w-6 h-6 text-[#E8602A]" />,
    name: "Real Estate & Property",
    description: "High-value deals deserve better than WhatsApp follow-ups.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#E8602A]" />,
    name: "Coaching & Training",
    description: "You're growing fast online. Your backend shouldn't be duct tape.",
  },
  {
    icon: <Scale className="w-6 h-6 text-[#E8602A]" />,
    name: "Legal & Accounting",
    description: "Trust starts before the first meeting — on your website.",
  },
  {
    icon: <Truck className="w-6 h-6 text-[#E8602A]" />,
    name: "Logistics & Operations",
    description: "If your operations run on Excel, we have a conversation to have.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">BUILT FOR SERVICE BUSINESSES</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            We work with B2B service companies between 5-50 people who know their digital setup isn&apos;t where it should be.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-7 hover:border-[#E8602A]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
