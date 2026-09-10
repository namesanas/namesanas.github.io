"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero, site } from "@/data/portfolio";
import { CircuitField } from "@/components/CircuitField";

/**
 * Animated PCB-trace underline — the single loud element of the page.
 * A faint base trace with a bright pulse of "current" flowing along it.
 */
function TraceUnderline() {
  const reduce = useReducedMotion();
  return (
    <svg
      className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full overflow-visible"
      viewBox="0 0 300 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* base trace */}
      <path
        d="M1 11 H70 L82 4 H210 L222 11 H299"
        stroke="rgba(56,189,248,0.28)"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      {/* travelling current */}
      <path
        d="M1 11 H70 L82 4 H210 L222 11 H299"
        stroke="#7dd3fc"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="26 320"
        className={reduce ? "" : "animate-dash-flow"}
        style={{ filter: "drop-shadow(0 0 4px rgba(56,189,248,0.9))" }}
      />
      {/* vias at the bends */}
      {[
        [70, 11],
        [82, 4],
        [210, 4],
        [222, 11],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.7" fill="#38bdf8" />
      ))}
    </svg>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      };

  const facts = [
    site.location,
    "Bare-metal firmware",
    "Currently: RFID reader firmware",
  ];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Signature animated circuit field */}
      <div className="absolute inset-0 -z-10">
        <CircuitField className="h-full w-full" />
      </div>
      {/* Legibility + blend into the page below */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-base/60 via-base/30 to-base"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="shell w-full"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wide text-muted">
              {site.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-gradient mt-7 text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-[4.4rem]"
          >
            {hero.headlineLead}{" "}
            <span className="relative inline-block whitespace-nowrap text-white">
              {hero.headlineAccent}
              <TraceUnderline />
            </span>{" "}
            {hero.headlineTail}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/[0.08] px-5 py-3 text-sm font-medium text-accent-bright shadow-glow-sm transition-all duration-300 hover:border-accent/70 hover:bg-accent/[0.14]"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm text-muted transition-colors duration-300 hover:text-txt"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint"
          >
            {facts.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/15">/</span>}
                <span>{f}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute inset-x-0 bottom-7 mx-auto hidden w-fit sm:block"
          aria-hidden
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
