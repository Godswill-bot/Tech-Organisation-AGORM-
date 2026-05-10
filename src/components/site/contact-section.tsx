import { Link, Mail, Phone, ArrowRight } from "lucide-react";

import { teamMembers } from "@/data/site-content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0a0e0a]
        px-5
        pb-24
        pt-24
        text-white
        sm:px-8
        sm:pb-32
        sm:pt-32
      "
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr]">
        
        {/* LEFT */}
        <div>
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/15
              bg-white/5
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.24em]
              text-white/80
            "
          >
            Contact
          </div>

          <h2
            className="
              mt-7
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
            "
          >
            Let&apos;s Build
            <br />
            <span className="font-serif italic font-medium text-white/90">
              Your Next Product
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-white/70">
            Tell us what you&apos;re building, and we&apos;ll design a plan that
            moves your product from idea to impact.
          </p>

          {/* Team cards */}
          <div className="mt-10 space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                  transition-colors
                  duration-300
                  hover:border-white/30
                "
              >
                <p className="text-sm font-semibold text-white">
                  {member.name}
                </p>

                <p className="mt-3 flex items-center gap-3 text-sm text-white/70">
                  <Phone size={16} className="text-white/60" />
                  {member.phone}
                </p>

                {member.email ? (
                  <a
                    href={member.email}
                    className="
                      mt-2
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-white/70
                      transition-colors
                      hover:text-white
                    "
                  >
                    <Mail size={16} className="text-white/60" />
                    {member.email.replace("mailto:", "")}
                  </a>
                ) : null}

                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-white/70
                      transition-colors
                      hover:text-white
                    "
                  >
                    <Link size={16} className="text-white/60" />
                    LinkedIn Profile
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
<form
  aria-label="Contact form"
  className="
    relative
    overflow-hidden
    rounded-[2rem]
    border
    border-white/10
    bg-white
    p-6
    sm:p-8
    text-black
  "
>
  <div className="space-y-4">
    {/* NAME */}
    <div>
      <label
        htmlFor="name"
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        placeholder="Your name"
        className="
          w-full
          rounded-xl
          border
          border-black/10
          bg-white
          px-4
          py-2.5
          text-sm
          text-black
          outline-none
          placeholder:text-black/30
          focus:border-black
        "
      />
    </div>

    {/* EMAIL */}
    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60"
      >
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="
          w-full
          rounded-xl
          border
          border-black/10
          bg-white
          px-4
          py-2.5
          text-sm
          text-black
          outline-none
          placeholder:text-black/30
          focus:border-black
        "
      />
    </div>

    {/* MESSAGE */}
    <div>
      <label
        htmlFor="message"
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        placeholder="What are you building?"
        className="
          w-full
          rounded-xl
          border
          border-black/10
          bg-white
          px-4
          py-2.5
          text-sm
          text-black
          outline-none
          placeholder:text-black/30
          focus:border-black
        "
      />
    </div>
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="
      group
      mt-6
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-black/10
      bg-white
      px-6
      py-3
      text-[11px]
      font-bold
      uppercase
      tracking-[0.18em]
      text-black
      transition-all
      duration-300
      hover:bg-black
      hover:text-white
    "
  >
    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    Send Message
  </button>
</form>
      </div>
    </section>
  );
}