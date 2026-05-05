"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Orbit, ShieldCheck, LayoutGrid } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { GsapWordReveal } from "@/components/site/gsap-word-reveal";
import BlackBg from "../../../black.webp";

const featureCards = [
  {
    title: "Cinematic Interfaces",
    description: "Layered visuals, subtle glow, and a calm rhythm that keeps the experience premium without feeling busy.",
    icon: Sparkles,
  },
  {
    title: "Scroll Storytelling",
    description: "Word-by-word reveals and staggered motion that build a narrative as the page moves from section to section.",
    icon: LayoutGrid,
  },
  {
    title: "Performance First",
    description: "Motion is kept lean, assets are lazy loaded, and backgrounds are used with purpose instead of clutter.",
    icon: ShieldCheck,
  },
  {
    title: "Future Ready Layouts",
    description: "Modular cards and placeholder slots make it easy to swap in real imagery, Blender renders, or 3D scenes.",
    icon: Orbit,
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 sm:py-32">
      {/* PARALLAX_BACKGROUND_SLOT: replace this layered backdrop with a hero still, Blender render, or another cinematic image. */}
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0">
        <Image
          src={BlackBg}
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.72),rgba(2,6,23,0.9))]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">Features</p>
            <GsapWordReveal
              tag="h2"
              text="A premium motion system built for modern startup storytelling."
              className="mt-4 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
              wordClassName="will-change-transform"
            />
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Each section is designed to feel smooth, futuristic, and easy to extend with real imagery, video, or 3D assets later.
            </p>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.26)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Story beats</p>
            <p className="mt-3 text-base leading-8 text-slate-200">
              Smooth transitions, layered depth, and a restrained glow system keep the experience premium instead of over-animated.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/6 via-transparent to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-black/30 p-3 text-white shadow-[0_14px_36px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-105">
                    {/* FEATURE_ICON_SLOT: swap this icon for a custom SVG, product mark, or micro-illustration. */}
                    <Icon size={22} />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-white">{feature.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
