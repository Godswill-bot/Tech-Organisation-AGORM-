import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SectionReveal } from "@/components/site/section-reveal";
import { insightUpdates, productSuites, workflowSteps } from "@/data/site-content";
import BlackSideImage from "../../../yoooo.jpg";

function FloatingIcon({
  children,
  className = "",
  duration = 6,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute opacity-20 ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function FloatingBackground({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const iconColor = variant === "dark" ? "text-white/20" : "text-slate-400/20";
  const glowColor = variant === "dark" ? "bg-black/20" : "bg-slate-300/20";

  return (
    <>
      <FloatingIcon className="left-10 top-10">
        <ArrowRight className={iconColor} size={40} />
      </FloatingIcon>

      <FloatingIcon className="bottom-20 right-16" delay={1}>
        <ExternalLink className={iconColor} size={36} />
      </FloatingIcon>

      <div className={`pointer-events-none absolute right-1/3 top-20 h-40 w-40 rounded-full ${glowColor} blur-3xl animate-pulse`} />
    </>
  );
}

function BackgroundFade({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const operatingValues = ["Clarity", "Efficiency", "Reliability", "Innovation", "Client-Centric"];

export function SystemsContextSections() {
  return (
    <>
      <section id="workflow" className="relative w-full overflow-hidden bg-white px-5 py-20 text-slate-900 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionReveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">Operating Model</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  How We Work Without Disrupting Yours.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  We study your current process first, then layer in clean digital systems that feel natural to adopt, easy to use, and simple to scale.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {operatingValues.map((value: string) => (
                    <span key={value} className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">From Discovery To Deployment</p>
                <p className="mt-4 text-lg leading-8 text-slate-100">
                  The goal is simple: remove friction, preserve what already works, and build a digital system your team can actually keep using.
                </p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition-colors hover:bg-slate-100">
                  Let&apos;s talk <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <SectionReveal key={step.id} delay={index * 0.07}>
                <article className="group h-full rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{step.id}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">{step.description}</p>
                  <div className="mt-6 h-1 w-12 bg-slate-900 transition-all duration-300 group-hover:w-20" />
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="product-suites" className="relative w-full overflow-hidden bg-black px-5 py-20 text-slate-100 sm:px-8 sm:py-24">
        <FloatingBackground variant="dark" />
        <BackgroundFade>
          <Image src={BlackSideImage} alt="" fill aria-hidden sizes="100vw" className="object-cover object-center opacity-55" />
          <div className="absolute inset-0 bg-black/55" />
        </BackgroundFade>

        <div className="relative mx-auto max-w-7xl">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">AGOM Product Suites</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Products Designed To Fit Real Workflows.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Structured tools for coordination, visibility, and operations that need to move fast without feeling chaotic.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {productSuites.map((suite, index) => (
              <SectionReveal key={suite.id} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:p-7">
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r opacity-90 ${suite.accent}`} />

                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{suite.focus}</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">{suite.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{suite.summary}</p>

                  {suite.href ? (
                    <a
                      href={suite.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 transition-colors hover:bg-slate-100"
                    >
                      View more <ExternalLink size={14} />
                    </a>
                  ) : null}
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="relative w-full bg-white px-5 py-20 text-slate-900 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionReveal>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">AGOM Insights</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Latest Notes On Delivery And Product Operations.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  Practical updates from active builds, written to keep teams aligned on what actually moves projects forward.
                </p>
              </div>

              <div className="rounded-4xl border border-black/10 bg-slate-50 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Stay informed</p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  New releases, delivery lessons, and product thinking from the AGOM team.
                </p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black">
                  Subscribe by reaching out <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {insightUpdates.map((insight, index) => (
              <SectionReveal key={insight.id} delay={index * 0.08}>
                <article className="h-full rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(2,6,23,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_54px_rgba(2,6,23,0.1)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {insight.category} <span className="mx-2 text-slate-300">•</span> {insight.date}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">{insight.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{insight.summary}</p>
                  <a href={insight.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-slate-700">
                    {insight.cta} <ArrowRight size={14} />
                  </a>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
