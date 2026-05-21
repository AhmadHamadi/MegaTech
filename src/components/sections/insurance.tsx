import Link from "next/link";
import { Shield, FileCheck, CreditCard, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const insurers = [
  "Sun Life",
  "Manulife",
  "Great-West Life",
  "Canada Life",
  "Green Shield",
  "Blue Cross",
  "Desjardins",
  "SSQ",
];

const points = [
  {
    icon: Shield,
    title: "CDCP Provider",
    body: "Registered Canadian Dental Care Plan provider — full coverage for eligible patients.",
  },
  {
    icon: FileCheck,
    title: "Direct Billing",
    body: "We submit claims directly to your insurer — no out-of-pocket surprises.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    body: "Interest-free payment plans available for treatments not fully covered.",
  },
  {
    icon: Sparkles,
    title: "Free Consultation",
    body: "Transparent quotes before any work begins. No pressure, no hidden fees.",
  },
];

export function Insurance() {
  return (
    <Section id="insurance" className="bg-white">
      <div className="rounded-md bg-brand-ink px-8 py-16 md:p-20 relative overflow-hidden">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif italic text-sm tracking-wide text-white/60">
                06 <span className="not-italic"> — </span> Insurance &amp; Coverage
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-white/20" />
            </div>
            <h2 className="font-display text-[2.25rem] md:text-[3.5rem] font-normal text-white text-balance leading-[1.05] tracking-tight">
              We make insurance <span className="accent-serif">simple.</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 text-pretty leading-relaxed max-w-lg">
              MEGATACH works with every major Ontario benefit plan and is a
              registered CDCP provider. We&apos;ll verify your coverage, submit
              claims, and walk you through every line — so the only thing
              you focus on is your smile.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 max-w-md">
              {insurers.map((i) => (
                <div
                  key={i}
                  className="text-sm text-white/80 border-b border-white/15 pb-2"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="accent" size="lg">
                <Link href="#book">
                  Verify my coverage
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-y sm:border-y-0 border-white/10">
            {points.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="p-6 sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif italic text-xs text-brand-teal">
                    0{i + 1}
                  </span>
                  <Icon className="h-4 w-4 text-brand-teal" />
                </div>
                <h3 className="mt-4 font-display text-lg font-normal text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
