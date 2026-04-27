"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CursorState = {
  visible: boolean;
  active: boolean;
  label: string;
};

const TEXT_SELECTOR = "a,button,input,textarea,label,[role='button'],h1,h2,h3,h4,h5,h6,p,li,span,strong,em";

function extractCursorLabel(target: HTMLElement | null) {
  if (!target) return "";

  const direct = target.getAttribute("data-cursor-label") || target.getAttribute("aria-label") || target.textContent || "";
  return direct.replace(/\s+/g, " ").trim().slice(0, 16);
}

function extractWordAtPoint(x: number, y: number) {
  if (typeof document === "undefined") return "";

  const doc = document as Document & {
    caretPositionFromPoint?: (cx: number, cy: number) => { offsetNode: Node; offset: number } | null;
    caretRangeFromPoint?: (cx: number, cy: number) => Range | null;
  };

  let offsetNode: Node | null = null;
  let offset = 0;

  if (typeof doc.caretPositionFromPoint === "function") {
    const position = doc.caretPositionFromPoint(x, y);
    if (position) {
      offsetNode = position.offsetNode;
      offset = position.offset;
    }
  } else if (typeof doc.caretRangeFromPoint === "function") {
    const range = doc.caretRangeFromPoint(x, y);
    if (range) {
      offsetNode = range.startContainer;
      offset = range.startOffset;
    }
  }

  if (!offsetNode || offsetNode.nodeType !== Node.TEXT_NODE) {
    return "";
  }

  const text = offsetNode.textContent ?? "";
  if (!text.trim()) {
    return "";
  }

  let start = offset;
  let end = offset;

  while (start > 0 && /\S/.test(text[start - 1])) {
    start -= 1;
  }

  while (end < text.length && /\S/.test(text[end])) {
    end += 1;
  }

  return text
    .slice(start, end)
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .slice(0, 16);
}

export function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<CursorState>({
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
  const smoothCursorX = useSpring(cursorX, { stiffness: 185, damping: 26, mass: 0.55 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 185, damping: 26, mass: 0.55 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    document.body.classList.add("cursor-follow-enabled");

    const getHoverState = (target: EventTarget | null, x: number, y: number) => {
      const element = target instanceof HTMLElement ? target : null;
      const hoverTarget = element?.closest(TEXT_SELECTOR) as HTMLElement | null;

      if (!hoverTarget) {
        return { active: false, label: "" };
      }

      const pointedWord = extractWordAtPoint(x, y);
      const label = pointedWord || extractCursorLabel(hoverTarget);
      return { active: true, label };
    };

    const onPointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      const hoverState = getHoverState(event.target, event.clientX, event.clientY);

      setState((prev) => {
        if (prev.visible && prev.active === hoverState.active && prev.label === hoverState.label) {
          return prev;
        }

        return {
          ...prev,
          visible: true,
          active: hoverState.active,
          label: hoverState.label,
        };
      });
    };

    const onPointerLeave = () => {
      setState((prev) => ({ ...prev, visible: false, active: false, label: "" }));
    };

    const onPointerDown = () => setState((prev) => ({ ...prev, active: true }));
    const onPointerUp = (event: PointerEvent) => {
      const hoverState = getHoverState(event.target, cursorX.get(), cursorY.get());
      setState((prev) => ({ ...prev, active: hoverState.active, label: hoverState.label }));
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
  }, [isFinePointer]);

  if (!mounted || !isFinePointer) {
    return null;
  }

  const labelText = (state.label || "AGOM").toUpperCase();
  const labelCharacters = [...labelText];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2"
      style={{ x: smoothCursorX, y: smoothCursorY, opacity: state.visible ? 1 : 0 }}
    >
      <motion.div
        animate={state.active ? { scale: 1.25 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.5 }}
        className={`relative grid place-items-center rounded-full border border-white/35 bg-black/75 shadow-[0_0_40px_rgba(17,24,39,0.18)] backdrop-blur-md ${
          state.active ? "h-24 w-24 border-white/60" : "h-4 w-4"
        }`}
      >
        <motion.div
          animate={state.active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.45 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/35 via-transparent to-slate-300/30"
        />
        <motion.div
          animate={state.active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-[10%] rounded-full border border-white/30"
        />
        <span
          className={`relative max-w-[5.8rem] px-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 ${
            state.active ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          {labelCharacters.map((character, index) => (
            <motion.span
              key={`${character}-${index}-${labelText}`}
              className="inline-block"
              animate={state.active ? { scale: [1, 1.18, 1], y: [0, -0.5, 0] } : { scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                repeat: state.active ? Infinity : 0,
                repeatDelay: 0.12,
                delay: index * 0.045,
                ease: "easeInOut",
              }}
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </motion.div>
  );
}