import { Globe, Link, Send } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] text-white">AGORM</p>
          <p className="mt-2 text-sm text-slate-400">Digital products for a fast-changing world.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/15 p-2 text-slate-200 hover:border-cyan-300/50 hover:text-cyan-100">
            <Link size={16} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md border border-white/15 p-2 text-slate-200 hover:border-cyan-300/50 hover:text-cyan-100">
            <Globe size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md border border-white/15 p-2 text-slate-200 hover:border-cyan-300/50 hover:text-cyan-100">
            <Send size={16} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-xs text-slate-500">Copyright {new Date().getFullYear()} AGORM. All rights reserved.</p>
    </footer>
  );
}
