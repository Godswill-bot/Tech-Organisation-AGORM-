"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -10% 0px" });

  return (
    <motion.div
  initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  {children}
</motion.div>
  );
}
