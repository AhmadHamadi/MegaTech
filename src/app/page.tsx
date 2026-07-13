import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUs } from "@/components/sections/why-us";
import { InsideLab } from "@/components/sections/inside-lab";
import { Process } from "@/components/sections/process";
import { FeaturedCases } from "@/components/sections/featured-cases";
import { Pickup } from "@/components/sections/pickup";
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
      <InsideLab />
      <Process />
      <FeaturedCases />
      <Pickup />
      <ServiceAreas />
      <FaqSection />
      <BookSection />
    </>
  );
}
