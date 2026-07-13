import { Truck, BellRing, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ChapterMark } from "@/components/ui/chapter-mark";
import { PickupForm } from "@/components/site/pickup-form";

const points = [
  {
    icon: BellRing,
    title: "Instant notification",
    body: "The moment you submit, our front desk and driver are alerted — no phone tag, no waiting on hold.",
  },
  {
    icon: MapPin,
    title: "Scheduled GTA routes",
    body: "Daily pickup and delivery runs across Toronto and the Greater Toronto Area.",
  },
  {
    icon: Clock,
    title: "Fast return",
    body: "Repairs often go back same-day; new cases are returned on the next delivery run.",
  },
];

export function Pickup() {
  return (
    <Section id="pickup" className="bg-white">
      <div className="rounded-3xl bg-brand-ink px-6 py-12 md:p-16 relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <ChapterMark number="06" label="Pickup & Delivery" tone="paper" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-white text-balance leading-[1.05] tracking-tight">
              Have a case ready? Request a pickup.
            </h2>
            <p className="mt-5 text-lg text-white/70 text-pretty leading-relaxed max-w-lg">
              No more chasing the lab by phone. Submit the form and our team is
              notified instantly — we&apos;ll collect from your clinic on our
              next scheduled run and return the finished work to your front
              desk. Free for partner clinics across the GTA.
            </p>

            <div className="mt-8 space-y-5">
              {points.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-brand-teal/15 ring-1 ring-brand-teal/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
              <Truck className="h-4 w-4 text-brand-teal" />
              A logged-in clinic portal is on the way — for now, this form does the job.
            </p>
          </div>

          <PickupForm />
        </div>
      </div>
    </Section>
  );
}
