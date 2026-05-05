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
    if (!containerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRefs.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, triggerStart]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as never} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          ref={(element) => {
            if (element) {
              wordRefs.current[index] = element;
            }
          }}
          className={`inline-block ${index < words.length - 1 ? "mr-[0.22em]" : ""} ${wordClassName ?? ""}`}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
