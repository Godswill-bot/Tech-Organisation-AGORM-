import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { services } from "@/data/site-content";
import { Globe, Lightbulb, Palette, Rocket, Smartphone } from "lucide-react";

const iconMap = {
  Globe,
  Smartphone,
  Palette,
  Lightbulb,
  Rocket,
};

export function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionTitle
            eyebrow="Services"
            title="Engineering, Design, And Strategic Execution"
            description="From concept to launch, AGORM delivers technology services that help brands and businesses move faster with confidence."
          />
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <SectionReveal key={service.title} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-cyan-300/40 dark:hover:bg-slate-900">
                  <div className="mb-5 inline-flex rounded-xl bg-slate-100 p-3 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-50 group-hover:text-cyan-700 dark:bg-white/5 dark:text-cyan-200 dark:group-hover:bg-cyan-400/10 dark:group-hover:text-cyan-100">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
