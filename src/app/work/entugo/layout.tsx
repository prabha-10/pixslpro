import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// The Entugo page is a Client Component (framer-motion animations), so its
// metadata and structured data live here in a server layout for the segment.

const title = "Entugo — Web Dashboard Case Study";
const description =
  "How PIXSL designed and built Entugo — an operating system for independent restaurants, from research to a shipped product spanning inventory, loyalty, menus, and reviews.";
const pageUrl = `${SITE_URL}/work/entugo`;
const image = `${SITE_URL}/portfolio/entugo/dashboard.png`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/entugo" },
  openGraph: {
    type: "article",
    title,
    description,
    url: pageUrl,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: pageUrl,
    image,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: "Entugo", item: pageUrl },
    ],
  },
];

export default function EntugoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={structuredData} />
      {children}
    </>
  );
}
