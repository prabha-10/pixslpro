"use client";

import { motion } from "framer-motion";
import { Building2, Users, Home, GraduationCap, Scale, Truck } from "lucide-react";

const industries = [
  {
    icon: <Building2 className="w-6 h-6 text-[#E8602A]" />,
    name: "Consulting & Advisory Firms",
    description: "You built your reputation in person. Your website should reflect that. We build sites for consultancies that need credibility online — fast.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#E8602A]" />,
    name: "Staffing & Recruitment Agencies",
    description: "You're placing candidates and growing fast. Your website still looks like it did when you had 5 people. Time to fix that.",
  },
  {
    icon: <Home className="w-6 h-6 text-[#E8602A]" />,
    name: "Real Estate & Property Services",
    description: "High-value deals start with first impressions. If your website isn't converting enquiries, every day without a redesign costs money.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#E8602A]" />,
    name: "Coaching & Training Businesses",
    description: "You're selling courses and programs online. A DIY website is undermining the premium experience you deliver.",
  },
  {
    icon: <Scale className="w-6 h-6 text-[#E8602A]" />,
    name: "Legal & Accounting Firms",
    description: "Conservative industries still need modern websites. Trust starts on Google before it starts in your office.",
  },
  {
    icon: <Truck className="w-6 h-6 text-[#E8602A]" />,
    name: "Logistics & Facilities Management",
    description: "Operations-heavy businesses need clean, professional sites that communicate scale and reliability — not template-looking pages.",
  },
];

export default function WebsitesIndustries() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">BUILT FOR</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            We build websites for B2B service businesses. Here&apos;s who gets the most value.
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
              className="bg-[#111111] border border-[#222222] rounded-2xl p-7 hover:border-[#E8602A]/30 transition-all"
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
