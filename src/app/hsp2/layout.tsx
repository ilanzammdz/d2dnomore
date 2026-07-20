import type { Metadata } from "next";
import { Source_Sans_3, Libre_Franklin } from "next/font/google";

const sourceSans = Source_Sans_3({
  variable: "--font-hsp2-sans",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-hsp2-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Window Pros USA | Premium Replacement Windows",
  description:
    "Window Pros USA — energy-efficient replacement and new-construction windows, built to last and backed by real craftsmanship.",
};

export default function Hsp2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`hsp2-theme ${sourceSans.variable} ${libreFranklin.variable} min-h-full bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}
