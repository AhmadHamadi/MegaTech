import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    n: "01",
    title: "Consultation",
    body: "We assess your needs in a relaxed, no-pressure visit and discuss the right prosthetic options for your case.",
  },
  {
    n: "02",
    title: "Digital Impressions",
    body: "Using intraoral scanning and CAD design, we capture your anatomy with sub-millimetre precision.",
  },
  {
    n: "03",
    title: "Hand-Finished Build",
    body: "Master technicians characterize teeth and gum tissue for a result that looks indistinguishably natural.",
  },
  {
    n: "04",
    title: "Fit & Follow-up",
    body: "We deliver, adjust, and follow up — backed by a 5-year warranty and complimentary annual check-ins.",
  },
];

export function Process() {
  return (
    <Section className="bg-white">
      <SectionHeader
        chapter={{ number: "04", label: "Our Process" }}
        title="A workflow built on precision at every step"
        description="Modern digital tools paired with old-world craftsmanship — that's how we deliver prosthetics that fit, function, and last."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.n}
            className="relative rounded-2xl bg-brand-surface p-7 ring-1 ring-brand-line hover:ring-brand-teal hover:shadow-lg transition-all"
          >
            <div className="font-display text-5xl font-semibold text-brand-teal/25">
              {step.n}
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-brand-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground text-pretty">{step.body}</p>
            {i < steps.length - 1 ? (
              <div className="hidden lg:block absolute -right-3 top-12 h-px w-6 bg-brand-line" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="default" size="lg">
          <Link href="#book">
            Begin your journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
