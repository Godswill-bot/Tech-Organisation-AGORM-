"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // HERO ANIMATIONS
      gsap.fromTo(
        ".hero-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.05,
        }
      );

      gsap.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white flex items-center"
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/panels.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />

      {/* MAIN CONTENT */}
      <div className="relative z-[3] mx-auto w-full max-w-7xl grid lg:grid-cols-[80px_1fr_80px] items-center gap-10">

        {/* LEFT SOCIAL */}
        <div className="hidden lg:flex flex-col items-center gap-6">
          <div className="h-32 w-[2px] bg-white/20 relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-indigo-500 animate-pulse" />
          </div>

          <div className="flex flex-col gap-5 text-sm text-slate-300">
            <span className="hover:text-indigo-400 transition cursor-pointer">IG</span>
            <span className="hover:text-indigo-400 transition cursor-pointer">X</span>
            <span className="hover:text-indigo-400 transition cursor-pointer">IN</span>
          </div>

          <div className="h-32 w-[2px] bg-white/20" />
        </div>

        {/* CENTER CONTENT */}
        <div>
          <p className="hero-sub text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
            AGOM Digital Systems Studio
          </p>

          <h1 className="hero-title mt-6 text-5xl lg:text-7xl font-semibold leading-[1.05] max-w-5xl">
            We Build Digital Systems That Think, Scale & Perform.
          </h1>

          <p className="hero-sub mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            AGOM is a product engineering studio designing intelligent software,
            modern platforms, and scalable digital ecosystems for startups and institutions.
          </p>

          <p className="hero-sub mt-4 max-w-2xl text-base text-slate-300">
            We don’t just build websites — we design systems that evolve with real-world needs.
          </p>

          {/* TAGS */}
          <div className="mt-8 flex flex-wrap gap-3 hero-sub">
            {["AI", "Web", "Automation", "Systems"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 hero-sub">
            <button className="px-6 py-3 rounded-xl bg-white text-black hover:bg-slate-200 transition font-medium">
              Explore Our Work
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/30 hover:border-white transition">
              Start a Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}