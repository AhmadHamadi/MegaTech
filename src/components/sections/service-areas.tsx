import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const areas = [
  "Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "East York",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Pickering",
  "Ajax",
  "Whitby",
];

export function ServiceAreas() {
  return (
    <Section id="service-areas" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20 items-start">
        <div>
          <SectionHeader
            chapter={{ number: "07", label: "Service Areas" }}
            title="Proudly serving the Greater Toronto Area"
            description="From our Toronto lab we serve patients across the GTA and partner with dental practices throughout Ontario. Free consultations, easy parking, TTC-accessible."
          />
          <Button asChild variant="default">
            <Link href="#book">
              Book your visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="lg:pt-2">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-serif italic text-sm text-brand-teal">
              Communities served
            </span>
            <div className="h-px flex-1 bg-brand-ink/10" />
          </div>
          <p className="font-display text-2xl md:text-3xl text-brand-ink leading-[1.5] text-balance">
            {areas.map((area, i) => (
              <span key={area}>
                {area}
                {i < areas.length - 1 && (
                  <span className="text-brand-teal/70 mx-3">·</span>
                )}
              </span>
            ))}
          </p>
          <p className="mt-8 font-serif italic text-sm text-brand-ink/55">
            Outside the GTA?{" "}
            <Link href="#book" className="text-brand-ink underline underline-offset-4 decoration-brand-teal/40 hover:decoration-brand-teal">
              We work with partner practices province-wide.
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
