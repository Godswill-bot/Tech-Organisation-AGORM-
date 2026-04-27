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
    <footer className="agorm-footer border-t border-white/10 bg-slate-950/60 px-5 py-10 backdrop-blur-sm sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-white">AGOM</p>
          <p className="mt-2 text-sm text-slate-400">Digital products for a fast-changing world.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="agorm-footer-icon rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 transition-colors hover:border-white/50 hover:text-white">
            <Link size={16} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="agorm-footer-icon rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 transition-colors hover:border-white/50 hover:text-white">
            <Globe size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="agorm-footer-icon rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 transition-colors hover:border-white/50 hover:text-white">
            <Send size={16} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl text-xs text-slate-500">Copyright {new Date().getFullYear()} AGOM. All rights reserved.</p>
    </footer>
  );
}
