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
    <section id="about" className="px-5 py-22 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SectionTitle
              eyebrow="About AGORM"
              title="Who We Are"
              description="We are a product-focused technology organization designing and engineering scalable digital systems for ambitious businesses."
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Mission</p>
              <p className="mt-3 text-base leading-8 text-slate-300">
                To translate bold ideas into reliable software products through strategy, design, and engineering excellence.
              </p>
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <SectionReveal key={point.title} delay={index * 0.08}>
              <article className="h-full border-l border-cyan-300/35 pl-5">
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{point.body}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
