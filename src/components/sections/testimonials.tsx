import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";

export const testimonials = [
  {
    quote:
      "After years of struggling with ill-fitting dentures, MEGATACH finally got it right. The fit is perfect and they look completely natural. I can eat and smile without thinking about them.",
    name: "Margaret L.",
    role: "Patient, North York",
    rating: 5,
  },
  {
    quote:
      "Our practice has been sending implant cases to MEGATACH for over five years. The turnaround is fast, the fit is reliable, and patient feedback is consistently excellent.",
    name: "Dr. Aaron Patel",
    role: "Prosthodontist, Toronto",
    rating: 5,
  },
  {
    quote:
      "I broke my denture on a Friday evening and they had it fully repaired by Saturday afternoon. The whole team is friendly, professional, and incredibly skilled.",
    name: "Robert M.",
    role: "Patient, Mississauga",
    rating: 5,
  },
  {
    quote:
      "The level of detail in their characterization work is unmatched in the GTA. Every case comes back ready to deliver — no chairside adjustments needed.",
    name: "Dr. Susan Kim",
    role: "General Dentist, Vaughan",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section className="bg-brand-ink text-white">
      <div className="max-w-2xl mb-12 md:mb-16">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
          <span className="h-px w-8 bg-brand-teal" />
          Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold text-balance">
          Trusted by patients and dental professionals
        </h2>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-teal text-brand-teal" />
            ))}
          </div>
          <span className="text-white/70 text-sm">
            4.9/5 from 200+ patient reviews
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.slice(0, 4).map((t, i) => (
          <figure
            key={i}
            className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-7 backdrop-blur"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-teal/30" />
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-brand-teal text-brand-teal" />
              ))}
            </div>
            <blockquote className="text-white/90 leading-relaxed text-pretty">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-white/10">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-white/60">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
