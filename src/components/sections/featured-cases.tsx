import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

const cases = [
  {
    image: IMG.implantModel,
    tag: "Implant Prosthetics",
    title: "Full-arch hybrid framework",
    body:
      "All-on-4 hybrid prescribed by a partner clinic. Designed in CAD from their scan, milled in-house, and delivered in four weeks.",
  },
  {
    image: IMG.partialModel,
    tag: "Partial Denture",
    title: "Cast-frame partial with precision attachments",
    body:
      "Cobalt-chrome partial replacing three lower teeth. Custom hand-bent clasps for an invisible smile line.",
  },
  {
    image: IMG.dentureModel,
    tag: "Complete Denture",
    title: "Upper complete with natural characterization",
    body:
      "Premium acrylic upper with hand-painted gum tissue, matched to the shade and reference photos supplied with the prescription.",
  },
];

export function FeaturedCases() {
  return (
    <Section id="cases" className="bg-brand-surface">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <SectionHeader
            chapter={{ number: "05", label: "Recent Work" }}
            title="Three cases, three different solutions"
            description="Every prescription is different — and every case we fabricate is built specifically for the patient it belongs to."
          />
        </div>
        <Button asChild variant="outline">
          <Link href="/gallery">
            View Our Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col rounded-2xl bg-white ring-1 ring-brand-line overflow-hidden hover:ring-brand-teal hover:shadow-xl transition-all"
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
