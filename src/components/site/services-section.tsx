"use client";

import {
  Globe,
  Smartphone,
  Palette,
  Lightbulb,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { services } from "@/data/site-content";

const iconMap = {
  "Web Development": Globe,
  "Mobile App Development": Smartphone,
  "UI/UX Design": Palette,
  "Tech Consulting": Lightbulb,
  "Brand Digital Transformation": Rocket,
};

const serviceTags: Record<string, string[]> = {
  "Web Development": ["Custom Development", "Cloud Solutions", "API Systems"],
  "Mobile App Development": ["Cross-Platform", "Offline-Ready", "Analytics"],
  "UI/UX Design": ["Product Design", "UI/UX Strategy", "Design Systems"],
  "Tech Consulting": ["Architecture Audit", "Roadmap Strategy", "Build vs Buy"],
  "Brand Digital Transformation": [
    "Digital Processes",
    "Paperless Operations",
    "Workflow Automation",
  ],
};

const serviceCategoryHeading: Record<string, string> = {
  "Web Development": "Software Engineering Ecosystem",
  "Mobile App Development": "Mobile-First Foundations",
  "UI/UX Design": "Startup Enablement",
  "Tech Consulting": "Strategic Direction",
  "Brand Digital Transformation": "Business Digitization",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Our Services
            </div>

            <h2 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Solutions That
              <br />
              Drive Digital Success
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/40 lg:self-end"
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            See All Services
          </a>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.title as keyof typeof iconMap];
            const tags = serviceTags[service.title] ?? [];
            const heading =
              serviceCategoryHeading[service.title] ?? service.title;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 transition hover:border-white/20"
              >
                {/* star */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 opacity-[0.06] group-hover:opacity-[0.15]">
                  <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <line
                        key={i}
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="2"
                        stroke="white"
                        strokeWidth="0.7"
                        transform={`rotate(${i * 45} 50 50)`}
                      />
                    ))}
                  </svg>
                </div>

                {/* header */}
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {heading}
                  </h3>

                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                </div>

                {/* text */}
                <p className="mt-10 text-sm leading-7 text-white/70">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] hover:border-white/30"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Read More
                </a>

                {/* tags */}
                <div className="mt-10 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* index */}
                <span className="absolute right-6 top-6 text-xs font-mono text-white/20">
                  {`{ 0${index + 1} }`}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      {/* MARQUEE (FIXED + HIGH VISIBILITY) */}
      <div className="relative mt-32 overflow-hidden border-t border-white/10 py-16">
        <div className="agom-marquee-row">
          <div className="agom-marquee-track">
            {Array.from({ length: 2 }).flatMap((_, group) =>
              ["Brand","Strategy","Development","Management","Solutions","Production","Business"].map(
                (word) => (
                  <span key={`r1-${group}-${word}`} className="agom-marquee-word">
                    {word} <span className="agom-marquee-sep">_</span>
                  </span>
                )
              )
            )}
          </div>
        </div>

        <div className="agom-marquee-row mt-4">
          <div className="agom-marquee-track agom-marquee-track--reverse">
            {Array.from({ length: 2 }).flatMap((_, group) =>
              ["Solutions","Production","Business","Brand","Strategy","Development","Management"].map(
                (word) => (
                  <span key={`r2-${group}-${word}`} className="agom-marquee-word">
                    {word} <span className="agom-marquee-sep">_</span>
                  </span>
                )
              )
            )}
          </div>
        </div>

        <style jsx>{`
          .agom-marquee-row {
            display: flex;
            overflow: hidden;
            width: 100%;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }

          .agom-marquee-track {
            display: inline-flex;
            gap: 2.5rem;
            white-space: nowrap;
            animation: scroll 35s linear infinite;
            will-change: transform;
          }

          .agom-marquee-track--reverse {
            animation-direction: reverse;
            animation-duration: 45s;
          }

          .agom-marquee-word {
            font-size: clamp(3rem, 8vw, 7rem);
            font-weight: 900;
            letter-spacing: -0.04em;
            color: transparent;
            -webkit-text-stroke: 2.2px rgba(255, 255, 255, 0.85);
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.12);
          }

          .agom-marquee-sep {
            margin-left: 1rem;
            color: rgba(255, 255, 255, 0.85);
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .agom-marquee-track {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}