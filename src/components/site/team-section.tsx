import Image from "next/image";
import { Globe, Link, Mail, Phone } from "lucide-react";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { teamMembers } from "@/data/site-content";

export function TeamSection() {
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
              <article className="group h-full rounded-2xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/45">
                <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={640}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="grid h-44 place-items-center text-xs uppercase tracking-[0.16em] text-slate-400">
                      Image Placeholder
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-cyan-200">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{member.bio}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-slate-200">
                  <Phone size={15} className="text-cyan-200" /> {member.phone}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="rounded-md border border-white/15 p-2 text-slate-200 transition-colors hover:border-cyan-300/50 hover:text-cyan-100"
                    >
                      <Link size={16} />
                    </a>
                  ) : null}
                  {member.github ? (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="rounded-md border border-white/15 p-2 text-slate-200 transition-colors hover:border-cyan-300/50 hover:text-cyan-100"
                    >
                      <Globe size={16} />
                    </a>
                  ) : null}
                  {member.email ? (
                    <a
                      href={member.email}
                      aria-label={`${member.name} Email`}
                      className="rounded-md border border-white/15 p-2 text-slate-200 transition-colors hover:border-cyan-300/50 hover:text-cyan-100"
                    >
                      <Mail size={16} />
                    </a>
                  ) : null}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
