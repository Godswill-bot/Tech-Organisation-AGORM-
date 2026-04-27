"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { projects } from "@/data/site-content";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-22 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-[90rem]">
        <SectionReveal>
          <SectionTitle
            eyebrow="Portfolio"
            title="Large-Scale Project Showcases"
            description="Each project is presented as a full showcase section, with richer context and larger visuals for clearer product storytelling."
          />
        </SectionReveal>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.08}>
              <article
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 md:p-10 lg:p-12"
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br opacity-15 ${project.gradient}`} />

                <div className={`relative grid gap-10 lg:gap-12 ${index % 2 === 0 ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"}`}>
                  <motion.div
                    className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.category}</p>
                    <h3 className="text-hover-accent mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{project.title}</h3>
                    <p className="text-hover-soft mt-5 text-base leading-8 text-slate-300 sm:text-lg">{project.summary}</p>

                    <div className="mt-7 grid gap-4 text-sm leading-7 text-slate-300 sm:grid-cols-2 sm:text-[15px]">
                      <p><span className="font-medium text-white">Challenge:</span> {project.challenge}</p>
                      <p><span className="font-medium text-white">Solution:</span> {project.solution}</p>
                      <p className="sm:col-span-2"><span className="font-medium text-white">Impact:</span> {project.impact}</p>
                    </div>

                    <p className="mt-6 text-lg font-semibold text-slate-900">{project.metric}</p>

                    {project.websiteUrl || project.trackerUrl ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.websiteUrl ? (
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition-colors hover:bg-slate-50"
                          >
                            MTU SIWES Platform <ExternalLink size={14} />
                          </a>
                        ) : null}
                        {project.trackerUrl ? (
                          <a
                            href={project.trackerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition-colors hover:bg-slate-50"
                          >
                            MTU SIWES Tracker <ExternalLink size={14} />
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </motion.div>

                  <motion.div
                    className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  >
                    {project.previewImage ? (
                      <Image
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        width={1600}
                        height={1000}
                        className="h-[20rem] w-full object-cover object-top sm:h-[26rem] lg:h-[34rem]"
                      />
                    ) : (
                      <div className="grid h-[20rem] place-items-center px-4 text-center text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:h-[26rem] lg:h-[34rem]">
                        [IMAGE PLACEHOLDER: project preview]
                      </div>
                    )}
                  </motion.div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
