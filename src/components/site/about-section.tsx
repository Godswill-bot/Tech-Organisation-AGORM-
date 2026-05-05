"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { GsapWordReveal } from "@/components/site/gsap-word-reveal";
import { SectionReveal } from "@/components/site/section-reveal";
import ReferenceBg from "../../../peopelooking.png";

const points = [
  {
    title: "Who We Are",
    body: "A product-focused team of engineers and designers building meaningful software that scales.",
  },
  {
    title: "Mission & Vision",
    body: "To help organizations turn ambitious ideas into reliable digital systems that create real impact.",
  },
  {
    title: "What Makes AGOM Different",
    body: "We blend startup speed with enterprise-grade quality, combining strategy, design, and engineering in one execution flow.",
  },
];

const capabilities = [
  "System architecture and product planning",
  "Workflow automation and process digitization",
  "Secure API and platform engineering",
  "Product analytics and continuous optimization",
];

const operatingPrinciples = [
  "We build around your existing operational reality, not assumptions.",
  "Every delivery phase includes measurable outcomes and checkpoint reviews.",
  "We design for adoption, so teams can use systems confidently from day one.",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationSlotRef = useRef<HTMLDivElement | null>(null);
  const storyCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (animationSlotRef.current) {
        gsap.to(animationSlotRef.current, {
          yPercent: -4,
          scale: 1.01,
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
        storyCardRefs.current.filter(Boolean),
        { opacity: 0, y: 24, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-slate-950 px-5 py-22 text-white sm:px-8 sm:py-30">
      <div className="pointer-events-none absolute inset-0">
        <Image src={ReferenceBg} alt="" fill aria-hidden="true" sizes="100vw" className="object-contain object-center opacity-30 blur-[1px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.82),rgba(2,6,23,0.94))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-400">About AGOM</p>
              <GsapWordReveal
                tag="h2"
                text="A Product Engineering Team Built For Serious System Delivery"
                className="mt-4 text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl"
                wordClassName="will-change-transform"
              />
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                AGOM partners with institutions, startups, and growth-stage businesses to design and deploy digital systems that reduce friction, improve visibility, and support long-term scale.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {capabilities.map((capability) => (
                  <span key={capability} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 backdrop-blur-sm">
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/6 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-md sm:p-6">
              {/* ABOUT_ANIMATION_SLOT: replace this panel with a 3D model, a Blender render, or a motion graphic. */}
              <div ref={animationSlotRef} className="relative min-h-104 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-950 to-black will-change-transform">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_28%)]" />
                <div className="absolute inset-0 grid place-items-center p-6 text-center">
                  <div className="max-w-sm rounded-3xl border border-dashed border-white/18 bg-white/6 p-6 backdrop-blur-md">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">ABOUT_ANIMATION_SLOT</p>
                    <p className="mt-4 text-2xl font-semibold text-white">[3D Model / Motion Panel]</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Use this area for a Sketchfab GLB preview, a Blender export, or a short product animation.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-200">
                  Cinematic depth
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-950">
                  Motion-led
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={point.title}
              ref={(element) => {
                storyCardRefs.current[index] = element;
              }}
              className="h-full rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_14px_36px_rgba(0,0,0,0.16)] backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{point.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{point.body}</p>
            </div>
          ))}
        </div>

        <SectionReveal className="mt-12">
          <div className="grid gap-8 rounded-4xl border border-white/10 bg-white/6 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Core Capabilities</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Built To Handle Product Complexity End To End
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                From discovery workshops to post-launch optimization, AGOM integrates product, engineering, and operational perspectives into one coordinated delivery model.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <p key={capability} className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm text-slate-200 shadow-sm">
                    {capability}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">How We Operate</p>
              <div className="mt-6 space-y-5">
                {operatingPrinciples.map((principle, index) => (
                  <div key={principle} className="rounded-2xl border border-white/10 bg-black/25 p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
