"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  active: boolean;
  label: string;
};

const TEXT_SELECTOR = "a,button,input,textarea,label,[role='button'],h1,h2,h3,h4,h5,h6,p,li,span,strong,em";

function extractCursorLabel(target: HTMLElement | null) {
  if (!target) return "";

  const direct = target.getAttribute("data-cursor-label") || target.getAttribute("aria-label") || target.textContent || "";
  return direct.replace(/\s+/g, " ").trim().slice(0, 28);
}

export function CursorFollower() {
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    active: false,
    label: "",
  });

  const isFinePointer = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 240, damping: 28, mass: 0.45 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 240, damping: 28, mass: 0.45 });

  useEffect(() => {
    if (!isFinePointer) return;

    document.body.classList.add("cursor-follow-enabled");

    const updateFromTarget = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      const hoverTarget = element?.closest(TEXT_SELECTOR) as HTMLElement | null;

      if (!hoverTarget) {
        setState((prev) => ({ ...prev, active: false, label: "" }));
        return;
      }

      const label = extractCursorLabel(hoverTarget);
      setState((prev) => ({
        ...prev,
        active: true,
        label,
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setState((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
      updateFromTarget(event.target);
    };

    const onPointerLeave = () => {
      setState((prev) => ({ ...prev, visible: false, active: false, label: "" }));
    };

    const onPointerDown = () => setState((prev) => ({ ...prev, active: true }));
    const onPointerUp = (event: PointerEvent) => updateFromTarget(event.target);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      document.body.classList.remove("cursor-follow-enabled");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2"
      style={{ x: smoothCursorX, y: smoothCursorY, opacity: state.visible ? 1 : 0 }}
    >
      <motion.div
        animate={state.active ? { scale: 1.25 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.5 }}
        className={`relative grid place-items-center rounded-full border border-cyan-200/40 bg-slate-950/70 shadow-[0_0_40px_rgba(0,217,255,0.16)] backdrop-blur-md ${
          state.active ? "h-24 w-24 border-cyan-300/70" : "h-4 w-4"
        }`}
      >
        <motion.div
          animate={state.active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.45 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 via-transparent to-indigo-300/30"
        />
        <motion.div
          animate={state.active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-[10%] rounded-full border border-white/15"
        />
        <span
          className={`relative max-w-[5.8rem] px-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 ${
            state.active ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          {state.label || "AGOM"}
        </span>
      </motion.div>
    </motion.div>
  );
}