"use client";

import { motion, useScroll, useTransform } from "framer-motion";

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
          src="/13007245_3840_2160_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/72" />
      </div>

      <motion.div style={{ y: yOne }} className="pointer-events-none absolute -left-48 top-0 z-10 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
      <motion.div style={{ y: yTwo }} className="pointer-events-none absolute -right-40 top-1/4 z-10 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
          style={{ scale: scaleHero }}
        >
          <div className="grid gap-12 lg:grid-cols-1 lg:items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Premium Digital Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-6 text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl"
              >
                We Build Digital Systems
                <span className="mt-1 block w-fit bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  That Power The Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl"
              >
                AGOM engineers high-impact platforms from strategy to launch, pairing bold product thinking with disciplined technical execution.
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

                <motion.a href="#projects" className="flex items-center justify-center rounded-md border-2 border-white bg-white px-10 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-50 hover:shadow-[0_12px_32px_rgba(255,255,255,0.2)]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
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
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                    whileHover={{ y: -2 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {capability}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
