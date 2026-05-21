import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeader
        chapter={{ number: "01", label: "Services" }}
        title="Comprehensive denture & prosthetic services"
        description="From full-arch implant solutions to same-day repairs, every prosthesis is custom-designed and finished by certified denturists in our Toronto lab. Five core services — one consistent standard."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="group flex flex-col rounded-2xl bg-white ring-1 ring-brand-line overflow-hidden hover:ring-brand-teal hover:shadow-xl transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex-1 flex flex-col p-6 md:p-7">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.bullets.slice(0, 3).map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-brand-ink"
                  >
                    <span className="mt-0.5 h-4 w-4 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-brand-teal" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-tealDark transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
