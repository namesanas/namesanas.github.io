import { ArrowUp } from "lucide-react";
import { site, socials, nav } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[15px] font-medium text-txt">
                {site.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.role} — building from the signal up, in {site.location}.
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Navigate
              </div>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-muted transition-colors hover:text-txt"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Elsewhere
              </div>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.icon === "mail" ? undefined : "_blank"}
                      rel={s.icon === "mail" ? undefined : "noreferrer"}
                      className="text-sm text-muted transition-colors hover:text-txt"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-faint">
            © {year} {site.name}. Built with Next.js, TypeScript & Tailwind.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-txt"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
