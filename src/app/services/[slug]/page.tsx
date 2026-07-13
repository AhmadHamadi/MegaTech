import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Cta } from "@/components/sections/cta";
import { services, getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    openGraph: { images: [service.image] },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} description={service.short} />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-brand-line">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg text-muted-foreground text-pretty">
              {service.description}
            </p>

            <h3 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              What&apos;s included
            </h3>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-brand-teal" />
                  </span>
                  <span className="text-brand-ink">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/#pickup">
                  Request a Pickup
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">
                  <ArrowLeft className="h-4 w-4" />
                  All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {service.faqs.length > 0 ? (
        <Section className="bg-brand-surface">
          <SectionHeader eyebrow="FAQs" title="Common questions" />
          <div className="max-w-3xl space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white ring-1 ring-brand-line p-6 hover:ring-brand-teal transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-brand-ink">
                  {faq.q}
                  <span className="h-8 w-8 rounded-full bg-brand-surface group-open:bg-brand-teal group-open:text-white flex items-center justify-center text-xl transition-colors">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground text-pretty">{faq.a}</p>
              </details>
            ))}
          </div>
        </Section>
      ) : null}

      <Cta />
    </>
  );
}
