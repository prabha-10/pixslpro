import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const defaultTitle = "PIXSL — Websites & AI Agents for B2B Service Businesses";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | PIXSL",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  ...(gscVerification
    ? { verification: { google: gscVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfair.variable} ${manrope.className} bg-[#0A0A0A] text-[#FAFAFA] antialiased overflow-x-hidden min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
