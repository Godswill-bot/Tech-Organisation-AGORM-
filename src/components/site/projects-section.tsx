"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { projects } from "@/data/site-content";

export function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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

        {/* Featured Project with Sidebar Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_2fr_1fr]">
          {/* Left Sidebar - Featured Project */}
          <SectionReveal>
            <motion.div
              className="flex flex-col justify-between rounded-2xl border border-slate-900/20 bg-slate-50 p-6 h-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-950">{featuredProject.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-slate-900/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-900">
                    {featuredProject.category}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">{featuredProject.summary}</p>
              </div>

              {/* Featured Project Image */}
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-900/10">
                {featuredProject.previewImage ? (
                  <Image
                    src={featuredProject.previewImage}
                    alt={`${featuredProject.title} preview`}
                    width={1600}
                    height={1000}
                    className="h-[16rem] w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid h-[16rem] place-items-center px-4 text-center text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    [IMAGE PLACEHOLDER]
                  </div>
                )}
              </div>

              {/* View More Button */}
              <a
                href={featuredProject.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-950 transition-all hover:bg-[#B3E600] hover:gap-3"
              >
                View More <ChevronRight size={16} />
              </a>
            </motion.div>
          </SectionReveal>

          {/* Main Featured Project Details */}
          <SectionReveal delay={0.08}>
            <motion.article
              className="relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white p-8 lg:p-10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-6 bg-slate-900" />
                <p className="text-xs uppercase tracking-[0.2em] text-slate-900 font-semibold">{featuredProject.category}</p>
              </div>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-950 lg:text-5xl">{featuredProject.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{featuredProject.summary}</p>

              <div className="mt-7 grid gap-4 border-l-2 border-slate-900 pl-4 text-sm leading-7 text-slate-700 sm:text-[15px]">
                <p><span className="font-medium text-slate-900">Challenge:</span> {featuredProject.challenge}</p>
                <p><span className="font-medium text-slate-900">Solution:</span> {featuredProject.solution}</p>
                <p><span className="font-medium text-slate-900">Impact:</span> {featuredProject.impact}</p>
              </div>

              <p className="mt-6 text-lg font-semibold text-slate-900">{featuredProject.metric}</p>

              {featuredProject.websiteUrl || featuredProject.trackerUrl ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {featuredProject.websiteUrl ? (
                    <a
                      href={featuredProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-slate-900"
                    >
                      Explore <ExternalLink size={14} />
                    </a>
                  ) : null}
                  {featuredProject.trackerUrl ? (
                    <a
                      href={featuredProject.trackerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-slate-900"
                    >
                      Track <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </motion.article>
          </SectionReveal>

          {/* Right Sidebar - Stats/Meta */}
          <SectionReveal delay={0.16}>
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-6">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-600 font-semibold">Key Metric</p>
                <p className="mt-2 text-2xl font-bold text-slate-950">{featuredProject.metric}</p>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-white p-6 text-center">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-600 font-semibold mb-3">Project Type</p>
                <span className="inline-block rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
                  {featuredProject.category}
                </span>
              </div>
            </motion.div>
          </SectionReveal>
        </div>

        {/* Horizontal Carousel of Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
            <SectionReveal>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-950">Other Projects</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => scroll("left")}
                    className="rounded-full border border-slate-900/20 p-2 transition-colors hover:bg-slate-900/5"
                    aria-label="Scroll left"
                  >
                    <ChevronRight size={20} className="rotate-180 text-slate-900" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="rounded-full border border-slate-900/20 p-2 transition-colors hover:bg-slate-900/5"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={20} className="text-slate-900" />
                  </button>
                </div>
              </div>
            </SectionReveal>

            <div className="relative overflow-hidden">
              <motion.div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
                style={{ scrollBehavior: "smooth" }}
              >
                {otherProjects.map((project, index) => (
                  <SectionReveal key={project.id} delay={index * 0.06}>
                    <motion.a
                      href={project.websiteUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative min-w-[28rem] flex-shrink-0 overflow-hidden rounded-2xl border border-slate-900/10 transition-all hover:border-slate-900/30 hover:shadow-lg"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px 0px 0px" }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    >
                      {/* Project Image */}
                      <div className="overflow-hidden bg-slate-100 h-60">
                        {project.previewImage ? (
                          <Image
                            src={project.previewImage}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <div className="grid h-full place-items-center text-center text-xs uppercase tracking-[0.2em] text-slate-400">
                            [IMAGE]
                          </div>
                        )}
                      </div>

                      {/* Project Info Overlay */}
                      <div className="border-t border-slate-900/10 bg-white p-5">
                        <p className="text-xs uppercase tracking-[0.1em] text-slate-600 font-semibold">{project.category}</p>
                        <h4 className="mt-2 text-lg font-bold text-slate-950 group-hover:text-slate-900 transition-colors">{project.title}</h4>
                        <p className="mt-2 line-clamp-2 text-sm text-slate-700">{project.summary}</p>
                      </div>
                    </motion.a>
                  </SectionReveal>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
