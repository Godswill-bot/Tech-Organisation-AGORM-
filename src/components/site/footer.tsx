import { Globe, Link, Send } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="agorm-footer border-t border-slate-800 bg-black px-5 py-10 text-white backdrop-blur-sm sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
            Closing note
          </div>

          <div className="max-w-xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-lg font-semibold tracking-[0.18em] text-white">AGOM</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Digital products for a fast-changing world, built with clarity, rhythm, and adoption in mind.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Image Placeholder</p>
            <div className="mt-4 grid min-h-56 place-items-center rounded-3xl border border-dashed border-white/20 bg-black/40 px-6 text-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400">[Footer visual / brand image]</p>
                <p className="mt-3 text-2xl font-semibold text-white">AGOM</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">Swap in a brand image, team shot, or portfolio visual when you want the footer to feel even more editorial.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="agorm-footer-icon rounded-md border border-slate-700 bg-slate-900/50 p-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
              <Link size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="agorm-footer-icon rounded-md border border-slate-700 bg-slate-900/50 p-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
              <Globe size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="agorm-footer-icon rounded-md border border-slate-700 bg-slate-900/50 p-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl overflow-hidden border-t border-white/10 pt-8">
        <p className="text-center text-[clamp(4rem,16vw,12rem)] font-semibold leading-none tracking-[0.12em] text-white/8">AGOM</p>
        <p className="mt-4 text-center text-xs text-slate-400">Copyright {new Date().getFullYear()} AGOM. All rights reserved.</p>
      </div>
    </footer>
  );
}
