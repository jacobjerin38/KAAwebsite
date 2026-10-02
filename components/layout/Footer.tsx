"use client";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const usefulLinks = [
  { label: "Doha, Qatar", icon: MapPin, href: "https://maps.google.com/?q=Doha,Qatar" },
  { label: "+974 5571 1741", icon: Phone, href: "tel:+97455711741" },
  { label: "info@kaatechnologies.qa", icon: Mail, href: "mailto:info@kaatechnologies.qa" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-space-void overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-magenta/40 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-neon-magenta/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 subtle-grid opacity-8" />
      </div>

      <div className="kaa-container pt-20 pb-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="inline-block mb-6 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-75 group-hover:scale-105" />
              <div className="relative h-12 w-48 transition-all duration-300 group-hover:scale-[1.03]">
                <Image src="/kaa-logo.png" alt="KAA Software and Technologies" fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  className="brightness-0 invert opacity-80 transition-all duration-300 drop-shadow-[0_0_8px_rgba(213,138,155,0.2)] group-hover:opacity-100 group-hover:drop-shadow-[0_0_16px_rgba(213,138,155,0.5)]" />
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-8 max-w-sm text-slate-500">
              At KAA Software and Technologies, we deliver innovative technology services that help businesses grow, perform, and succeed in the digital world.
            </p>
            <div className="flex items-center gap-4">
              {[
                { label: "Instagram", href: "https://www.instagram.com/kaatechnologies", svg: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { label: "WhatsApp", href: "https://wa.me/97455711741", svg: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
              ].map(({ label, href, svg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-slate-400 bg-neon-cyan/[0.03] border border-neon-cyan/8 hover:bg-neon-cyan/10 hover:border-neon-cyan/25 hover:text-neon-cyan hover:-translate-y-1">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-display font-bold text-white mb-6 uppercase tracking-[0.15em]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-sm transition-all duration-300 group text-slate-500 hover:text-neon-cyan hover:translate-x-1">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-display font-bold text-white mb-6 uppercase tracking-[0.15em]">Address</h3>
            <ul className="space-y-5">
              {usefulLinks.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/[0.04] flex items-center justify-center flex-shrink-0 border border-neon-cyan/8">
                    <item.icon size={14} className="text-neon-cyan" />
                  </div>
                  <a href={item.href} className="text-sm text-slate-500 mt-1.5 hover:text-neon-cyan transition-colors duration-300">{item.label}</a>
                </li>
              ))}
              <li className="pt-4">
                <a href="mailto:info@kaatechnologies.qa"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-semibold text-white transition-all duration-300 bg-neon-cyan/[0.06] hover:bg-neon-cyan/15 border border-neon-cyan/10 hover:border-neon-cyan/25 hover:shadow-[0_8px_24px_rgba(213,138,155,0.1)]">
                  <Mail size={14} /> Send Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neon-cyan/5">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} KAA Technologies. All rights reserved.</p>
          <span className="text-xs text-slate-600">Doha, Qatar</span>
        </div>
      </div>
    </footer>
  );
}
