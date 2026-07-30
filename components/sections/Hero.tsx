"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Layers, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import TypewriterText from "@/components/effects/TypewriterText";

const portalCards = [
  {
    id: 0, num: "01", label: "Enterprise Systems & E-Commerce",
    sub: "Doha Corporate HQ Team", image: "/hero-team.png", accent: "#FF006E",
    icon: Layers,
    desc: "Bespoke ERP systems, Qatar WPS-compliant HRMS & payroll, and premium e-commerce setups for personal brands."
  },
  {
    id: 1, num: "02", label: "AI & Workflow Automation",
    sub: "Kochi Infopark AI Lab", image: "/ai-automation.png", accent: "#8B5CF6",
    icon: Cpu,
    desc: "Bespoke LLM integrations, robotic process automation pipelines, database syncs, and intelligent neural assistants."
  },
  {
    id: 2, num: "03", label: "Advanced Security Solutions",
    sub: "Doha Security Operations", image: "/security-biometrics.png", accent: "#00F5FF",
    icon: ShieldCheck,
    desc: "Advanced biometric access control systems and enterprise network hardening solutions integrated natively into your ERP."
  }
];

export default function Hero() {
  const [activePanel, setActivePanel] = useState(0);
  const { scrollY } = useScroll();

  const yHero = useTransform(scrollY, [0, 600], [0, 80]);
  const scaleHero = useTransform(scrollY, [0, 600], [1, 0.95]);
  const yCard0 = useTransform(scrollY, [0, 600], [-30, -60]);
  const yCard1 = useTransform(scrollY, [0, 600], [0, 10]);
  const yCard2 = useTransform(scrollY, [0, 600], [30, 80]);
  const rotCard0 = useTransform(scrollY, [0, 600], [-6, -2]);
  const rotCard1 = useTransform(scrollY, [0, 600], [2, 5]);
  const rotCard2 = useTransform(scrollY, [0, 600], [8, 12]);
  const opacityDial = useTransform(scrollY, [0, 450], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-space-void flex items-center min-h-screen pt-20">
      {/* Perspective Grid Floor */}
      <div className="perspective-grid" />

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(255,0,110,0.2) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="kaa-container relative z-10 py-12 sm:py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-neon-cyan/20 bg-neon-cyan/5 backdrop-blur-sm mx-auto lg:mx-0 w-fit"
            >
              <Sparkles size={12} className="text-neon-cyan animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neon-cyan">
                Next-Gen AI &amp; Enterprise Platforms
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold leading-[1.05] tracking-tight mb-4 text-white"
              style={{ fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)" }}
            >
              Elite Digital Solutions <br />
              For Real Business <br />
              <span className="gradient-text-neon">Scale &amp; Security</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{">"}</span>
              <TypewriterText
                texts={["ERP Systems", "AI Automation", "Security Solutions", "Custom Websites", "Cloud & Cybersecurity", "24/7 IT Support"]}
                className="text-neon-cyan text-lg font-mono"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-slate-400"
            >
              Headquartered in Doha, Qatar with our core engineering center in Kochi, India, we build compliant ERP systems, secure biometric security layouts, and custom AI automations designed for realistic corporate performance.
            </motion.p>

            {/* Panel Selector */}
            <motion.div
              style={{ opacity: opacityDial }}
              className="hidden sm:flex flex-col gap-3 mb-8 max-w-md"
            >
              {portalCards.map((panel, idx) => {
                const PanelIcon = panel.icon;
                const isSelected = activePanel === idx;
                return (
                  <button
                    key={panel.id}
                    onClick={() => setActivePanel(idx)}
                    className="flex items-center gap-4 p-3.5 rounded-2xl border text-left transition-all duration-300 backdrop-blur-md relative cursor-pointer group"
                    style={{
                      backgroundColor: isSelected ? "rgba(0,245,255,0.03)" : "rgba(255,255,255,0.01)",
                      borderColor: isSelected ? panel.accent : "rgba(0, 245, 255, 0.06)",
                      boxShadow: isSelected ? `0 4px 25px ${panel.accent}18, 0 0 15px ${panel.accent}08` : "none"
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300"
                      style={{
                        backgroundColor: isSelected ? `${panel.accent}15` : "rgba(0,245,255,0.02)",
                        borderColor: isSelected ? `${panel.accent}30` : "rgba(0,245,255,0.08)"
                      }}
                    >
                      <PanelIcon size={16} style={{ color: isSelected ? panel.accent : "#64748B" }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 leading-none mb-1">
                        <span style={{ color: panel.accent }}>{panel.num}</span>
                        <span>•</span>
                        <span>{panel.sub}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-display font-bold text-white leading-none">{panel.label}</div>
                    </div>
                    {isSelected && (
                      <motion.div
                        layoutId="active-dial"
                        className="absolute right-4 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: panel.accent, boxShadow: `0 0 8px ${panel.accent}` }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button onClick={() => scrollTo("#contact")} className="btn-neon group">
                <span>Consult Our Architects</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo("#services")} className="btn-outline">
                Explore Verticals
              </button>
            </motion.div>
          </div>

          {/* Right Column: Parallax Card Deck */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[520px] sm:min-h-[600px] lg:min-h-[640px] mt-12 lg:mt-0">
            <motion.div
              style={{ y: yHero, scale: scaleHero }}
              className="relative w-full max-w-[560px] sm:max-w-[620px] aspect-[4/5] flex items-center justify-center"
            >
              {portalCards.map((panel, idx) => {
                const isSelected = activePanel === idx;
                let yOffset = yCard1, rotOffset = rotCard1, scaleVal = 0.94, zIndex = 10, translateX = 0;

                if (idx === 0) { yOffset = yCard0; rotOffset = rotCard0; scaleVal = 0.90; translateX = -35; zIndex = isSelected ? 30 : 15; }
                else if (idx === 2) { yOffset = yCard2; rotOffset = rotCard2; scaleVal = 0.88; translateX = 35; zIndex = isSelected ? 30 : 12; }
                else { zIndex = isSelected ? 30 : 20; }

                if (isSelected) { scaleVal = 1.02; translateX = 0; yOffset = yCard1; }

                return (
                  <motion.div
                    key={panel.id}
                    style={{
                      y: yOffset, rotate: rotOffset, scale: scaleVal, x: translateX, zIndex,
                      borderColor: isSelected ? panel.accent : "rgba(0, 245, 255, 0.08)",
                      boxShadow: isSelected
                        ? `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${panel.accent}20`
                        : "0 10px 30px rgba(0,0,0,0.5)"
                    }}
                    onClick={() => setActivePanel(idx)}
                    className="absolute w-[96%] sm:w-[98%] aspect-[4/3] rounded-[2rem] overflow-hidden p-2.5 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/5 border shadow-2xl transition-all duration-500 cursor-pointer group select-none"
                  >
                    <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full bg-space-surface">
                      <Image src={panel.image} alt={panel.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />

                      {panel.id === 0 && (
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute bottom-3 right-3 w-32 aspect-[16/10] rounded-lg overflow-hidden border border-neon-cyan/15 shadow-2xl z-20 hidden sm:block"
                        >
                          <Image src="/kaa-screenshot.jpg" alt="ERP Preview" fill className="object-cover" />
                        </motion.div>
                      )}

                      {/* Bottom gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: panel.accent, boxShadow: `0 0 6px ${panel.accent}` }} />
                          <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">{panel.sub}</span>
                        </div>
                        <div className="text-xs font-display font-bold text-white mt-1 truncate">{panel.label}</div>
                      </div>

                      <div className="absolute inset-0 rounded-[1.5rem] border border-neon-cyan/5 pointer-events-none z-20" />
                    </div>
                  </motion.div>
                );
              })}

              {/* Atmospheric glows */}
              <div className="absolute -top-12 -left-12 w-44 h-44 bg-neon-magenta/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
              <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-neon-purple/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
