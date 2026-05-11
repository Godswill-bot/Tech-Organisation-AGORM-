"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  insightUpdates,
  productSuites,
  projects,
  services,
  teamMembers,
  workflowSteps,
} from "@/data/site-content";

/* ============================================================
   TAB DEFINITIONS
   ============================================================ */

type TabId =
  | "about"
  | "services"
  | "workflow"
  | "suites"
  | "insights"
  | "team"
  | "contact"
  | "projects";

type TabMeta = {
  id: TabId;
  index: string;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  gradient: string;
  textColor: string;
  image?: string;
};

const TABS: TabMeta[] = [
  {
    id: "about",
    index: "01",
    label: "Engineering\nwith intent",
    subtitle: "About AGOM",
    icon: Sparkles,
    gradient: "linear-gradient(160deg, #18181b 0%, #3f3f46 100%)",
    textColor: "#ffffff",
  },
  {
    id: "services",
    index: "02",
    label: "Solutions that\ndrive success",
    subtitle: "Services",
    icon: Layers,
    gradient: "linear-gradient(160deg, #1e3a8a 0%, #3b82f6 100%)",
    textColor: "#ffffff",
  },
  {
    id: "workflow",
    index: "03",
    label: "Adaptive\ndelivery",
    subtitle: "How We Build",
    icon: Zap,
    gradient: "linear-gradient(160deg, #92400e 0%, #f59e0b 100%)",
    textColor: "#ffffff",
  },
  {
    id: "suites",
    index: "04",
    label: "Tools for real\noperations",
    subtitle: "Product Suites",
    icon: Rocket,
    gradient: "linear-gradient(160deg, #064e3b 0%, #10b981 100%)",
    textColor: "#ffffff",
  },
  {
    id: "projects",
    index: "05",
    label: "Shipped\nproducts",
    subtitle: "Selected Work",
    icon: ArrowUpRight,
    gradient: "linear-gradient(160deg, #1c1917 0%, #44403c 100%)",
    textColor: "#ffffff",
  },
  {
    id: "insights",
    index: "06",
    label: "Notes from the\nworkshop floor",
    subtitle: "Field Notes",
    icon: Lightbulb,
    gradient: "linear-gradient(160deg, #4c1d95 0%, #8b5cf6 100%)",
    textColor: "#ffffff",
  },
  {
    id: "team",
    index: "07",
    label: "Meet the\npeople",
    subtitle: "The Team",
    icon: Users,
    gradient: "linear-gradient(160deg, #9f1239 0%, #f43f5e 100%)",
    textColor: "#ffffff",
  },
  {
    id: "contact",
    index: "08",
    label: "Let's build\nsomething",
    subtitle: "Contact",
    icon: Mail,
    gradient: "linear-gradient(160deg, #155e75 0%, #06b6d4 100%)",
    textColor: "#ffffff",
  },
];

/* ============================================================
   PANEL — full-screen tall, edge-to-edge, photo bg style
   ============================================================ */

