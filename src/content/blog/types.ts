import type { ReactNode } from "react";

export interface PostMeta {
  /** URL slug under /blog */
  slug: string;
  /** Page <title> (the layout template appends " | PIXSL") */
  title: string;
  /** Meta description + OG description */
  description: string;
  /** One-line summary shown on the blog index card */
  excerpt: string;
  /** ISO date, used for <time datetime> and schema datePublished */
  date: string;
  /** Human-readable date for display, e.g. "18 June 2026" */
  dateLabel: string;
  /** Approximate reading time, e.g. "8 min read" */
  readingTime: string;
  /** Pillar/category label, e.g. "AI Agents" */
  category: string;
  /** Optional keyword hints for metadata */
  keywords?: string[];
}

export interface Post extends PostMeta {
  /** The rendered article body (server-rendered React nodes) */
  content: ReactNode;
}
