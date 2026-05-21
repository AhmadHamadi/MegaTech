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
    <Section id="why-us" className="bg-brand-ink text-white relative overflow-hidden">
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative">
        <SectionHeader
          chapter={{ number: "02", label: "Why MEGATACH" }}
          title="Six reasons patients and dentists choose us"
          description="From the first consultation to the final fitting, every step is designed around precision, comfort, and your time."
          tone="paper"
        />

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.n}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-7 md:p-8 hover:bg-white/[0.08] hover:ring-brand-teal/40 transition-all"
            >
              <div className="font-display text-5xl md:text-6xl font-semibold text-brand-teal/40 leading-none">
                {r.n}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                {r.title}
              </h3>
              <p className="mt-3 text-white/70 text-pretty leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 justify-center text-center">
          <Button asChild variant="accent" size="lg">
            <Link href="#book">
              Start with a free consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <span className="text-sm text-white/60">
            No referral needed · CDCP accepted
          </span>
        </div>
      </div>
    </Section>
  );
}
