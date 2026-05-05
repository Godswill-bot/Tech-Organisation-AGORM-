"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Grid3x3, Code, Sparkles, Orbit, ShieldCheck, LayoutGrid, Lightbulb, Target } from "lucide-react";
import React from "react";

const icons = [Rocket, Zap, Grid3x3, Code, Sparkles, Orbit, ShieldCheck, LayoutGrid, Lightbulb, Target];

interface DecorElement {
  id: number;
  type: "box" | "icon";
  top: string;
  left: string;
  delay: number;
  duration: number;
  rotation: number;
  opacity: number;
  size: number;
  iconIndex?: number;
}

// Generate random decoration elements
const generateDecorations = (): DecorElement[] => {
  const elements: DecorElement[] = [];
  
  for (let i = 0; i < 40; i++) {
    const isBox = Math.random() > 0.4;
    elements.push({
      id: i,
      type: isBox ? "box" : "icon",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 6,
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.25,
      size: isBox ? 40 + Math.random() * 120 : 100 + Math.random() * 150,
      iconIndex: isBox ? undefined : Math.floor(Math.random() * icons.length),
    });
  }
  return elements;
};

export function BackgroundDecorations() {
  const decorations = React.useMemo(() => generateDecorations(), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      {decorations.map((element) => {
        const Icon = element.iconIndex !== undefined ? icons[element.iconIndex] : null;
        
        return (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              top: element.top,
              left: element.left,
              opacity: element.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {element.type === "box" ? (
              <div
                className="rounded-lg border-2 border-slate-900/40 bg-slate-900/10 backdrop-blur-sm"
                style={{
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                  transform: `rotate(${element.rotation}deg)`,
                }}
              />
            ) : Icon ? (
              <Icon
                size={element.size}
                className="text-slate-900/40"
                strokeWidth={1.5}
              />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
