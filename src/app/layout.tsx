import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import { CursorFollower } from "@/components/site/cursor-follower";
import "./globals.css";

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
