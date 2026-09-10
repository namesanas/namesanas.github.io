import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { philosophy } from "@/data/portfolio";

export function Philosophy() {
  return (
    <Section id="philosophy" className="border-t border-white/[0.05]">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading kicker="Philosophy" title="Bottom-up, always." />
            <Reveal delay={0.1}>
              <p className="mt-8 text-[1.05rem] leading-relaxed text-muted">
                {philosophy.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border-l border-white/10 pl-8 sm:pl-10">
              {philosophy.tenets.map((tenet, i) => {
                const last = i === philosophy.tenets.length - 1;
                return (
                  <Reveal key={tenet} delay={i * 0.07}>
                    <div className="relative py-4 sm:py-5">
                      <span
                        className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full left-[calc(-2rem_-_5px)] sm:left-[calc(-2.5rem_-_5px)] ${
                          last
                            ? "bg-accent shadow-glow-sm"
                            : "border border-accent/50 bg-base"
                        }`}
                        aria-hidden
                      />
                      <div className="font-mono text-[11px] tracking-[0.2em] text-accent/60">
                        0{i + 1}
                      </div>
                      <div
                        className={`mt-1.5 text-2xl font-medium leading-tight sm:text-[1.9rem] ${
                          last ? "text-accent-gradient" : "text-txt"
                        }`}
                      >
                        {tenet}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
