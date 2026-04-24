"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoonStar, Menu, SunMedium, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/site-content";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const navLinkClass =
    theme === "dark"
      ? "text-sm text-slate-300 transition-colors duration-300 hover:text-white"
      : "text-sm text-slate-700 transition-colors duration-300 hover:text-slate-950";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl transition-colors duration-500">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.22em] text-foreground">
          AGORM
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/15 p-2 text-foreground transition-colors duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
          </button>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          className="grid place-items-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-background/95 px-5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-2 inline-flex items-center gap-2 text-left text-sm text-foreground"
              >
                {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
                {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
