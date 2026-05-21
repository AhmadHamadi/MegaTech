import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/lib/site-config";

export function BookSection() {
  return (
    <Section id="book" className="bg-white border-t border-brand-ink/10">
      <div>
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif italic text-sm tracking-wide text-brand-ink/60">
                09 <span className="not-italic"> — </span> Book a Consultation
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-brand-ink/15" />
            </div>
            <h2 className="font-display text-[2.25rem] md:text-[3.5rem] font-normal text-brand-ink text-balance leading-[1.05] tracking-tight">
              Ready to <span className="accent-serif">restore</span> your smile?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Tell us a little about what you need and we&apos;ll respond
              within 24 hours. Consultations are always free.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="paper-grain rounded-md p-6 ring-1 ring-brand-ink/8">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-serif italic text-sm text-brand-teal">Direct</span>
                <div className="h-px flex-1 bg-brand-ink/15" />
              </div>
              <h3 className="font-display text-xl font-normal text-brand-ink mb-5">
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

            <div className="rounded-md bg-brand-ink p-6 text-white">
              <span className="font-serif italic text-sm text-brand-teal">
                Walk-in service
              </span>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                <span className="font-display text-base text-white">
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
