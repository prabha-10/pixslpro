"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Brain, 
  Wallet, 
  HandMetal, 
  Zap, 
  ShieldCheck, 
  LayoutGrid, 
  Repeat,
  Smartphone,
  Globe,
  Database,
  BarChart3,
  QrCode
} from "lucide-react";
import Image from "next/image";

// Framer motion variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function EntugoCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] font-manrope selection:bg-[#E8602A]/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full noise opacity-20" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8602A]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-[#E8602A]/10 text-[#FF8A5C] border border-[#E8602A]/30">
                UX Case Study • B2B2C Platform
              </motion.span>
              <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[0.9] tracking-tight">
                The <span className="text-[#FF8A5C]">Zero-Commission</span> <br />
                Growth Engine
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-xl font-medium leading-relaxed mb-8">
                Helping independent restaurants acquire new customers and turn them into loyal regulars without paying high aggregator commissions.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-x-10 gap-y-6 mb-10">
                <div>
                  <div className="text-4xl font-playfair font-bold text-white leading-none">0%</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mt-2">Commission vs 30%</div>
                </div>
                <div>
                  <div className="text-4xl font-playfair font-bold text-white leading-none">100%</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mt-2">Data Ownership</div>
                </div>
                <div>
                  <div className="text-4xl font-playfair font-bold text-white leading-none">3</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mt-2">Connected Apps</div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#E8602A]" />
                  MERN Stack
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                  <Globe className="w-4 h-4 text-[#E8602A]" />
                  Berlin & Chennai
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                  <Zap className="w-4 h-4 text-[#E8602A]" />
                  Zero Commission
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-20 group bg-card">
                <Image 
                  src="/portfolio/entugo/dashboard.png" 
                  alt="Entugo Client Portal" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">Entugo Client Portal</h3>
                    <p className="text-gray-300 text-sm">Key KPIs, Revenue Tracking & CRM</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#E8602A]/5 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 md:py-32 relative bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="section-tag mb-4 inline-block text-red-500">The Problem</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight mb-6">
                Independent Restaurants are <span className="text-red-500">Bleeding</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Local heroes are losing the battle against major chains and delivery aggregators who charge 30% commissions and hide customer data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  High Aggregator Commissions (30%+)
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Zero Direct Customer Access
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Inability to Drive Return Footfall
                </div>
              </div>
            </div>
            <div className="md:col-span-1 hidden md:block" />
            <div className="md:col-span-6">
               <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl -z-10" />
                  <h3 className="text-2xl font-bold text-white mb-6">The Solution: Entugo</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    A unified ecosystem that shifts diner behavior from "Anonymous Delivery" to "Loyal Dine-In" at a flat SaaS price.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[#FF8A5C] font-bold text-xl mb-1">0%</div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">Commission</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[#FF8A5C] font-bold text-xl mb-1">100%</div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">Data Ownership</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Part Ecosystem */}
      <section className="py-24 md:py-32 relative bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="section-tag mb-4 inline-block">The Ecosystem</span>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">A Synchronized System</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Three core interfaces working in real-time to bridge the gap between digital rewards and physical dining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Brain",
                role: "Entugo Client Portal",
                desc: "Where owners manage menus, staff, and automated marketing campaigns (Email/Coupons).",
                icon: Brain,
                color: "bg-[#E8602A]"
              },
              {
                title: "The Wallet",
                role: "Tugo Eats App",
                desc: "The diner-facing hub for discovery, loyalty coins, and managing unlocked coupons.",
                icon: Wallet,
                color: "bg-[#FF8A5C]"
              },
              {
                title: "The Hands",
                role: "Staff Universal Scanner",
                desc: "A simple, secure operational tool for staff to verify rewards and redeem points.",
                icon: HandMetal,
                color: "bg-[#9CA3AF]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#E8602A]/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color}/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-6">{item.role}</p>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Secret Sauce Section */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#0D0D0D]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E8602A]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-tag mb-4 inline-block">The Secret Sauce</span>
              <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-tight">
                "Physical-First" <br /> Mechanic
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Unlike standard coupon apps where users claim deals from their couch, Entugo enforces **Footfall**.
              </p>
              
              <div className="space-y-12">
                {[
                  {
                    title: "The Unlock Trigger",
                    desc: "A 'Return Pass' (e.g., 20% Off) is visible in the app but LOCKED until the user is physically at the venue.",
                    icon: ShieldCheck
                  },
                  {
                    title: "The Action",
                    desc: "The user must scan the **Table QR** to unlock the deal. This guarantees a physical visit and order.",
                    icon: QrCode
                  },
                  {
                    title: "The Bounce Back",
                    desc: "Once unlocked, the deal is valid for the *next* visit, creating an infinite loop of retention.",
                    icon: Repeat
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-[#FF8A5C]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#E8602A]/20 to-transparent rounded-[3rem] border border-white/5 p-8 flex flex-col justify-end overflow-hidden relative group">
                <Image src="/portfolio/entugo/reach.png" alt="Marketplace Reach" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="relative z-10 p-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#E8602A] text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                    The Reach
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-white mb-4">Discovery Marketplace</h3>
                  <p className="text-gray-300">Turning casual browsers into physical diners through high-incentive discovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="section-tag mb-4 inline-block">Deep Dive</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white">Full-Stack Operations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
            {/* Feature 1: Inventory */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 glass p-10 rounded-[2.5rem] border-white/5 flex flex-col overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inventory Management</h3>
                  <p className="text-gray-400 max-w-md">Real-time stock tracking with automated low-stock alerts and purchase order generation.</p>
                </div>
                <LayoutGrid className="w-8 h-8 text-[#E8602A]" />
              </div>
              <div className="mt-auto relative w-full h-[200px] rounded-2xl overflow-hidden border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <Image src="/portfolio/entugo/inventory.png" alt="Inventory" fill className="object-cover object-top" />
              </div>
            </motion.div>

            {/* Feature 2: Loyalty */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 glass p-10 rounded-[2.5rem] border-white/5 flex flex-col group"
            >
              <Zap className="w-8 h-8 text-[#E8602A] mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Loyalty Engine</h3>
              <p className="text-gray-400 leading-relaxed mb-8">Configure Tugo Coin earn rates and "Max-Burn" protections to protect margins.</p>
              <div className="mt-auto relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                <Image src="/portfolio/entugo/loyalty.png" alt="Loyalty" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Feature 3: Menu */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 glass p-10 rounded-[2.5rem] border-white/5 flex flex-col group"
            >
               <Smartphone className="w-8 h-8 text-[#E8602A] mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Digital Menu Builder</h3>
              <p className="text-gray-400 leading-relaxed mb-8">Dynamic pricing and category management that updates the Guest Interface instantly.</p>
              <div className="mt-auto relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                <Image src="/portfolio/entugo/menu.png" alt="Menu" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Feature 4: Feedback */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 glass p-10 rounded-[2.5rem] border-white/5 flex flex-col overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Automated Google Reviews</h3>
                  <p className="text-gray-400 max-w-md">Private feedback aggregation that triggers a "Post to Google" prompt for 5-star ratings.</p>
                </div>
                <BarChart3 className="w-8 h-8 text-[#E8602A]" />
              </div>
              <div className="mt-auto relative w-full h-[200px] rounded-2xl overflow-hidden border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <Image src="/portfolio/entugo/reviews.png" alt="Reviews" fill className="object-cover object-top" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-24 md:py-32 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-tag mb-4 inline-block">The Architecture</span>
              <h2 className="text-5xl font-playfair font-bold text-white mb-8 leading-tight">Built for <br /> Financial Precision</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-12">
                A type-safe, high-concurrency architecture built on the MERN stack to ensure data integrity across thousands of simultaneous transactions.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Frontend", value: "React.js / Vite", icon: LayoutGrid },
                  { label: "Backend", value: "Node.js / Express", icon: Database },
                  { label: "Database", value: "PostgreSQL / Prisma", icon: Database },
                  { label: "Logic", value: "Strict TypeScript", icon: ShieldCheck }
                ].map((tech, i) => (
                  <div key={ tech.label } className="space-y-2">
                    <tech.icon className="w-5 h-5 text-[#E8602A]" />
                    <div className="text-white font-bold">{ tech.value }</div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest">{ tech.label }</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative p-1 glass rounded-[3rem] border-white/10 overflow-hidden">
               <div className="relative aspect-[4/3] rounded-[2.8rem] overflow-hidden">
                 <Image src="/portfolio/entugo/orders.png" alt="Order Logic" fill className="object-cover" />
               </div>
               {/* Overlay logic explanation */}
               <div className="absolute top-8 right-8 left-8 p-6 glass rounded-2xl border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Real-time Order Feed</span>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#E8602A]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                      <span>Status: Confirmed</span>
                      <span>Latency: 42ms</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & GTM Section */}
      <section className="py-24 md:py-40 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Target Launch</div>
              <div className="text-5xl md:text-7xl font-playfair font-bold text-white">Berlin</div>
              <div className="text-[#FF8A5C] text-sm mt-4 font-bold tracking-[0.3em] uppercase">Germany</div>
            </div>
            <div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Business Model</div>
              <div className="text-5xl md:text-7xl font-playfair font-bold text-white">0<span className="text-[#E8602A]">%</span></div>
              <div className="text-[#FF8A5C] text-sm mt-4 font-bold tracking-[0.3em] uppercase">Commission</div>
            </div>
            <div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Investment</div>
              <div className="text-5xl md:text-7xl font-playfair font-bold text-white">€100<span className="text-[#E8602A]">k</span></div>
              <div className="text-[#FF8A5C] text-sm mt-4 font-bold tracking-[0.3em] uppercase">Pre-Seed Raise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion case study + services */}
      <section className="py-20 md:py-28 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <span className="section-tag mb-4 block">Keep Exploring</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-10">
            The rest of the ecosystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/work/tugo-eats"
              className="group flex items-center justify-between gap-6 bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
            >
              <div>
                <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-2">
                  Companion case study
                </div>
                <div className="text-white text-xl font-bold leading-snug">
                  Tugo Eats: the diner-facing app
                </div>
                <p className="text-gray-400 mt-2">
                  The consumer app and physical-first loyalty mechanic.
                </p>
              </div>
              <ArrowUpRight className="w-7 h-7 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
            <Link
              href="/websites"
              className="group flex items-center justify-between gap-6 bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#E8602A]/30 transition-all"
            >
              <div>
                <div className="text-[#FF8A5C] text-xs font-bold uppercase tracking-widest mb-2">
                  The service behind it
                </div>
                <div className="text-white text-xl font-bold leading-snug">
                  Web design &amp; build
                </div>
                <p className="text-gray-400 mt-2">
                  How we design and ship products like this.
                </p>
              </div>
              <ArrowUpRight className="w-7 h-7 text-gray-500 group-hover:text-[#E8602A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to build your growth engine?"
        body="Let's create a custom ecosystem that scales with your business."
        ctaText="Book A Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
