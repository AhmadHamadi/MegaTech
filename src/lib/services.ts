export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "complete-dentures",
    title: "Complete Dentures",
    short: "Full upper and lower dentures crafted for a precise, natural fit.",
    description:
      "Our complete dentures are custom-built using premium acrylics and digital workflows to deliver a comfortable fit, lifelike aesthetics, and dependable function — restoring confidence in every smile.",
    bullets: [
      "Premium acrylic and porcelain options",
      "Digital impressions for precision fit",
      "Natural shade and gum colour matching",
      "5-year manufacturing warranty",
    ],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=80",
    faqs: [
      {
        q: "How long does a complete denture take?",
        a: "Typically 3–5 appointments over 4–6 weeks, depending on case complexity and adjustments needed.",
      },
      {
        q: "Will my dentures look natural?",
        a: "Yes. We hand-characterize teeth and gum tissue so prosthetics look indistinguishable from natural dentition.",
      },
    ],
  },
  {
    slug: "partial-dentures",
    title: "Partial Dentures",
    short: "Cast metal and flexible partials engineered to preserve remaining teeth.",
    description:
      "Whether you need a precision cast-frame partial or a flexible thermoplastic option, our partial dentures are designed to distribute load evenly, protect adjacent teeth, and stay invisible at the smile line.",
    bullets: [
      "Cobalt-chrome cast framework",
      "Valplast / flexible thermoplastic options",
      "Precision attachments available",
      "Metal-free aesthetic clasps",
    ],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    faqs: [
      {
        q: "Cast metal vs. flexible — which is better?",
        a: "Cast metal is more rigid and long-lasting; flexible partials are lighter and more aesthetic. We recommend based on your case.",
      },
    ],
  },
  {
    slug: "implant-supported",
    title: "Implant-Supported Dentures",
    short: "Snap-in and fixed full-arch solutions for unmatched stability.",
    description:
      "Implant-retained prosthetics eliminate denture movement, restore chewing force, and preserve jawbone health. We fabricate both removable overdentures and fixed full-arch hybrid prostheses.",
    bullets: [
      "Locator and Ball attachments",
      "All-on-4 / All-on-6 hybrid prostheses",
      "Zirconia and titanium frameworks",
      "Compatible with all major implant systems",
    ],
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
    faqs: [
      {
        q: "Do I need surgery for implant dentures?",
        a: "Yes — implants are surgically placed by an oral surgeon or periodontist. We coordinate directly with your dental team for the prosthetic phase.",
      },
    ],
  },
  {
    slug: "immediate-dentures",
    title: "Immediate Dentures",
    short: "Walk in with teeth, walk out with teeth — same-day temporary dentures after extractions.",
    description:
      "Immediate dentures let you avoid going without teeth during the healing phase. We pre-fabricate your prosthesis before extraction day so it can be placed the moment your natural teeth are removed.",
    bullets: [
      "Placed the same day as extractions",
      "Pre-designed from impressions taken before surgery",
      "Acts as a healing aid during gum recovery",
      "Converts to permanent denture after 3–6 months",
    ],
    image:
      "https://images.unsplash.com/photo-1581585504920-5ab8d4ce6f4f?auto=format&fit=crop&w=1600&q=80",
    faqs: [
      {
        q: "Will the immediate denture be my final denture?",
        a: "No. As your gums heal and shrink over 3–6 months, we reline or replace the immediate denture with a permanent one for a more precise fit.",
      },
    ],
  },
  {
    slug: "relines-repairs",
    title: "Relines & Repairs",
    short: "Same-day repairs and professional relines that restore fit fast.",
    description:
      "Broken denture? Loose fit? Our in-house lab turns most repairs around the same day and relines within 24 hours — getting you back to eating, speaking, and smiling without delay.",
    bullets: [
      "Same-day fracture repairs",
      "Hard and soft relines (chairside or lab)",
      "Tooth additions and re-bonding",
      "Cleaning and polishing service",
    ],
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=80",
    faqs: [
      {
        q: "How fast can you repair a broken denture?",
        a: "Most fractures are repaired same-day. Drop off before noon and we'll have it ready by 5 PM.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
