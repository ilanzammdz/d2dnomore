import type { Metadata } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-hsp3-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-hsp3-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pro Plumbers USA | 24/7 Emergency Plumbing",
  description:
    "Pro Plumbers USA — licensed, insured plumbers for leaks, drains, water heaters, and pipe repair. Emergency service available 24/7.",
};

export default function Hsp3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`hsp3-theme ${ibmPlexSans.variable} ${manrope.variable} min-h-full bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
