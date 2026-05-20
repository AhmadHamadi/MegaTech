import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeader
        eyebrow="What we do"
        title="Comprehensive denture & prosthetic services"
        description="From full-arch implant solutions to same-day repairs, every prosthesis is custom-designed and finished by certified denturists in our Toronto lab."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-brand-line transition-all hover:ring-brand-teal hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-brand-ink group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h3>
                <div className="h-10 w-10 rounded-full bg-brand-surface flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                  <ArrowUpRight className="h-4 w-4 text-brand-ink group-hover:text-white transition-colors" />
                </div>
              </div>
              <p className="mt-3 text-muted-foreground text-pretty">{service.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
