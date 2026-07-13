import type { Metadata } from "next";
import Image from "next/image";
import { Award, Truck, Microscope, Layers } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeader } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "MEGATECH is an Ontario dental laboratory partnering with clinics — combining digital precision with hand-finished craftsmanship, plus scheduled pickup and delivery across the GTA.",
};

const values = [
  {
    icon: Microscope,
    title: "In-House Lab",
    body: "Every case is designed, milled, and finished under one roof — no offshore outsourcing, no lost weeks.",
  },
  {
    icon: Layers,
    title: "Experienced Technicians",
    body: "Cases are hand-characterized by technicians with 20+ years of fabrication experience across every appliance type.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    body: "Scheduled, no-charge collection and return across the GTA — your team never has to chase a case.",
  },
  {
    icon: Award,
    title: "Fabrication Warranty",
    body: "Every case we build is backed by our warranty against defects, with prompt remakes and adjustments.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Lab precision. Clinic partnership. One roof."
        description="MEGATECH combines digital workflows, master craftsmanship, and reliable pickup and delivery to give dental clinics a lab partner they can count on — case after case."
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-brand-line">
            <Image
              src={IMG.dentalLab}
              alt="Inside the MEGATECH lab — digital workflow"
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
                MEGATECH was founded on one belief: that a dental clinic
                deserves a lab partner that delivers a prosthesis fitting
                perfectly, looking natural, and arriving on time — every single
                case. Two decades later, we&apos;re one of Ontario&apos;s most
                trusted dental labs.
              </p>
              <p>
                We invested early in digital workflows — accepting scans and
                impressions alike, CAD design, CNC milling — because precision
                is non-negotiable. But every case is still hand-characterized by
                a master technician, because craftsmanship is what makes a
                prosthesis feel natural in the chair.
              </p>
              <p>
                Today we partner with dental practices across the GTA, backed by
                scheduled pickup and delivery — and we&apos;re just getting
                started.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-surface">
        <SectionHeader
          eyebrow="What sets us apart"
          title="Why clinics choose MEGATECH"
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
