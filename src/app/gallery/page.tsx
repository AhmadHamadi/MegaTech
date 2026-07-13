import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A gallery of real cases — from complete dentures to implant prosthetics and custom appliances — fabricated at MEGATECH Dental Lab for partner clinics.",
};

const images = [
  { src: IMG.dentureModel, caption: "Complete denture — hand-characterized shade match" },
  { src: IMG.implantModel, caption: "Implant prosthesis — milled framework" },
  { src: IMG.partialModel, caption: "Cast-frame partial — precision fit" },
  { src: IMG.aligner, caption: "Custom night guard — dual-laminate" },
  { src: IMG.dentalLab, caption: "Inside the MEGATECH lab" },
  { src: IMG.heroLabBench, caption: "Hand-finishing a case at the bench" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Real cases from our bench"
        description="A selection of dentures, partials, implant prosthetics, and custom appliances fabricated in our Toronto lab. Every case is built to the prescription — matched to the patient's anatomy, shade, and bite."
      />
      <Section className="bg-white">
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <figure
              key={i}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-brand-line"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink to-transparent p-5 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <Cta />
    </>
  );
}
