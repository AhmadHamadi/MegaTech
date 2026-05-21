import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const reasons = [
  {
    n: "01",
    title: "In-House Dental Lab",
    body: "Every prosthesis is designed, milled, and finished under one roof — no outsourcing, no delays, no compromise on quality.",
  },
  {
    n: "02",
    title: "Master Craftsmanship",
    body: "Each denture is hand-characterized by certified denturists with 20+ years of experience for results that look indistinguishably natural.",
  },
  {
    n: "03",
    title: "Digital Precision",
    body: "Intraoral scanning, CAD design, and CNC milling — modern workflows that capture your anatomy with sub-millimetre accuracy.",
  },
  {
    n: "04",
    title: "Same-Day Repairs",
    body: "Broken denture? Drop it off before noon and we'll have it back to you by 5 PM. Loose fit? Most relines done within 24 hours.",
  },
  {
    n: "05",
    title: "CDCP & Insurance",
    body: "Registered Canadian Dental Care Plan provider. We work with Sun Life, Manulife, Great-West, and all major Ontario benefit plans.",
  },
  {
    n: "06",
    title: "5-Year Warranty",
    body: "Every denture we build is backed by a 5-year manufacturer warranty against defects — peace of mind built into every smile.",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-brand-ink text-white">
      <SectionHeader
        chapter={{ number: "02", label: "Why MEGATACH" }}
        title="Six reasons patients and dentists choose us"
        description="From the first consultation to the final fitting, every step is designed around precision, comfort, and your time."
        tone="paper"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-white/8 border-y border-white/8">
        {reasons.map((r) => (
          <div
            key={r.n}
            className="group relative p-8 md:p-10 hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-serif italic text-sm text-brand-teal">{r.n}</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-normal text-white leading-tight">
              {r.title}
            </h3>
            <p className="mt-3 text-white/65 text-pretty leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-4 justify-center text-center">
        <Button asChild variant="accent" size="lg">
          <Link href="#book">
            Start with a free consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <span className="font-serif italic text-sm text-white/55">
          No referral needed · CDCP accepted
        </span>
      </div>
    </Section>
  );
}
