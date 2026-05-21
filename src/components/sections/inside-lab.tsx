import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Layers, Cpu } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

const capabilities = [
  {
    icon: Cpu,
    title: "Digital workflow",
    body: "Intraoral scanning replaces messy impressions. CAD design gives us sub-millimetre precision before a single tooth is cut.",
  },
  {
    icon: Layers,
    title: "Premium materials",
    body: "Medical-grade acrylics, cobalt-chrome frames, zirconia teeth. We use only the materials our denturists would put in their own mouth.",
  },
  {
    icon: Microscope,
    title: "Hand-finished detail",
    body: "Every tooth is hand-characterized for shade, translucency, and gum tone. That's the difference between a denture and a smile.",
  },
];

export function InsideLab() {
  return (
    <Section id="inside-lab" className="bg-brand-surface relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-brand-line shadow-xl">
            <Image
              src={IMG.dentalLab}
              alt="A MEGATACH technician working in our Toronto dental lab"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 lg:-right-8 max-w-[260px] rounded-2xl bg-white p-5 ring-1 ring-brand-line shadow-2xl hidden md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal mb-1">
              Toronto, Ontario
            </p>
            <p className="text-sm text-brand-ink leading-relaxed">
              Every prosthesis you receive is designed, milled, and finished in
              this lab — by certified denturists, not contractors.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            <span className="h-px w-8 bg-brand-teal" />
            Inside Our Lab
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-ink text-balance leading-tight">
            One roof. Every step. No compromises.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-pretty leading-relaxed">
            <p>
              Most denture clinics outsource the actual lab work — your
              prosthetic is mailed across the country, made by people you&apos;ll
              never meet, then mailed back. We do it differently.
            </p>
            <p>
              At MEGATACH, the denturist who measures your mouth walks ten steps
              to the lab where your denture is built. That short distance means
              faster turnaround, tighter fit, and answerability for every case
              that leaves the building.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/about">
                Read our full story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
