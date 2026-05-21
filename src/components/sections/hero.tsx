import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute -top-40 -right-40 h-[620px] w-[620px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 items-center">
          {/* LEFT — text column */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 ring-1 ring-brand-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
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
                  {siteConfig.phone}
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-brand-ink">No referral needed</span>
              <span className="text-brand-ink/20">·</span>
              <span className="font-medium text-brand-ink">CDCP accepted</span>
              <span className="text-brand-ink/20">·</span>
              <span className="font-medium text-brand-ink">Free consultation</span>
            </div>
          </div>

          {/* RIGHT — image column (source 612x408 displays at ~560px = no upscaling) */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-brand-line">
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

            {/* Floating card — top-right */}
            <div className="hidden md:flex absolute -right-4 lg:-right-6 -top-5 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-brand-line items-center gap-3 animate-slide-in [animation-delay:600ms] z-10">
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

            {/* Floating card — bottom-left */}
            <div className="hidden md:flex absolute -left-4 lg:-left-6 -bottom-5 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-brand-line items-center gap-3 animate-slide-in [animation-delay:800ms] z-10">
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
          </div>
        </div>
      </div>
    </section>
  );
}
