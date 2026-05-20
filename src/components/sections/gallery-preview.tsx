import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const previews = [
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581585504920-5ab8d4ce6f4f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559591935-c6c92c6cc6c5?auto=format&fit=crop&w=900&q=80",
];

export function GalleryPreview() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <SectionHeader
            eyebrow="Our Work"
            title="Crafted smiles, lasting confidence"
            description="A glimpse of recent cases — from full-arch implant prosthetics to natural-looking complete dentures."
          />
        </div>
        <Button asChild variant="outline">
          <Link href="/gallery">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {previews.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-2xl group"
          >
            <Image
              src={src}
              alt={`Lab work sample ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/20 transition-colors" />
          </div>
        ))}
      </div>
    </Section>
  );
}
