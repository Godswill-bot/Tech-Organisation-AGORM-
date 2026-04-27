import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";

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
  return (
    <section id="about" className="bg-white px-5 py-22 text-slate-900 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SectionTitle
              eyebrow="About AGOM"
              title="A Product Engineering Team Built For Serious System Delivery"
              description="AGOM partners with institutions, startups, and growth-stage businesses to design and deploy digital systems that reduce friction, improve visibility, and support long-term scale."
              eyebrowClassName="text-slate-600"
              titleClassName="text-slate-900"
              descriptionClassName="text-slate-700"
              titleHoverClassName="text-hover-ink"
              descriptionHoverClassName="text-hover-ink"
            />
            <div className="rounded-3xl bg-slate-50 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)]">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-600">Mission</p>
              <p className="mt-3 text-base leading-8 text-slate-700">
                To translate bold ideas into reliable software systems through disciplined strategy, intentional product design, and high-quality engineering.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                We focus on practical delivery: systems teams can operate, maintain, and improve without unnecessary complexity.
              </p>
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <SectionReveal key={point.title} delay={index * 0.08}>
              <article className="h-full rounded-3xl bg-slate-50 p-6 shadow-[0_14px_32px_rgba(15,23,42,0.05)]">
                <h3 className="text-xl font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700">{point.body}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12">
          <div className="-mx-5 grid gap-8 border-y border-black/10 bg-slate-50 px-5 py-12 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:-mx-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Core Capabilities</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                Built To Handle Product Complexity End To End
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
                From discovery workshops to post-launch optimization, AGOM integrates product, engineering, and operational perspectives into one coordinated delivery model.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <p key={capability} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                    {capability}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">How We Operate</p>
              <div className="mt-4 space-y-4">
                {operatingPrinciples.map((principle, index) => (
                  <div key={principle} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">0{index + 1}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{principle}</p>
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
