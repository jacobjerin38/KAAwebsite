"use client";
import { motion } from "framer-motion";
import { Shield, Settings, MousePointer, Users, TrendingUp, ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    icon: Shield,
    title: "Reliable & Secure",
    subtitle: "Enterprise-grade protection",
    points: ["Security-first architecture", "Data protection", "Secure cloud solutions"],
    accent: "#C56D82",
    description: "Every KAA system is built with security-first architecture. Your data stays protected, backed up, and compliant.",
  },
  {
    icon: Settings,
    title: "Built Around Your Workflow",
    subtitle: "Your process, not a template",
    points: ["Custom processes", "Workflow management", "Flexible operations"],
    accent: "#B76E82",
    description: "We map your actual business workflows — not force you into a generic template. Every module adapts to how you work.",
  },
  {
    icon: MousePointer,
    title: "Easy to Use",
    subtitle: "Adopted fast, loved faster",
    points: ["User-friendly UI", "Faster adoption", "Simple interface"],
    accent: "#D58A9B",
    description: "Clean dashboards your team will actually use. No training marathons. Just intuitive tools that make sense on day one.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    subtitle: "One platform, every department",
    points: ["Connected departments", "Role-based access", "Shared dashboards"],
    accent: "#CCB38F",
    description: "Sales, HR, Finance, and Operations — all connected in real time. No more silos, no more miscommunication.",
  },
  {
    icon: TrendingUp,
    title: "Ready to Scale",
    subtitle: "Grows with your business",
    points: ["Built for growth", "Multi-location support", "Multi-device access"],
    accent: "#A64D66",
    description: "Solutions designed to adapt as your business, teams, and locations grow.",
  },
];

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToERP = () => {
    const el = document.querySelector("#erp");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden bg-space-void">
      <div className="perspective-grid" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-neon-cyan/4 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-neon-purple/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 kaa-container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">Why Choose Us</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              What Makes{" "}
              <span className="gradient-text-neon">Good Business Tech?</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              At KAA, we build technology that doesn&apos;t just work — it works for <em>your</em> business.
              Here&apos;s what sets every solution we deliver apart.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative p-6 rounded-2xl holo-card overflow-hidden group h-full flex flex-col"
                  style={{ borderColor: `${pillar.accent}18` }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${pillar.accent}08 0%, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: `${pillar.accent}12`, border: `1px solid ${pillar.accent}25` }}
                  >
                    <Icon size={22} style={{ color: pillar.accent }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-white text-base leading-snug mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider mb-4" style={{ color: `${pillar.accent}99` }}>
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-5 flex-1">
                    {pillar.description}
                  </p>

                  {/* Check points */}
                  <div className="space-y-1.5">
                    {pillar.points.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${pillar.accent}12`, border: `1px solid ${pillar.accent}25` }}
                        >
                          <Check size={8} style={{ color: pillar.accent }} />
                        </div>
                        <span className="text-[11px] text-slate-400">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom — mission statement + CTA */}
        <ScrollReveal delay={0.3}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-neon-magenta" />
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-magenta">Qatar&apos;s Trusted IT Partner</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white leading-tight mb-4">
                We Bring Smart IT &amp;{" "}
                <span className="gradient-text-neon">Software Solutions</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                At KAA Software and Technologies, we provide innovative technology services,
                backed by an expert team and reliable 24/7 support, to help your business grow,
                perform, and succeed in the digital world.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={scrollToERP} className="btn-neon">
                  <span>Explore Our Platform</span>
                  <ArrowRight size={14} />
                </button>
                <button onClick={scrollToContact} className="btn-outline">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Reliable & Secure", sub: "Security-first technology", accent: "#C56D82" },
                { icon: TrendingUp, label: "Ready to Scale", sub: "Designed around your growth", accent: "#D58A9B" },
                { icon: Users, label: "Connected Teams", sub: "One platform across departments", accent: "#B76E82" },
                { icon: MessageCircle, label: "24/7 IT Support", sub: "Support for systems and infrastructure", accent: "#CCB38F" },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.label} className="p-5 rounded-2xl holo-card-static group"
                    style={{ borderColor: `${item.accent}15` }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${item.accent}10`, border: `1px solid ${item.accent}20` }}>
                      <ItemIcon size={16} style={{ color: item.accent }} />
                    </div>
                    <div className="text-sm font-display font-bold text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
