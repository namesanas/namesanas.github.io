"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { stack, type StackNode } from "@/data/portfolio";

const ROLE: Record<StackNode["kind"], string> = {
  io: "Interface",
  core: "Core",
  exploring: "In development",
};

export function SignalPath() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState("mcu");
  const active =
    stack.nodes.find((n) => n.id === activeId) ?? stack.nodes[0];

  return (
    <Section id="stack" className="border-t border-white/[0.05]">
      <div className="shell">
        <SectionHeading
          kicker="Signal Path"
          title="From signal to application."
          description={stack.intro}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Layered stack */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2 pl-[3.25rem] font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              physical signal
            </div>

            <div className="relative">
              {/* spine */}
              <div className="absolute bottom-5 left-[22px] top-5 w-px bg-gradient-to-b from-accent/30 via-white/10 to-accent/30" />
              {!reduce && (
                <motion.div
                  aria-hidden
                  className="absolute left-[22px] z-0 h-14 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-accent to-transparent"
                  style={{ filter: "blur(0.5px)" }}
                  initial={{ top: "0%", opacity: 0 }}
                  animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <ul className="relative z-10 space-y-2.5">
                {stack.nodes.map((node) => {
                  const isActive = node.id === active.id;
                  const exploring = node.kind === "exploring";
                  return (
                    <li key={node.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveId(node.id)}
                        onFocus={() => setActiveId(node.id)}
                        onClick={() => setActiveId(node.id)}
                        aria-pressed={isActive}
                        className={`flex w-full items-center gap-4 rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? "border-accent/40 bg-accent/[0.05]"
                            : "border-transparent hover:border-white/10 hover:bg-white/[0.02]"
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 flex-none items-center justify-center rounded-lg border bg-base transition-all duration-300 ${
                            exploring
                              ? "border-dashed border-accent/40 text-accent/80"
                              : isActive
                                ? "border-accent/60 bg-accent/10 text-accent-bright shadow-glow-sm"
                                : "border-white/[0.1] text-muted"
                          }`}
                        >
                          <Icon
                            name={node.icon}
                            className="h-5 w-5"
                            strokeWidth={1.6}
                          />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span
                              className={`truncate text-[15px] font-medium transition-colors ${
                                isActive ? "text-txt" : "text-muted"
                              }`}
                            >
                              {node.label}
                            </span>
                            {exploring && (
                              <span className="flex-none rounded-full border border-accent/30 bg-accent/[0.06] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-bright">
                                exploring
                              </span>
                            )}
                          </span>
                          <span className="mt-0.5 block truncate font-mono text-[11.5px] text-faint">
                            {node.sublabel}
                          </span>
                        </span>

                        <span className="ml-auto hidden flex-none font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:block">
                          {ROLE[node.kind]}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-3 flex items-center gap-2 pl-[3.25rem] font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              host application
            </div>
          </div>

          {/* Live detail panel */}
          <div className="lg:col-span-5">
            <div className="panel relative overflow-hidden p-7 shadow-card lg:sticky lg:top-28">
              <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-accent/40" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl border ${
                        active.kind === "exploring"
                          ? "border-dashed border-accent/40 bg-accent/[0.05] text-accent/90"
                          : "border-accent/40 bg-accent/10 text-accent-bright shadow-glow-sm"
                      }`}
                    >
                      <Icon
                        name={active.icon}
                        className="h-6 w-6"
                        strokeWidth={1.6}
                      />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {ROLE[active.kind]}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-txt">
                    {active.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-wide text-accent/80">
                    {active.sublabel}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {active.note}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 flex items-center gap-2 border-t border-white/[0.06] pt-5 font-mono text-[11px] text-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                hover a layer to trace the path
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
