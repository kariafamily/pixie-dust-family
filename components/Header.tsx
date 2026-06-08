"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/resorts", label: "Resorts" },
  { href: "/blog", label: "Blog" },
  { href: "/plan-your-trip", label: "Plan Your Trip" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#003D7A] transition-shadow duration-200"
      style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.18)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polygon points="12,2 13.8,9 21,10.8 13.8,12.6 12,19.6 10.2,12.6 3,10.8 10.2,9" fill="#C9963A" />
              <polygon points="5,0 5.7,3 8.7,3.7 5.7,4.4 5,7.4 4.3,4.4 1.3,3.7 4.3,3" fill="white" opacity="0.7" />
              <polygon points="19,16 19.5,18.3 21.8,18.8 19.5,19.3 19,21.6 18.5,19.3 16.2,18.8 18.5,18.3" fill="white" opacity="0.5" />
            </svg>
            <span
              className="text-white text-lg font-semibold tracking-wide group-hover:text-white/85 transition-colors"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Pixie Dust Family
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
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

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-white/20">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/85 hover:text-white px-2 py-3 text-base font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
