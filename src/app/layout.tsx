import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "PIXSL — Websites & AI Agents for B2B Service Businesses",
  description: "PIXSL builds professional websites and implements AI agents for B2B service businesses. From website redesign to intelligent automation — built fast, maintained forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} ${manrope.className} bg-[#0A0A0A] text-[#FAFAFA] antialiased overflow-x-hidden min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
