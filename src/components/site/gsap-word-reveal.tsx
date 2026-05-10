"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

type GsapWordRevealProps = {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  className?: string;
  wordClassName?: string;
  triggerStart?: string;
  stagger?: number;
};

/**
 * Reveals each word of `text` on scroll-in.
 *
 * Performance changes:
 *  - Uses `force3D: true` so each word becomes its own GPU layer (cheap).
 *  - Sets `will-change: transform` only for the duration of the animation, then
 *    clears it (`onComplete: () => gsap.set(..., { willChange: "auto" })`)
 *    so the browser can free those layers afterward — leaving `will-change`
 *    on permanently is a known cause of accumulated GPU memory pressure.
 *  - Kept `once: true` so the animation runs exactly once and ScrollTrigger
 *    cleans up its listeners.
 *  - Refs array is rebuilt fresh on each render (no stale element retention).
 */
export function GsapWordReveal({
  text,
  tag: Tag = "div",
  className,
  wordClassName,
  triggerStart = "top 80%",
  stagger = 0.045,
}: GsapWordRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = wordRefs.current.filter(Boolean);
      if (targets.length === 0) return;

      gsap.set(targets, { willChange: "transform, opacity" });

      gsap.fromTo(
        targets,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration: 0.6,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            once: true,
          },
          onComplete: () => {
            gsap.set(targets, { willChange: "auto" });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, triggerStart, text]);

  // Reset refs each render so unmounted words don't linger.
  wordRefs.current = [];
  const words = text.split(" ");

  return (
    <Tag ref={containerRef as never} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          ref={(element) => {
            if (element) wordRefs.current[index] = element;
          }}
          className={`inline-block ${
            index < words.length - 1 ? "mr-[0.22em]" : ""
          } ${wordClassName ?? ""}`}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}