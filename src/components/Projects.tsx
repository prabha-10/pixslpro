"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Advisory Firm Website Redesign",
    tag: "Websites",
    category: "Website Design + Brand Identity",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "AI Lead Qualification Agent",
    tag: "AI Agents",
    category: "Custom AI Agent + CRM Integration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Logistics Operations Dashboard",
    tag: "Websites",
    category: "Custom Web Application",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4bffa41?q=80&w=2076&auto=format&fit=crop",
  },
  {
    title: "24/7 Client Enquiry Agent",
    tag: "AI Agents",
    category: "AI Chatbot + WhatsApp Automation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Selected Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 font-medium group"
            >
              View All Work
              <ArrowUpRight className="w-5 h-5 text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-[#E8602A]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Service Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      project.tag === "Websites"
                        ? "bg-[#E8602A]/90 text-white"
                        : "bg-white/90 text-[#0A0A0A]"
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-[#E8602A] flex items-center justify-center shadow-xl shadow-[#E8602A]/20">
                    <span className="text-white font-bold text-sm tracking-wider uppercase">View</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF8A5C] transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide font-semibold">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
