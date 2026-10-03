"use client";
import { MapPin, Globe, Terminal, Building2 } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HolographicCard from "@/components/effects/HolographicCard";
import NeonBorder from "@/components/effects/NeonBorder";

const stats = [
  { value: "Doha", label: "Qatar Headquarters" },
  { value: "Kerala", label: "Engineering Center" },
  { value: "24/7", label: "GCC Support" }
];

export default function About() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-space-deep">
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-neon-magenta/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-neon-purple/8 rounded-full blur-3xl" />
      </div>

      <div className="kaa-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-magenta" />
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-magenta">Corporate Footprint</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-bold leading-tight mb-6 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Global Presence. <br />
                <span className="gradient-text-neon">Local Support.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="p-5 rounded-2xl mb-6 border" style={{ background: "rgba(255,0,110,0.04)", borderColor: "rgba(255,0,110,0.12)" }}>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-neon-magenta mb-2">We Don&apos;t Just Sell Software</p>
                <p className="text-white font-display font-semibold text-base mb-1">Your Growth. Our Purpose.</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our mission is simple — empower every business with smart, scalable, and reliable IT solutions that actually make a difference.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-slate-400">
                KAA Software and Technologies operates a high-performance <strong className="text-white">dual-location model</strong> to serve our enterprise clients. With our strategic corporate headquarters based in <strong className="text-white">Doha, Qatar</strong>, and our advanced software engineering and AI hub situated in <strong className="text-white">Kerala, India</strong>, we deliver cutting-edge IT systems and smart automation workflows with rapid local turnaround times.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-8 text-slate-400">
                While our engineering capability scales globally, our core market operations focus heavily on <strong className="text-white">Qatar and other GCC nations</strong> as well as the <strong className="text-white">Indian subcontinent</strong>, ensuring high-availability support and strict compliance with local WPS labor standards and security protocols.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <HolographicCard glowColor="255, 0, 110" className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-neon-magenta/10 flex items-center justify-center border border-neon-magenta/20">
                      <MapPin size={16} className="text-neon-magenta" />
                    </div>
                    <span className="text-sm font-display font-bold text-white uppercase tracking-wider">Qatar Headquarters</span>
                  </div>
                  <div className="text-[11px] font-mono font-bold text-neon-magenta/80 uppercase mb-2">Doha (West Bay Office)</div>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-white/95 transition-colors">
                    Directs local client relations, solution architecture, networking audits, and physical biometric &amp; advanced security solution configurations.
                  </p>
                </HolographicCard>

                <HolographicCard glowColor="139, 92, 246" className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
                      <Terminal size={16} className="text-neon-purple" />
                    </div>
                    <span className="text-sm font-display font-bold text-white uppercase tracking-wider">Development Center</span>
                  </div>
                  <div className="text-[11px] font-mono font-bold text-neon-purple/80 uppercase mb-2">Kerala, India (IDC)</div>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-white/95 transition-colors">
                    Spearheads deep-tech full-stack engineering, core WPS ERP compilation, LLM artificial intelligence modeling, and digital branding execution.
                  </p>
                </HolographicCard>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={scrollToContact} className="btn-neon">
                  <span>Engage Worldwide</span>
                </button>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Globe size={14} className="text-neon-cyan" />
                  <span>Doha / Kerala / Global</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-magenta/8 to-neon-purple/8 transform rotate-2 scale-105 opacity-40 blur-2xl pointer-events-none" />

            <NeonBorder className="w-full mb-6" borderRadius="2rem">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] w-full bg-space-surface transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/kaa-offices.png"
                  alt="KAA Technologies Global Offices"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-neon-cyan/10 z-20">
                  <Building2 size={10} className="text-neon-cyan" />
                  <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest">KAA Corporate Offices</span>
                </div>
                <div className="absolute inset-0 border border-neon-cyan/5 rounded-[2rem] pointer-events-none z-20" />
              </div>
            </NeonBorder>

            <div className="w-full grid grid-cols-3 gap-3 z-10">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl holo-card-static text-center">
                  <div className="font-display font-bold text-xl sm:text-2xl gradient-text-neon leading-none mb-1">{stat.value}</div>
                  <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider leading-none">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
