import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {kicker ? (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-accent/50" />
          <span className="font-mono text-xs tracking-[0.22em] text-accent/90">
            {kicker}
          </span>
        </div>
      ) : null}
      <h2 className="text-gradient text-[2rem] font-medium leading-[1.08] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
