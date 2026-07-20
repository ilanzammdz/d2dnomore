import { PlumbingNavbar } from "@/components/hsp3/plumbing-navbar";
import { PlumbingHero } from "@/components/hsp3/plumbing-hero";
import { ServicesGrid } from "@/components/hsp3/services-grid";
import TestimonialSection from "@/components/hsp3/testimonial-section";
import { ArticlesSection } from "@/components/hsp3/articles-section";
import { BookAppointmentSection } from "@/components/hsp3/book-appointment-section";
import { SiteFooter } from "@/components/hsp3/site-footer";
import { EmergencyChatWidget } from "@/components/hsp3/emergency-chat-widget";

export default function Hsp3Home() {
  return (
    <div className="flex flex-1 flex-col">
      <PlumbingNavbar />
      <main className="flex flex-1 flex-col">
        <PlumbingHero />
        <ServicesGrid />
        <TestimonialSection />
        <ArticlesSection />
        <BookAppointmentSection />
      </main>
      <SiteFooter />
      <EmergencyChatWidget />
    </div>
  );
}
