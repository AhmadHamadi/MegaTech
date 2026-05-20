import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

const previews = [
  IMG.dentistExam,
  IMG.implantModel,
  IMG.operatoryTeal,
  IMG.dentalLab,
  IMG.dentureModel,
  IMG.dentistTreating,
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
