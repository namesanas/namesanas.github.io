"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  projects,
  exploration,
  socials,
  type Project,
} from "@/data/portfolio";

const github = socials.find((s) => s.icon === "github");

function StatusBadge({ status }: { status: Project["status"] }) {
  const map: Record<Project["status"], { label: string; className: string }> = {
    shipped: {
      label: "Built",
      className: "border-accent/30 bg-accent/[0.07] text-accent-bright",
    },
    experience: {
      label: "Experience",
      className: "border-white/10 bg-white/[0.03] text-muted",
    },
    "in-development": {
      label: "In development",
      className: "border-accent/30 bg-accent/[0.06] text-accent-bright",
    },
    exploring: {
      label: "Exploring",
      className: "border-white/10 bg-white/[0.03] text-muted",
    },
  };
  const s = map[status];
  return (
    <span
      className={`inline-flex flex-none items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${s.className}`}
    >
      {s.label}
    </span>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((h) => (
        <li
          key={h}
          className="flex items-center gap-2.5 font-mono text-[12.5px] text-muted"
        >
          <span className="h-1 w-1 flex-none rounded-full bg-accent" />
          {h}
        </li>
      ))}
    </ul>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const hasBreakdown = Boolean(
    project.problem || project.approach || project.outcome,
  );
  const href = project.repo || github?.href;

  const breakdown = [
    { label: "Problem", value: project.problem },
    { label: "Approach", value: project.approach },
    { label: "Outcome", value: project.outcome },
  ].filter((b) => b.value);

  return (
    <article className="panel group relative overflow-hidden p-6 shadow-card transition-colors duration-500 hover:border-accent/25 sm:p-8">
      {/* top hairline that lights on hover */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/50" />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/75">
          {project.kind}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-4 text-xl font-medium text-txt sm:text-2xl">
        {project.title}
      </h3>
      {project.meta && (
        <p className="mt-1.5 font-mono text-xs text-faint">{project.meta}</p>
      )}
      <p className="mt-3 max-w-3xl leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-6">
        <Highlights items={project.highlights} />
      </div>

      {hasBreakdown && (
        <>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-5 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
                  {breakdown.map((b) => (
                    <div key={b.label}>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
                        {b.label}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {b.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
        <Tags tags={project.tags} />
        <div className="flex items-center gap-4">
          {hasBreakdown && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-txt"
            >
              {open ? "Hide breakdown" : "Read the breakdown"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent-bright transition-colors hover:text-white"
            >
              {project.repo ? "View code" : "GitHub"}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ExplorationCard({ project }: { project: Project }) {
  return (
    <article className="relative flex h-full flex-col rounded-xl border border-dashed border-accent/20 bg-surface/40 p-6 transition-colors duration-500 hover:border-accent/40">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/60">
          {project.kind}
        </span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="mt-4 text-lg font-medium text-txt">{project.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-5 border-t border-white/[0.06] pt-4">
        <Highlights items={project.highlights} />
      </div>
      <div className="mt-5">
        <Tags tags={project.tags} />
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Section id="work" className="border-t border-white/[0.05]">
      <div className="shell">
        <SectionHeading
          kicker="Selected Work"
          title="Built close to the metal."
          description="Firmware and hardware projects, each written from the register level up. Open any card for the problem, the approach, and how it turned out."
        />

        <div className="mt-12 space-y-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i, 3) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Exploration track — clearly separated and honestly labelled */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent/70">
                In development
              </span>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              The direction I&apos;m building toward — RFID reader firmware and
              custom hardware. These are genuinely in progress or under study,
              kept separate so nothing here is overstated.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {exploration.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i, 3) * 0.05}>
                <ExplorationCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
