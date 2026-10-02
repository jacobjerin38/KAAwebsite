import ScrollReveal from "@/components/ui/ScrollReveal";

const principles = [
  { title: "One connected platform", detail: "Business software designed to connect teams and information." },
  { title: "Built around your workflow", detail: "ERP and software solutions shaped around how your business works." },
  { title: "Support beyond software", detail: "IT support, infrastructure, cloud, security and digital services." },
];

const industries = [
  "Healthcare", "Retail", "Manufacturing", "Logistics",
  "Education", "Finance", "Construction", "Hospitality",
];

export default function Stats() {
  return (
    <section id="stats" className="section-padding relative overflow-hidden bg-brand-cream brand-surface-light" aria-label="KAA technology principles">
      <div className="kaa-container relative z-10">
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.08}>
              <article className="h-full p-7 rounded-2xl holo-card-static">
                <p className="text-xs font-mono uppercase tracking-[0.16em] text-neon-cyan mb-3">0{i + 1}</p>
                <h2 className="font-display font-bold text-xl text-white mb-2">{principle.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{principle.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-xs font-mono tracking-widest uppercase text-slate-400">
              Solutions for businesses across
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3" aria-label="Industries served">
            {industries.map((industry) => (
              <span key={industry} className="px-5 py-2.5 rounded-full text-sm text-slate-300 border border-neon-cyan/15 bg-white/[0.03]">
                {industry}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
