"use client";

import { SitePage } from "@/components/site/site-page";
import { PanelProvider } from "@/context/PanelContext";

export default function Home() {
  return (
    <PanelProvider>
      <SitePage />
    </PanelProvider>
  );
}
