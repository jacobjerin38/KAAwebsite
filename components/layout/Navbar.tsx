"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "ERP", href: "#erp" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.querySelector<HTMLButtonElement>("#mobile-navigation button")?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  const scrollTo = (href: string, label?: string) => {
    setMobileOpen(false);
    if (label) setActiveLink(label);
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
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-space-void/80 backdrop-blur-xl border-b border-neon-cyan/5 shadow-[0_4px_30px_rgba(213,138,155,0.03)]"
            : "top-0 sm:top-6 bg-transparent"
        }`}
      >
        <nav className="kaa-container" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home", "Home");
              }}
              className="flex items-center group flex-shrink-0 relative"
            >
              {/* Neon Glow Aura */}
              <div className="absolute -inset-3 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-75 group-hover:scale-110" />

              <div className="relative h-12 w-48 transition-all duration-300 group-hover:scale-[1.03]">
                <Image
                  src="/kaa-logo.png"
                  alt="KAA Software and Technologies"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  className="brightness-0 invert opacity-90 transition-all duration-300 drop-shadow-[0_0_8px_rgba(213,138,155,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(213,138,155,0.6)]"
                  priority
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href, link.label)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg"
                  style={{
                    color: activeLink === link.label ? "#D58A9B" : "rgba(226, 232, 240, 0.7)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeLink !== link.label)
                      (e.currentTarget as HTMLElement).style.color = "#E2E8F0";
                  }}
                  onMouseLeave={(e) => {
                    if (activeLink !== link.label)
                      (e.currentTarget as HTMLElement).style.color = "rgba(226, 232, 240, 0.7)";
                  }}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #D58A9B, #B76E82)",
                        boxShadow: "0 0 12px rgba(213,138,155,0.5)",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Area */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-cyan/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a
                href="tel:+97455711741"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-cyan/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300"
                aria-label="Call +974 5571 1741"
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => scrollTo("#contact", "Contact Us")}
                id="nav-start-consultation"
                className="btn-neon"
                style={{ borderRadius: "10px", padding: "10px 24px", fontSize: "13px" }}
              >
                <span>Talk to KAA</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg transition-colors hover:bg-neon-cyan/5 border border-neon-cyan/10 text-slate-400 hover:text-neon-cyan"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                ref={menuToggleRef}
                className="p-2.5 rounded-lg transition-colors hover:bg-neon-cyan/5 border border-neon-cyan/10 text-slate-400"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls={mobileOpen ? "mobile-navigation" : undefined}
              >
                {mobileOpen ? (
                  <X size={18} className="text-neon-cyan" />
                ) : (
                  <Menu size={18} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 md:hidden pt-16"
            role="navigation"
            aria-label="Mobile navigation"
            style={{
              background: "rgba(3, 0, 20, 0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col px-6 pt-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href, link.label)}
                  className="text-left px-4 py-4 rounded-xl text-lg font-display font-semibold transition-all duration-200"
                  style={{
                    color: activeLink === link.label ? "#D58A9B" : "rgba(226, 232, 240, 0.7)",
                    borderLeft: activeLink === link.label
                      ? "3px solid #D58A9B"
                      : "3px solid transparent",
                    background: activeLink === link.label
                      ? "rgba(213, 138, 155, 0.03)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => scrollTo("#contact", "Contact Us")}
                className="mt-6 w-full py-4 rounded-xl text-base font-display font-bold text-white btn-neon justify-center"
              >
                <span>Talk to KAA</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
