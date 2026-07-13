import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    n: "01",
    title: "Request a Pickup",
    body: "Send your scan or impression with a prescription, or request a pickup and our driver collects the case from your clinic.",
  },
  {
    n: "02",
    title: "Design & Approval",
    body: "We CAD-design the case to your prescription and share previews where needed, so nothing is milled before you sign off.",
  },
  {
    n: "03",
    title: "Hand-Finished Build",
    body: "Master technicians mill and characterize teeth and gum tissue for a result that fits and looks indistinguishably natural.",
  },
  {
    n: "04",
    title: "Delivered to Your Clinic",
    body: "The finished case is returned on our delivery run, ready for your team to fit — backed by our fabrication warranty.",
  },
];

export function Process() {
  return (
    <Section className="bg-white">
      <SectionHeader
        chapter={{ number: "04", label: "How It Works" }}
        title="From your prescription to your front desk"
        description="Four simple steps — and our pickup and delivery handle the legwork at both ends, so your team never has to chase a case."
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
          <Link href="#pickup">
            Request a pickup
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
