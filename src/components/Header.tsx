"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "Products", href: "/products/yusr-model" },
  { label: "LithoGPT", href: "/products/lithogpt" },
  { label: "Genni", href: "/products/genni" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/80 backdrop-blur-md border-b border-yusr-200/60">
      <div className="section-container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="font-display text-2xl tracking-tight text-ink">
            Yu<span className="text-accent">SR</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium px-5 py-2 bg-ink text-sand rounded-sm hover:bg-ink-light transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink"
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-yusr-200/60 bg-sand pb-6 px-6 space-y-4 pt-4">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block text-base text-ink-muted hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
