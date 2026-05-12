"use client";

import { createContext, useContext, useState, useCallback } from "react";

export type TabId = "about" | "services" | "workflow" | "suites" | "projects" | "insights" | "team" | "contact";

interface PanelContextType {
  activeTab: TabId | null;
  openPanel: (id: TabId) => void;
  closePanel: () => void;
}

const PanelContext = createContext<PanelContextType | undefined>(undefined);

export function PanelProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId | null>(null);

  const openPanel = useCallback((id: TabId) => {
    setActiveTab(id);
  }, []);

  const closePanel = useCallback(() => {
    setActiveTab(null);
  }, []);

  return (
    <PanelContext.Provider value={{ activeTab, openPanel, closePanel }}>
      {children}
    </PanelContext.Provider>
  );
}

export function usePanel() {
  const context = useContext(PanelContext);
  if (!context) {
    throw new Error("usePanel must be used within PanelProvider");
  }
  return context;
}
