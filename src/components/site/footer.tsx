import { Send } from "lucide-react";

const companyLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/team", label: "AGOM Team" },
  { href: "/career", label: "Career", badge: "Hiring" },
  { href: "/#contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/#services", label: "Business Digitization" },
  { href: "/#services", label: "Startup Enablement" },
  { href: "/#services", label: "Software Engineering Ecosystem" },
];

const contactInfo = [
  { label: "Lagos, Nigeria" },
  { label: "info@agom.ng", href: "mailto:info@agom.ng" },
  { label: "+234 915 926 8353", href: "tel:+2349159268353" },
];

export function Footer() {
  return (
    <>
     {/* ================= NEWSLETTER ================= */}
<section className="relative overflow-hidden px-5 py-20 text-emerald-950 sm:px-8 sm:py-24">

  {/* WHITE GRADIENT BACKGROUND LAYER */}
  <div
    aria-hidden
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-b
      from-white
      via-white/80
      to-[#f3faec]
    "
  />

  {/* SOFT FLOATING GLOW BLOBS */}
  <div
    aria-hidden
    className="
      pointer-events-none
      absolute
      -left-32
      top-1/2
      h-96
      w-96
      -translate-y-1/2
      rounded-full
      bg-black
      
    "
  />
  <div
    aria-hidden
    className="
      pointer-events-none
      absolute
      -right-32
      top-1/2
      h-96
      w-96
      -translate-y-1/2
      rounded-full
      bg-black
     
    "
  />

  {/* CONTENT */}
  <div className="relative mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold sm:text-4xl">
      Subcribe for more news.
    </h2>

    <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="
          w-full
          rounded-full
          border
          border-black
          bg-white
          px-6
          py-4
          text-sm
          outline-none
          placeholder:text-black/40
          sm:rounded-r-none
          sm:border-r-0
        "
      />

      <button
        type="submit"
        className="
          rounded-full
          bg-black
          px-8
          py-4
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-white
          transition-colors
          hover:bg-black/10
          sm:rounded-l-none
        "
      >
        Subscribe Now
      </button>
    </form>
  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8">

        {/* 🌫️ WHITE GLOW BACKGROUND */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_45%),
               radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.06),transparent_55%)]
            opacity-90
          "
        />

        <div className="relative mx-auto max-w-7xl">
          {/* GRID */}
          <div className="grid gap-12 lg:grid-cols-4">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line
                      key={i}
                      x1="32"
                      y1="32"
                      x2="32"
                      y2="10"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      transform={`rotate(${i * 30} 32 32)`}
                    />
                  ))}
                </svg>
                <span className="text-2xl font-bold tracking-tight">AGOM</span>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/60">
                Innovating solutions that are
                <br />
                real, clear, and future-ready.
              </p>

              <form className="mt-7 flex items-center border-b border-white/15 pb-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />
                <button className="text-white transition hover:text-white/70">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-6 space-y-4">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {l.label}
                      {l.badge && (
                        <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-black">
                          {l.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Services
              </h3>
              <ul className="mt-6 space-y-4">
                {serviceLinks.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Contact
              </h3>
              <ul className="mt-6 space-y-4">
                {contactInfo.map((c, i) => (
                  <li key={i} className="text-sm text-white/70">
                    {c.href ? (
                      <a href={c.href} className="hover:text-white">
                        {c.label}
                      </a>
                    ) : (
                      c.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} AGOM. All rights reserved.</p>

            <div className="flex gap-4">
              <a className="hover:text-white" href="/privacy">
                Privacy
              </a>
              <span>|</span>
              <a className="hover:text-white" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}