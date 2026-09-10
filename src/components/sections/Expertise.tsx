import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { capabilities, type Capability } from "@/data/portfolio";

function CapabilityCard({
  cap,
  wide = false,
}: {
  cap: Capability;
  wide?: boolean;
}) {
  const exploring = cap.status === "exploring";

  return (
    <div
      className={`group relative flex h-full flex-col rounded-xl border bg-surface/60 p-6 transition-all duration-500 sm:p-7 ${
        exploring
          ? "border-dashed border-accent/25 hover:border-accent/45"
          : "border-white/[0.08] hover:border-accent/30 hover:shadow-glow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-colors duration-500 ${
            exploring
              ? "border-accent/25 bg-accent/[0.05] text-accent/80"
              : "border-white/[0.09] bg-white/[0.02] text-accent group-hover:border-accent/40 group-hover:bg-accent/[0.07]"
          }`}
        >
          <Icon name={cap.icon} className="h-5 w-5" strokeWidth={1.6} />
        </span>

        {exploring && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-bright">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Exploring
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-medium text-txt">{cap.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{cap.blurb}</p>

      <ul
        className={`mt-5 grid gap-x-5 gap-y-2.5 border-t border-white/[0.06] pt-5 ${
          wide ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {cap.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 font-mono text-[12.5px] text-muted"
          >
            <span
              className={`h-1 w-1 flex-none rounded-full ${
                exploring ? "bg-accent/50" : "bg-accent"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Expertise() {
  return (
    <Section id="expertise" className="border-t border-white/[0.05]">
      <div className="shell">
        <SectionHeading
          kicker="Expertise"
          title="Capabilities, not progress bars."
          description="What I actually work with — grouped by domain. The RFID track is where I'm heading next, kept separate and marked honestly."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const wide = i === 0;
            return (
              <Reveal
                key={cap.title}
                delay={Math.min(i, 3) * 0.06}
                className={wide ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <CapabilityCard cap={cap} wide={wide} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
