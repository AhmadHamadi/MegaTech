import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink text-white/80">
      <div className="container py-16 md:py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white inline-block p-5 rounded-2xl shadow-lg">
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              width={520}
              height={174}
              className="h-14 md:h-16 w-auto"
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 hover:text-brand-teal transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-brand-teal transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Visit Us</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-teal" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region}{" "}
                {siteConfig.address.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-teal" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-teal" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-teal" />
              <div>
                {siteConfig.hours.map((h) => (
                  <div key={h.day}>
                    <span className="text-white">{h.day}:</span> {h.time}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
