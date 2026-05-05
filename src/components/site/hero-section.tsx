"use client";

import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { GsapWordReveal } from "@/components/site/gsap-word-reveal";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 800], [0, -60]);
  const scaleHero = useTransform(scrollY, [0, 400], [1, 0.98]);
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  const heroStats = [
    { value: "0 clutter", label: "interfaces that slow teams down" },
    { value: "0 disruption", label: "when we fit into your workflow" },
    { value: "0 guesswork", label: "with clear delivery and direction" },
  ];

  useLayoutEffect(() => {
    if (!heroRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      );

      gsap.fromTo(
        statRefs.current.filter(Boolean),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: "power3.out", delay: 0.2 },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="top" className="relative isolate flex min-h-svh items-center overflow-hidden px-4 pb-18 pt-30 sm:px-6 lg:px-8 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950" />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Hero background image with parallax animation */}
        <motion.img
          src="/hero-background.png"
          alt=""
          className="absolute top-8 bottom-8 left-40 right-0 object-cover will-change-transform rounded-3xl"
          style={{ y: yOne }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/80 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div style={{ y: yOne }} className="pointer-events-none absolute -left-48 top-0 z-10 h-96 w-96 rounded-full bg-black/10 blur-3xl will-change-transform" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
          style={{ scale: scaleHero }}
        >
          <div className="w-full">
            <div ref={contentRef} className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white">Premium Digital Solutions</span>
              </div>

              <GsapWordReveal
                tag="h1"
                text="We Build Digital Systems That Feel Clear, Fast, And Built For Adoption"
                className="mb-6 max-w-4xl text-5xl font-bold leading-[0.96] text-white sm:text-6xl lg:text-[5.7rem]"
                wordClassName="will-change-transform"
              />

              <GsapWordReveal
                tag="p"
                text="AGOM engineers high-impact platforms from strategy to launch, pairing bold product thinking with disciplined technical execution and smooth interfaces people can actually use."
                className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl"
                wordClassName="will-change-transform"
                stagger={0.02}
              />

              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <motion.a href="#contact" className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  Work With Us
                  <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.a>

                <motion.a href="#projects" className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  View Projects
                </motion.a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.value}
                    ref={(element) => {
                      statRefs.current[index] = element;
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                  >
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-2 text-xs leading-6 uppercase tracking-[0.18em] text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
