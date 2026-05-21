import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-paper">
      {/* Single warm cream-to-white wash. No radial blobs. */}
      <div
        className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-brand-paper to-white"
        aria-hidden
      />

      <div className="container relative pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-24 lg:pb-28">
        {/* Chapter mark */}
        <div className="flex items-center gap-4 mb-12 md:mb-14">
          <span className="font-serif italic text-sm tracking-wide text-brand-ink/60">
            00 <span className="not-italic"> — </span> MEGATACH Dental Lab · Toronto
          </span>
          <span className="h-px flex-1 max-w-[160px] bg-brand-ink/15" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
          {/* LEFT — text column */}
          <div className="animate-fade-up">
            <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.02] text-brand-ink text-balance tracking-[-0.02em]">
              Precision dentures,{" "}
              <span className="accent-serif">crafted with care.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-brand-ink/70 max-w-xl text-pretty leading-[1.6]">
              Custom dentures, repairs, relines, and implant-supported
              prosthetics — engineered with digital precision and finished by
              hand in our Toronto lab.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <Link href="#book">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={siteConfig.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phone}
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-brand-ink/55">
              <span className="font-serif italic">No referral needed</span>
              <span className="text-brand-ink/30">·</span>
              <span className="font-serif italic">CDCP accepted</span>
              <span className="text-brand-ink/30">·</span>
              <span className="font-serif italic">Free consultation</span>
            </div>
          </div>

          {/* RIGHT — image column. Source is 612x408 native; we display at <=600px so it never upscales. */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[3/2] overflow-hidden rounded-md shadow-rim">
              <Image
                src={IMG.heroLabBench}
                alt="MEGATACH denturist hand-finishing a dental prosthesis on an articulator"
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            {/* Editorial caption below the image, not overlaid */}
            <p className="mt-4 font-serif italic text-xs text-brand-ink/55 leading-snug">
              Plate I — Hand-finishing a precision cast partial on the
              articulator. Toronto, 2026.
            </p>

            {/* Floating card — top-right (outside image) */}
            <div className="hidden md:flex absolute -right-4 lg:-right-6 -top-5 bg-white rounded-md shadow-lift p-4 ring-1 ring-brand-ink/5 items-center gap-3 animate-slide-in [animation-delay:600ms] z-10">
              <div className="h-10 w-10 rounded-md bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-brand-teal" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-ink leading-tight">
                  Same-Day Repairs
                </p>
                <p className="text-xs text-brand-ink/55 mt-0.5">Drop-in service</p>
              </div>
            </div>

            {/* Floating card — bottom-left (outside image) */}
            <div className="hidden md:flex absolute -left-4 lg:-left-6 -bottom-5 bg-white rounded-md shadow-lift p-4 ring-1 ring-brand-ink/5 items-center gap-3 animate-slide-in [animation-delay:800ms] z-10">
              <div className="h-10 w-10 rounded-md bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-brand-teal" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-ink leading-tight">
                  5-Year Warranty
                </p>
                <p className="text-xs text-brand-ink/55 mt-0.5">On every prosthesis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

