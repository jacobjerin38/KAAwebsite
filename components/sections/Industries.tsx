"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Heart, ShoppingBag, Factory, Truck, GraduationCap, Landmark, HardHat, UtensilsCrossed, Cpu } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Heart, accent: "#00F5FF" },
  { name: "Retail", icon: ShoppingBag, accent: "#8B5CF6" },
  { name: "Manufacturing", icon: Factory, accent: "#FF006E" },
  { name: "Logistics", icon: Truck, accent: "#39FF14" },
  { name: "Education", icon: GraduationCap, accent: "#00F5FF" },
  { name: "Finance", icon: Landmark, accent: "#8B5CF6" },
  { name: "Construction", icon: HardHat, accent: "#FF006E" },
  { name: "Hospitality", icon: UtensilsCrossed, accent: "#39FF14" },
  { name: "Technology", icon: Cpu, accent: "#00F5FF" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding-sm relative overflow-hidden bg-space-deep">
      <div className="absolute inset-0 subtle-grid opacity-10 pointer-events-none" />

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-purple" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-purple">Industries</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-purple" />
            </div>
            <h2 className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Sectors <span className="gradient-text-neon">We Serve</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={ind.name} delay={i * 0.05}>
                <div className="holo-card-static p-4 flex flex-col items-center text-center group cursor-pointer hover:border-neon-cyan/15 transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 border"
                    style={{
                      backgroundColor: `${ind.accent}08`,
                      borderColor: `${ind.accent}15`,
                    }}>
                    <Icon size={18} style={{ color: ind.accent }} className="transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-display font-semibold text-slate-300 group-hover:text-white transition-colors">{ind.name}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
