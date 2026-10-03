"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-space-void">
      <div className="absolute inset-0 subtle-grid opacity-8 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-neon-cyan/4 rounded-full blur-3xl" />
      </div>

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">Client Feedback</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h2 className="font-display font-bold leading-tight text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              What Our <span className="gradient-text-neon">Clients Say</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              We value every client relationship built on trust, results, and long-term partnership. Reach out to hear directly from our partners.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <motion.div
            className="max-w-2xl mx-auto rounded-[2rem] border border-neon-cyan/12 bg-neon-cyan/[0.02] backdrop-blur-sm p-12 text-center relative overflow-hidden"
            whileHover={{ borderColor: "rgba(0,245,255,0.25)", boxShadow: "0 0 50px rgba(0,245,255,0.06)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated glow orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-neon-cyan/20 rounded-full blur-2xl pointer-events-none"
            />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/8 border border-neon-cyan/15 flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={28} className="text-neon-cyan" />
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3">
                Partner Testimonials Coming Soon
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Our clients are our best advocates. We are currently collecting verified feedback from our partners across Qatar, GCC, and India to share here.
              </p>

              <button
                onClick={scrollToContact}
                className="btn-neon group mx-auto"
              >
                <span>Talk to Our Team</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
