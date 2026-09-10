"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin signal line at the very top that tracks scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-accent-deep via-accent to-signal shadow-[0_0_10px_rgba(56,189,248,0.7)]"
      aria-hidden
    />
  );
}
