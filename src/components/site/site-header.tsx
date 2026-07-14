"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-line/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-32 md:h-40 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 transition-opacity hover:opacity-80 py-2"
          aria-label={siteConfig.name}
        >
          <Image
            src="/brand/mark.png"
            alt=""
            width={709}
            height={605}
            priority
            className="h-28 md:h-36 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl md:text-4xl font-bold tracking-tight text-brand-ink">
              MEGA<span className="text-brand-teal">TECH</span>
            </span>
            <span className="mt-1 text-[0.6rem] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-ink/60">
              Dental Lab
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-brand-ink hover:text-brand-teal"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button asChild variant="accent" size="sm">
            <Link href="/#pickup">Request a Pickup</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-brand-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden border-t border-brand-line/60 bg-white overflow-hidden transition-all",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-brand-ink hover:text-brand-teal border-b border-brand-line/40 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button asChild variant="accent">
              <Link href="/#pickup" onClick={() => setOpen(false)}>
                Request a Pickup
              </Link>
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-brand-ink"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
