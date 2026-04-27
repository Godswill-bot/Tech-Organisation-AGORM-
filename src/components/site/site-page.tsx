"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { Navbar } from "@/components/site/navbar";
import { ProjectsSection } from "@/components/site/projects-section";
import { ServicesSection } from "@/components/site/services-section";
import { SystemsContextSections } from "@/components/site/systems-context-sections";
import { TestimonialsSection } from "@/components/site/testimonials-section";

export function SitePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-500">
      {/* Premium Dark Background with Gradient Overlays */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-100">
        {/* Primary gradient - cyan glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        {/* Secondary gradient - indigo glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        {/* Background solid */}
        <div className="absolute inset-0 bg-background" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mask-[radial-gradient(ellipse_at_top,black_40%,transparent_80%)]" />

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection />
        <AboutSection />
        <SystemsContextSections />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </motion.main>

      <Footer />
    </div>
  );
}
