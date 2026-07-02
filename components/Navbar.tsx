"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute("id") ?? "");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <a href="#" className="flex items-center gap-3">
          <Logo className="h-10 w-10 text-primary" />
          <span className="font-headline-md text-headline-md font-bold text-on-surface !text-xl">
            A3 Technologies
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-body-md text-body-md uppercase tracking-wider transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
        >
          Let&apos;s Build
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl px-gutter py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-label-sm text-label-sm uppercase tracking-widest text-center"
          >
            Let&apos;s Build
          </a>
        </div>
      )}
    </header>
  );
}
