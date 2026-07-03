import type { Metadata } from "next";
import { Mail, CalendarCheck } from "lucide-react";
import { BOOKING_URL, SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a free discovery call with PIXSL. We'll map your needs, identify the highest-impact website or AI agent for your B2B service business, and scope it — no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative pt-40 md:pt-48 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8602A]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#E8602A] animate-pulse" />
            Open for Projects — Q2 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Let&apos;s scope your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A5C] to-[#E8602A]">
              website or AI agent
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Book a free discovery call. We&apos;ll map your processes, identify the
            highest-impact thing to build first, and scope it — no obligation.
            You&apos;ll leave the call with clarity, whether you work with us or not.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {BOOKING_URL ? (
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
              <iframe
                src={BOOKING_URL}
                title="Book a discovery call with PIXSL"
                className="w-full h-[720px] border-0"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-16 text-center shadow-2xl max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-[#E8602A]/15 border border-[#E8602A]/30 flex items-center justify-center mx-auto mb-6">
                <CalendarCheck className="w-7 h-7 text-[#FF8A5C]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Email us to grab a slot
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Send a one-line note about what you&apos;re building and we&apos;ll
                reply within 48 hours with a couple of times to talk.
              </p>
              <a
                href={`mailto:${SITE_EMAIL}?subject=Discovery%20Call`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8602A] hover:bg-[#D94420] text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(232,96,42,0.4)] hover:shadow-[0_0_30px_rgba(232,96,42,0.6)] text-lg"
              >
                <Mail className="w-5 h-5" />
                {SITE_EMAIL}
              </a>
            </div>
          )}

          <p className="text-center text-gray-500 mt-8 text-sm">
            Prefer email? Reach us any time at{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-[#FF8A5C] hover:text-white transition-colors font-medium"
            >
              {SITE_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
