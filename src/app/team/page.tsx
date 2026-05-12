"use client";

import { PanelProvider } from "@/context/PanelContext";
import { TeamPage } from "@/components/site/team-page";

export default function TeamRoute() {
  return (
    <PanelProvider>
      <TeamPage />
    </PanelProvider>
  );
}
