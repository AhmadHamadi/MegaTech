import Link from "next/link";
import { Shield, FileCheck, CreditCard, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ChapterMark } from "@/components/ui/chapter-mark";

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
      <div className="rounded-3xl bg-brand-ink px-8 py-14 md:p-16 relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <ChapterMark number="06" label="Insurance & Coverage" tone="paper" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-white text-balance leading-[1.05] tracking-tight">
              We make insurance simple
            </h2>
            <p className="mt-5 text-lg text-white/70 text-pretty leading-relaxed max-w-lg">
              MEGATACH works with every major Ontario benefit plan and is a
              registered CDCP provider. We&apos;ll verify your coverage, submit
              claims, and walk you through every line — so the only thing you
              focus on is your smile.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {insurers.map((i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 text-sm text-white"
                >
                  {i}
                </span>
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

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-teal/15 ring-1 ring-brand-teal/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
