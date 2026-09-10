import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { contact, socials, site, type SocialLink } from "@/data/portfolio";

const ICONS: Record<SocialLink["icon"], LucideIcon> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

export function Contact() {
  return (
    <Section id="contact" className="border-t border-white/[0.05]">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading kicker="Contact" title={contact.headline} />
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
                {contact.blurb}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs tracking-wide text-muted">
                  {site.availability}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Contact methods */}
          <div className="flex flex-col gap-3">
            {socials.map((s, i) => {
              const IconCmp = ICONS[s.icon];
              return (
                <Reveal key={s.label} delay={i * 0.06}>
                  <a
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel={s.icon === "mail" ? undefined : "noreferrer"}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-surface/50 p-5 transition-all duration-500 hover:border-accent/30 hover:bg-surface/80"
                  >
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.02] text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent/[0.07]">
                      <IconCmp className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                        {s.label}
                      </span>
                      <span className="mt-0.5 block truncate font-mono text-sm text-txt">
                        {s.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 flex-none text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
