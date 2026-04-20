"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/resorts", label: "Resorts" },
  { href: "/tips", label: "Tips" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/plan-your-trip", label: "Plan Your Trip" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003D7A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — Cormorant + rose accent */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-white/70 text-xl">✦</span>
            <span
              className="text-white text-lg font-light tracking-wide group-hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Pixie Dust Family
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-xs font-medium tracking-luxury uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tips/disney-world-toddler-packing-list"
              className="pixie-hover-gold bg-[#0072CE] hover:bg-[#005fa3] text-white text-xs font-medium px-5 py-2.5 rounded-full tracking-wide transition-colors"
            >
              Free Guide
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-5 pt-3 border-t border-white/20">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white px-2 py-2.5 text-sm tracking-luxury uppercase transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/tips/disney-world-toddler-packing-list"
                className="mt-3 bg-[#0072CE] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Free Guide
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
