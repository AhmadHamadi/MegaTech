import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/lib/site-config";

export function BookSection() {
  return (
    <Section id="book" className="bg-white">
      <div className="rounded-3xl bg-brand-surface ring-1 ring-brand-line p-6 md:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
              <span className="h-px w-8 bg-brand-teal" />
              Book a Consultation
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-ink text-balance">
              Ready to restore your smile?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Tell us a little about what you need and we&apos;ll respond
              within 24 hours. Consultations are always free.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-brand-line">
              <h3 className="font-display text-lg font-semibold text-brand-ink mb-5">
                Or reach us directly
              </h3>
              <ul className="space-y-4 text-sm">
                <Row icon={Phone}>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-brand-ink hover:text-brand-teal font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                </Row>
                <Row icon={Mail}>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand-ink hover:text-brand-teal"
                  >
                    {siteConfig.email}
                  </a>
                </Row>
                <Row icon={MapPin}>
                  <div className="text-brand-ink">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.region}{" "}
                    {siteConfig.address.postal}
                  </div>
                </Row>
                <Row icon={Clock}>
                  <div className="text-brand-ink space-y-0.5">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day}>
                        <span className="font-medium">{h.day}:</span> {h.time}
                      </div>
                    ))}
                  </div>
                </Row>
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-ink p-6 text-white">
              <p className="text-sm text-white/80 leading-relaxed">
                <span className="font-semibold text-white">
                  Need a same-day repair?
                </span>{" "}
                Drop off your denture before noon and we&apos;ll have it ready
                by 5 PM — no appointment needed.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}

function Row({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <Icon className="h-4 w-4 flex-shrink-0 mt-1 text-brand-teal" />
      <div>{children}</div>
    </li>
  );
}
