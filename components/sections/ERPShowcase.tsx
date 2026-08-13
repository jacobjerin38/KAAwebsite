"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, DollarSign, BarChart3, ShoppingCart, Package, Briefcase,
  Clock, Building2, FolderKanban, PieChart, Zap, Shield, ArrowRight,
  Check, TrendingUp, Activity, Cpu, Warehouse, UserCheck, BookOpen,
  Target, Bell, MessageSquare, Box, ScanBarcode, RotateCcw, AlertTriangle,
  Layers, Calendar, ListChecks, Wallet, PhoneCall, ShoppingBag, Factory,
  Headphones, Megaphone, FileText, Coins, Trophy, Plane
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "hrms", label: "HRMS & Payroll" },
  { id: "accounting", label: "Accounting" },
  { id: "crm", label: "CRM" },
  { id: "inventory", label: "Inventory" },
  { id: "projects", label: "Projects" },
];

const modules = [
  { icon: Users, label: "HRMS", color: "#00F5FF" },
  { icon: DollarSign, label: "Payroll", color: "#8B5CF6" },
  { icon: Briefcase, label: "CRM", color: "#00F5FF" },
  { icon: ShoppingCart, label: "Sales", color: "#39FF14" },
  { icon: Package, label: "Inventory", color: "#FF006E" },
  { icon: BarChart3, label: "Finance", color: "#8B5CF6" },
];

const benefits = [
  "No More Data Gaps",
  "No More Miscommunication",
  "Real-Time Dashboards",
  "Connected Departments",
  "Better Reporting",
  "Team Collaboration",
];

const moduleCategories = [
  { id: "all", label: "All Modules", count: 22 },
  { id: "hr", label: "HR & Workforce", count: 10 },
  { id: "finance", label: "Finance & Operations", count: 5 },
  { id: "sales", label: "Sales & Growth", count: 4 },
  { id: "workspace", label: "Workspace & Tools", count: 3 },
];

