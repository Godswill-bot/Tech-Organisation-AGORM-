"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { BackgroundDecorations } from "@/components/site/background-decorations";
import { Footer } from "@/components/site/footer";
import { EnhancedHomepageHero } from "@/components/site/enhanced-hero";
import { DanglingCharacters } from "@/components/site/cartoon-characters";
import { Navbar } from "@/components/site/navbar";
import { TabsStackSection } from "@/components/site/Tabs-stack-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";

/* ============================================================
   HERO SCROLL-OUT
   
   Wraps <HeroSection> in a sticky container so it pins at the
   top while the user scrolls.  As they scroll through its
   height the hero scales + fades on the GPU — no layout
   thrashing, no blur filter (blur forces a paint layer every
   frame on most browsers which causes jank).
   
   Key performance choices:
   - `will-change: transform, opacity` set in className, not
     toggled dynamically (avoids style recalc on every frame).
   - useSpring on scrollYProgress smooths out the raw scroll
     velocity so the animation never stutters when the user
     scrolls quickly.
   - No `filter: blur(...)` — replaced with opacity fade only.
   - Scale goes from 1 → 0.92 (not 0.85) so the hero doesn't
     shrink so aggressively that content jumps.
   ============================================================ */

function HeroScrollOut() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Ultra-smooth spring physics for buttery scroll feel
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.0001,
    mass: 0.5,
  });

  // Multi-layer animations for depth
  const scale   = useTransform(smooth, [0, 1], [1, 0.94]);
  const opacity = useTransform(smooth, [0, 0.5, 0.85], [1, 0.8, 0]);
  const y       = useTransform(smooth, [0, 1], [0, -60]);

  return (
    <div ref={wrapperRef} style={{ height: "110vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ 
            scale, 
            opacity, 
            y,
          }}
          className="h-full will-change-transform"
        >
          <EnhancedHomepageHero />
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   SITE PAGE
   ============================================================ */

export function SitePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-br from-[#F5F1ED] via-[#FBF7F3] to-[#EFE8E3] text-[#5D4037] transition-colors duration-500">
      {/* Fixed background layers - warm muted colors */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#D4A574]/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-[#8B5A8C]/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1ED] via-[#FBF7F3] to-[#EFE8E3]" />
      </div>

      {/* Dangling cartoon characters */}
      <DanglingCharacters />

      <BackgroundDecorations />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* HERO — pins while scrolling, then fades out */}
        <HeroScrollOut />

        {/*
         * EXPLORE SECTION — sits directly below the hero.
         * z-10 ensures it layers on top of the fading hero.
         * The background color on TabsStackSection means it
         * naturally covers the hero as it scrolls into view.
         */}
        <div className="relative z-10">
          <TabsStackSection />
        </div>

        {/* NOTE: ProjectsSection is intentionally removed from here.
            It lives exclusively inside the "Shipped products" panel
            takeover in TabsStackSection. */}

        <TestimonialsSection />
      </motion.main>

      <Footer />
    </div>
  );
}