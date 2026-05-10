import type { Metadata } from "next";
import { Space_Grotesk, Sora, Instrument_Serif, Dancing_Script } from "next/font/google";
import { CursorFollower } from "@/components/site/cursor-follower";
import "./globals.css";

/**
 * Fonts:
 *  - Sora: headings (geometric sans, matches Ontria's bold-sans feel)
 *  - Space Grotesk: body
 *  - Instrument Serif: italic accents like "It Solutions" / "Clarity & Innovation"
 *  - Dancing Script: legacy accent font (kept so existing usage still resolves)
 *
 * Performance: `display: "swap"` on every font so text paints immediately
 * with a fallback while the webfont loads — eliminates flash-of-invisible-text
 * blocking that adds perceived "lag" on first scroll.
 */
const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const serifFont = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const accentFont = Dancing_Script({
  variable: "--font-accent",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGOM | We Build Digital Experiences That Matter",
  description:
    "AGOM is a premium tech startup building robust web apps, mobile solutions, and product innovation across industries.",
  openGraph: {
    title: "AGOM",
    description:
      "Premium web and mobile product development for startups, brands, and modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${headingFont.variable}
        ${bodyFont.variable}
        ${serifFont.variable}
        ${accentFont.variable}
        h-full
        antialiased
      `}
    >
     <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}