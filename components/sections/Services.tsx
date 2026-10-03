"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Server, Shield, Megaphone, ShieldCheck, ArrowRight, Check, Cpu, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HolographicCard from "@/components/effects/HolographicCard";

const strategicVerticals = [
  {
    id: "enterprise-web", badge: "Strategic Vertical 01",
    title: "Enterprise ERP & Custom Web Platforms",
    subtitle: "Unified management systems & high-converting brand platforms",
    desc: "We construct bespoke business systems and gorgeous websites designed to scale. From Qatar WPS-compliant HRMS & payroll software to high-end e-commerce sites for personal brands and premium corporate platforms.",
    accent: "#FF006E", image: "/kaa-screenshot.jpg",
    tags: ["Enterprise ERP", "WPS HRMS", "E-Commerce", "Personal Brands"],
    icon: Layers,
    bullets: ["Qatar WPS-Compliant HR & Automated Payroll", "Real-Time Inventory, Procurement & Ledger Hub", "Premium E-Commerce Platforms for Personal Brands", "Bespoke Corporate Web App Architecture"]
  },
  {
    id: "ai-automation", badge: "Strategic Vertical 02",
    title: "Intelligent AI & Automated Workflows",
    subtitle: "Intelligent LLM agents, workflow engines, & robotic automation",
    desc: "Unleash the power of modern artificial intelligence and robotic process automation. We build custom LLM-powered AI assistants, automated pipeline workflows, intelligent predictive analytics, and seamless database integrations.",
    accent: "#8B5CF6", image: "/ai-automation.png",
    tags: ["LLM AI Agents", "RPA Workflows", "Predictive BI", "Smart DB Sync"],
    icon: Cpu,
    bullets: ["Bespoke LLM AI Assistants & Custom Chatbots", "Robotic Process Automation (RPA) Pipeline Workflows", "Intelligent Predictive Analytics & Real-Time Reporting", "Automated System Syncs & Third-Party Integrations"]
  },
  {
    id: "advanced-security", badge: "Strategic Vertical 03",
    title: "Advanced Security Solutions",
    subtitle: "Biometric attendance controllers, firewall hardening, & secure network architecture",
    desc: "State-of-the-art security installations to protect and secure your corporate digital environment. We deploy secure biometric attendance/access controls and robust network security protocols, fully integrated with your business networks.",
    accent: "#00F5FF", image: "/security-network.png",
    tags: ["Biometric Access", "Network Hardening", "Firewall Controls", "ERP Integration"],
    icon: ShieldCheck,
    bullets: ["Enterprise Biometric Access & Attendance System Integration", "Structural Network Hardening & Secure Storage Hubs", "Advanced Firewall Configuration & Threat Prevention", "Seamless Integration with Corporate ERP & HRMS"]
  }
];

