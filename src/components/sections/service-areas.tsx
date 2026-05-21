import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
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
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Service Areas"
            title="Proudly serving the Greater Toronto Area"
            description="From our Toronto lab, we serve patients across the GTA and partner with dental practices throughout Ontario. Free consultations, easy parking, and TTC-accessible."
          />
          <div className="inline-flex items-center gap-3 rounded-2xl bg-brand-surface ring-1 ring-brand-line px-5 py-4">
            <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-brand-teal" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-ink">
                Toronto, Ontario
              </p>
              <p className="text-xs text-muted-foreground">
                Easy access from major GTA highways
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild variant="accent">
              <Link href="#book">
                Book your visit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-xl bg-brand-surface ring-1 ring-brand-line px-4 py-3 hover:ring-brand-teal hover:bg-white transition-all"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-teal flex-shrink-0" />
              <span className="text-sm font-medium text-brand-ink truncate">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
