import Link from "next/link";
import Script from "next/script";
import { D2DNavbar } from "@/components/ui/d2d-navbar";
import { D2DHero } from "@/components/ui/d2d-hero";
import { D2DComparison } from "@/components/ui/d2d-comparison";
import { D2DIndustries } from "@/components/ui/d2d-industries";
import { D2DAIServices } from "@/components/ui/d2d-ai-services";
import { D2DAISeo } from "@/components/ui/d2d-ai-seo";
import { D2DAIVoice } from "@/components/ui/d2d-ai-voice";

export default function Home() {
  return (
    <>
      <D2DNavbar />
      <main className="overflow-x-hidden w-full min-h-screen">
        <div id="home"><D2DHero metricValue={47} /></div>
        <div id="compare"><D2DComparison /></div>
        <div id="industries"><D2DIndustries /></div>
        <div id="ai-chat"><D2DAIServices /></div>
        <div id="ai-seo"><D2DAISeo /></div>
        <div id="ai-voice"><D2DAIVoice /></div>
      </main>

      <footer
        className="w-full border-t py-8 px-4"
        style={{ borderColor: "rgba(37,99,235,0.1)", background: "#04081A" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} D2D No More, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/35 hover:text-white/60 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/35 hover:text-white/60 text-xs transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>

      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a3d75a78ac627665402cf9f"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  );
}
