import ScrollReveal from "@/components/ui/ScrollReveal";

const solutions = [
  { title: "Enterprise Software", desc: "ERP, HRMS, payroll and connected business workflows built around the way your teams work.", tags: ["ERP", "HRMS", "Payroll"], gradient: "from-neon-magenta/20 to-neon-purple/20" },
  { title: "Web & App Development", desc: "Custom websites, e-commerce platforms and mobile applications for your business.", tags: ["Web", "E-commerce", "Mobile"], gradient: "from-neon-purple/20 to-neon-cyan/20" },
  { title: "AI & Workflow Automation", desc: "AI assistants, workflow automation and system integrations for repeatable business processes.", tags: ["AI", "Automation", "Integrations"], gradient: "from-neon-cyan/20 to-neon-green/20" },
  { title: "Cybersecurity", desc: "Biometric access, network hardening, firewall configuration and data protection services.", tags: ["Biometrics", "Network", "Security"], gradient: "from-neon-green/15 to-neon-cyan/20" },
  { title: "Cloud & IT Support", desc: "Managed infrastructure, cloud migration, backup, disaster recovery and IT helpdesk support.", tags: ["Cloud", "Infrastructure", "Support"], gradient: "from-neon-magenta/15 to-neon-cyan/15" },
  { title: "Digital Branding & Growth", desc: "Search strategy, brand design, content, campaigns and analytics for your digital presence.", tags: ["SEO", "Branding", "Marketing"], gradient: "from-neon-purple/20 to-neon-magenta/20" },
];

export default function Portfolio() {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden bg-space-void">
      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-magenta mb-5">One Platform. Every Solution.</p>
            <h2 className="font-display font-bold leading-tight mb-5 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Technology for the <span className="gradient-text-neon">whole business</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400">From ERP and business software to the infrastructure and digital services that keep your operation moving.</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, i) => (
            <ScrollReveal key={solution.title} delay={i * 0.06}>
              <article className="holo-card group h-full">
                <div className={`h-24 bg-gradient-to-br ${solution.gradient} relative overflow-hidden`} aria-hidden="true">
                  <div className="absolute inset-0 subtle-grid opacity-30" />
                  <div className="absolute bottom-4 left-6 text-xs font-mono uppercase tracking-widest text-white/80">KAA Solutions</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors">{solution.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5" aria-label={`${solution.title} capabilities`}>
                    {solution.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full font-mono bg-neon-cyan/[0.04] border border-neon-cyan/10 text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-white transition-colors">
                    Talk to KAA <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
