import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeader
        chapter={{ number: "01", label: "Services" }}
        title="Comprehensive denture & prosthetic services"
        description="From full-arch implant solutions to same-day repairs, every prosthesis is custom-designed and finished by certified denturists in our Toronto lab. Five core services, one consistent standard."
      />

      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <article
            key={service.slug}
            className="group flex flex-col"
          >
            <Link
              href={`/services/${service.slug}`}
              className="relative aspect-[4/3] overflow-hidden rounded-md ring-1 ring-brand-ink/8 shadow-soft hover:shadow-lift transition-all"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </Link>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif italic text-sm text-brand-teal">
                0{i + 1}
              </span>
              <div className="h-px flex-1 bg-brand-ink/10" />
            </div>

            <h3 className="mt-3 font-display text-2xl md:text-[1.75rem] font-normal text-brand-ink tracking-tight leading-tight">
              {service.title}
            </h3>
            <p className="mt-3 text-[15px] text-brand-ink/65 text-pretty leading-relaxed">
              {service.description}
            </p>

            <ul className="mt-5 space-y-1.5">
              {service.bullets.slice(0, 3).map((b) => (
                <li key={b} className="flex items-baseline gap-3 text-sm text-brand-ink/80">
                  <span className="text-brand-teal text-xs">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm text-brand-ink hover:text-brand-teal transition-colors group/link"
              >
                <span className="border-b border-brand-ink/20 group-hover/link:border-brand-teal pb-0.5">
                  Read more
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
