import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { journey, type JourneyStage } from "@/data/portfolio";

function Marker({ status }: { status: JourneyStage["status"] }) {
  if (status === "current") {
    return (
      <span className="relative flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-accent shadow-glow-sm ring-2 ring-accent/25" />
      </span>
    );
  }
  if (status === "exploring") {
    return (
      <span className="h-3.5 w-3.5 rounded-full border border-dashed border-accent/50 bg-base" />
    );
  }
  return (
    <span className="h-3.5 w-3.5 rounded-full bg-accent/90 shadow-[0_0_0_3px_rgba(56,189,248,0.12)]" />
  );
}

function StatusPill({ status }: { status: JourneyStage["status"] }) {
  if (status === "current") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/[0.08] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-bright">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Now
      </span>
    );
  }
  if (status === "exploring") {
    return (
      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        Next
      </span>
    );
  }
  return null;
}

export function Journey() {
  return (
    <Section id="journey" className="border-t border-white/[0.05]">
      <div className="shell">
        <SectionHeading
          kicker="Journey"
          title="How I got here — and where it's heading."
          description="A hardware-up path: from electronics foundations to bare-metal firmware, drone work, and now RFID and custom hardware."
        />

        <ol className="relative mt-12 max-w-3xl">
          {/* spine */}
          <span
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent"
          />

          {journey.map((stage, i) => (
            <li key={stage.title} className="relative pb-10 pl-10 last:pb-0">
              <span className="absolute left-[7px] top-1 flex -translate-x-1/2 items-center justify-center">
                <Marker status={stage.status} />
              </span>

              <Reveal delay={Math.min(i, 4) * 0.05}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3
                    className={`text-lg font-medium ${
                      stage.status === "exploring" ? "text-muted" : "text-txt"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <StatusPill status={stage.status} />
                </div>
                {stage.meta && (
                  <p className="mt-1.5 font-mono text-xs tracking-wide text-accent/75">
                    {stage.meta}
                  </p>
                )}
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                  {stage.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
