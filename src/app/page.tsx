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
    </>
  );
}
