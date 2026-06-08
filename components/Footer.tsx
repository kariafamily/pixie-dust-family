import Link from "next/link";

const exploreLinks = [
  { href: "/resorts", label: "Resorts" },
  { href: "/blog", label: "Blog" },
  { href: "/plan-your-trip", label: "Plan Your Trip" },
  { href: "/about", label: "About" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003D7A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polygon points="12,2 13.8,9 21,10.8 13.8,12.6 12,19.6 10.2,12.6 3,10.8 10.2,9" fill="#C9963A" />
                <polygon points="5,0 5.7,3 8.7,3.7 5.7,4.4 5,7.4 4.3,4.4 1.3,3.7 4.3,3" fill="white" opacity="0.6" />
                <polygon points="19,16 19.5,18.3 21.8,18.8 19.5,19.3 19,21.6 18.5,19.3 16.2,18.8 18.5,18.3" fill="white" opacity="0.4" />
              </svg>
              <span
                className="font-semibold text-lg text-white"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Pixie Dust Family
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              Honest Walt Disney World Deluxe resort reviews from a real South Florida family with a toddler.
            </p>
            <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.5)" }}>
              No comped rooms. No sponsored content. Ever.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white/50">Explore</h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white/50">Legal</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6">
          <p className="text-white/40 text-xs text-center">
            © {new Date().getFullYear()} Pixie Dust Family. All rights reserved. This site contains affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
