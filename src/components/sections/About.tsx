import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-7">
            <SectionHeading kicker="About" title={about.lead} />
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-[1.02rem] leading-relaxed text-muted">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Spec-sheet panel */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="panel relative overflow-hidden p-6 shadow-card sm:p-7">
                {/* corner accents */}
                <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-accent/40" />
                <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-accent/40" />

                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  profile
                </div>

                <dl className="mt-6 divide-y divide-white/[0.06]">
                  {about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-txt">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 rounded-lg border border-white/[0.06] bg-base/50 p-4">
                  <p className="font-mono text-[11px] leading-relaxed text-muted">
                    <span className="text-accent/80">$</span> approach{" "}
                    <span className="text-faint">
                      = read_datasheet → map_register → verify_on_scope
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
