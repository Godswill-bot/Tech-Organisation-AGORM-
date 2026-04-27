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

const serviceDetails: Record<string, string[]> = {
  "Web Development": [
    "Platform architecture for scale and long-term maintainability",
    "Robust backend integrations and secure API design",
    "Performance tuning and reliability-focused deployment",
  ],
  "Mobile App Development": [
    "Cross-platform experiences with native-quality interactions",
    "Offline-aware flows and resilient app state handling",
    "Analytics-ready releases for growth and retention tracking",
  ],
  "UI/UX Design": [
    "Research-driven product flows and wireframe strategy",
    "Visual systems that align brand and usability standards",
    "Design handoff aligned tightly with engineering execution",
  ],
  "Tech Consulting": [
    "Technical audits to identify delivery and architecture risk",
    "Roadmap planning with realistic resource and timeline guidance",
    "Decision support for build-vs-buy and stack direction",
  ],
  "Brand Digital Transformation": [
    "Operational process mapping and system modernization planning",
    "Toolchain integration across teams and data touchpoints",
    "Continuous optimization loops after launch and adoption",
  ],
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 px-5 py-20 text-slate-900 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionTitle
            eyebrow="Services"
            title="Expanded Engineering Services For Product Teams That Need Delivery Depth"
            description="AGOM offers structured service tracks across product engineering, design, and technical strategy so your business can move from planning to measurable delivery without losing execution quality."
            eyebrowClassName="text-cyan-700"
            titleClassName="text-slate-900"
            descriptionClassName="text-slate-700"
          />
        </SectionReveal>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const details = serviceDetails[service.title] ?? [];
            return (
              <SectionReveal key={service.title} delay={index * 0.06}>
                <article className="group h-full rounded-3xl bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(15,23,42,0.1)] sm:p-7">
                  <div className="mb-6 inline-flex rounded-xl bg-cyan-50 p-3 text-cyan-600 transition-colors duration-300 group-hover:text-cyan-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">{service.description}</p>

                  <div className="mt-6 space-y-3">
                    {details.map((detail) => (
                      <p key={detail} className="text-sm leading-7 text-slate-700">
                        <span className="mr-2 text-cyan-500">•</span>
                        {detail}
                      </p>
                    ))}
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-10">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-700">Service Delivery Model</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Discovery And Scope</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">Define requirements, dependencies, and risk boundaries before implementation begins.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Execution And Review</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">Ship in clear milestones with collaborative reviews to maintain quality and alignment.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Optimization And Support</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">Measure outcomes post-launch and continuously improve based on real usage signals.</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
