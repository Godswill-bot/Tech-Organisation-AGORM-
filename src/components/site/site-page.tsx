"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { Navbar } from "@/components/site/navbar";
import { ProjectsSection } from "@/components/site/projects-section";
import { ServicesSection } from "@/components/site/services-section";
import { TeamSection } from "@/components/site/team-section";

export function SitePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.2),transparent_35%),linear-gradient(180deg,#020617_0%,#020617_40%,#030712_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_top,black_45%,transparent_85%)]" />

      <Navbar />

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
