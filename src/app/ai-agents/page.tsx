import type { Metadata } from "next";
import AgentsHero from "./AgentsHero";
import AgentsProblem from "./AgentsProblem";
import AgentsTypes from "./AgentsTypes";
import AgentsProcess from "./AgentsProcess";
import AgentsWhyUs from "./AgentsWhyUs";
import AgentsPricing from "./AgentsPricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "AI Agents for B2B Service Businesses | PIXSL",
  description:
    "Custom AI agents for B2B service businesses — lead qualification, customer enquiries, internal automation, and process agents. Implemented in weeks. No hype. Just agents that work.",
};

const agentFaqs = [
  {
    question: "What exactly is an AI agent?",
    answer:
      "An AI agent is software that uses artificial intelligence to perform tasks autonomously — answering customer questions, qualifying leads, processing data, or executing multi-step workflows. Unlike a simple chatbot that follows a script, an AI agent understands context, makes decisions, and takes action based on your business rules.",
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT is a general-purpose tool that knows everything about nothing specific. An AI agent we build is trained on YOUR business data — your services, your pricing, your FAQs, your qualification criteria. It answers questions about YOUR business accurately, connects to YOUR CRM, and follows YOUR processes. It's the difference between a generic assistant and a team member who knows the playbook.",
  },
  {
    question: "Will the AI agent give wrong answers to my customers?",
    answer:
      "We design every agent with guardrails. It only answers questions it's been trained on. When it encounters something outside its scope, it escalates to a human — cleanly, with full context. We also test extensively against real queries and edge cases before deployment. The goal is an agent that's helpful 90% of the time and gracefully hands off the other 10%.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "We use the right tool for the job — OpenAI (GPT-4), Anthropic (Claude), or open-source models depending on your requirements, privacy needs, and budget. For workflow automation we use N8N. For deployment we integrate with your existing stack — your website, WhatsApp, Slack, CRM, email, or whatever tools you already use. No new platforms to learn.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "A single AI agent (lead qualification bot, FAQ agent, internal automation) takes 2-3 weeks. A multi-agent system (end-to-end onboarding, complex workflows) takes 4-6 weeks. The first week is always discovery and process mapping — we don't rush into building without understanding the problem deeply.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None. We handle everything — from process mapping to deployment to monitoring. We deliver documentation and a walkthrough so you understand how it works, but you never need to touch code or configure anything yourself.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's exactly what the discovery call is for. We'll map your business processes, identify where AI can have the highest impact, and recommend the right starting point. No pressure to buy. The call is free and you'll leave with clarity on what's possible — whether you work with us or not.",
  },
  {
    question: "Can the AI agent connect to my existing tools?",
    answer:
      "Yes. We integrate with CRMs (Notion, Airtable, HubSpot), communication tools (WhatsApp, Slack, email), databases, Google Workspace, scheduling tools (Calendly), and most platforms that have an API. If your tool has an API, we can connect to it.",
  },
];

export default function AIAgentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AgentsHero />
      <AgentsProblem />
      <AgentsTypes />
      <AgentsProcess />
      <AgentsWhyUs />
      <AgentsPricing />
      <FAQ headline="Questions About AI Agents" items={agentFaqs} />
      <CTABanner
        headline="Your team is doing work that AI should handle. Let's figure out what to automate first."
        body="Book a free discovery call. We'll map your processes, identify the highest-impact AI agent for your business, and scope it — no obligation. You'll leave the call knowing exactly what's possible."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
