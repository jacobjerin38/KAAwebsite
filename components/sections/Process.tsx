"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, Target, Palette, Code2, TestTube2, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  { num: "01", title: "Discovery & Analysis", desc: "We dive deep into understanding your business needs, current systems, and goals to map the perfect technical solution.", icon: Search },
  { num: "02", title: "Strategic Planning", desc: "Our architects design a detailed roadmap — from system architecture to timeline and KPI milestones.", icon: Target },
  { num: "03", title: "UI/UX Design", desc: "Premium, user-centered interfaces crafted with pixel-perfect precision for maximum engagement and usability.", icon: Palette },
  { num: "04", title: "Development", desc: "Full-stack engineering with modern frameworks, clean code practices, and agile sprint cycles for rapid progress.", icon: Code2 },
  { num: "05", title: "Testing & QA", desc: "Rigorous multi-layer testing — unit, integration, performance, and security — to ensure bulletproof reliability.", icon: TestTube2 },
  { num: "06", title: "Deployment", desc: "Seamless production launches with zero-downtime deployments, data migration, and go-live support.", icon: Rocket },
  { num: "07", title: "Support & Optimization", desc: "Ongoing monitoring, performance tuning, feature updates, and 24/7 GCC-timezone technical support.", icon: HeadphonesIcon },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-space-deep">
      <div className="absolute inset-0 subtle-grid opacity-10 pointer-events-none" />

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-purple" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-purple">Our Process</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-purple" />
            </div>
            <h2 className="font-display font-bold leading-tight mb-6 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Development Process <br className="hidden sm:block" />
              <span className="gradient-text-neon">Built for Excellence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Neon vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta opacity-30" />

          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className={`relative flex items-start gap-6 mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} pl-16 md:pl-0`}>
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-neon-cyan border-2 border-space-deep"
                      style={{ boxShadow: "0 0 12px rgba(0,245,255,0.5), 0 0 24px rgba(0,245,255,0.2)" }}
                    />
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="holo-card-static p-6 group hover:border-neon-cyan/15 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-neon-cyan/8 border border-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/15 transition-colors">
                          <StepIcon size={14} className="text-neon-cyan" />
                        </div>
                        <span className="text-xs font-mono text-neon-cyan">{step.num}</span>
                      </div>
                      <h4 className="font-display font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
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
