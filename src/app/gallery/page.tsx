import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "A gallery of real cases — from complete dentures to implant-supported prosthetics — crafted at MEGATACH Dental Lab.",
};

const images = [
  { src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80", caption: "Complete denture — natural shade match" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80", caption: "Implant-supported full arch" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80", caption: "Partial denture — cobalt-chrome frame" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80", caption: "Same-day fracture repair" },
  { src: "https://images.unsplash.com/photo-1581585504920-5ab8d4ce6f4f?auto=format&fit=crop&w=1200&q=80", caption: "Immediate denture post-extraction" },
  { src: "https://images.unsplash.com/photo-1559591935-c6c92c6cc6c5?auto=format&fit=crop&w=1200&q=80", caption: "Digital workflow scan" },
  { src: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?auto=format&fit=crop&w=1200&q=80", caption: "Hand-characterized teeth" },
  { src: "https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&w=1200&q=80", caption: "Lab craftsmanship" },
  { src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80", caption: "Patient consultation" },
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
