import { Award, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section id="certifications" className="border-t border-white/[0.05]">
      <div className="shell">
        <SectionHeading
          kicker="Credentials"
          title="Certifications."
          description="Coursework behind the practice — each link goes straight to the issuer's verification page."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={Math.min(i, 3) * 0.05}>
              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start gap-4 rounded-xl border border-white/[0.08] bg-surface/50 p-5 transition-all duration-500 hover:border-accent/30 hover:bg-surface/80"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.02] text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/[0.07]">
                  <Award className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-medium leading-snug text-txt">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11.5px] leading-relaxed text-faint">
                    {cert.issuer}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 flex-none text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
                  strokeWidth={1.8}
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
