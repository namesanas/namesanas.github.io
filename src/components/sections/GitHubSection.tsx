import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { socials } from "@/data/portfolio";

const github = socials.find((s) => s.icon === "github");

const terminalLines: { prompt?: string; text: string; accent?: boolean }[] = [
  { prompt: "$", text: "whoami" },
  { text: "anas-khan — embedded & firmware engineer", accent: true },
  { prompt: "$", text: "cat focus.txt" },
  { text: "Bare-metal STM32 drivers · SPI / I²C / UART" },
  { text: "RTC + LCD · 4×4 matrix keypad · drone firmware" },
  { prompt: "$", text: "git status" },
  { text: "RFID reader firmware — in development", accent: true },
];

export function GitHubSection() {
  if (!github) return null;

  return (
    <Section id="github" className="border-t border-white/[0.05]">
      <div className="shell">
        <div className="panel relative overflow-hidden shadow-card">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60"
          />
          <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
            {/* Copy + CTA */}
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent/50" />
                Code
              </div>
              <h2 className="text-gradient mt-5 text-3xl font-medium leading-tight sm:text-4xl">
                It&apos;s all on GitHub.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                Every driver written from the register map, the protocol
                experiments, and the RFID work as it comes together. Browse the
                source and follow along.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-lg border border-accent/40 bg-accent/[0.08] px-5 py-3 text-sm font-medium text-accent-bright shadow-glow-sm transition-all duration-300 hover:border-accent/70 hover:bg-accent/[0.14]"
                >
                  <Github className="h-4 w-4" strokeWidth={1.7} />
                  View GitHub Profile
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </a>
                <span className="font-mono text-sm text-faint">
                  {github.handle}
                </span>
              </div>
            </div>

            {/* Terminal card */}
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-xl border border-white/[0.09] bg-base/70 shadow-card backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  <span className="ml-2 font-mono text-[11px] text-faint">
                    ~/anas — zsh
                  </span>
                </div>
                <div className="space-y-1.5 p-5 font-mono text-[12.5px] leading-relaxed">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="flex gap-2.5">
                      {line.prompt ? (
                        <span className="flex-none text-accent">
                          {line.prompt}
                        </span>
                      ) : (
                        <span className="flex-none text-transparent">·</span>
                      )}
                      <span
                        className={line.accent ? "text-accent-bright" : "text-muted"}
                      >
                        {line.text}
                      </span>
                    </div>
                  ))}
                  <div className="flex gap-2.5 pt-1">
                    <span className="flex-none text-accent">$</span>
                    <span className="inline-block h-4 w-2 animate-caret-blink bg-accent/80" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
