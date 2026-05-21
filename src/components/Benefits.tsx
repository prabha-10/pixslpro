"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Conversion-Optimized Designs",
    description: "Every pixel serves a purpose. We design digital experiences engineered specifically to turn B2B traffic into high-value leads and booked calls.",
    image: "/benefit-1.png",
    colSpan: "lg:col-span-3",
  },
  {
    title: "Your Personal 24/7 Sales Team",
    description: "Our custom AI agents never sleep. They instantly answer complex queries, qualify prospects, and seamlessly route hot leads directly to your inbox.",
    image: "/benefit-2.png",
    colSpan: "lg:col-span-3",
  },
  {
    title: "Lightning-Fast Execution",
    description: "Say goodbye to 3-month agency timelines. We leverage modern frameworks to deliver premium, functional websites in just 10-14 days.",
    image: "/benefit-3.png",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Flawless Technical Infrastructure",
    description: "Built on robust tech stacks like Next.js and secure APIs, ensuring your platform scales effortlessly without breaking a sweat.",
    image: "/benefit-4.png",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Data-Driven Growth Analytics",
    description: "Stop guessing what works. We integrate comprehensive analytics to measure engagement, track conversions, and continuously improve ROI.",
    image: "/benefit-5.png",
    colSpan: "lg:col-span-2",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 relative border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">WHY PIXSL</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            The unfair advantage for <br className="hidden md:block" />
            modern service businesses.
          </motion.h2>
        </div>

        {/* Bento Grid layout: 2 cols on md, 6 cols on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              /* On lg screens, the colSpan matches the layout array (3,3,2,2,2). On md screens, all use 1 column of the 2-column grid except the last one which will wrap. */
              className={`bg-[#0D0D0D] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col group hover:border-[#FF8A5C]/30 transition-colors shadow-2xl relative ${
                benefit.colSpan
              } ${index === 4 ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"}`}
            >
              {/* Subtle Glowing Background layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FF8A5C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Image Container (Top of the Bento Card) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black/50 border-b border-white/5">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_20%] opacity-90 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                {/* Gradient Fades for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 z-10 opacity-80" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10" />
              </div>

              {/* Text Content (Bottom of the Bento Card) */}
              <div className="p-8 md:p-10 flex-1 flex flex-col relative z-20 bg-[#0D0D0D]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
