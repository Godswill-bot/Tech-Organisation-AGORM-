"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { SectionReveal } from "@/components/site/section-reveal";
import { teamMembers } from "@/data/site-content";

export function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-100">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute inset-0 bg-background" />
      </div>

      <Navbar />

      <main className="px-5 pb-24 pt-30 sm:px-8 sm:pt-34">
        <section className="mx-auto mb-14 max-w-7xl">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Team</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Meet The AGOM Team</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Built by specialists across software engineering, data, AI, design, and robotics. Explore each profile and connect with us directly.
            </p>
          </SectionReveal>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <SectionReveal key={member.name} delay={index * 0.06}>
                <article className="grid gap-7 md:grid-cols-[1fr_1.1fr] md:items-center">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={1000}
                        height={1200}
                        className="h-96 w-full object-cover"
                      />
                    ) : (
                      <div className="grid h-96 place-items-center px-6 text-center text-xs uppercase tracking-[0.2em] text-slate-300">
                        [IMAGE PLACEHOLDER: team photo of {member.name}]
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{member.role}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">{member.name}</h2>
                    <p className="mt-4 text-sm leading-8 text-slate-300">{member.bio}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.expertise.map((item) => (
                        <span key={item} className="px-3 py-2 text-xs uppercase tracking-[0.12em] text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 space-y-2 text-sm text-slate-300">
                      <p>Phone: {member.phone}</p>
                      {member.email ? <p>Email: {member.email.replace("mailto:", "")}</p> : null}
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <aside id="lets-talk" className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Let's Talk</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Start A Conversation</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your email and project direction. We will contact you with a focused plan.
              </p>

              <form className="mt-6 space-y-4" aria-label="Let's talk form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you are building"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
                />
                <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                  Send Message
                </button>
              </form>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-300">
                {teamMembers
                  .filter((member) => member.email)
                  .map((member) => (
                    <p key={member.name}>{member.email.replace("mailto:", "")}</p>
                  ))}
              </div>
            </motion.div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
