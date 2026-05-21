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
        className="absolute -bottom-20 -left-40 h-[480px] w-[480px] rounded-full opacity-12 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        {/* TOP — centered intro */}
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 ring-1 ring-brand-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted Ontario Dental Lab
          </div>

          <h1 className="mt-6 font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold leading-[1.05] text-brand-ink text-balance tracking-tight">
            Precision dentures, <span className="gradient-text">crafted with care.</span>
          </h1>

          <p className="mt-6 mx-auto text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Custom dentures, repairs, relines, and implant-supported prosthetics
            — engineered with digital precision and finished by hand by the
            MEGATACH team in our Toronto lab.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4">
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

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
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
        </div>

        {/* BOTTOM — full-width team photo at native aspect */}
        <div className="relative mt-12 md:mt-16 animate-fade-up [animation-delay:200ms]">
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-line">
            <Image
              src={IMG.heroTeam}
              alt="The MEGATACH Dental Lab team"
              width={1195}
              height={699}
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="w-full h-auto"
            />
            {/* Subtle dark gradient at bottom for badge legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-ink/40 to-transparent pointer-events-none" />

            {/* Top-right live badge */}
            <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-brand-ink shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              Booking this week
            </div>

            {/* Bottom-left floating card */}
            <div className="hidden md:flex absolute left-5 md:left-7 bottom-5 md:bottom-7 bg-white rounded-2xl shadow-2xl p-4 ring-1 ring-brand-line items-center gap-3 animate-slide-in [animation-delay:600ms]">
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

            {/* Bottom-right floating card */}
            <div className="hidden md:flex absolute right-5 md:right-7 bottom-5 md:bottom-7 bg-white rounded-2xl shadow-2xl p-4 ring-1 ring-brand-line items-center gap-3 animate-slide-in [animation-delay:800ms]">
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

          {/* Stats row BELOW the photo */}
          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-brand-line pt-8">
            <Stat value="20+" label="Years in Ontario" />
            <Stat value="5,000+" label="Smiles Restored" />
            <Stat value="24h" label="Repair Turnaround" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-semibold text-brand-ink leading-none">
        {value}
      </div>
      <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
