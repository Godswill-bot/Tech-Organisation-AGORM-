"use client";

import { ModernNavbar } from "@/components/site/modern-navbar";
import { ModernHero } from "@/components/site/modern-hero";
import { ModernServices } from "@/components/site/modern-services";
import { ModernProjects } from "@/components/site/modern-projects";
import { ModernTeam } from "@/components/site/modern-team";
import { ModernCTA } from "@/components/site/modern-cta";
import { ModernFooter } from "@/components/site/modern-footer";


/* ============================================================
   SITE PAGE - MODERN REDESIGN
   
   Complete redesign with:
   - Modern gradient hero section with smooth animations
   - Services grid with glass morphism
   - Projects showcase with hover effects
   - Team section with member cards
   - CTA section with strong visual hierarchy
   - Modern footer with comprehensive links
   ============================================================ */

export function SitePage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-slate-950">
      <ModernNavbar />
      <ModernHero />
      <ModernServices />
      <ModernProjects />
      <ModernTeam />
      <ModernCTA />
      <ModernFooter />
    </div>
  );
}