const foundationalPillars = [
  {
    icon: Shield,
    title: "Is Your Business Data Safe?",
    desc: "KAA Technologies keeps your business protected 24/7. Because one mistake shouldn't cost you everything.",
    stat: "Security-first protection.",
    statSub: "One mistake shouldn’t cost you everything.",
    features: ["Firewall", "Anti-Virus", "Email Security", "Threat Detection", "Data Protection", "Secure Cloud"],
    accent: "#FF006E",
    isCyber: true,
  },
  {
    icon: Server,
    title: "24/7 IT Support & Managed Infrastructure",
    desc: "Round-the-clock proactive IT management, robust enterprise servers, high-speed structural networking, and cloud migration pipelines to keep your business always online.",
    stat: "24/7",
    statSub: "Always-on support",
    features: ["Network Management", "Cloud Migration", "Disaster Recovery", "IT Helpdesk", "Server Management", "Backup Systems"],
    accent: "#00F5FF",
    isCyber: false,
  },
  {
    icon: Megaphone,
    title: "Digital Branding & Growth Marketing",
    desc: "Strategic Search Engine Optimization (SEO), high-fidelity brand design, and high-impact digital campaigns to drive corporate visibility and business growth.",
    stat: "360°",
    statSub: "Digital presence",
    features: ["SEO Strategy", "Brand Design", "Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
    accent: "#8B5CF6",
    isCyber: false,
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollToContact = () => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); };
  const activeVertical = strategicVerticals[activeTab];

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-space-void">
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-neon-magenta/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-neon-purple/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 kaa-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">Our Focus Verticals</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h2 className="font-display font-bold leading-tight mb-6 text-white" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
              Strategic Core Solutions <br className="hidden sm:block" />
              <span className="gradient-text-neon">Driven by Technology</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base text-slate-400">
              We position your business for market leadership by organizing our capabilities into three high-performance technology verticals and core foundational infrastructure services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-16 max-w-4xl mx-auto">
            {strategicVerticals.map((vertical, idx) => {
              const TabIcon = vertical.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={vertical.id}
                  onClick={() => setActiveTab(idx)}
                  className="px-6 py-4 rounded-2xl text-xs sm:text-sm font-display font-semibold transition-all duration-300 relative flex items-center gap-3 overflow-hidden cursor-pointer"
                  style={{
                    background: isSelected ? "rgba(0, 245, 255, 0.03)" : "rgba(0, 245, 255, 0.01)",
                    border: isSelected ? `1px solid ${vertical.accent}` : "1px solid rgba(0, 245, 255, 0.06)",
                    color: isSelected ? "#FFFFFF" : "#94A3B8",
                    boxShadow: isSelected ? `0 0 20px ${vertical.accent}15` : "none"
                  }}
                >
                  <TabIcon size={16} style={{ color: isSelected ? vertical.accent : "#64748B" }} />
                  <span>{vertical.title.split(" & ")[0]}</span>
                  {isSelected && (
                    <motion.div layoutId="active-vertical-glow" className="absolute inset-0 -z-10 blur-sm"
                      style={{ background: `linear-gradient(135deg, ${vertical.accent}12 0%, rgba(139,92,246,0.08) 100%)` }} />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="relative mb-24 min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-neon-cyan/8 bg-neon-cyan/[0.02] backdrop-blur-sm w-fit">
                  <Sparkles size={12} style={{ color: activeVertical.accent }} className="animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500">{activeVertical.badge}</span>
                </div>
                <h3 className="font-display font-bold leading-tight mb-4 text-white text-2xl sm:text-3xl">{activeVertical.title}</h3>
                <p className="text-sm font-mono font-semibold mb-6 uppercase tracking-wider" style={{ color: activeVertical.accent }}>{activeVertical.subtitle}</p>
                <p className="text-sm sm:text-base leading-relaxed text-slate-400 mb-8">{activeVertical.desc}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {activeVertical.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border mt-0.5"
                        style={{ backgroundColor: `${activeVertical.accent}12`, borderColor: `${activeVertical.accent}25` }}>
                        <Check size={10} style={{ color: activeVertical.accent }} />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-neon-cyan/5">
                  <button onClick={scrollToContact} className="btn-pink group flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${activeVertical.accent}, ${activeVertical.accent}cc)`, boxShadow: `0 4px 20px ${activeVertical.accent}30` }}>
                    Deploy Solution <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="flex flex-wrap gap-2">
                    {activeVertical.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-md font-mono bg-neon-cyan/[0.03] border border-neon-cyan/8 text-slate-500">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative flex justify-center items-center">
                <div className="absolute inset-0 rounded-[2rem] opacity-25 blur-3xl pointer-events-none transform scale-95"
                  style={{ background: `radial-gradient(circle, ${activeVertical.accent}30 0%, rgba(139,92,246,0.08) 70%)` }} />
                <HolographicCard className="w-full max-w-[500px]" glowColor={activeVertical.accent.replace("#", "").match(/.{2}/g)?.map(h => parseInt(h, 16)).join(", ") || "0, 245, 255"}>
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] w-full bg-space-surface">
                    <Image src={activeVertical.image} alt={activeVertical.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 rounded-[20px] border border-neon-cyan/5 pointer-events-none z-20" />
                  </div>
                </HolographicCard>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal>
          <div className="text-center mt-20 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent mx-auto mb-6" />
            <h3 className="font-display font-bold text-xl text-white">Foundational Digital Pillars</h3>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-2">Essential Infrastructure &amp; Growth Services</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundationalPillars.map((pillar, i) => {
            const PillarIcon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <div className="relative h-full p-7 rounded-[24px] group overflow-hidden holo-card cursor-pointer"
                  style={{ borderColor: `${pillar.accent}18` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
                    style={{ background: `radial-gradient(ellipse at top, ${pillar.accent}06 0%, transparent 70%)` }} />
                  <div className="relative z-10">
                    {/* Icon + Title */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300"
                      style={{ background: `${pillar.accent}10`, border: `1px solid ${pillar.accent}20` }}>
                      <PillarIcon size={20} style={{ color: pillar.accent }} />
                    </div>
                    <h4 className="font-display font-bold text-lg mb-3 text-white leading-tight">{pillar.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-5">{pillar.desc}</p>

                    {/* Features grid */}
                    <div className="grid grid-cols-3 gap-1.5 mb-5">
                      {pillar.features.map((feat) => (
                        <span key={feat} className="text-[9px] font-mono px-1.5 py-1 rounded-md text-center leading-tight"
                          style={{ background: `${pillar.accent}08`, border: `1px solid ${pillar.accent}15`, color: `${pillar.accent}CC` }}>
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Stat block */}
                    <div className="p-3 rounded-xl" style={{ background: `${pillar.accent}06`, border: `1px solid ${pillar.accent}12` }}>
                      {pillar.isCyber ? (
                        <>
                          <p className="text-xs font-display font-bold text-white leading-snug mb-1">{pillar.stat}</p>
                          <p className="text-xs text-slate-400">{pillar.statSub}</p>
                        </>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-display font-black" style={{ color: pillar.accent }}>{pillar.stat}</span>
                          <span className="text-xs text-slate-400">{pillar.statSub}</span>
                        </div>
                      )}
                    </div>

                    <button onClick={scrollToContact} className="flex items-center gap-2 text-xs font-mono font-semibold mt-5 transition-colors duration-300"
                      style={{ color: pillar.accent }}>
                      Learn More <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
