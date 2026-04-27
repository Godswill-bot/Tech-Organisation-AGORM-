"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CursorState = {
  visible: boolean;
  active: boolean;
};

const INTERACTIVE_SELECTOR = "a,button,input,textarea,label,select,summary,[role='button'],[data-cursor='interactive']";

export function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<CursorState>({
    visible: false,
    active: false,
  });

  const isFinePointer = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 190, damping: 24, mass: 0.5 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 190, damping: 24, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    document.body.classList.add("cursor-follow-enabled");

    const isInteractive = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      return Boolean(element?.closest(INTERACTIVE_SELECTOR));
    };

    const onPointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      const active = isInteractive(event.target);
      setState((prev) => {
        if (prev.visible && prev.active === active) {
          return prev;
        }

        return { visible: true, active };
      });
    };

    const onPointerLeave = () => {
      setState({ visible: false, active: false });
    };

    const onPointerDown = () => {
      setState((prev) => ({ ...prev, active: true }));
    };

    const onPointerUp = (event: PointerEvent) => {
      setState((prev) => ({ ...prev, active: isInteractive(event.target) }));
    };

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
  }, [isFinePointer, cursorX, cursorY]);

  if (!mounted || !isFinePointer) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference md:block"
      style={{ x: smoothCursorX, y: smoothCursorY, opacity: state.visible ? 1 : 0 }}
    >
      <motion.div
        animate={
          state.active
            ? { width: 60, height: 60, backgroundColor: "rgba(255,255,255,1)", borderColor: "rgba(255,255,255,0)" }
            : { width: 20, height: 20, backgroundColor: "rgba(0,0,0,0)", borderColor: "rgba(255,255,255,0.5)" }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-full border"
      />
    </motion.div>
  );
}
