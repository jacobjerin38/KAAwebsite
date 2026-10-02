"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [draftOpened, setDraftOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.subject.trim() || `Website enquiry from ${formData.name.trim()}`;
    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "Not provided"}`,
      "",
      formData.message.trim(),
    ].join("\n");
    window.location.href = `mailto:info@kaatechnologies.qa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  };

  const inputClasses = "w-full px-4 py-3 bg-space-surface border border-neon-cyan/8 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/20 focus:shadow-[0_0_15px_rgba(213,138,155,0.05)] transition-all duration-300 font-sans";
  const labelClasses = "block text-xs font-mono mb-2 text-slate-500 uppercase tracking-wider";

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-space-deep">
      <div className="absolute inset-0 subtle-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 kaa-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">Contact Us</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h2 className="font-display font-bold leading-tight mb-4 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Start Your <span className="gradient-text-neon">Consultation</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-slate-400">
              Ready to transform your business? Get in touch with our team of experts today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <ScrollReveal><h3 className="font-display font-bold text-2xl mb-8 text-white">Get in Touch</h3></ScrollReveal>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "Email Us", value: "info@kaatechnologies.qa", href: "mailto:info@kaatechnologies.qa" },
                { icon: Phone, label: "Call Us", value: "+974 5571 1741", href: "tel:+97455711741" },
                { icon: MapPin, label: "Our Location", value: "Doha, Qatar", href: "https://maps.google.com/?q=Doha,Qatar" },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <a href={item.href} className="flex items-center gap-6 p-6 rounded-2xl holo-card group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-neon-cyan/5 border border-neon-cyan/8 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/20 transition-all duration-300">
                      <item.icon size={24} className="text-slate-400 group-hover:text-neon-cyan transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider mb-1 text-slate-500">{item.label}</div>
                      <div className="text-lg font-display font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">{item.value}</div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/97455711741" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 flex-1 p-5 rounded-2xl font-display font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", boxShadow: "0 8px 32px rgba(37,211,102,0.25)" }}>
                  <MessageCircle size={22} />
                  WhatsApp Us
                </a>
                <a href="https://www.instagram.com/kaatechnologies" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 flex-1 p-5 rounded-2xl font-display font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #E1306C 0%, #833AB4 50%, #FD1D1D 100%)", boxShadow: "0 8px 32px rgba(225,48,108,0.25)" }}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Follow on Instagram
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.2}>
              <motion.div className="p-8 sm:p-10 rounded-[2rem] holo-card relative overflow-hidden scan-lines">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/[0.03] to-neon-purple/[0.03]" />

                <>
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className={labelClasses}>Full Name *</label>
                        <input id="contact-name" name="name" autoComplete="name" type="text" required placeholder="Your name" className={inputClasses} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={labelClasses}>Email *</label>
                        <input id="contact-email" name="email" autoComplete="email" type="email" required placeholder="you@company.com" className={inputClasses} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClasses}>Phone</label>
                      <input id="contact-phone" name="phone" autoComplete="tel" type="tel" placeholder="Your phone number" className={inputClasses} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className={labelClasses}>Subject</label>
                      <input id="contact-subject" name="subject" type="text" placeholder="How can we help?" className={inputClasses} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className={labelClasses}>Message *</label>
                      <textarea id="contact-message" name="message" required rows={5} placeholder="Tell us what you need..." className={`${inputClasses} resize-y`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn-neon w-full justify-center py-4 text-base">
                      <span><Send size={18} /></span>
                      <span>Open Email Draft</span>
                    </button>
                  </form>
                  {draftOpened && <p className="relative z-10 mt-4 text-sm text-slate-300" role="status">Your email app should open with your message ready. If it didn&apos;t, email <a className="underline underline-offset-4 text-neon-cyan" href="mailto:info@kaatechnologies.qa">info@kaatechnologies.qa</a>.</p>}
                </>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
