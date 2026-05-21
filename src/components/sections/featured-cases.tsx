import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

const cases = [
  {
    image: IMG.dentureModel,
    tag: "Implant-Supported",
    title: "Full-arch hybrid prosthesis",
    body:
      "All-on-4 hybrid for a patient transitioning from failing dentition. Designed in CAD, milled in-house, delivered in 4 weeks.",
  },
  {
    image: IMG.partialModel,
    tag: "Partial Denture",
    title: "Cast-frame partial with precision attachments",
    body:
      "Cobalt-chrome partial replacing 3 lower teeth. Custom hand-bent clasps for an invisible smile line.",
  },
  {
    image: IMG.dentistExam,
    tag: "Complete Denture",
    title: "Upper complete with natural characterization",
    body:
      "Premium acrylic upper with hand-painted gum tissue. The patient brought a photo of their natural smile — we matched it.",
  },
];

export function FeaturedCases() {
  return (
    <Section id="cases" className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <SectionHeader
            eyebrow="Recent Work"
            title="Three cases, three different solutions"
            description="Every patient is different — and every prosthesis we make is built specifically for the person it belongs to. Here's a small window into recent work."
          />
        </div>
        <Button asChild variant="outline">
          <Link href="/gallery">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col rounded-3xl bg-white ring-1 ring-brand-line overflow-hidden hover:ring-brand-teal hover:shadow-xl transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col p-6 md:p-7">
              <span className="inline-flex self-start items-center rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
                {c.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-ink text-pretty">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty leading-relaxed flex-1">
                {c.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
