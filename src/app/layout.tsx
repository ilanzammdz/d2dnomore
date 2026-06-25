import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D2D No More — Stop Chasing Leads, Start Closing Them",
  description:
    "AI-powered marketing for home service providers. Automated Voice, SMS & Email follow-ups that book more qualified appointments on autopilot.",
  keywords: [
    "home service marketing",
    "AI lead follow-up",
    "roofing leads",
    "solar marketing",
    "HVAC leads",
    "automated follow-up",
    "D2D No More",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#04081A] text-[#E8EDF5]">
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a3d75a78ac627665402cf9f"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
