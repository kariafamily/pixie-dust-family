import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Primary display serif — the cornerstone of the luxury feel
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Signature script — used only in the Family Promise sign-off
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

// Clean body font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pixiedustfamily.com"),
  title: {
    default: "Pixie Dust Family | Honest Disney World Deluxe Resort Reviews",
    template: "%s | Pixie Dust Family",
  },
  description:
    "Honest Walt Disney World Deluxe resort reviews from a real family with a toddler. Real photos, toddler scores, and tips from a South Florida family who actually stays there.",
  keywords: ["Disney World resort reviews", "Disney toddler tips", "Deluxe Disney resorts", "Walt Disney World family"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  openGraph: { type: "website", siteName: "Pixie Dust Family", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-45LZB9R0YJ" />
      </body>
    </html>
  );
}
