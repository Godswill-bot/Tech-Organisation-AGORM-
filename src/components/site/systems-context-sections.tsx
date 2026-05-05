import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SectionReveal } from "@/components/site/section-reveal";
import { insightUpdates, productSuites, workflowSteps } from "@/data/site-content";
import BlackSideImage from "../../../black side.png";

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

export function SystemsContextSections() {
  return (
    <>
      <section id="workflow" className="relative w-full bg-white px-0 py-20 text-slate-800 sm:py-24">
        <div className="relative w-full overflow-hidden bg-black px-5 pb-12 pt-14 sm:px-8 sm:pb-14 lg:px-14 lg:pt-16">
            <FloatingBackground variant="dark" />
            <BackgroundFade>
              <Image src={BlackSideImage} alt="" fill aria-hidden sizes="100vw" className="object-cover object-center opacity-70" />
              <div className="absolute inset-0" />
            </BackgroundFade>
            <div className="pointer-events-none absolute -left-10 -top-16 h-44 w-44 rounded-full bg-black/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 top-0 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">Operating Model</p>
            <div className="relative mt-5 max-w-4xl">
              <h2 className="text-hover-ink text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                How We Build Your Systems Without Breaking Your Existing Workflow
              </h2>
              <p className="text-hover-soft mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                AGOM aligns with your current operation first, then introduces clean digital layers that make execution faster and easier to scale.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {workflowSteps.map((step, index) => (
                <SectionReveal key={step.id} delay={index * 0.06}>
                  <article className="group h-full rounded-[1.75rem] bg-slate-950 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">{step.id}</p>
                    <h3 className="text-hover-ink mt-16 text-3xl font-semibold leading-tight text-slate-900">{step.title}</h3>
                    <p className="mt-5 text-base leading-7 text-slate-400">{step.description}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>

            <div className="relative mt-10 inline-flex rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              Need this execution model in your institution?
              <a href="#contact" className="ml-3 inline-flex items-center gap-1 text-slate-900 transition-colors hover:text-slate-700">
                LET'S TALK <ArrowRight size={16} />
              </a>
            </div>
        </div>

      <div className="relative text-xs tracking-[0.3em] text-slate-300 overflow-hidden">
  
  <motion.p
    initial={{ opacity: 0, scale: 0.85, y: 120, filter: "blur(12px)" }}
    
    whileInView={{ 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: "blur(0px)" 
    }}

    animate={{
      y: [0, -10, 0], // floating effect after entrance
    }}

    viewport={{ once: true, amount: 0.6 }}

    transition={{
      // entrance
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],

      // floating loop
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}

    className="text-center font-bold tracking-tight
               text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[20rem]"
  >
    IT SERVICES
  </motion.p>
</div>
      
      </section>

      <section id="product-suites" className="relative w-full bg-black px-0 py-20 text-slate-100 sm:py-24">
        <FloatingBackground variant="dark" />
      <motion.p
  initial={{ opacity: 0, scale: 0.8, y: 120, filter: "blur(12px)" }}
  whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1], // smoother, premium feel
  }}
  className="text-center font-extrabold tracking-tight
             text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[20rem]"
  style={{
    textShadow: `
      0 8px 30px rgba(0,0,0,0.25),
      0 0 40px rgba(255,255,255,0.18),
      0 0 80px rgba(255,255,255,0.08)
    `,
  }}
>
  AGOM
</motion.p>
        <div className="relative w-full bg-black px-5 pb-14 pt-14 sm:px-8 lg:px-14">
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 0.05 }}
  transition={{ duration: 1.5 }}
  className="pointer-events-none absolute inset-0 flex items-center justify-center"
>
  <h1 className="text-[10rem] md:text-[16rem] font-extrabold text-shadow-white tracking-tight">
    AGOM
  </h1>
</motion.div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">AGOM Product Suites</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
              <div>
                <h2 className="text-hover-ink text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Systems Built For Real Teams, Real Work, And Real Constraints
                </h2>
                <p className="text-hover-soft mt-5 max-w-2xl text-lg leading-8 text-white">
                  From institutional coordination to credit intelligence, AGOM products focus on usable structure, visibility, and measurable outcomes.
                </p>
                <a href="#projects" className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition-all duration-300 hover:translate-x-1 hover:bg-slate-50">
                  Explore Systems <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                {productSuites.map((suite, index) => (
                  <SectionReveal key={suite.id} delay={index * 0.08}>
                    <article className="group relative h-full overflow-hidden rounded-[1.8rem] bg-black p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,6,23,0.12)] sm:min-h-62.5">
                      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r opacity-90 ${suite.accent}`} />
                      <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">{suite.focus}</p>
                        <h3 className="text-hover-ink mt-3 text-4xl font-semibold leading-tight text-white">{suite.name}</h3>
                        <p className="mt-4 text-sm leading-7 text-white">{suite.summary}</p>
                        {suite.href ? (
                          <a
                            href={suite.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                          >
                            Visit live <ExternalLink size={14} />
                          </a>
                        ) : null}
                      </div>
                    </article>
                  </SectionReveal>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section id="insights" className="relative w-full bg-white px-0 pb-20 text-slate-900 sm:pb-24">
        
        <div className="relative w-full bg-white px-5 pb-12 pt-14 sm:px-8 lg:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">AGOM Insights</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.25fr]">
              <div>
                <h2 className="text-hover-ink text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                  Latest Updates On Systems, Delivery, And Product Operations
                </h2>
                <p className="text-hover-soft mt-5 max-w-xl text-lg leading-8 text-slate-700">
                  Practical notes from active AGOM builds, focused on what works when deploying modern systems in fast-moving teams.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {insightUpdates.map((insight, index) => (
                  <SectionReveal key={insight.id} delay={index * 0.08}>
                    <article className="h-full rounded-[1.75rem] bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(2,6,23,0.08)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {insight.category} <span className="mx-2">•</span> {insight.date}
                      </p>
                      <h3 className="text-hover-ink mt-5 text-3xl font-semibold leading-tight text-slate-900">{insight.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-700">{insight.summary}</p>
                      <a href={insight.href} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-700">
                        {insight.cta} <ArrowRight size={14} />
                      </a>
                    </article>
                  </SectionReveal>
                ))}
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
