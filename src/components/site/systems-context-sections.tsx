import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionReveal } from "@/components/site/section-reveal";
import { insightUpdates, productSuites, workflowSteps } from "@/data/site-content";

export function SystemsContextSections() {
  return (
    <>
      <section id="workflow" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-emerald-950/10 bg-[#dff5e8] text-slate-900 shadow-[0_30px_80px_rgba(12,36,30,0.22)]">
          <div className="relative px-5 pb-12 pt-14 sm:px-10 sm:pb-14 lg:px-14 lg:pt-16">
            <div className="pointer-events-none absolute -left-10 -top-16 h-44 w-44 rounded-full bg-lime-300/80 blur-md" />
            <div className="pointer-events-none absolute -right-10 top-8 h-56 w-56 rounded-full border-[24px] border-cyan-300/45" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/75">Operating Model</p>
            <div className="relative mt-5 max-w-4xl">
              <h2 className="text-hover-accent text-balance text-4xl font-semibold leading-tight text-emerald-950 sm:text-5xl">
                How We Build Your Systems Without Breaking Your Existing Workflow
              </h2>
              <p className="text-hover-soft mt-5 max-w-3xl text-lg leading-8 text-emerald-900/75">
                AGOM aligns with your current operation first, then introduces clean digital layers that make execution faster and easier to scale.
              </p>
            </div>

            <div className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workflowSteps.map((step, index) => (
                <SectionReveal key={step.id} delay={index * 0.06}>
                  <article className="h-full rounded-3xl border border-emerald-900/10 bg-white/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-900/20 hover:bg-white/60">
                    <p className="text-xl font-bold tracking-widest text-emerald-950/80">{"{ "}{step.id}{" }"}</p>
                    <h3 className="text-hover-soft mt-16 text-3xl font-semibold leading-tight text-emerald-950">{step.title}</h3>
                    <p className="mt-5 text-base leading-7 text-emerald-900/75">{step.description}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>

            <div className="relative mt-10 inline-flex rounded-full border border-emerald-900/15 bg-white/50 px-5 py-3 text-sm font-semibold text-emerald-950">
              Need this execution model in your institution?
              <a href="#contact" className="ml-3 inline-flex items-center gap-1 text-emerald-950 transition-colors hover:text-emerald-700">
                LET'S TALK <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="product-suites" className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-50 text-slate-900 shadow-[0_24px_70px_rgba(2,6,23,0.18)]">
          <div className="relative px-5 pb-14 pt-14 sm:px-10 lg:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/70">AGOM Product Suites</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
              <div>
                <h2 className="text-hover-accent text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                  Systems Built For Real Teams, Real Work, And Real Constraints
                </h2>
                <p className="text-hover-soft mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  From institutional coordination to credit intelligence, AGOM products focus on usable structure, visibility, and measurable outcomes.
                </p>
                <a href="#projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-emerald-950 transition-all duration-300 hover:translate-x-1 hover:bg-lime-300">
                  Explore Systems <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                {productSuites.map((suite, index) => (
                  <SectionReveal key={suite.id} delay={index * 0.08}>
                    <article className="group relative h-full overflow-hidden rounded-[1.7rem] border border-slate-300/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,6,23,0.14)] sm:min-h-[250px]">
                      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 ${suite.accent}`} />
                      <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-900/75">{suite.focus}</p>
                        <h3 className="text-hover-soft mt-3 text-4xl font-semibold leading-tight text-slate-900">{suite.name}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-700">{suite.summary}</p>
                        {suite.href ? (
                          <a
                            href={suite.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-900 transition-colors hover:text-emerald-700"
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
        </div>
      </section>

      <section id="insights" className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-100 text-slate-900 shadow-[0_20px_60px_rgba(12,36,30,0.16)]">
          <div className="relative px-5 pb-12 pt-14 sm:px-10 lg:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900/70">AGOM Insights</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.25fr]">
              <div>
                <h2 className="text-hover-accent text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                  Latest Updates On Systems, Delivery, And Product Operations
                </h2>
                <p className="text-hover-soft mt-5 max-w-xl text-lg leading-8 text-slate-700">
                  Practical notes from active AGOM builds, focused on what works when deploying modern systems in fast-moving teams.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {insightUpdates.map((insight, index) => (
                  <SectionReveal key={insight.id} delay={index * 0.08}>
                    <article className="h-full rounded-3xl border border-slate-300/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-900/25 hover:shadow-[0_18px_40px_rgba(2,6,23,0.1)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {insight.category} <span className="mx-2">•</span> {insight.date}
                      </p>
                      <h3 className="text-hover-soft mt-5 text-3xl font-semibold leading-tight text-slate-900">{insight.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-700">{insight.summary}</p>
                      <a href={insight.href} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-900 transition-colors hover:text-emerald-700">
                        {insight.cta} <ArrowRight size={14} />
                      </a>
                    </article>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
