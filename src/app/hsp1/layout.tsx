import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  variable: "--font-hsp1-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-hsp1-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home Pros USA | Windows, Roofing, Siding & Gutters",
  description:
    "Home Pros USA — trusted local experts in windows, roofing, siding, and gutters. We are the best at what we do.",
};

export default function Hsp1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`hsp1-theme ${inter.variable} ${spaceGrotesk.variable} min-h-full bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
