"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import {
  Rocket,
  Code2,
  Cpu,
  Zap,
  Globe,
  Cloud,
  Database,
  Bot,
  Layers,
  Activity,
  Sparkles,
  Network,
  ArrowUpRight,
} from "lucide-react";

// Order: starts at top, goes clockwise — matches the reference image
const ICONS = [
  Rocket,
  Cpu,
  Zap,
  Globe,
  Cloud,
  Database,
  Bot,
  Layers,
  Activity,
  Network,
  Sparkles,
  Code2,
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const systemRef = useRef<HTMLDivElement | null>(null);

  // Geometry (in SVG units; SVG viewBox is -320..320 = 640px wide)
  const COUNT = ICONS.length;
  const RADIUS = 240;
  const LINE_INNER = 50;
  const LINE_OUTER = RADIUS - 30;

  // Pre-compute node positions once.
  // IMPORTANT: round all trig-derived values to fixed precision. Otherwise
  // SSR and client can serialize floats differently (e.g. 43.30127018922193
  // vs 43.301270189221924), triggering a Next.js hydration mismatch.
  const round = (n: number) => Math.round(n * 1000) / 1000;

  const nodes = Array.from({ length: COUNT }, (_, i) => {
    const angle = -Math.PI / 2 + (i / COUNT) * Math.PI * 2;
    const cx = Math.cos(angle);
    const cy = Math.sin(angle);
    return {
      cx,
      cy,
      x1: round(cx * LINE_INNER),
      y1: round(cy * LINE_INNER),
      x2: round(cx * LINE_OUTER),
      y2: round(cy * LINE_OUTER),
      // % position within the .system box
      pctX: round(50 + (cx * RADIUS / 640) * 100),
      pctY: round(50 + (cy * RADIUS / 640) * 100),
    };
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ============== INITIAL STATE ==============
      gsap.set(
        [".glow-core", ".glow-mid", ".glow-outer", ".ring", ".ring-thin"],
        { opacity: 0, scale: 0.7 }
      );
      gsap.set(".center-text", { opacity: 0, scale: 0.85 });
      gsap.set(".spoke-dot", { opacity: 0, scale: 0, transformOrigin: "center" });
      gsap.set(".node", { opacity: 0, scale: 0 });
      gsap.set(".pulse-dot", { opacity: 0 });

      // ============== ENTRANCE TIMELINE ==============
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to([".glow-outer", ".glow-mid", ".glow-core"], {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        stagger: 0.1,
      }, 0)
        .to([".ring", ".ring-thin"], {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          stagger: 0.08,
        }, 0.3)
        .to(".center-text", {
          opacity: 1,
          scale: 1,
          duration: 0.9,
        }, 0.6)
        // Lines draw outward
        .add(() => {
          document.querySelectorAll<SVGLineElement>(".spoke-line").forEach((line, i) => {
            const len = Math.hypot(
              line.x2.baseVal.value - line.x1.baseVal.value,
              line.y2.baseVal.value - line.y1.baseVal.value
            );
            line.style.strokeDasharray = String(len);
            line.style.strokeDashoffset = String(len);
            line.style.opacity = "1";
            gsap.to(line, {
              strokeDashoffset: 0,
              duration: 0.7,
              delay: i * 0.04,
              ease: "power2.out",
            });
          });
        }, 0.7)
        .to(".spoke-dot", {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.04,
        }, 1.2)
        .to(".node", {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.6)",
          stagger: { each: 0.05, from: "random" },
        }, 1.3);

      // ============== LOOPING AMBIENT ANIMATIONS ==============

      // (a) Breathing core — multiple desynced loops so it never feels mechanical
      gsap.to(".glow-core", {
        scale: 1.08,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".glow-mid", {
        scale: 1.05,
        duration: 4.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.3,
      });
      gsap.to(".glow-outer", {
        opacity: 0.85,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });

      // (b) Each icon drifts gently on its own random phase
      document.querySelectorAll<HTMLDivElement>(".node").forEach((n) => {
        const dur = 3 + Math.random() * 2;
        const delay = Math.random() * 2;
        const dx = (Math.random() - 0.5) * 4;
        const dy = (Math.random() - 0.5) * 4;
        gsap.to(n, {
          x: dx,
          y: dy,
          duration: dur,
          delay,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // (c) Light pulses traveling FROM center → icons along each spoke
      document.querySelectorAll<SVGCircleElement>(".pulse-dot").forEach((p, i) => {
        const x1 = parseFloat(p.dataset.x1 || "0");
        const y1 = parseFloat(p.dataset.y1 || "0");
        const x2 = parseFloat(p.dataset.x2 || "0");
        const y2 = parseFloat(p.dataset.y2 || "0");

        const animate = () => {
          gsap.set(p, { attr: { cx: x1, cy: y1 }, opacity: 0 });
          gsap.to(p, { opacity: 1, duration: 0.2 });
          gsap.to(p, {
            attr: { cx: x2, cy: y2 },
            duration: 1.4,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(p, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  gsap.delayedCall(2 + Math.random() * 3, animate);
                },
              });
            },
          });
        };
        gsap.delayedCall(2.5 + i * 0.25, animate);
      });

      // ============== TEXT REVEALS ==============
      gsap.to("h1 .word > span", {
        y: "0%",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.06,
        delay: 0.2,
      });
      gsap.from(".reveal", {
        y: 24,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* ============ NAV ============ */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-8 md:px-14 md:py-7 mix-blend-difference">
        <div className="text-lg font-semibold tracking-[0.25em]">AGOM</div>
        <a
          href="#"
          className="rounded-full border border-white/40 px-3 py-2 text-[9px] sm:text-[10px] md:text-[11px] md:px-5 md:py-3 tracking-[0.22em] transition-colors hover:bg-white hover:text-black"
        >
          CONTACT
        </a>
      </nav>

      {/* ============ HERO GRID ============ */}
      <div className="grid min-h-screen grid-cols-1 items-center px-4 gap-8 sm:px-8 md:px-14 lg:grid-cols-2">
        {/* ============ LEFT: HEADLINE ============ */}
        <div className="relative z-10 md:pl-32">
          <div className="reveal mb-4 md:mb-7 text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.32em] text-neutral-500">
            AGOM DIGITAL SYSTEMS STUDIO
          </div>

          <h1 className="mb-6 md:mb-8 text-[clamp(28px,6vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em]">
            <Word>We</Word> <Word>Build</Word> <Word>Digital</Word>
            <br />
            <Word>Systems</Word> <Word>That</Word>
            <br />
            <Word>Think,</Word> <Word>Scale</Word> <Word>&amp;</Word>
            <br />
            <Word>Perform.</Word>
          </h1>

          <p className="reveal mb-6 md:mb-11 max-w-[440px] text-sm md:text-base leading-[1.6] text-neutral-300">
            Intelligent software. Scalable platforms.
            <br />
            Modern engineering for the future.
          </p>

          <div className="reveal flex flex-col gap-3 sm:flex-row sm:gap-3.5">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 sm:gap-8 rounded-full bg-white px-4 sm:px-6 py-3 md:py-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-black transition-colors hover:bg-neutral-200 whitespace-nowrap"
            >
              EXPLORE WORK
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 sm:gap-8 rounded-full border border-white/25 px-4 sm:px-6 py-3 md:py-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-white transition-colors hover:border-white/60 whitespace-nowrap"
            >
              START PROJECT
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ============ RIGHT: RADIAL SYSTEM ============ */}
        <div className="relative flex h-[400px] sm:h-[500px] md:h-screen items-center justify-center">
          <div
            ref={systemRef}
            className="relative flex items-center justify-center"
            style={{
              width: "clamp(280px, 70vw, 740px)",
              height: "clamp(280px, 70vw, 740px)",
            }}
          >
            {/* Layered glow */}
            <div
              className="glow-outer absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
                filter: "blur(30px)",
                willChange: "transform, opacity",
              }}
            />
            <div
              className="glow-mid absolute rounded-full"
              style={{
                inset: "8%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 75%)",
                filter: "blur(50px)",
                willChange: "transform, opacity",
              }}
            />

            {/* Defining rings */}
            <div
              className="ring absolute rounded-full"
              style={{
                inset: "4%",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow:
                  "0 0 30px 4px rgba(255,255,255,0.45), 0 0 80px 20px rgba(255,255,255,0.25), inset 0 0 60px 8px rgba(255,255,255,0.12)",
                willChange: "transform, opacity",
              }}
            />
            <div
              className="ring-thin absolute rounded-full"
              style={{
                inset: "4%",
                border: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 0 16px 2px rgba(255,255,255,0.6)",
                willChange: "transform, opacity",
              }}
            />

            {/* Bright core (above rings, below text) */}
            <div
              className="glow-core absolute rounded-full"
              style={{
                inset: "22%",
                background:
                  "radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0) 70%)",
                filter: "blur(40px)",
                willChange: "transform, opacity",
              }}
            />

            {/* Spoke lines + endpoint dots + traveling pulses */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="-320 -320 640 640"
              preserveAspectRatio="xMidYMid meet"
              style={{ zIndex: 2 }}
            >
              {nodes.map((n, i) => (
                <g key={i}>
                  <line
                    className="spoke-line"
                    x1={n.x1}
                    y1={n.y1}
                    x2={n.x2}
                    y2={n.y2}
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth={1}
                    fill="none"
                  />
                  <circle
                    className="spoke-dot"
                    cx={n.x2}
                    cy={n.y2}
                    r={2.2}
                    fill="#ffffff"
                    style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.95))" }}
                  />
                  <circle
                    className="pulse-dot"
                    cx={n.x1}
                    cy={n.y1}
                    r={3}
                    fill="#ffffff"
                    data-x1={n.x1}
                    data-y1={n.y1}
                    data-x2={n.x2}
                    data-y2={n.y2}
                    style={{
                      filter: "drop-shadow(0 0 8px #fff) drop-shadow(0 0 14px #fff)",
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* Icon nodes — positioned via left/top %, centered with negative margins
                so GSAP can own `transform` cleanly for float + scale animations */}
            {nodes.map((n, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={i}
                  className="node absolute flex items-center justify-center rounded-full"
                  style={{
                    left: `${n.pctX}%`,
                    top: `${n.pctY}%`,
                    width: 62,
                    height: 62,
                    marginLeft: -31,
                    marginTop: -31,
                    background: "rgba(20,20,20,0.55)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.05), 0 0 22px rgba(255,255,255,0.35), inset 0 0 12px rgba(255,255,255,0.08)",
                    zIndex: 3,
                    willChange: "transform, opacity",
                  }}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-white"
                  />
                </div>
              );
            })}

            {/* Center AGOM text */}
            <div
              className="center-text absolute font-medium"
              style={{
                fontSize: 36,
                letterSpacing: "0.42em",
                paddingLeft: "0.42em",
                color: "#0a0a0a",
                textShadow: "0 0 25px rgba(255,255,255,0.6)",
                zIndex: 4,
              }}
            >
              AGOM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper component: a word in a clipped container so GSAP can slide its inner
   <span> up from below for the headline reveal. */
function Word({ children }: { children: React.ReactNode }) {
  return (
    <span className="word inline-block overflow-hidden align-bottom">
      <span className="inline-block" style={{ transform: "translateY(110%)" }}>
        {children}
      </span>
    </span>
  );
}