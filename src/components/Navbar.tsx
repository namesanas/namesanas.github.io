"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { nav, socials, site } from "@/data/portfolio";
import { useActiveSection } from "@/lib/useActiveSection";

const SECTION_IDS = nav.map((n) => n.id);
const github = socials.find((s) => s.icon === "github");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-accent/40 blur-[3px] transition-all duration-500 group-hover:bg-accent/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-[15px] font-medium tracking-tight text-txt">
            {site.name}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-3 py-2 text-sm"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-txt" : "text-muted hover:text-txt"
                  }`}
                >
                  {item.label}
                </span>
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {github ? (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-md border border-white/[0.1] bg-white/[0.02] px-3.5 py-2 text-sm text-txt transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.06] sm:inline-flex"
            >
              <Github className="h-4 w-4" strokeWidth={1.6} />
              GitHub
            </a>
          ) : null}

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.1] text-txt lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.6} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.6} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.07] bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex flex-col py-4">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.05] py-3.5 text-[15px] text-muted transition-colors hover:text-txt"
                >
                  {item.label}
                  <span className="font-mono text-xs text-faint">
                    {active === item.id ? "●" : ""}
                  </span>
                </a>
              ))}
              {github ? (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-sm text-txt"
                >
                  <Github className="h-4 w-4" strokeWidth={1.6} />
                  GitHub
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
