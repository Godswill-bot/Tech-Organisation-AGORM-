"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, services } from "@/data/site-content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const resolveHref = (href: string, label?: string) => {
    if (pathname === "/team" && label === "Contact") {
      return "#lets-talk";
    }

    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }

    return href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Show navbar when scrolled past 300px
      setShowNavbar(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-indigo-500/20 bg-slate-950/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(99,102,241,0.2)]"
          : "border-b border-indigo-500/10 bg-slate-950/80 backdrop-blur-md"
      }`}
      style={{ pointerEvents: showNavbar ? "auto" : "none" }}
    >
      <nav className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <motion.a
          href={pathname === "/" ? "#top" : "/"}
          className="flex flex-col leading-none group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-400 group-hover:to-indigo-400">
            AGOM
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-indigo-300/60 transition-colors duration-300 group-hover:text-cyan-400">
            Tech Organisation
          </span>
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-indigo-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full z-30 mt-4 w-120 -translate-x-1/2 rounded-2xl border border-indigo-500/20 bg-slate-900/95 p-5 shadow-[0_16px_50px_rgba(99,102,241,0.2)] backdrop-blur-xl"
                    >
                      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-400/60">Capability Menu</p>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <a
                            key={service.title}
                            href={resolveHref("#services")}
                            className="px-1 py-2 text-sm text-indigo-300 transition-colors duration-300 hover:text-cyan-400"
                          >
                            {service.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                key={link.href}
                href={resolveHref(link.href, link.label)}
                className="group relative text-sm font-medium text-indigo-300 transition-colors duration-300 hover:text-cyan-400"
                whileHover="hover"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400"
                  initial={{ width: 0 }}
                  variants={{
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            )
          ))}
        </div>

        <motion.a
          href={pathname === "/team" ? "#lets-talk" : resolveHref("#contact", "Contact")}
          className="hidden rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(99,102,241,0.3)] transition-all duration-300 md:inline-flex"
          whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(99, 102, 241, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
        </motion.a>

        <button
          type="button"
          className="grid place-items-center rounded-md p-2 text-indigo-300 transition-colors duration-300 hover:bg-indigo-500/20 md:hidden"
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
            className="border-t border-indigo-500/20 bg-slate-900/95 px-5 py-4 md:hidden backdrop-blur-md"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={resolveHref(link.href, link.label)}
                  className="text-sm font-medium text-indigo-300 transition-colors duration-300 hover:text-cyan-400"
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={pathname === "/team" ? "#lets-talk" : resolveHref("#contact", "Contact")}
                className="mt-4 inline-flex justify-center rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
