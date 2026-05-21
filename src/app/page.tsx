import Hero from "@/components/Hero";
import TwoPillars from "@/components/TwoPillars";
import Benefits from "@/components/Benefits";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TwoPillars />
      <Benefits />
      <Industries />
      <Projects />
      <Process />
      <Pricing />
      <FAQ />
      <CTABanner />
    </div>
  );
}
