"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site-content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-400/10 bg-background/80 backdrop-blur-xl shadow-lg shadow-cyan-400/5"
          : "border-b border-cyan-400/5 bg-background/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <motion.a
          href="#top"
          className="flex flex-col leading-none group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-lg font-bold tracking-wider text-foreground group-hover:text-accent-cyan transition-colors duration-300">
            AGORM
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-foreground-muted group-hover:text-accent-cyan transition-colors duration-300">
            Tech Organisation
          </span>
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors duration-300 relative group"
              whileHover="hover"
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-accent-cyan"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%" }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="btn-primary hidden md:inline-flex"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0, 217, 255, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project
        </motion.a>

        <button
          type="button"
          className="grid place-items-center rounded-md p-2 text-foreground md:hidden hover:bg-surface-hover transition-colors duration-300"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-cyan-400/10 bg-background/95 px-5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors duration-300"
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn-primary mt-4 inline-flex text-center justify-center"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
