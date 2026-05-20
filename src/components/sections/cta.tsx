import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-ink to-brand-ink/90 px-8 py-16 md:p-20">
          <div
            className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
                <span className="h-px w-8 bg-brand-teal" />
                Get Started
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-white text-balance">
                Ready to restore your smile?
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-lg text-pretty">
                Book a free consultation with our denturists. We&apos;ll assess
                your needs, discuss your options, and provide a transparent
                quote — no pressure, no surprises.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Button asChild variant="accent" size="lg" className="w-full md:w-auto">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-3 text-white hover:text-brand-teal transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
