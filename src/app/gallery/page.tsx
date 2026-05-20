import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "A gallery of real cases — from complete dentures to implant-supported prosthetics — crafted at MEGATACH Dental Lab.",
};

const images = [
  { src: IMG.dentistExam, caption: "Complete denture — natural shade match" },
  { src: IMG.implantModel, caption: "Implant-supported prosthesis" },
  { src: IMG.dentureModel, caption: "Full denture — hand-characterized" },
  { src: IMG.dentistTreating, caption: "Patient fitting appointment" },
  { src: IMG.partialModel, caption: "Partial denture — precision fit check" },
  { src: IMG.dentalLab, caption: "Inside the MEGATACH lab" },
  { src: IMG.operatoryTeal, caption: "Our consultation operatory" },
  { src: IMG.xrayReview, caption: "Digital imaging review" },
  { src: IMG.clinicInterior, caption: "Modern clinic environment" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Smile Gallery"
        title="Real cases. Real smiles."
        description="A selection of dentures, partials, implant prosthetics, and repairs crafted in our Toronto lab. Every prosthesis is custom-designed to match the patient's anatomy, shade, and lifestyle."
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
