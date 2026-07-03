import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => new URL(path, SITE_URL).toString();

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Canonical, indexable pages only. The redirected /portfolio/* paths are
  // intentionally excluded.
  return [
    { url: url("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: url("/websites"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/ai-agents"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/work"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/blog"), lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/contact"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: url("/work/entugo"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/work/tugo-eats"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    ...postEntries,
  ];
}
