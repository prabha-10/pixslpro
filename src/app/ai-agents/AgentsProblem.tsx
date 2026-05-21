"use client";

import { motion } from "framer-motion";
import { Clock, MonitorX, UserMinus } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-7 h-7 text-[#E8602A]" />,
    title: "Your Team Is Doing Work That AI Should Handle",
    description:
      "Answering the same 20 questions from prospects. Manually entering data from emails into spreadsheets. Writing the same follow-up messages. Compiling weekly reports from 4 different tools. This work isn't complex — it's repetitive. And every hour your team spends on it is an hour they're not spending on work that actually grows the business.",
  },
  {
    icon: <MonitorX className="w-7 h-7 text-[#E8602A]" />,
    title: "You've Seen the Demos. None of Them Fit Your Business.",
    description:
      "You've watched the YouTube videos. You've tried ChatGPT. Maybe you even signed up for an AI chatbot tool and abandoned it after a week because it gave wrong answers and felt like a gimmick. The problem isn't AI — it's that nobody mapped it to YOUR business process before implementing it.",
  },
  {
    icon: <UserMinus className="w-7 h-7 text-[#E8602A]" />,
    title: "You Don't Have a Technical Team to Build This",
    description:
      "You know AI could help. You've read the articles. But you don't have developers, you don't want to hire developers, and you don't have 6 months to figure out LangChain. You need someone who understands business operations AND can implement the AI — not just one or the other.",
  },
];

export default function AgentsProblem() {
  return (
    <section className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="section-tag mb-4 block">THE REALITY</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Everyone is talking about AI. Almost nobody is implementing it properly.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#E8602A]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
