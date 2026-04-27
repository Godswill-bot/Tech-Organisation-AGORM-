"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import WearingVarImage from "../../../WEARING VAR.avif";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 800], [0, -120]);
  const yTwo = useTransform(scrollY, [0, 800], [0, 100]);
  const scaleHero = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pb-18 pt-30 sm:px-6 lg:px-8 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950" />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/BLACKNPURPLE.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      <motion.div style={{ y: yOne }} className="pointer-events-none absolute -left-48 top-0 z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <motion.div style={{ y: yTwo }} className="pointer-events-none absolute -right-40 top-1/4 z-10 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
          style={{ scale: scaleHero }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/8 px-4 py-2"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Premium Digital Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-hover-soft mb-6 text-5xl font-bold leading-[1.03] text-foreground sm:text-6xl lg:text-7xl"
              >
                We Build Digital Systems
                <span className="mt-1 block w-fit bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  That Power The Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-hover-soft mb-8 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
              >
                AGORM engineers high-impact platforms from strategy to launch, pairing bold product thinking with disciplined technical execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mb-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a href="#contact" className="btn-primary flex items-center justify-center group px-10 py-4 text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  Work With Us
                  <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.a>

                <motion.a href="#projects" className="btn-secondary flex items-center justify-center px-10 py-4 text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  View Projects
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {["Strategy", "Design", "Engineering"].map((capability, i) => (
                  <motion.div
                    key={capability}
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-slate-300 transition-all duration-300 hover:border-cyan-300/55 hover:bg-cyan-300/10"
                    whileHover={{ y: -2 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {capability}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              <motion.div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full border border-cyan-300/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-20 -left-10 h-32 w-32 rounded-full border border-indigo-300/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="hero-octagon absolute right-0 top-0 h-72 w-56 overflow-hidden border-2 border-white/15 bg-slate-900/60 shadow-2xl shadow-cyan-400/10 transition-all duration-500 hover:border-cyan-300/50 sm:h-96 sm:w-64 lg:h-[500px] lg:w-[360px]"
                whileHover={{ y: -8 }}
              >
                <Image
                  src={WearingVarImage}
                  alt="[IMAGE PLACEHOLDER: futuristic product and technology visual]"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
                animate={{ opacity: 1, scale: 1, rotate: 4 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="hero-octagon absolute bottom-10 left-0 h-48 w-40 overflow-hidden border-2 border-white/15 bg-slate-900/80 shadow-xl shadow-indigo-400/10 transition-all duration-500 hover:border-indigo-300/50 sm:h-56 sm:w-48"
                whileHover={{ y: -8 }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                  <div className="mb-2 text-3xl font-bold text-cyan-300 sm:text-4xl">2,500+</div>
                  <p className="text-xs uppercase tracking-widest text-slate-300">hours shipped this year</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, rotate: 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 right-2 h-40 w-72 overflow-hidden rounded-2xl border border-cyan-200/25 bg-slate-900/85 shadow-2xl shadow-cyan-500/20 sm:-bottom-6 sm:right-6 sm:h-44 sm:w-80"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-300/20 via-transparent to-indigo-300/20"
                  animate={{ opacity: [0.35, 0.65, 0.35] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <Image
                  src="/hero-dashboard-preview.png"
                  alt="Product dashboard preview"
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover"
                />
                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 blur-xl"
                  animate={{ x: [0, 420] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div className="absolute left-1/4 top-1/4 h-3 w-3 animate-pulse rounded-full bg-cyan-300/45 blur-sm" />
              <motion.div
                className="absolute right-1/3 top-1/3 h-2 w-2 rounded-full bg-indigo-300/45 blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
