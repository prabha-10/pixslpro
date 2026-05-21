"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/websites", label: "Websites" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto glass rounded-full px-6 py-3 border border-white/5 shadow-lg shadow-black/20">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-bold text-xl tracking-tight text-white uppercase">PIXSL.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-white transition-colors ${
                    isActive ? "text-[#E8602A]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium bg-[#E8602A] hover:bg-[#D94420] text-white rounded-full transition-all shadow-[0_0_20px_rgba(232,96,42,0.3)] hover:shadow-[0_0_25px_rgba(232,96,42,0.5)]"
            >
              Book A Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[76px] z-40 px-4"
          >
            <div className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium py-2 transition-colors ${
                      isActive ? "text-[#E8602A]" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 text-center font-medium bg-[#E8602A] hover:bg-[#D94420] text-white rounded-full transition-all"
              >
                Book A Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
