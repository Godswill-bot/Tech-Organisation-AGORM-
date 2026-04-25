"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { teamMembers } from "@/data/site-content";

function TeamProfileModal({
  member,
  onClose,
}: {
  member: (typeof teamMembers)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-80 grid place-items-center bg-slate-950/55 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950/95"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm transition-colors hover:border-cyan-400 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
          aria-label={`Close ${member.name} profile`}
        >
          Close
        </button>

        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-slate-100 dark:bg-slate-950">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                width={1200}
                height={1200}
                className="h-full min-h-90 w-full object-cover lg:min-h-190"
              />
            ) : (
              <div className="agorm-placeholder-image grid min-h-90 place-items-center text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 lg:min-h-190">
                Image unavailable
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Team Member</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {member.name}
              </h3>
              <p className="mt-3 text-base font-medium text-slate-600 dark:text-slate-300">{member.role}</p>
              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300">{member.bio}</p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-700 dark:text-slate-400">Core Expertise</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {member.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <a
                href={`tel:${member.phone.replace(/\s+/g, "")}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-400 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-white"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-slate-700 dark:text-slate-400">Phone</span>
                <span className="mt-1 block wrap-break-word">{member.phone}</span>
              </a>
              {member.email ? (
                <a
                  href={member.email}
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-400 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-white"
                >
                  <span className="block text-xs uppercase tracking-[0.18em] text-slate-700 dark:text-slate-400">Email</span>
                  <span className="mt-1 block wrap-break-word">{member.email.replace("mailto:", "")}</span>
                </a>
              ) : null}
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-400 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-white"
                >
                  <span className="block text-xs uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">LinkedIn</span>
                  <span className="mt-1 block">Open Profile</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[number] | null>(null);

  return (
    <section id="team" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionTitle
            eyebrow="Team"
            title="The Minds Building AGORM"
            description="A multidisciplinary team blending engineering precision with thoughtful product design."
          />
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <SectionReveal key={member.name} delay={index * 0.06}>
              <button
                type="button"
                onClick={() => setSelectedMember(member)}
                className="agorm-team-card group h-full rounded-2xl border border-slate-300/70 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-none dark:hover:border-indigo-300/45"
              >
                <div className="agorm-team-media-shell mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950/70">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={640}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="agorm-placeholder-image grid h-44 place-items-center text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">
                      Image Placeholder
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-200">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{member.bio}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-200">
                  <Phone size={15} /> Tap to view full profile
                </p>
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember ? (
          <TeamProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
