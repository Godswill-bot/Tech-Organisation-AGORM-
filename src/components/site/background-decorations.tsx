"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Zap,
  Grid3x3,
  Code,
  Sparkles,
  Orbit,
  ShieldCheck,
  LayoutGrid,
  Lightbulb,
  Target,
} from "lucide-react";

import React, { useEffect, useMemo, useState } from "react";

const icons = [
  Rocket,
  Zap,
  Grid3x3,
  Code,
  Sparkles,
  Orbit,
  ShieldCheck,
  LayoutGrid,
  Lightbulb,
  Target,
];

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
  xOffset: number;
}

export function BackgroundDecorations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const decorations = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const isBox = Math.random() > 0.4;

      return {
        id: i,
        type: isBox ? "box" : "icon",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 6,
        rotation: Math.random() * 360,
        opacity: 0.15 + Math.random() * 0.25,
        size: isBox
          ? 40 + Math.random() * 80
          : 60 + Math.random() * 80,
        iconIndex: isBox
          ? undefined
          : Math.floor(Math.random() * icons.length),
        xOffset: Math.random() > 0.5 ? 20 : -20,
      };
    });
  }, []);

  // 🚨 IMPORTANT
  // prevents server rendering completely
  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {decorations.map((element) => {
        const Icon =
          element.iconIndex !== undefined
            ? icons[element.iconIndex]
            : null;

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
              x: [0, element.xOffset, 0],
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
                className="rounded-lg border border-slate-400/20 bg-slate-400/5"
                style={{
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                  transform: `rotate(${element.rotation}deg)`,
                }}
              />
            ) : Icon ? (
              <Icon
                size={element.size}
                className="text-slate-500/40"
                strokeWidth={1.5}
              />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}