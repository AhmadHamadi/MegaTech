import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";
import { testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What patients and dental professionals say about working with MEGATACH Dental Lab.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What our patients say"
        description="Over 200 5-star Google reviews from patients across the Greater Toronto Area and dental professionals across Ontario."
      />
      <Section className="bg-white">
        <div className="max-w-2xl mb-12 mx-auto text-center">
          <div className="inline-flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-brand-teal text-brand-teal" />
              ))}
            </div>
            <span className="font-display text-2xl font-semibold text-brand-ink">4.9 / 5</span>
          </div>
          <p className="mt-3 text-muted-foreground">Average rating across 200+ Google reviews</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl bg-brand-surface ring-1 ring-brand-line p-7"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-teal/30" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-brand-teal text-brand-teal" />
                ))}
              </div>
              <blockquote className="text-brand-ink leading-relaxed text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-brand-line">
                <div className="font-semibold text-brand-ink">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <Cta />
    </>
  );
}
