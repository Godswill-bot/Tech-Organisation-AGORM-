import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { testimonials } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionTitle
            eyebrow="Trust"
            title="What Partners Say About Working With AGOM"
            description="Client experience is central to our process. We prioritize clarity, measurable outcomes, and dependable delivery from kickoff to release."
          />
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <SectionReveal key={item.author} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/20">
                <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
                <div className="mt-6 border-t border-black/10 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{item.author}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.role}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}