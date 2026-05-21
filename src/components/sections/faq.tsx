import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { homeFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export function FaqSection() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Section id="faq" className="paper-grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SectionHeader
        chapter={{ number: "08", label: "Common Questions" }}
        title="Answers to common denture questions"
        description="Everything you need to know about dentures, costs, CDCP coverage, repairs, and the MEGATACH process — straight from our denturists."
      />
      <div className="max-w-3xl space-y-3">
        {homeFaqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl bg-white ring-1 ring-brand-line hover:ring-brand-teal transition-all"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-display font-semibold text-brand-ink">
              <span className="text-base md:text-lg text-pretty">{faq.q}</span>
              <span className="h-8 w-8 rounded-full bg-brand-surface group-open:bg-brand-teal group-open:text-white flex items-center justify-center text-xl transition-colors flex-shrink-0">
                <span className="group-open:rotate-45 transition-transform">+</span>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground text-pretty leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-2xl bg-white ring-1 ring-brand-line p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="h-6 w-6 text-brand-teal" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-ink">
              Still have questions?
            </h3>
            <p className="text-sm text-muted-foreground">
              Talk to a denturist directly — no obligation, no pressure.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="accent">
            <Link href="#book">Book a consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              Call us
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
