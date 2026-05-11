import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const resolveHref = (href: string, label?: string) => {
    if (pathname === "/team" && label === "Contact") {
      return "#lets-talk";
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
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
          : "border-b border-slate-200 bg-white/90 backdrop-blur-md"
      }`}
      style={{ pointerEvents: showNavbar ? "auto" : "none" }}
    >
      <nav className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <motion.a
          href={pathname === "/" ? "#top" : "/"}
          className="flex flex-col leading-none group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-lg font-bold tracking-wider text-slate-950 transition-colors duration-300 group-hover:text-slate-700">
            AGOM
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
            Tech Organisation
          </span>
        </motion.a>

        <motion.a
          href={pathname === "/team" ? "#lets-talk" : resolveHref("#contact", "Contact")}
          className="hidden rounded-full bg-[#09100f] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,55,47,0.22)] transition-all duration-300 md:inline-flex"
          whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(16, 55, 47, 0.28)" }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
        </motion.a>

        <button
          type="button"
          className="grid place-items-center rounded-md p-2 text-slate-950 transition-colors duration-300 hover:bg-slate-100 md:hidden"
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
            className="border-t border-slate-200 bg-white px-5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <motion.a
                href={pathname === "/team" ? "#lets-talk" : resolveHref("#contact", "Contact")}
                className="mt-4 inline-flex justify-center rounded-full bg-[#10372f] px-5 py-3 text-center text-sm font-semibold text-white"
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
