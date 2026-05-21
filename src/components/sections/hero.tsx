import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  Star,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface via-white to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute -top-40 -right-40 h-[620px] w-[620px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-40 h-[460px] w-[460px] rounded-full opacity-12 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 items-center">
          {/* LEFT — text column */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 ring-1 ring-brand-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Ontario Dental Lab
            </div>

            <h1 className="mt-6 font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-semibold leading-[1.05] text-brand-ink text-balance tracking-tight">
              Precision dentures,{" "}
              <span className="gradient-text">crafted with care.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Custom dentures, repairs, relines, and implant-supported
              prosthetics — engineered with digital precision and finished by
              hand in our Toronto lab.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="#book">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={siteConfig.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  Call {siteConfig.phone}
                </Link>
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-teal text-brand-teal" />
                ))}
              </div>
              <span>
                <span className="font-semibold text-brand-ink">4.9 / 5</span>{" "}
                from 200+ patient reviews
              </span>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-line pt-8 max-w-lg">
              <Stat value="20+" label="Years" />
              <Stat value="5,000+" label="Smiles" />
              <Stat value="24h" label="Repairs" />
            </div>
          </div>

          {/* RIGHT — image column (sized so the 612x408 source renders at near-native size, no blur) */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-line">
              <Image
                src={IMG.heroLabBench}
                alt="MEGATACH denturist hand-finishing a dental prosthesis on an articulator"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/25 via-transparent to-transparent pointer-events-none" />

              {/* Top-right live badge */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-brand-ink shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
                </span>
                Booking this week
              </div>
            </div>

            {/* Floating card — bottom-left */}
            <div className="hidden md:flex absolute -left-4 lg:-left-6 -bottom-4 bg-white rounded-2xl shadow-2xl p-4 ring-1 ring-brand-line items-center gap-3 animate-slide-in [animation-delay:600ms] z-10">
              <div className="h-11 w-11 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-brand-teal" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-ink leading-tight">
                  5-Year Warranty
                </p>
                <p className="text-xs text-muted-foreground">On every prosthesis</p>
              </div>
            </div>

            {/* Floating card — top-right */}
            <div className="hidden md:flex absolute -right-4 lg:-right-6 -top-4 bg-white rounded-2xl shadow-2xl p-4 ring-1 ring-brand-line items-center gap-3 animate-slide-in [animation-delay:800ms] z-10">
              <div className="h-11 w-11 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-brand-teal" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-ink leading-tight">
                  Same-Day Repairs
                </p>
                <p className="text-xs text-muted-foreground">Drop-in service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-semibold text-brand-ink leading-none">
        {value}
      </div>
      <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
