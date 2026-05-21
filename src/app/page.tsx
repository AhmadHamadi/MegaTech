import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { Insurance } from "@/components/sections/insurance";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FaqSection } from "@/components/sections/faq";
import { BookSection } from "@/components/sections/book-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <GalleryPreview />
      <Testimonials />
      <Insurance />
      <ServiceAreas />
      <FaqSection />
      <BookSection />
    </>
  );
}
