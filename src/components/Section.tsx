import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm + anchor offset for the fixed navbar. */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 sm:py-28 lg:py-36 ${className}`}
    >
      {children}
    </section>
  );
}
