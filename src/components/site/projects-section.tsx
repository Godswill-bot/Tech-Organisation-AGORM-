"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { projects, type Project } from "@/data/site-content";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-70 grid place-items-center bg-slate-950/70 p-5 backdrop-blur-sm dark:bg-slate-950/70"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl rounded-2xl border border-slate-300 bg-white p-6 shadow-lg sm:p-8 dark:border-white/15 dark:bg-slate-900/95 dark:shadow-none"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 dark:text-cyan-300">{project.category}</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.summary}</p>

        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          <p>
            <span className="font-medium text-slate-950 dark:text-white">Challenge:</span> {project.challenge}
          </p>
          <p>
            <span className="font-medium text-slate-950 dark:text-white">Solution:</span> {project.solution}
          </p>
          <p>
            <span className="font-medium text-slate-950 dark:text-white">Impact:</span> {project.impact}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected Work Across Industries"
            description="A snapshot of digital products and platforms AGORM has delivered for institutions, brands, and startups."
          />
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.08}>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="agorm-project-card group relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 dark:border-white/10 dark:bg-slate-950/90 dark:hover:border-cyan-300/40"
              >
                <div className={`pointer-events-none absolute inset-0 opacity-20 dark:opacity-12 bg-linear-to-br ${project.gradient}`} />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-200/95">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200/90">{project.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-100">
                    View details <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
