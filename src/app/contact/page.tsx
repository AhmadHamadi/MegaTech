import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MEGATECH Dental Lab. Become a partner clinic, ask about turnaround and pricing, or set up scheduled pickup and delivery across the GTA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        description="New to MEGATECH, or have a question about turnaround, materials, or pricing? Tell us about your practice and we'll respond within 24 hours."
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl bg-brand-surface p-7 ring-1 ring-brand-line">
              <h3 className="font-display text-lg font-semibold text-brand-ink mb-5">
                Visit our lab
              </h3>
              <ul className="space-y-4 text-sm">
                <ContactRow icon={MapPin}>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postal}
                </ContactRow>
                <ContactRow icon={Phone}>
                  <a href={siteConfig.phoneHref} className="hover:text-brand-teal">
                    {siteConfig.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={Mail}>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-teal">
                    {siteConfig.email}
                  </a>
                </ContactRow>
                <ContactRow icon={Clock}>
                  <div className="space-y-1">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day}>
                        <span className="font-medium text-brand-ink">{h.day}:</span>{" "}
                        {h.time}
                      </div>
                    ))}
                  </div>
                </ContactRow>
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-ink p-7 text-white">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display font-semibold mb-2">Have a case ready?</h3>
                  <p className="text-sm text-white/70 text-pretty">
                    Partner clinics can{" "}
                    <Link href="/#pickup" className="text-brand-teal underline">
                      request a pickup
                    </Link>{" "}
                    instead — our team is notified instantly and collects on the
                    next scheduled run across the GTA.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <Icon className="h-4 w-4 flex-shrink-0 mt-1 text-brand-teal" />
      <div className="text-brand-ink">{children}</div>
    </li>
  );
}
