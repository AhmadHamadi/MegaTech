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
    <Section id="cases" className="paper-grain">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
        <div className="max-w-2xl">
          <SectionHeader
            chapter={{ number: "05", label: "Recent Work" }}
            title="Three cases, three different solutions"
            description="Every patient is different — and every prosthesis we make is built specifically for the person it belongs to."
          />
        </div>
        <Button asChild variant="outline">
          <Link href="/gallery">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
        {cases.map((c, i) => (
          <article key={c.title} className="group flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md ring-1 ring-brand-ink/8 shadow-soft">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-serif italic text-xs text-brand-teal">
                Case No. 00{42 + i}
              </span>
              <span className="text-xs text-brand-ink/40">·</span>
              <span className="text-xs uppercase tracking-[0.15em] text-brand-ink/55">
                {c.tag}
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl md:text-2xl font-normal text-brand-ink text-pretty tracking-tight leading-tight">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] text-brand-ink/65 text-pretty leading-relaxed">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
