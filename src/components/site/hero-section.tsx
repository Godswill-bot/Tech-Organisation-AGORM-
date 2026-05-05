"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 800], [0, -120]);
  const yTwo = useTransform(scrollY, [0, 800], [0, 100]);
  const scaleHero = useTransform(scrollY, [0, 400], [1, 0.95]);

  const heroStats = [
    { value: "0 clutter", label: "interfaces that slow teams down" },
    { value: "0 disruption", label: "when we fit into your workflow" },
    { value: "0 guesswork", label: "with clear delivery and direction" },
  ];

  return (
    <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden px-4 pb-18 pt-30 sm:px-6 lg:px-8 lg:pt-32">
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white">Premium Digital Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-6 max-w-4xl text-5xl font-bold leading-[0.96] text-white sm:text-6xl lg:text-[5.7rem]"
              >
                We Build Digital Systems
                <span className="mt-2 block w-fit bg-linear-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  That Feel Clear, Fast, And Built For Adoption
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl"
              >
                AGOM engineers high-impact platforms from strategy to launch, pairing bold product thinking with disciplined technical execution and smooth interfaces people can actually use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mb-8 flex flex-col gap-4 sm:flex-row"
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
                className="grid gap-3 sm:grid-cols-3"
              >
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.value}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                    whileHover={{ y: -2 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-2 text-xs leading-6 uppercase tracking-[0.18em] text-slate-300">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="relative"
            >
              <div className="rounded-4xl border border-white/12 bg-white/8 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-5">
                <div className="relative min-h-112 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-black via-slate-950 to-slate-800">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
                  <div className="absolute inset-0 grid place-items-center p-8 text-center">
                    <div className="max-w-sm rounded-3xl border border-dashed border-white/25 bg-white/5 p-6 backdrop-blur-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-300">Image Placeholder</p>
                      <p className="mt-4 text-2xl font-semibold text-white">[Hero Visual / Product Image]</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        Drop in a strong visual here when you have one. This block keeps the layout balanced and editorial.
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
