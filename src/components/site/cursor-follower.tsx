"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 380, damping: 30 });
  const smoothY = useSpring(cursorY, { stiffness: 380, damping: 30 });

  const raf = useRef<number | null>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateTheme = (target: EventTarget | null) => {
      const el = target instanceof HTMLElement ? target : null;
      const section =
        el?.closest("[data-cursor-theme]") ||
        document.documentElement;

      const newTheme =
        section?.getAttribute("data-cursor-theme") === "dark"
          ? "dark"
          : "light";

      setTheme(newTheme);
    };

    const flush = () => {
      raf.current = null;
      if (!pending.current) return;

      cursorX.set(pending.current.x);
      cursorY.set(pending.current.y);

      setVisible(true);
    };

    const onMove = (e: PointerEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      updateTheme(e.target);

      if (raf.current === null) {
        raf.current = requestAnimationFrame(flush);
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  const dotColor = theme === "dark" ? "bg-white" : "bg-black";
  const ringColor = theme === "dark" ? "border-white/40" : "border-black/40";

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[999]
        hidden
        -translate-x-1/2
        -translate-y-1/2
        lg:block
      "
      style={{
        x: smoothX,
        y: smoothY,
        opacity: visible ? 1 : 0,
      }}
    >
      {/* OUTER RING */}
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          ${ringColor}
          transition-colors
          duration-300
        `}
      />

      {/* DOT */}
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          ${dotColor}
          transition-colors
          duration-300
        `}
      />
    </motion.div>
  );
}