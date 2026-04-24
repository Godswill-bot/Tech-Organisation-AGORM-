"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import WearingVarImage from "../../../WEARING VAR.avif";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 600], [0, -90]);
  const yTwo = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <motion.div
        style={{ y: yOne }}
        className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl dark:bg-cyan-500/20"
      />
      <motion.div
        style={{ y: yTwo }}
        className="pointer-events-none absolute -right-28 top-28 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl dark:bg-indigo-600/20"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950/90"
        >
          <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-12">
            <div className="relative z-10 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-4 text-[11px] uppercase tracking-[0.36em] text-slate-700 dark:text-cyan-200"
              >
                Digital & innovation
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white"
              >
                TECHNOLOGY
                <span className="block">IN THE FUTURE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16 }}
                className="mt-6 max-w-xl text-pretty text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-300"
              >
                AGORM builds refined digital experiences, product systems, and modern software solutions that help ambitious teams move with clarity and confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="agorm-pill rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                >
                  Read More
                </a>
                <a
                  href="#projects"
                  className="agorm-pill-muted rounded-full border border-slate-400 bg-white/95 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 transition-colors duration-300 hover:border-slate-500 hover:bg-white dark:border-white/20 dark:bg-transparent dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
                >
                  View Projects
                </a>
              </motion.div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-400">
                <div className="agorm-pill-muted rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">Strategy</div>
                <div className="agorm-pill-muted rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">Design</div>
                <div className="agorm-pill-muted rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">Engineering</div>
              </div>
            </div>

            <div className="relative min-h-104 lg:min-h-136">
              <div className="absolute left-0 top-12 h-16 w-16 rounded-full border border-sky-200 bg-sky-50/80 shadow-sm dark:border-cyan-400/20 dark:bg-cyan-500/10" />
              <div className="absolute bottom-10 right-0 h-20 w-20 rounded-full border border-slate-200 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5" />

              <motion.div
                initial={{ opacity: 0, y: 18, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 0.9, delay: 0.16 }}
                className="hero-octagon absolute right-0 top-0 h-80 w-56 overflow-hidden border-[6px] border-slate-300 bg-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.12)] lg:h-104 lg:w-72 dark:border-sky-900 dark:bg-slate-950"
              >
                <Image
                  src={WearingVarImage}
                  alt="Person wearing AR/VR headset"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ duration: 0.9, delay: 0.24 }}
                className="hero-octagon absolute bottom-12 left-6 h-52 w-52 overflow-hidden border-[6px] border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1d4ed8_45%,#38bdf8_100%)] shadow-[0_20px_40px_rgba(15,23,42,0.18)] dark:border-white/10"
              >
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.34em] text-white/70">AGORM</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight">Future-facing systems</p>
                  </div>
                </div>
              </motion.div>

              <div className="pointer-events-none absolute left-8 top-16 h-4 w-4 rounded-full border border-sky-400/60 bg-sky-100 dark:border-cyan-300/60 dark:bg-cyan-300/20" />
              <div className="pointer-events-none absolute right-10 top-24 h-6 w-6 rounded-full border border-slate-300 bg-white dark:border-white/10 dark:bg-white/5" />
              <div className="pointer-events-none absolute bottom-20 left-16 h-5 w-5 rounded-full border border-sky-400/60 bg-sky-100 dark:border-cyan-300/60 dark:bg-cyan-300/20" />
              <div className="hero-octagon pointer-events-none absolute bottom-6 right-24 h-8 w-8 rotate-45 border border-slate-300 bg-white dark:border-white/10 dark:bg-white/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
