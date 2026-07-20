import { WindowNavbar } from "@/components/hsp2/window-navbar";
import { WindowHero } from "@/components/hsp2/window-hero";
import { GuidanceSection } from "@/components/hsp2/guidance-section";
import { WindowStylesGrid } from "@/components/hsp2/window-styles-grid";
import { ProductCollections } from "@/components/hsp2/product-collections";
import { FaqSection } from "@/components/hsp2/faq-section";
import { GallerySection } from "@/components/hsp2/gallery-section";
import { SiteFooter } from "@/components/hsp2/site-footer";

export default function Hsp2Home() {
  return (
    <div className="flex flex-1 flex-col">
      <WindowNavbar />
      <main className="flex flex-1 flex-col">
        <WindowHero />
        <GuidanceSection />
        <WindowStylesGrid />
        <ProductCollections />
        <FaqSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}