function Panel({
  tab,
  isExpanded,
  anyExpanded,
  onClick,
}: {
  tab: TabMeta;
  isExpanded: boolean;
  anyExpanded: boolean;
  onClick: () => void;
}) {
  const Icon = tab.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-full w-full cursor-pointer overflow-hidden text-left outline-none"
      style={{ background: tab.gradient }}
    >
      {/* Top-edge shimmer line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.4) 60%, transparent)" }}
      />

      {/* Glass highlight — top-left diagonal sheen */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 35%, transparent 60%)",
          opacity: isExpanded ? 1 : 0.5,
        }}
      />

      {/* Hover inner glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.14) 0%, transparent 55%)" }}
      />

      {/* Bottom vignette so text is always readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.12) 40%, transparent 65%)" }}
      />

      {/* Large floating background icon */}
      <div
        className="pointer-events-none absolute right-[-20px] top-[10%] transition-all duration-700"
        style={{
          opacity: isExpanded ? 0.1 : 0.05,
          transform: isExpanded ? "scale(1.3) rotate(10deg)" : "scale(1) rotate(0deg)",
        }}
      >
        <Icon size={220} strokeWidth={0.6} className="text-white" />
      </div>

      {/* Index — top left */}
      <span className="absolute left-5 top-6 font-mono text-[10px] tracking-[0.35em] text-white/40">
        {tab.index}
      </span>

      {/* Arrow circle — top right, only when expanded */}
      <div
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.28)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
          opacity: isExpanded ? 1 : 0,
          transform: isExpanded ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-45deg)",
          transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>

      {/* Bottom content — always visible */}
      <div className="absolute inset-x-5 bottom-7">
        {/* Subtitle label */}
        <p
          className="mb-2 text-[9px] font-bold uppercase tracking-[0.36em] text-white/60 transition-opacity duration-300"
          style={{ opacity: isExpanded ? 1 : anyExpanded ? 0 : 0.7 }}
        >
          {tab.subtitle}
        </p>

        {/* Main heading — full text always shown, wraps naturally */}
        <h3
          className="font-black text-white leading-[0.9] tracking-[-0.03em] whitespace-pre-line transition-all duration-500"
          style={{
            fontSize: isExpanded ? "clamp(2.2rem, 3.5vw, 4rem)" : "clamp(1rem, 1.6vw, 1.5rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          {tab.label}
        </h3>

        {/* Glass CTA — only when expanded */}
        <div
          className="mt-6 inline-flex items-center gap-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.28em] text-white"
          style={{
            padding: "0.6rem 1.4rem",
            background: "rgba(255,255,255,0.13)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.26)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.32), 0 6px 20px rgba(0,0,0,0.18)",
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.45s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1)",
            pointerEvents: isExpanded ? "auto" : "none",
          }}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          Enter
        </div>
      </div>

      {/* Right hairline divider */}
      <div
        className="pointer-events-none absolute right-0 inset-y-0 w-px"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 60%, transparent)" }}
      />
    </button>
  );
}

/* ============================================================
   PANELS RAIL — full viewport, edge-to-edge, no scroll needed
   when collapsed; drag-scrollable when one is expanded
   ============================================================ */

