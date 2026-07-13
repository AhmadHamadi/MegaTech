import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MEGATECH Dental Lab fabricates complete and partial dentures, implant prosthetics, night guards, orthotic appliances, repairs, and relines for dental clinics across the GTA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Precision prosthetics for every prescription"
        description="Complete and partial dentures, implant prosthetics, night guards, orthotic appliances, and fast repairs — every case designed and finished in our Toronto lab, then delivered to your clinic."
      />
      <ServicesOverview />
      <Cta />
    </>
  );
}
