import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ChapterMark } from "@/components/ui/chapter-mark";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/lib/site-config";

export function BookSection() {
  return (
    <Section id="book" className="bg-white">
      <div className="rounded-3xl bg-brand-surface ring-1 ring-brand-line p-6 md:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ChapterMark number="09" label="Partner With Us" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-ink text-balance leading-[1.05] tracking-tight">
              Make MEGATECH your lab.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              New to working with us? Tell us about your practice and we&apos;ll
              set you up with a pickup schedule and a direct line to the lab —
              usually within a day.
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
                  Already a partner with a case ready?
                </span>{" "}
                Skip the form —{" "}
                <a href="#pickup" className="text-brand-teal underline">
                  request a pickup
                </a>{" "}
                and our team is notified instantly.
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
