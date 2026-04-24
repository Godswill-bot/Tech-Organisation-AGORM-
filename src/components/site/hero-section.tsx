"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yOne = useTransform(scrollY, [0, 600], [0, -90]);
  const yTwo = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <motion.div
        style={{ y: yOne }}
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        style={{ y: yTwo }}
        className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(90,187,255,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(132,84,255,0.22),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-xs uppercase tracking-[0.34em] text-cyan-200/95"
        >
          Future-ready digital products
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl"
        >
          We Build Digital Experiences That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-300"
        >
          AGORM is a tech startup crafting premium web platforms, mobile apps, and innovation-driven internal products for education, fashion, and modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
          >
            Work With Us
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition-all duration-300 hover:border-cyan-300/70 hover:bg-white/10"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
