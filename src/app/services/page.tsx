import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore MEGATACH Dental Lab's full service offering: complete dentures, partial dentures, implant-supported prosthetics, repairs, and relines.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Precision prosthetics for every smile"
        description="Whether you need a complete denture, a partial, implant-supported full-arch, or fast repairs — every case is designed and finished in our Toronto lab."
      />
      <ServicesOverview />
      <Cta />
    </>
  );
}
