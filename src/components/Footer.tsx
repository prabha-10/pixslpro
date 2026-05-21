import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="font-bold text-2xl tracking-widest text-white uppercase">PIXSL.</span>
            </Link>
            <p className="text-[#FF8A5C] font-semibold text-lg tracking-wide uppercase mb-8">
              Build. Automate. Scale.
            </p>

            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 max-w-sm">
              <h4 className="text-white font-medium mb-3">Stay in the loop</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/50 border border-white/10 text-white text-sm rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-[#E8602A]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#E8602A] hover:bg-[#D94420] text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <Link href="/websites" className="hover:text-[#E8602A] transition">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="hover:text-[#E8602A] transition">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#E8602A] transition">
                  Retainers
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#E8602A] transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Socials</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#E8602A] transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8602A] transition">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8602A] transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8602A] transition">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 mb-8">
              <li>
                <Link href="/blog" className="hover:text-[#E8602A] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#E8602A] transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E8602A] transition">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@pixsl.pro"
                className="inline-flex items-center gap-2 text-[#FF8A5C] hover:text-white transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                hello@pixsl.pro
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-[#E8602A] transition-colors font-medium text-sm"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <div>PIXSL</div>
          <div>&copy; {new Date().getFullYear()} PIXSL. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