function PanelsRail({ onOpen }: { onOpen: (id: TabId) => void }) {
  const [hoveredId, setHoveredId] = useState<TabId | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false, velX: 0, lastX: 0, lastT: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!railRef.current || isMobile) return;
    drag.current = { active: true, startX: e.clientX, scrollLeft: railRef.current.scrollLeft, moved: false, velX: 0, lastX: e.clientX, lastT: Date.now() };
    railRef.current.setPointerCapture(e.pointerId);
    railRef.current.style.cursor = "grabbing";
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active || !railRef.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    const now = Date.now();
    drag.current.velX = (e.clientX - drag.current.lastX) / Math.max(1, now - drag.current.lastT);
    drag.current.lastX = e.clientX;
    drag.current.lastT = now;
    railRef.current.scrollLeft = drag.current.scrollLeft - dx;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!railRef.current) return;
    drag.current.active = false;
    railRef.current.style.cursor = "grab";
    if (railRef.current.hasPointerCapture(e.pointerId)) railRef.current.releasePointerCapture(e.pointerId);
    let vel = drag.current.velX * -24;
    const step = () => {
      if (!railRef.current || Math.abs(vel) < 0.3) return;
      railRef.current.scrollLeft += vel;
      vel *= 0.92;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const anyExpanded = hoveredId !== null;

  if (isMobile) {
    // Mobile: Grid layout
    return (
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 bg-zinc-50">
        {TABS.map((tab, idx) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative h-64 sm:h-72 overflow-hidden rounded-2xl"
          >
            <Panel
              tab={tab}
              isExpanded={false}
              anyExpanded={false}
              onClick={() => onOpen(tab.id)}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  // Desktop: Horizontal scroll layout
  return (
    <div
      ref={railRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseLeave={() => setHoveredId(null)}
      onClickCapture={(e) => { if (drag.current.moved) { e.stopPropagation(); drag.current.moved = false; } }}
      className="flex overflow-x-auto overflow-y-hidden select-none"
      style={{
        height: "100vh",
        cursor: "grab",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      } as React.CSSProperties}
    >
      {TABS.map((tab) => {
        const isExpanded = hoveredId === tab.id;
        const flexGrow = anyExpanded ? (isExpanded ? 4.5 : 0.65) : 1;

        return (
          <div
            key={tab.id}
            className="relative h-full shrink-0 overflow-hidden"
            style={{
              flex: `${flexGrow} 1 0%`,
              minWidth: 0,
              // Longer, spring-feel easing for the accordion expand
              transition: "flex 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={() => setHoveredId(tab.id)}
          >
            <Panel
              tab={tab}
              isExpanded={isExpanded}
              anyExpanded={anyExpanded}
              onClick={() => { if (!drag.current.moved) onOpen(tab.id); }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */

export function TabsStackSection() {
  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const activeTabMeta = TABS.find((t) => t.id === activeTab) ?? null;

  return (
    <>
      <section id="explore" className="relative w-full bg-zinc-50" style={{ isolation: "isolate" }}>

        {/* ── "Pick a door" header ── */}
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-10 sm:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end justify-between"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-700 backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                Explore AGOM
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 font-black leading-[0.92] tracking-[-0.04em] text-zinc-950"
                style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                Pick a{" "}
                <span className="font-serif italic font-medium">door</span>.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden max-w-[260px] text-right text-sm leading-7 text-zinc-400 lg:block"
            >
              Eight entrances into how we work, what we ship, and who we are.
              <br />
              <span className="text-zinc-300">Hover to expand · click to enter</span>
            </motion.p>
          </motion.div>
        </div>

        {/* ── Panels — full bleed ── */}
        <PanelsRail onOpen={(id) => setActiveTab(id)} />

        {/* ── Hint below (mobile only) ── */}
        <div className="bg-zinc-50 px-5 py-4 sm:px-10 lg:hidden">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
            Drag · hover · click to enter
          </p>
        </div>
      </section>

      <AnimatePresence>
        {activeTabMeta && (
          <TakeoverRouter
            tab={activeTabMeta}
            onClose={() => setActiveTab(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   TAKEOVER SHELL
   ============================================================ */

function Takeover({
  tab,
  onClose,
  children,
}: {
  tab: TabMeta;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const Icon = tab.icon;

  return (
    <motion.div
      key={tab.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ y: "100%", borderRadius: "2rem" }}
        animate={{ y: 0, borderRadius: "0rem" }}
        exit={{ y: "100%", borderRadius: "2rem" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 overflow-y-auto bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-950"
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 border-b border-zinc-200/70 bg-white/85 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-8 sm:py-4">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: tab.gradient }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400">
                  {tab.index} — {tab.subtitle}
                </p>
                <h2 className="text-lg font-black tracking-tight text-zinc-950 sm:text-xl leading-tight truncate">
                  {tab.label.replace("\n", " ")}
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                group flex shrink-0 items-center gap-2 rounded-full
                border border-zinc-200 bg-white px-3 py-2 text-[10px]
                font-bold uppercase tracking-[0.18em] text-zinc-900
                transition-colors hover:bg-zinc-900 hover:text-white sm:px-4 sm:py-2
              "
            >
              <X className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-14 md:py-20"
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   SECTION CONTENT COMPONENTS (unchanged from original)
   ============================================================ */

function AboutContent() {
  const features = [
    { icon: ShieldCheck, title: "Zero Disruption", body: "Your existing systems keep running. We add layers, not replacements." },
    { icon: Sparkles, title: "Built to be Used", body: "Interfaces your team adopts on day one — no week-long onboarding." },
    { icon: Globe, title: "Local Reality", body: "Engineered around the constraints, infrastructure, and pace of African business." },
    { icon: Zap, title: "Weeks, Not Quarters", body: "Discovery to deployment in a timeline that matches how fast you move." },
  ];
  const values = ["Clarity", "Reliability", "Efficiency", "Adaptability", "Partnership"];

  return (
    <div>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
            Engineering with{" "}
            <span className="font-serif italic font-medium">intent</span>
            <br />
            <span className="font-serif italic font-medium">& restraint</span>.
          </h3>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-700">
            AGOM was built around a simple idea: digitization should be additive, not destructive.
            Most teams don&apos;t need a clean-slate rebuild — they need clarity, leverage, and tools
            that respect how they already work.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-700">
            We sit beside operations, learn what already functions, and engineer the parts that
            genuinely move the needle.
          </p>
        </div>
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8">
          <p className="text-7xl font-black leading-none text-zinc-950">4.9</p>
          <div className="mt-2 flex gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">Client Confidence Score</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800"
              >
                {v}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-6 text-2xl font-bold text-zinc-950">{f.title}</h4>
              <p className="mt-3 text-base leading-7 text-zinc-600">{f.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesContent() {
  return (
    <div>
      <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
        Solutions that <span className="font-serif italic font-medium">drive</span>
        <br />digital success.
      </h3>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.2)]"
          >
            <span className="font-mono text-xs text-zinc-400">{`{ 0${i + 1} }`}</span>
            <h4 className="mt-8 text-2xl font-bold leading-tight text-zinc-950">{s.title}</h4>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{s.description}</p>
            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 transition-transform duration-500 group-hover:translate-x-1">
              <ArrowUpRight className="h-4 w-4" />
              Read more
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function WorkflowContent() {
  return (
    <div>
      <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
        Adaptive delivery,
        <br />
        <span className="font-serif italic font-medium">designed around you.</span>
      </h3>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
        We don&apos;t arrive with a fixed playbook. Every engagement starts with how your team already
        operates — then we layer in the systems that make it sharper.
      </p>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workflowSteps.map((step, i) => (
          <motion.article
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-[1.5rem] border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
          >
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-zinc-400">{`{ ${step.id} }`}</p>
            <h4 className="mt-12 text-2xl font-bold leading-tight text-zinc-950">{step.title}</h4>
            <p className="mt-5 text-sm leading-7 text-zinc-600">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function SuitesContent() {
  return (
    <div>
      <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
        Tools built for <span className="font-serif italic font-medium">real operations.</span>
      </h3>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
        From academic platforms to credit intelligence — every product in our suite started as a
        problem worth solving.
      </p>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {productSuites.map((suite, i) => (
          <motion.article
            key={suite.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-10 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                {Array.from({ length: 12 }).map((_, j) => (
                  <line key={j} x1="32" y1="32" x2="32" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" transform={`rotate(${j * 30} 32 32)`} className="text-black" />
                ))}
              </svg>
              <span className="text-3xl font-bold tracking-tight text-zinc-950">{suite.name}</span>
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">{suite.focus}</p>
            <p className="mt-5 text-base leading-7 text-zinc-700">{suite.summary}</p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
              Learn more
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   PROJECTS CONTENT — inline in takeover
   ============================================================ */

function ProjectsContent() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
        Shipped products,
        <br />
        <span className="font-serif italic font-medium">quietly working.</span>
      </h3>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
        Each project below is live somewhere — running for a real team, solving a real problem. We
        measure success by what stays in production after the launch glow fades.
      </p>

      <div
        className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-[1.5rem]"
        onMouseLeave={() => setHovered(null)}
      >
        {projects.map((project, index) => {
          const isHovered = hovered === index;
          const dimmed = hovered !== null && hovered !== index;
          return (
            <a
              key={project.id}
              href={project.websiteUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(index)}
              className={`
                group relative block h-[28rem] overflow-hidden border border-black/5
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${dimmed ? "opacity-50 scale-[0.98]" : "scale-100"}
              `}
            >
              {project.previewImage ? (
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  fill
                  sizes="33vw"
                  className={`object-cover transition-transform duration-[1200ms] ${isHovered ? "scale-110" : "scale-100"}`}
                />
              ) : (
                <div className="grid h-full place-items-center bg-zinc-100 text-xs uppercase tracking-[0.2em] text-black/40">
                  Project Preview
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-white/10 transition-opacity duration-500 ${isHovered ? "opacity-95" : "opacity-75"}`} />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h4 className="text-3xl font-bold text-white sm:text-4xl">{project.title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.category.split(",").map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                <div className={`mt-6 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    <ArrowRight className="h-3.5 w-3.5" />
                    Open Case Study
                  </span>
                </div>
              </div>
              <span className="absolute right-6 top-6 font-mono text-xs text-white/60">{`0${index + 1}`}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function InsightsContent() {
  return (
    <div>
      <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
        Notes from the <span className="font-serif italic font-medium">workshop floor.</span>
      </h3>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
        Lessons we&apos;ve picked up from active builds — written for teams navigating the same questions.
      </p>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {insightUpdates.map((insight, i) => {
          const image = (insight as unknown as { image?: string }).image;
          return (
            <motion.a
              key={insight.id}
              href={insight.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group block overflow-hidden rounded-[1.5rem] bg-white"
            >
              {image ? (
                <div className="relative h-56 overflow-hidden rounded-[1.5rem]">
                  <Image src={image} alt={insight.title} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              ) : (
                <div className="grid h-56 place-items-center rounded-[1.5rem] bg-zinc-100 text-xs uppercase tracking-[0.2em] text-zinc-400">Article Image</div>
              )}
              <div className="px-2 py-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500">
                  <span className="font-semibold">{insight.category}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-400" />
                  <span>{insight.date}</span>
                </div>
                <h4 className="mt-4 text-xl font-bold leading-tight text-zinc-950">{insight.title}</h4>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

function TeamContent() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div>
      <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)]">
        Meet the <span className="font-serif italic font-medium">team</span>.
      </h3>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
        Engineers, designers, and product people working under one roof in Lagos. Each person owns
        the work end-to-end.
      </p>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-zinc-100"
            style={{ transform: `translateY(${i % 3 === 1 ? "1.5rem" : "0"})` }}
          >
            {member.image ? (
              <Image src={member.image} alt={member.name} fill sizes="33vw" className="object-cover transition-all duration-700 group-hover:scale-105" />
            ) : (
              <div className="grid h-full place-items-center text-xs uppercase tracking-[0.2em] text-zinc-400">Photo coming soon</div>
            )}
            <motion.div
              animate={{ y: hovered === i ? -8 : 0, scale: hovered === i ? 1.02 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 backdrop-blur-xl"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{member.role}</p>
              <p className="text-sm font-bold text-zinc-950">{member.name}</p>
            </motion.div>
            <AnimatePresence>
              {hovered === i && member.bio && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6"
                >
                  <p className="text-sm leading-6 text-white">{member.bio}</p>
                  <div className="mt-4 flex gap-2">
                    {member.email && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        <Mail className="h-3 w-3" /> Email
                      </span>
                    )}
                    {member.phone && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        <Phone className="h-3 w-3" /> Call
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <h3 className="font-black leading-[0.95] tracking-[-0.04em] text-[clamp(2.5rem,6vw,5rem)]">
          Let&apos;s build
          <br />
          <span className="font-serif italic font-medium">your next product.</span>
        </h3>
        <p className="mt-8 max-w-md text-lg leading-8 text-zinc-700">
          Tell us what you&apos;re building, and we&apos;ll design a plan that moves your product from idea to impact.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-700">
          <MapPin className="h-4 w-4" />
          Lagos, Nigeria
        </div>
        <div className="mt-8 space-y-4">
          {teamMembers.filter((m) => m.phone || m.email).slice(0, 3).map((member) => (
            <div key={member.name} className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-900">
              <p className="text-sm font-semibold text-zinc-950">{member.name}</p>
              {member.phone && (
                <p className="mt-3 flex items-center gap-3 text-sm text-zinc-700">
                  <Phone size={16} className="text-zinc-500" />
                  {member.phone}
                </p>
              )}
              {member.email && (
                <p className="mt-2 flex items-center gap-3 text-sm text-zinc-700">
                  <Mail size={16} className="text-zinc-500" />
                  {member.email.replace("mailto:", "")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <form
        aria-label="Contact form"
        className="rounded-[2rem] border border-zinc-200 bg-white p-8 sm:p-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-5">
          {[
            { label: "Name", type: "text", placeholder: "Your name", required: true },
            { label: "Email", type: "email", placeholder: "you@company.com", required: true },
            { label: "Company / Project", type: "text", placeholder: "Optional", required: false },
          ].map(({ label, type, placeholder, required }) => (
            <div key={label}>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">{label}</label>
              <input type={type} required={required} placeholder={placeholder} className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
            </div>
          ))}
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">Message</label>
            <textarea rows={5} required placeholder="What are you building?" className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-zinc-900" />
          </div>
        </div>
        <button type="submit" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-zinc-800">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          Send Message
        </button>
      </form>
    </div>
  );
}

/* ============================================================
   ROUTER
   ============================================================ */

function TakeoverRouter({ tab, onClose }: { tab: TabMeta; onClose: () => void }) {
  return (
    <Takeover tab={tab} onClose={onClose}>
      {tab.id === "about" && <AboutContent />}
      {tab.id === "services" && <ServicesContent />}
      {tab.id === "workflow" && <WorkflowContent />}
      {tab.id === "suites" && <SuitesContent />}
      {tab.id === "projects" && <ProjectsContent />}
      {tab.id === "insights" && <InsightsContent />}
      {tab.id === "team" && <TeamContent />}
      {tab.id === "contact" && <ContactContent />}
    </Takeover>
  );
}