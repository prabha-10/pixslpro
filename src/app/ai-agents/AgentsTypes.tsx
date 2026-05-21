"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Headphones, Settings, GitBranch } from "lucide-react";

const agents = [
  {
    icon: <Target className="w-6 h-6 text-[#E8602A]" />,
    title: "Lead Qualification Agent",
    what: "An AI agent that lives on your website (or WhatsApp) and handles inbound enquiries 24/7. It answers prospect questions using your actual service information, qualifies them against your criteria, captures their details into your CRM, and either books a call or routes them to your team — all without human involvement.",
    replaces: [
      "A team member answering the same 20 questions every day",
      "Leads going cold because nobody replied at 10pm on a Friday",
      "Unqualified prospects taking up your sales team's time",
    ],
    example:
      "A consulting firm gets 30+ enquiries per month. Before: 40% went unanswered within 24 hours. After: 100% answered in under 30 seconds, qualified, and routed — leads that fit get a call booked automatically.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-[#E8602A]" />,
    title: "Customer Service Agent",
    what: "An AI agent trained on your documentation, FAQs, and service details that handles existing client queries — project status questions, onboarding instructions, document requests, scheduling, and routine support. It knows your business because we train it on YOUR data, not generic knowledge.",
    replaces: [
      "Your team answering the same support questions repeatedly",
      "Clients waiting 24-48 hours for simple answers",
      "A shared inbox that nobody owns",
    ],
    example:
      "A staffing agency spends 15+ hours per week answering candidate and client queries about placement status. An AI agent trained on their process handles 80% of those queries instantly — the team only gets involved for exceptions.",
  },
  {
    icon: <Settings className="w-6 h-6 text-[#E8602A]" />,
    title: "Internal Operations Agent",
    what: "An AI agent that automates internal workflows — pulling data from emails and turning it into structured reports, auto-generating meeting summaries, drafting client proposals from templates, processing invoices, or compiling weekly metrics from multiple tools into one dashboard.",
    replaces: [
      "Weekly reporting compiled manually from 4 different sources",
      "Data entry from emails into spreadsheets",
      "Document generation that takes hours of copy-paste",
    ],
    example:
      "A logistics company's ops team spends 8 hours every Monday compiling a weekly performance report from Google Sheets, email chains, and a tracking tool. An AI agent now pulls the data, generates the report, and delivers it to Slack by 8am — zero human effort.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-[#E8602A]" />,
    title: "Multi-Step Process Agent",
    what: "A system of coordinated AI agents that handles an entire business process end-to-end — new client onboarding, RFP response generation, or multi-stage approval workflows. These aren't single chatbots — they're digital workflows where each agent handles one step and passes to the next.",
    replaces: [
      "A 12-step onboarding process managed in email and hope",
      "RFP responses that take 3 days of copy-paste from old proposals",
      "Multi-department approval chains tracked on spreadsheets",
    ],
    example:
      "A consulting firm's client onboarding involved 14 manual steps across 3 people over 5 days. A multi-agent system now handles it in under 24 hours — document collection, CRM entry, project setup, welcome email, and team assignment — all automated with human review only at the approval gate.",
  },
];

export default function AgentsTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="agents" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">AI AGENTS WE IMPLEMENT</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Four types of AI agents. Each one replaces hours of manual work every week.
          </motion.h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {agents.map((agent, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                activeIndex === index
                  ? "bg-[#E8602A] text-white shadow-[0_0_15px_rgba(232,96,42,0.3)]"
                  : "bg-[#111111] border border-[#222222] text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {agent.icon}
              <span className="hidden sm:inline">{agent.title}</span>
            </button>
          ))}
        </div>

        {/* Active Agent Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111111] border border-[#222222] rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#E8602A]/10 border border-[#E8602A]/20 flex items-center justify-center">
                {agents[activeIndex].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {agents[activeIndex].title}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-bold text-[#E8602A] uppercase tracking-wider mb-4">
                  What it does
                </h4>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {agents[activeIndex].what}
                </p>

                <h4 className="text-sm font-bold text-[#E8602A] uppercase tracking-wider mb-4">
                  What it replaces
                </h4>
                <ul className="space-y-3">
                  {agents[activeIndex].replaces.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8602A] shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                <h4 className="text-sm font-bold text-emerald-400/80 uppercase tracking-wider mb-4">
                  Real Example
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {agents[activeIndex].example}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
