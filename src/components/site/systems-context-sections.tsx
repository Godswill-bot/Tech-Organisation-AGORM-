import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionReveal } from "@/components/site/section-reveal";
import { insightUpdates, productSuites, workflowSteps } from "@/data/site-content";
import BlackSideImage from "../../../black side.png";

export function SystemsContextSections() {
  return (
    <>
      <section id="workflow" className="w-full bg-white px-0 py-20 text-slate-900 sm:py-24">
        <div className="relative w-full overflow-hidden bg-white px-5 pb-12 pt-14 sm:px-8 sm:pb-14 lg:px-14 lg:pt-16">
            <div className="pointer-events-none absolute inset-0">
              <Image src={BlackSideImage} alt="" fill aria-hidden className="object-cover object-center opacity-12" sizes="100vw" />
              <div className="absolute inset-0 bg-white/82" />
            </div>
            <div className="pointer-events-none absolute -left-10 -top-16 h-44 w-44 rounded-full bg-black/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 top-0 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Operating Model</p>
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
                  <article className="h-full rounded-[1.75rem] bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{step.id}</p>
                    <h3 className="text-hover-ink mt-16 text-3xl font-semibold leading-tight text-slate-900">{step.title}</h3>
                    <p className="mt-5 text-base leading-7 text-slate-700">{step.description}</p>
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
      </section>

      <section id="product-suites" className="w-full bg-[#f7f8fb] px-0 py-20 text-slate-900 sm:py-24">
        <div className="relative w-full bg-[#f7f8fb] px-5 pb-14 pt-14 sm:px-8 lg:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">AGOM Product Suites</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
              <div>
                <h2 className="text-hover-ink text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                  Systems Built For Real Teams, Real Work, And Real Constraints
                </h2>
                <p className="text-hover-soft mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  From institutional coordination to credit intelligence, AGOM products focus on usable structure, visibility, and measurable outcomes.
                </p>
                <a href="#projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:translate-x-1 hover:bg-black">
                  Explore Systems <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                {productSuites.map((suite, index) => (
                  <SectionReveal key={suite.id} delay={index * 0.08}>
                    <article className="group relative h-full overflow-hidden rounded-[1.8rem] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,6,23,0.12)] sm:min-h-[250px]">
                      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-90 ${suite.accent}`} />
                      <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{suite.focus}</p>
                        <h3 className="text-hover-ink mt-3 text-4xl font-semibold leading-tight text-slate-900">{suite.name}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-700">{suite.summary}</p>
                        {suite.href ? (
                          <a
                            href={suite.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-700"
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

      <section id="insights" className="w-full bg-white px-0 pb-20 text-slate-900 sm:pb-24">
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
