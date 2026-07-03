import type { Post } from "./types";
import { post as aiAgentCost } from "./ai-agent-implementation-cost-2026";
import { post as wordpressVsNextjs } from "./wordpress-vs-nextjs-business-website";

/**
 * Registry of all blog posts. Add a new post by importing it here.
 * Sorted newest-first by date for the index listing.
 */
const allPosts: Post[] = [aiAgentCost, wordpressVsNextjs].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

export type { Post, PostMeta } from "./types";
