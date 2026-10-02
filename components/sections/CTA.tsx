"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-space-deep">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 perspective-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[400px] bg-neon-cyan/4 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/25 to-transparent" />
      </div>

      <div className="kaa-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">Ready to Scale?</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Your Business Deserves{" "}
              <span className="gradient-text-neon">Better Technology.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-400 mb-4 max-w-2xl mx-auto">
              Less chaos. More clarity.
            </p>
            <p className="text-base text-slate-500 mb-10 max-w-xl mx-auto">
              Let&apos;s build the right technology foundation for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                onClick={() => scrollTo("#erp")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-neon text-base px-8 py-4"
              >
                <Zap size={18} />
                <span>Explore Solutions</span>
              </motion.button>
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-base px-8 py-4"
              >
                <span>Talk to KAA</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { label: "One Platform", sub: "Every Solution" },
                { label: "Less Chaos", sub: "More Clarity" },
                { label: "Ready to Scale", sub: "Starting Today" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl holo-card text-center">
                  <div className="text-sm font-display font-bold text-white mb-0.5">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