const allModules = [
  {
    id: "organisation",
    icon: Building2,
    emoji: "🏢",
    name: "Organisation",
    route: "/organisation",
    category: "hr",
    desc: "Structure, Masters, Roles, Workflows, Settings",
    color: "#00F5FF"
  },
  {
    id: "employees",
    icon: Users,
    emoji: "👥",
    name: "Employees",
    route: "/employees",
    category: "hr",
    desc: "Directory, Profiles, Geolocation, Immigration",
    color: "#8B5CF6"
  },
  {
    id: "attendance",
    icon: Clock,
    emoji: "⏱️",
    name: "Attendance",
    route: "/attendance",
    category: "hr",
    desc: "Daily/Monthly Logs, Shifts, Duty Roster, OT Rules",
    color: "#00F5FF"
  },
  {
    id: "leave",
    icon: Calendar,
    emoji: "📅",
    name: "Leave",
    route: "/leave",
    category: "hr",
    desc: "Leave Applications, Accruals, Balances, Calendar",
    color: "#39FF14"
  },
  {
    id: "payroll",
    icon: DollarSign,
    emoji: "💰",
    name: "Payroll",
    route: "/payroll",
    category: "hr",
    desc: "Salary Runs, WPS Export, Payslips, Settlements",
    color: "#8B5CF6"
  },
  {
    id: "essp",
    icon: UserCheck,
    emoji: "👤",
    name: "ESSP",
    route: "/essp",
    category: "hr",
    desc: "Self-Service, Punch In/Out, Missed Punch, Approvals",
    color: "#00F5FF"
  },
  {
    id: "pro",
    icon: Shield,
    emoji: "🛡️",
    name: "PRO (Mandoob)",
    route: "/pro",
    category: "hr",
    desc: "Govt Services, QID/Visa Renewals, Agent Tasks",
    color: "#FF006E"
  },
  {
    id: "crm",
    icon: Target,
    emoji: "🤝",
    name: "CRM",
    route: "/crm",
    category: "sales",
    desc: "Leads, Deals, Pipelines, Contacts, AI Finder",
    color: "#FF006E"
  },
  {
    id: "sales",
    icon: ShoppingCart,
    emoji: "🛒",
    name: "Sales",
    route: "/sales",
    category: "sales",
    desc: "Quotations, Sales Orders, Credit Limits, Invoices",
    color: "#39FF14"
  },
  {
    id: "accounting",
    icon: BookOpen,
    emoji: "🧮",
    name: "Accounting",
    route: "/accounting",
    category: "finance",
    desc: "Chart of Accounts, Ledgers, Payments, Financial Reports",
    color: "#8B5CF6"
  },
  {
    id: "inventory",
    icon: Package,
    emoji: "📦",
    name: "Inventory",
    route: "/inventory",
    category: "finance",
    desc: "Item Master, Warehouses, Stock Ledger, Reservations",
    color: "#39FF14"
  },
  {
    id: "procurement",
    icon: ShoppingBag,
    emoji: "🛍️",
    name: "Procurement",
    route: "/procurement",
    category: "finance",
    desc: "Requisitions, POs, GRNs, Vendor Bills",
    color: "#00F5FF"
  },
  {
    id: "manufacturing",
    icon: Factory,
    emoji: "🏭",
    name: "Manufacturing",
    route: "/manufacturing",
    category: "finance",
    desc: "BOM, Work Centers, Production Orders",
    color: "#FF006E"
  },
  {
    id: "projects",
    icon: FolderKanban,
    emoji: "📋",
    name: "Projects",
    route: "/projects",
    category: "workspace",
    desc: "Task Boards, Milestones, Timesheets",
    color: "#EAB308"
  },
  {
    id: "help_desk",
    icon: Headphones,
    emoji: "🎧",
    name: "Help Desk",
    route: "/help_desk",
    category: "sales",
    desc: "Support Tickets, SLAs, Escalations",
    color: "#00F5FF"
  },
  {
    id: "marketing",
    icon: Megaphone,
    emoji: "📢",
    name: "Marketing",
    route: "/marketing",
    category: "sales",
    desc: "Campaigns, Leads Automation, Analytics",
    color: "#FF006E"
  },
  {
    id: "documents",
    icon: FileText,
    emoji: "📄",
    name: "Documents",
    route: "/documents",
    category: "workspace",
    desc: "Policies, Contracts, Document Vault",
    color: "#8B5CF6"
  },
  {
    id: "recruitment",
    icon: Briefcase,
    emoji: "💼",
    name: "Recruitment",
    route: "/recruitment",
    category: "hr",
    desc: "ATS, Job Postings, Public Careers Portal (/careers)",
    color: "#00F5FF"
  },
  {
    id: "loans",
    icon: Coins,
    emoji: "💵",
    name: "Loans & Benefits",
    route: "/loans",
    category: "hr",
    desc: "Advances, Loan Repayments, Claims",
    color: "#39FF14"
  },
  {
    id: "performance",
    icon: Trophy,
    emoji: "🏆",
    name: "Performance",
    route: "/performance",
    category: "hr",
    desc: "Goals, OKRs, Appraisals",
    color: "#EAB308"
  },
  {
    id: "travel",
    icon: Plane,
    emoji: "✈️",
    name: "Travel & Expenses",
    route: "/travel",
    category: "finance",
    desc: "Trip Requests, Expense Claims, Receipts",
    color: "#8B5CF6"
  },
  {
    id: "chat",
    icon: MessageSquare,
    emoji: "💬",
    name: "Team Chat",
    route: "/chat",
    category: "workspace",
    desc: "Real-Time Direct & Channel Messaging",
    color: "#00F5FF"
  },
];

