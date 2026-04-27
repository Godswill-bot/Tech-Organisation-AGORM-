import { Link, Mail, Phone } from "lucide-react";
import { SectionReveal } from "@/components/site/section-reveal";
import { SectionTitle } from "@/components/site/section-title";
import { teamMembers } from "@/data/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.15fr]">
        <SectionReveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let Us Build Your Next Product"
            description="Tell us what you are building and we will design a plan that moves your product from idea to impact."
          />

          <div className="agorm-contact-list-card mt-8 space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.08)]">
            {teamMembers.map((member) => (
              <div key={member.name} className="agorm-contact-person-card rounded-xl border border-black/10 bg-slate-50 p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-900">{member.name}</p>
                <p className="mt-2 flex items-center gap-3 text-sm text-slate-700">
                  <Phone size={18} className="text-slate-900" /> {member.phone}
                </p>
                {member.email ? (
                  <a
                    href={member.email}
                    className="mt-2 flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-slate-950"
                  >
                    <Mail size={18} className="text-slate-900" /> {member.email.replace("mailto:", "")}
                  </a>
                ) : null}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-slate-950"
                  >
                    <Link size={18} className="text-slate-900" /> LinkedIn Profile
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <form className="agorm-contact-form-card rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_46px_rgba(15,23,42,0.08)] sm:p-8" aria-label="Contact form">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 focus:shadow-[0_0_0_3px_rgb(17,24,39,0.08)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 focus:shadow-[0_0_0_3px_rgb(17,24,39,0.08)]"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 focus:shadow-[0_0_0_3px_rgb(17,24,39,0.08)]"
                  placeholder="What are you building?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-linear-to-r from-slate-900 to-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(17,24,39,0.2)]"
            >
              Send Message
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
