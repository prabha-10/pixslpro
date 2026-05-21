"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const deliverables = [
  { item: "5-7 page professional website", detail: "Built in WordPress or Next.js based on your needs" },
  { item: "Brand identity", detail: "Logo, colour palette, typography, basic usage guidelines" },
  { item: "Figma-first design", detail: "You see and approve every screen before code is written" },
  { item: "Mobile-optimised", detail: "Responsive design that works perfectly on every device" },
  { item: "Fast-loading", detail: "Performance optimised — under 2 second load times" },
  { item: "Contact form + WhatsApp", detail: "Click-to-chat integration so enquiries reach you instantly" },
  { item: "On-page SEO setup", detail: "Meta titles, descriptions, alt tags, sitemap, robots.txt" },
  { item: "Google Analytics & Search Console", detail: "Configured and verified — you see your traffic from day one" },
  { item: "1 month hosting included", detail: "We handle the launch. You handle your business." },
];

export default function WebsitesSolution() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">WHAT YOU GET</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            A professional website that matches your reputation. Delivered in 14 days.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {deliverables.map((d, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-6 flex items-start gap-4 hover:border-[#E8602A]/20 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E8602A]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-[#E8602A]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{d.item}</h4>
                <p className="text-gray-400 text-sm">{d.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
