import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import BusinessProblems from "@/components/sections/BusinessProblems";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import ERPShowcase from "@/components/sections/ERPShowcase";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import StarfieldCanvas from "@/components/effects/StarfieldCanvas";
import ChatAssistant from "@/components/ui/ChatAssistant";
import MotionProvider from "@/components/ui/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900">Skip to content</a>
      <StarfieldCanvas />
      <Navbar />
      <main id="main-content" className="relative z-[1]">
        <Hero />
        <Stats />
        <About />
        <BusinessProblems />
        <WhyChooseUs />
        <Services />
        <ERPShowcase />
        <Process />
        <Portfolio />
        <Industries />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </MotionProvider>
  );
}
