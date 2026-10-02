"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const topics = [
  {
    label: "ERP solutions",
    answer: "KAA ERP brings business areas such as HR, payroll, accounting, CRM, inventory and projects into one platform. Ask the KAA team for a product walkthrough.",
  },
  {
    label: "HRMS",
    answer: "KAA HRMS covers employee management, attendance, payroll, leave, helpdesk and approval workflows. The website describes Qatar WPS-compliant payroll.",
  },
  {
    label: "Accounting",
    answer: "The accounting module covers chart of accounts, journal entries, receivables, payables, invoicing, bank reconciliation and financial reports.",
  },
  {
    label: "CRM",
    answer: "KAA CRM supports lead and opportunity management, sales pipelines, customer records, follow-up reminders and communication history.",
  },
  {
    label: "Inventory & projects",
    answer: "The ERP module list includes inventory, warehouses, stock transfers and reservations, plus project task boards, milestones and timesheets.",
  },
  {
    label: "Security & IT support",
    answer: "KAA offers biometric access solutions, network hardening, firewall configuration, IT support, managed infrastructure and cloud services.",
  },
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<(typeof topics)[number] | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (open) closeRef.current?.focus();
    else if (wasOpenRef.current) triggerRef.current?.focus();
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="fixed z-[60] flex flex-col items-end gap-3" style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)", right: "calc(env(safe-area-inset-right, 0px) + 1rem)" }}>
      {open && (
        <section
          id="kaa-chat-panel"
          role="dialog"
          aria-labelledby="kaa-chat-title"
          aria-modal="false"
          className="w-[min(22rem,calc(100vw-2rem))] max-h-[min(38rem,calc(100dvh-7rem))] overflow-y-auto rounded-2xl border border-neon-cyan/20 bg-[#171923] p-5 text-white shadow-2xl shadow-black/40"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-neon-cyan mb-1">KAA Assistant</p>
              <h2 id="kaa-chat-title" className="font-display text-lg font-bold">How can we help?</h2>
            </div>
            <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close KAA assistant" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 focus-visible:outline">
              <X size={18} />
            </button>
          </div>

          <p className="rounded-xl bg-white/[0.05] p-3 text-sm leading-relaxed text-slate-200">Hi 👋 How can KAA help your business?</p>

          {selectedTopic && (
            <div className="mt-3 rounded-xl border border-neon-cyan/15 bg-neon-cyan/[0.05] p-3" aria-live="polite">
              <p className="text-xs font-semibold text-neon-cyan mb-1">{selectedTopic.label}</p>
              <p className="text-sm leading-relaxed text-slate-200">{selectedTopic.answer}</p>
            </div>
          )}

          <p className="mt-4 mb-2 text-xs text-slate-400">Choose a topic:</p>
          <div className="grid grid-cols-2 gap-2">
            {topics.map((topic) => (
              <button key={topic.label} type="button" onClick={() => setSelectedTopic(topic)} className="rounded-lg border border-white/10 px-3 py-2 text-left text-xs text-slate-200 transition-colors hover:border-neon-cyan/40 hover:bg-white/[0.05]">
                {topic.label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-400">For anything else, our team can help.</p>
          <div className="mt-3 flex gap-2">
            <a href="#contact" onClick={() => setOpen(false)} className="flex-1 rounded-lg bg-brand-wine px-3 py-2.5 text-center text-xs font-semibold text-white hover:brightness-110">Talk to a Human</a>
            <a href="https://wa.me/97455711741" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg border border-neon-cyan/25 px-3 py-2.5 text-center text-xs font-semibold text-neon-cyan hover:bg-neon-cyan/10">WhatsApp Us</a>
          </div>
        </section>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? "kaa-chat-panel" : undefined}
        onClick={() => setOpen((current) => !current)}
        className="kaa-chat-trigger inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-wine px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 focus-visible:outline"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>{open ? "Close" : "Ask KAA"}</span>
      </button>
    </div>
  );
}
