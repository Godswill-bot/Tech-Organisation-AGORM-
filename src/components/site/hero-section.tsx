"use client";

import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { GsapWordReveal } from "@/components/site/gsap-word-reveal";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 800], [0, -60]);
  const yTwo = useTransform(scrollY, [0, 800], [0, 50]);
  const scaleHero = useTransform(scrollY, [0, 400], [1, 0.98]);
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
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
        mediaRef.current,
        { opacity: 0, y: 16, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power3.out", delay: 0.1 },
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
          className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-cover will-change-transform rounded-3xl"
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
      <motion.div style={{ y: yTwo }} className="pointer-events-none absolute -right-40 top-1/4 z-10 h-96 w-96 rounded-full bg-black/10 blur-3xl will-change-transform" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
          style={{ scale: scaleHero }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div ref={contentRef} className="relative z-10">
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
                <motion.a href="#contact" className="btn-primary flex items-center justify-center group px-10 py-4 text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  Work With Us
                  <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.a>

                <motion.a href="#projects" className="flex items-center justify-center rounded-md border-2 border-white bg-white px-10 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-50 hover:shadow-[0_12px_32px_rgba(255,255,255,0.2)]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
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

            <div ref={mediaRef} className="relative">
              <div className="rounded-4xl border border-white/12 bg-white/8 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-5">
                <div className="relative min-h-112 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-black via-slate-950 to-slate-800">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
                  <div className="absolute inset-0 grid place-items-center p-8 text-center">
                    <div className="max-w-sm rounded-3xl border border-dashed border-white/25 bg-white/5 p-6 backdrop-blur-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-300">HERO_ANIMATION_SLOT</p>
                      <p className="mt-4 text-2xl font-semibold text-white">[Hero Visual / Product Image]</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        Drop in a strong visual here when you have one. This block keeps the layout balanced and editorial. It can hold a Blender export or a Three.js scene.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white">
                    Smooth storytelling
                  </div>
                  <div className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950">
                    Clear. Fast. Elegant.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
