import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Ontario Dental Lab
            </div>

            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-brand-ink text-balance">
              Precision dentures,{" "}
              <span className="gradient-text">crafted with care.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty">
              Custom dentures, repairs, relines, and implant-supported
              prosthetics — engineered with digital precision and finished by
              hand for a fit that feels like your own.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              <Stat value="20+" label="Years" />
              <Stat value="5,000+" label="Smiles" />
              <Stat value="24h" label="Repairs" />
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-line">
              <Image
                src={IMG.dentistTreating}
                alt="MEGATACH denturist treating a patient"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/30 via-transparent to-transparent" />
            </div>

            <div className="hidden md:block absolute -left-6 bottom-12 bg-white rounded-2xl shadow-xl p-5 ring-1 ring-brand-line max-w-[260px] animate-slide-in [animation-delay:600ms]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">5-Year Warranty</p>
                  <p className="text-xs text-muted-foreground">On every prosthesis</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -right-4 top-10 bg-white rounded-2xl shadow-xl p-5 ring-1 ring-brand-line max-w-[260px] animate-slide-in [animation-delay:800ms]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">Same-Day Repairs</p>
                  <p className="text-xs text-muted-foreground">Drop-in service</p>
                </div>
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
      <div className="font-display text-2xl md:text-3xl font-semibold text-brand-ink">
        {value}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
