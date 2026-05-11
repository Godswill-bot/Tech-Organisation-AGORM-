"use client";

import MinimalNavbar from "@/components/site/minimal-navbar";
import MinimalHero from "@/components/site/minimal-hero";
import MinimalServices from "@/components/site/minimal-services";
import MinimalProjects from "@/components/site/minimal-projects";
import MinimalTeam from "@/components/site/minimal-team";
import MinimalCTA from "@/components/site/minimal-cta";
import MinimalFooter from "@/components/site/minimal-footer";


/* ============================================================
   SITE PAGE - MINIMAL ELEGANT REDESIGN
   
   Complete redesign inspired by Huy Phan portfolio with:
   - Clean, light minimal aesthetic
   - Animated character illustrations with smooth bouncing
   - Elegant typography and spacing
   - Smooth transitions and animations
   - Professional showcase layout
   - Responsive mobile-first design
   ============================================================ */

export function SitePage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <MinimalNavbar />
      <MinimalHero />
      <MinimalServices />
      <MinimalProjects />
      <MinimalTeam />
      <MinimalCTA />
      <MinimalFooter />
    </div>
  );
}