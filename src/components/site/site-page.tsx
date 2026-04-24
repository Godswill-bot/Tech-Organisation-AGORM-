"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { Navbar } from "@/components/site/navbar";
import { ProjectsSection } from "@/components/site/projects-section";
import { ServicesSection } from "@/components/site/services-section";
import { TeamSection } from "@/components/site/team-section";

export function SitePage() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("agorm-theme");
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("agorm-theme", theme);
  }, [theme]);

  return (
    <div data-theme={theme} className="relative min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-500">
      <div
        className={`pointer-events-none fixed inset-0 -z-10 opacity-70 transition-opacity duration-500 ${
          theme === "light"
            ? "[background:radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(79,70,229,0.12),transparent_35%),linear-gradient(180deg,rgba(248,250,252,1)_0%,rgba(248,250,252,1)_35%,rgba(241,245,249,1)_100%)] opacity-55"
            : "[background:radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.2),transparent_35%),linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(2,6,23,1)_40%,rgba(3,7,18,1)_100%)]"
        }`}
      />
      <div
        className={`pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_top,black_45%,transparent_85%)] transition-opacity duration-500 ${
          theme === "light" ? "opacity-45" : "opacity-100"
        }`}
      />

      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </motion.main>

      <Footer />
    </div>
  );
}
