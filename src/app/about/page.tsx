import type { Metadata } from "next";
import Image from "next/image";
import { Award, BadgeCheck, HeartHandshake, Microscope } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeader } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "MEGATACH Dental Lab is an Ontario-based denture clinic and dental laboratory combining digital precision with hand-finished craftsmanship.",
};

const values = [
  {
    icon: Microscope,
    title: "In-House Lab",
    body: "Every prosthesis is designed, milled, and finished under one roof — no outsourcing, no delays.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Denturists",
    body: "Our team is registered with the College of Denturists of Ontario and active members of the DAO.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Care",
    body: "Free consultations, transparent quotes, and a 24-hour response promise — we treat you the way we'd want to be treated.",
  },
  {
    icon: Award,
    title: "5-Year Warranty",
    body: "Every denture we build is backed by a 5-year manufacturer warranty against defects.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Lab precision. Patient comfort. One roof."
        description="MEGATACH Dental Lab combines digital workflows, master craftsmanship, and a patient-first ethos to deliver prosthetics that fit, function, and feel like your own."
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-brand-line">
            <Image
              src={IMG.dentalLab}
              alt="Inside the MEGATACH lab — digital workflow"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="Built on craftsmanship, powered by technology"
            />
            <div className="space-y-4 text-muted-foreground text-pretty">
              <p>
                MEGATACH was founded with one belief: that every patient
                deserves a denture that fits perfectly, looks natural, and
                lasts. Two decades later, we&apos;ve grown into one of
                Ontario&apos;s most trusted dental labs — serving patients
                directly and partnering with dental practices across the GTA.
              </p>
              <p>
                We invested early in digital workflows — intraoral scanning,
                CAD design, CNC milling — because precision is non-negotiable.
                But every prosthesis is still hand-characterized by a master
                technician, because craftsmanship is what makes a denture feel
                like your own.
              </p>
              <p>
                Today, we serve over 5,000 patients and 60+ partner clinics
                across Ontario — and we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-surface">
        <SectionHeader
          eyebrow="What sets us apart"
          title="Why patients and dentists choose MEGATACH"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-7 ring-1 ring-brand-line hover:ring-brand-teal hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
