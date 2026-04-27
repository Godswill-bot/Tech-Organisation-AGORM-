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

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <SectionReveal key={service.title} delay={index * 0.06}>
                <article className="group h-full py-2 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-6 inline-flex p-1 text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-300">{service.description}</p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
