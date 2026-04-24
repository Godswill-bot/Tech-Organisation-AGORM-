import { Link, Mail, Phone } from "lucide-react";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { teamMembers } from "@/data/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.15fr]">
        <SectionReveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let Us Build Your Next Product"
            description="Tell us what you are building and we will design a plan that moves your product from idea to impact."
          />

          <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/3">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-xl border border-slate-300 bg-slate-100 p-4 dark:border-white/10 dark:bg-slate-950/30">
                <p className="text-sm font-medium text-slate-950 dark:text-white">{member.name}</p>
                <p className="mt-2 flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <Phone size={18} className="text-cyan-600 dark:text-cyan-200" /> {member.phone}
                </p>
                {member.email ? (
                  <a
                    href={member.email}
                    className="mt-2 flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-100"
                  >
                    <Mail size={18} className="text-cyan-600 dark:text-cyan-200" /> {member.email.replace("mailto:", "")}
                  </a>
                ) : null}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-100"
                  >
                    <Link size={18} className="text-cyan-600 dark:text-cyan-200" /> LinkedIn Profile
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <form className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-white/10 dark:bg-slate-900/70" aria-label="Contact form">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgb(6,182,212,0.1)] dark:border-white/15 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgb(6,182,212,0.1)] dark:border-white/15 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgb(6,182,212,0.1)] dark:border-white/15 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300"
                  placeholder="What are you building?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-linear-to-r from-cyan-400 to-indigo-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] dark:from-cyan-400 dark:to-indigo-500"
            >
              Send Message
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
