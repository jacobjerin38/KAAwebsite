"use client";
import { motion } from "framer-motion";
import {
  Shield, Zap, Clock, Lock, Palette, Cloud, Headphones, GitBranch,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Shield,
    label: "Enterprise-Grade Solutions",
    desc: "Production-ready systems built to handle enterprise scale — robust, resilient, and battle-tested.",
    color: "#3b82f6",
  },
  {
    icon: GitBranch,
    label: "Scalable Architecture",
    desc: "Modular, microservices-ready architecture that grows with your business without technical debt.",
    color: "#8b5cf6",
  },
  {
    icon: Headphones,
    label: "Dedicated Support Team",
    desc: "A team that's genuinely invested in your success — proactive, responsive, and always available.",
    color: "#06b6d4",
  },
  {
    icon: Zap,
    label: "Fast Deployment",
    desc: "Rapid delivery without compromise. We use agile methods to get you to production quickly.",
    color: "#10b981",
  },
  {
    icon: Lock,
    label: "Secure by Design",
    desc: "Built-in security at every layer — role-based access, audit trails, encryption, and compliance.",
    color: "#f59e0b",
  },
  {
    icon: Palette,
    label: "Custom Workflows",
    desc: "Every workflow tailored to your exact operational reality — no rigid one-size-fits-all templates.",
    color: "#ef4444",
  },
  {
    icon: Cloud,
    label: "Cloud-Ready Infrastructure",
    desc: "Deploy on cloud or on-premise. Designed for high availability, disaster recovery, and global scale.",
    color: "#a78bfa",
  },
  {
    icon: Clock,
    label: "Modern UI/UX",
    desc: "Premium interfaces that your team will actually love using — intuitive, fast, and visually excellent.",
    color: "#06b6d4",
  },
];

export default function WhyKAA() {
  return (
    <section id="why-kaa" className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(183,110,130,0.07) 0%, transparent 60%)" }}
          className="absolute inset-0" />
        <div style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(197,109,130,0.06) 0%, transparent 60%)" }}
          className="absolute inset-0" />
      </div>

      <div className="kaa-container">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            badge="Why Choose KAA"
            title={<>Built Different. <span style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Engineered Better.</span></>}
            subtitle="We don't just build software — we build partnerships. Here's what makes KAA Technologies the right choice for serious businesses."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl h-full group"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${reason.color}08`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${reason.color}30`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px ${reason.color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${reason.color}12`, border: `1px solid ${reason.color}25` }}
                >
                  <reason.icon size={18} style={{ color: reason.color }} />
                </div>
                <h3 className="font-display font-bold text-sm text-white mb-2">{reason.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{reason.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 p-6 rounded-2xl flex flex-wrap gap-6 justify-around"
            style={{
              background: "linear-gradient(135deg, rgba(197,109,130,0.06) 0%, rgba(183,110,130,0.06) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
            {[
              { val: "ERP + HRMS", label: "Connected business software" },
              { val: "CRM", label: "Customer and sales workflows" },
              { val: "Inventory", label: "Stock and warehouse tools" },
              { val: "IT Services", label: "Security, cloud and support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-black text-2xl md:text-3xl mb-1"
                  style={{ background: "linear-gradient(135deg, #f8fafc, #D58A9B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {s.val}
                </div>
                <div className="text-xs" style={{ color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