export default function ERPShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const tabMotion = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -15 }, transition: { duration: 0.35 } };

  const filteredModules = selectedCategory === "all"
    ? allModules
    : allModules.filter(m => m.category === selectedCategory);

  return (
    <section id="erp" className="section-padding relative overflow-hidden bg-space-deep">
      <div className="perspective-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      </div>

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="KAA ERP Platform"
            title={<>One System. Every Department. <span className="gradient-text-neon">Zero Chaos.</span></>}
            subtitle="A modular, enterprise-grade management platform designed to unify your operations — from human resources and payroll to inventory, CRM and financial reporting."
          />
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 rounded-xl text-sm font-display font-semibold transition-all duration-300 relative overflow-hidden"
                style={{
                  background: activeTab === tab.id ? "rgba(0,245,255,0.08)" : "rgba(0,245,255,0.02)",
                  border: activeTab === tab.id ? "1px solid #00F5FF" : "1px solid rgba(0,245,255,0.06)",
                  color: activeTab === tab.id ? "#FFFFFF" : "#94A3B8",
                  boxShadow: activeTab === tab.id ? "0 0 20px rgba(0,245,255,0.1)" : "none",
                }}
              >
                {activeTab === tab.id && (
                  <motion.div layoutId="erp-tab-glow" className="absolute inset-0 bg-gradient-to-r from-neon-cyan/8 to-neon-purple/8 blur-sm -z-10" />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content + Right Column */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">

              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <motion.div key="overview" {...tabMotion}
                  className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/5 border border-neon-cyan/10 shadow-2xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 px-4 py-3 bg-space-void/60 border-b border-neon-cyan/5 rounded-t-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-magenta/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-green/80" />
                    <span className="text-[10px] text-slate-500 ml-4 font-mono">erp.kaatechnologies.qa/dashboard</span>
                  </div>
                  <div className="relative aspect-[16/10] rounded-b-xl overflow-hidden bg-space-surface">
                    <Image src="/kaa-screenshot.jpg" alt="KAA ERP Dashboard" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-space-void/5 pointer-events-none" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["No More Data Gaps","No More Miscommunication","Real-Time Data"].map((b) => (
                      <div key={b} className="p-3 rounded-xl bg-neon-cyan/4 border border-neon-cyan/8 text-center">
                        <Check size={14} className="text-neon-cyan mx-auto mb-1.5" />
                        <span className="text-[11px] font-display font-semibold text-white">{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* HRMS */}
              {activeTab === "hrms" && (
                <motion.div key="hrms" {...tabMotion}
                  className="p-8 rounded-2xl holo-card border border-neon-cyan/8 bg-space-surface/40 backdrop-blur-md"
                >
                  <div className="mb-6">
                    <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Strategic Vertical 01</span>
                    <h3 className="font-display font-bold text-2xl text-white mt-2 mb-1">Still Searching For The Perfect HR Solution?</h3>
                    <p className="text-neon-cyan font-semibold text-sm">Let KAA Handle It.</p>
                    <p className="text-slate-400 text-sm mt-2">From attendance to payslips — fully automated.</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: UserCheck, title: "Attendance Management", desc: "Live biometric sync — zero manual punch-ins", val: "Auto Sync" },
                      { icon: DollarSign, title: "Payroll Management", desc: "Qatar WPS-compliant automated salary & allowance processing", val: "WPS Ready" },
                      { icon: PhoneCall, title: "Helpdesk Management", desc: "Employee requests, support tickets & HR portal", val: "Portal Live" },
                    ].map((item) => (
                      <div key={item.title} className="p-4 rounded-xl bg-space-void/40 border border-neon-cyan/8 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                            <item.icon size={16} className="text-neon-cyan" />
                          </div>
                          <div>
                            <div className="text-sm font-display font-semibold text-white">{item.title}</div>
                            <div className="text-xs text-slate-500">{item.desc}</div>
                          </div>
                        </div>
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-neon-cyan/8 text-neon-cyan border border-neon-cyan/15 font-mono flex-shrink-0">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ACCOUNTING */}
              {activeTab === "accounting" && (
                <motion.div key="accounting" {...tabMotion}
                  className="p-8 rounded-2xl holo-card border border-neon-purple/15 bg-space-surface/40 backdrop-blur-md"
                >
                  <div className="mb-6">
                    <span className="text-xs font-mono text-neon-purple uppercase tracking-widest">Finance Module</span>
                    <h3 className="font-display font-bold text-2xl text-white mt-2">
                      <span className="text-neon-purple">Books Sorted.</span> Business Sorted.
                    </h3>
                    <p className="text-slate-400 text-sm mt-2">From entries to reports, KAA handles your books.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: BookOpen, label: "Chart of Accounts" },
                      { icon: Layers, label: "Journal Entries" },
                      { icon: TrendingUp, label: "Accounts Receivable" },
                      { icon: ArrowRight, label: "Accounts Payable" },
                      { icon: Zap, label: "Invoicing" },
                      { icon: BarChart3, label: "Bank Reconciliation" },
                      { icon: PieChart, label: "Profit & Loss" },
                      { icon: Building2, label: "Balance Sheet" },
                      { icon: DollarSign, label: "Multi-Currency" },
                    ].map((item) => (
                      <div key={item.label} className="p-3 rounded-xl bg-neon-purple/4 border border-neon-purple/10 flex flex-col items-center text-center hover:bg-neon-purple/8 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mb-2">
                          <item.icon size={14} className="text-neon-purple" />
                        </div>
                        <span className="text-[10px] font-display font-bold text-white leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CRM */}
              {activeTab === "crm" && (
                <motion.div key="crm" {...tabMotion}
                  className="p-8 rounded-2xl holo-card border border-neon-magenta/15 bg-space-surface/40 backdrop-blur-md"
                >
                  <div className="mb-6">
                    <span className="text-xs font-mono text-neon-magenta uppercase tracking-widest">CRM Module</span>
                    <h3 className="font-display font-bold text-2xl text-white mt-2 leading-tight">
                      <span className="text-neon-magenta">STOP LOSING LEADS.</span><br />Start Closing Deals.
                    </h3>
                    <p className="text-neon-magenta/80 font-semibold text-sm mt-1">One CRM, Every Customer, Zero Missed Opportunity</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Target, label: "Lead Management" },
                      { icon: BarChart3, label: "Sales Pipeline" },
                      { icon: Users, label: "Customer Database" },
                      { icon: TrendingUp, label: "Opportunity Tracking" },
                      { icon: Bell, label: "Follow-up Reminders" },
                      { icon: MessageSquare, label: "Communication History" },
                    ].map((item) => (
                      <div key={item.label} className="p-3.5 rounded-xl bg-neon-magenta/4 border border-neon-magenta/10 flex items-center gap-3 hover:bg-neon-magenta/8 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-neon-magenta/12 border border-neon-magenta/20 flex items-center justify-center flex-shrink-0">
                          <item.icon size={14} className="text-neon-magenta" />
                        </div>
                        <span className="text-xs font-display font-semibold text-white">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-neon-magenta/5 border border-neon-magenta/10 text-center">
                    <p className="text-xs text-neon-magenta/80 font-mono">Multi-device — Desktop · Tablet · Mobile</p>
                  </div>
                </motion.div>
              )}

              {/* INVENTORY */}
              {activeTab === "inventory" && (
                <motion.div key="inventory" {...tabMotion}
                  className="p-8 rounded-2xl holo-card border border-neon-green/15 bg-space-surface/40 backdrop-blur-md"
                >
                  <div className="mb-6">
                    <span className="text-xs font-mono text-neon-green uppercase tracking-widest">Inventory Module</span>
                    <h3 className="font-display font-bold text-2xl text-white mt-2 leading-tight">
                      Is Your <span className="text-neon-green">Warehouse</span> Running You?<br />
                      <span className="text-base font-medium text-slate-300">Or Are You Running It?</span>
                    </h3>
                    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20">
                      <Box size={12} className="text-neon-green" />
                      <span className="text-xs font-semibold text-neon-green">Smart Inventory. Zero Confusion.</span>
                    </div>
                  </div>
                  <div className="space-y-2.5 mb-5">
                    {[
                      { icon: Layers, label: "Item Master" },
                      { icon: ScanBarcode, label: "Barcode Management" },
                      { icon: Box, label: "Serial & Batch Tracking" },
                      { icon: RotateCcw, label: "Stock Transfer" },
                      { icon: Warehouse, label: "Multi-Warehouse" },
                      { icon: AlertTriangle, label: "Reorder Alerts" },
                      { icon: BarChart3, label: "Stock Valuation" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-neon-green/5 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center flex-shrink-0">
                          <item.icon size={13} className="text-neon-green" />
                        </div>
                        <span className="text-sm text-white font-display font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-neon-green/10 text-center">
                    <span className="text-neon-green font-display font-bold text-sm">Less chaos. More clarity.</span>
                  </div>
                </motion.div>
              )}

              {/* PROJECTS */}
              {activeTab === "projects" && (
                <motion.div key="projects" {...tabMotion}
                  className="p-8 rounded-2xl holo-card border border-amber-500/15 bg-space-surface/40 backdrop-blur-md"
                >
                  <div className="mb-6">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Project Management</span>
                    <h3 className="font-display font-bold text-xl text-white mt-2 leading-snug">
                      Deadlines missed, <span className="text-amber-400">TEAM</span> Budgets blown <span className="text-neon-magenta">CONFUSED??</span>
                    </h3>
                    <p className="text-3xl font-display font-black text-white mt-3">Not Anymore.</p>
                    <p className="text-slate-400 text-sm mt-1">KAA Project Management keeps everything on track.</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    {[
                      { icon: FolderKanban, label: "Projects" },
                      { icon: ListChecks, label: "Tasks" },
                      { icon: Wallet, label: "Budgets" },
                      { icon: Users, label: "People" },
                      { icon: Clock, label: "Time" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 flex-1 hover:bg-amber-500/10 transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/12 border border-amber-500/20 flex items-center justify-center">
                          <item.icon size={16} className="text-amber-400" />
                        </div>
                        <span className="text-[10px] font-display font-bold text-white">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl text-center" style={{ background: "linear-gradient(135deg, rgba(255,0,110,0.08) 0%, rgba(139,92,246,0.08) 100%)", border: "1px solid rgba(255,0,110,0.15)" }}>
                    <p className="font-display font-bold text-white tracking-wide">Plan it <span className="text-neon-magenta">|</span> Track it <span className="text-neon-magenta">|</span> Deliver it</p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <ScrollReveal direction="right">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Unified Business Operations in{" "}
                <span className="gradient-text-neon">One Workspace</span>
              </h3>
              <p className="text-slate-400 text-sm mb-6">Every module connects seamlessly — no more silos, no more chaos.</p>
              <div className="grid grid-cols-3 gap-2.5 mb-8">
                {modules.map((mod) => (
                  <div key={mod.label} className="p-2.5 rounded-xl bg-neon-cyan/[0.02] border border-neon-cyan/5 flex flex-col items-center text-center hover:bg-neon-cyan/[0.04] hover:border-neon-cyan/10 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-neon-cyan/8 flex items-center justify-center mb-1.5">
                      <mod.icon size={12} className="text-neon-cyan" />
                    </div>
                    <span className="text-[10px] font-display font-bold text-white/90">{mod.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-neon-cyan/8 border border-neon-cyan/15 flex-shrink-0">
                      <Check size={10} className="text-neon-cyan" />
                    </div>
                    <span className="text-sm text-slate-400">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={scrollToContact} className="btn-neon"><span>Schedule ERP Demo</span> <ArrowRight size={14} /></button>
                <button onClick={scrollToContact} className="btn-outline">Learn Modules</button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 22-MODULE ENTERPRISE SUITE SECTION */}
        <div className="pt-12 border-t border-neon-cyan/10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border border-neon-cyan/20 bg-neon-cyan/5">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan">
                  Complete 22-Module Suite
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Explore All <span className="gradient-text-neon">22 Core ERP Modules</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Everything required to govern structure, workforce, finance, sales, manufacturing, and support — natively integrated into a unified portal.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {moduleCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all duration-300 flex items-center gap-2"
                  style={{
                    backgroundColor: selectedCategory === cat.id ? "rgba(0, 245, 255, 0.12)" : "rgba(15, 15, 40, 0.4)",
                    borderColor: selectedCategory === cat.id ? "#00F5FF" : "rgba(0, 245, 255, 0.08)",
                    borderWidth: "1px",
                    color: selectedCategory === cat.id ? "#FFFFFF" : "#94A3B8",
                    boxShadow: selectedCategory === cat.id ? "0 0 15px rgba(0, 245, 255, 0.15)" : "none",
                  }}
                >
                  <span>{cat.label}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* 22 Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredModules.map((item, index) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={item.id} delay={index * 0.03}>
                  <div className="h-full p-5 rounded-2xl holo-card-static border border-neon-cyan/8 bg-space-surface/50 backdrop-blur-md flex flex-col justify-between group hover:border-neon-cyan/25 transition-all duration-300">
                    <div>
                      {/* Top Row: Emoji + Icon + Route tag */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl leading-none">{item.emoji}</span>
                          <div className="w-8 h-8 rounded-lg bg-neon-cyan/8 border border-neon-cyan/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComp size={16} style={{ color: item.color }} />
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-space-void/80 text-neon-cyan border border-neon-cyan/20 font-medium">
                          {item.route}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-display font-bold text-base text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {item.name}
                      </h4>

                      {/* Features / Breakdown */}
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
                      <span>Module Ready</span>
                      <ArrowRight size={12} className="text-neon-cyan opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

