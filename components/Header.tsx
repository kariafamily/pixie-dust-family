"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/resorts", label: "Resorts" },
  { href: "/tips", label: "Tips" },
  { href: "/compare", label: "Compare" },
  { href: "/plan-your-trip", label: "Plan Your Trip" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003D7A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="text-2xl">🏰</span>
            <span
              className="font-bold text-lg leading-tight"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              Pixie Dust Family
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tips/disney-world-toddler-packing-list"
              className="bg-[#0072CE] hover:bg-[#005fa3] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/20">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white px-2 py-2 text-sm font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/tips/disney-world-toddler-packing-list"
                className="mt-2 bg-[#0072CE] hover:bg-[#005fa3] text-white text-sm font-semibold px-4 py-2 rounded-full text-center transition-colors"
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
