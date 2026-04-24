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
    title: "What Makes AGORM Different",
    body: "We blend startup speed with enterprise-grade quality, combining strategy, design, and engineering in one execution flow.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionTitle
            eyebrow="About AGORM"
            title="Built By Thinkers, Makers, And Problem Solvers"
            description="We build robust technology solutions while continuously innovating our own internal startup products."
          />
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((point, index) => (
            <SectionReveal key={point.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/60 dark:border-white/10 dark:bg-white/3 dark:hover:border-cyan-300/40">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{point.body}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
