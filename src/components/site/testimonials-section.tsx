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
              <article className="group relative h-full rounded-2xl border-l-4 border-slate-900 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
                <div className="text-3xl font-bold text-slate-900 opacity-30 mb-2">"</div>
                <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
                <div className="mt-6 border-t-2 border-slate-900 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-4 bg-slate-900" />
                    <p className="text-sm font-semibold text-slate-900">{item.author}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-600 mt-1">{item.role}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}