import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const reasons = [
  {
    n: "01",
    title: "In-House Dental Lab",
    body: "Every case is designed, milled, and finished under one roof — no outsourcing offshore, no lost weeks, no compromise on quality.",
  },
  {
    n: "02",
    title: "Master Craftsmanship",
    body: "Each prosthesis is hand-characterized by technicians with 20+ years of experience, for results that fit and look indistinguishably natural.",
  },
  {
    n: "03",
    title: "Digital Precision",
    body: "Send a scan or an impression — CAD design and CNC milling capture the anatomy to sub-millimetre accuracy either way.",
  },
  {
    n: "04",
    title: "Pickup & Delivery",
    body: "Scheduled, no-charge collection and return across the GTA. Have a case ready? Request a pickup and our team is notified instantly.",
  },
  {
    n: "05",
    title: "Fast Turnaround",
    body: "Most dentures ship back in 7–10 working days. Repairs are usually same-day, with relines returned within 24 hours.",
  },
  {
    n: "06",
    title: "Fabrication Warranty",
    body: "Every case we build is backed by our warranty against defects, with prompt remakes and adjustments handled on our runs.",
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
          chapter={{ number: "02", label: "Why MEGATECH" }}
          title="Six reasons clinics make us their lab"
          description="From the case you send to the work we return, every step is built around precision, speed, and making your practice's life easier."
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
            <Link href="#pickup">
              Request a pickup
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <span className="text-sm text-white/60">
            Free pickup &amp; delivery across the GTA
          </span>
        </div>
      </div>
    </Section>
  );
}
