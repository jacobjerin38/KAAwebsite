"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, ClipboardList, Eye, Database, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const problems = [
  {
    id: 1,
    icon: TrendingUp,
    accent: "#C56D82",
    headline: "You're Scaling But Your Systems Aren't",
    points: ["More orders", "More teams", "More locations"],
    punchline: "Growth without the right system doesn't scale — it breaks. Your business has outgrown the old way.",
  },
  {
    id: 2,
    icon: Users,
    accent: "#B76E82",
    headline: "Every Department Works In Its Own Bubble",
    points: [
      "Sales doesn't know what inventory has",
      "Accounts doesn't know what sales closed",
      "Operations is always the last to know",
    ],
    punchline: "A business that doesn't talk to itself cannot grow. That's not teamwork. That's chaos with a salary.",
  },
  {
    id: 3,
    icon: ClipboardList,
    accent: "#D58A9B",
    headline: "Your Team Is Still Doing Reports Manually",
    points: ["Hours spent copy-pasting", "Cross-checking spreadsheets", "Sending files back and forth"],
    punchline: "That's not reporting. That's wasting your most valuable resource — time. Your team deserves better.",
  },
  {
    id: 4,
    icon: Eye,
    accent: "#CCB38F",
    headline: "You Have Zero Real-Time Visibility",
    points: ["What's our stock right now?", "How much did we sell today?", "Where is that order?"],
    punchline: "If the answer is always 'Let me check and get back to you' — you're running blind.",
  },
  {
    id: 5,
    icon: Database,
    accent: "#C56D82",
    headline: "Your Data Lives In 10 Different Places",
    points: ["Excel here", "WhatsApp there", "Register in account", "Another file on someone's laptop"],
    punchline: "When no one knows which number is right, your business is already losing. Sounds familiar?",
  },
];

export default function BusinessProblems() {
  const scrollToERP = () => {
    const el = document.querySelector("#erp");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="problems" className="section-padding relative overflow-hidden bg-space-void">
      {/* Background */}
      <div className="perspective-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent" />
        <div className="absolute -top-60 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-neon-magenta/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-neon-purple/4 rounded-full blur-3xl" />
      </div>

      <div className="kaa-container relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-magenta" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-magenta">Sound Familiar?</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-magenta" />
            </div>
            <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              Is Your Business{" "}
              <span className="gradient-text-neon">Fighting Itself?</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              These are the real problems that stop businesses from growing. Do any of them sound familiar?
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative p-6 rounded-2xl holo-card overflow-hidden group h-full flex flex-col"
                style={{ borderColor: `${problem.accent}15` }}
              >
                {/* Accent glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${problem.accent}08 0%, transparent 70%)` }}
                />

                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${problem.accent}12`, border: `1px solid ${problem.accent}25` }}
                  >
                    <problem.icon size={20} style={{ color: problem.accent }} />
                  </div>
                  <span
                    className="text-5xl font-display font-black leading-none opacity-8 select-none"
                    style={{ color: problem.accent }}
                  >
                    {String(problem.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-4">
                  {problem.headline}
                </h3>

                {/* Pain points */}
                <ul className="space-y-2 mb-5 flex-1">
                  {problem.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: problem.accent, boxShadow: `0 0 6px ${problem.accent}` }}
                      />
                      <span className="text-sm text-slate-400">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Punchline */}
                <div
                  className="mt-auto pt-4 border-t"
                  style={{ borderColor: `${problem.accent}15` }}
                >
                  <p className="text-xs leading-relaxed italic"
                    style={{ color: `${problem.accent}CC` }}
                  >
                    {problem.punchline}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="text-slate-400 text-base mb-6">
              There is a better way. <span className="text-white font-semibold">One system that connects everything.</span>
            </p>
            <button onClick={scrollToERP} className="btn-neon">
              <span>See How KAA Fixes This</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
