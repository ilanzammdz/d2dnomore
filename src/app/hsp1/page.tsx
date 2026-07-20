import { HomeHero } from "@/components/hsp1/home-hero";
import { BeforeAfterSection } from "@/components/hsp1/before-after-section";
import Testimonial2 from "@/components/hsp1/testimonial-section-2";
import { ArticlesSection } from "@/components/hsp1/articles-section";
import { BookAppointmentSection } from "@/components/hsp1/book-appointment-section";

export default function Hsp1Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HomeHero />
      <BeforeAfterSection />
      <Testimonial2 />
      <ArticlesSection />
      <BookAppointmentSection />
    </main>
  );
}
