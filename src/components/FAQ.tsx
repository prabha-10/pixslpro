"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  headline?: string;
  items?: { question: string; answer: string }[];
}

const defaultFaqs = [
  {
    question: "What kind of businesses does PIXSL work with?",
    answer:
      "B2B service businesses between 5-50 employees — consulting firms, staffing agencies, real estate companies, coaching businesses, legal firms, and logistics companies. If you sell services to other businesses and your digital setup isn't keeping up with your growth, we're built for you.",
  },
  {
    question: "Do I need both a website and AI agents?",
    answer:
      "Not necessarily. Some clients come to us for a website redesign and never touch AI. Others already have a website and just want AI agents handling their lead follow-up. We scope based on what you actually need — not what we want to sell.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Websites take 10-14 days from brief to launch. AI agents take 2-4 weeks depending on complexity. We move fast because every project starts with thorough scoping and design approval — no scope creep, no back-and-forth for months.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. We work with B2B service businesses across the US, UK, UAE, Canada, Australia, Singapore, and the EU. Everything is remote. Same quality, same speed, regardless of timezone. We quote in your local currency.",
  },
  {
    question: "What happens after delivery?",
    answer:
      "Every project comes with full documentation and a walkthrough. Most clients move to a retainer — website updates, AI agent monitoring and tuning, new automation flows built monthly, and a strategy call to plan what's next. One team, always available.",
  },
];

export default function FAQ({ headline = "Common Questions", items }: FAQProps) {
  const faqs = items || defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            {headline}
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white/[0.04] border-[#E8602A]/50 shadow-lg shadow-[#E8602A]/10"
                    : "bg-[#111111] border-[#222222] hover:bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span
                    className={`font-semibold text-lg md:text-xl transition-colors ${
                      isOpen ? "text-[#E8602A]" : "text-gray-200"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-[#E8602A]/20" : "bg-white/5"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#E8602A]" : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
