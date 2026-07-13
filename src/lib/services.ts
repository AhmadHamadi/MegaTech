import { IMG } from "./images";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  faqs: { q: string; a: string }[];
};

// MEGATECH is a B2B dental laboratory. Every service below is a prosthesis or
// appliance we FABRICATE for partner dental clinics — we do not perform any
// in-mouth procedures. Copy is written for the dentist / clinic, not the patient.
export const services: Service[] = [
  {
    slug: "complete-dentures",
    title: "Complete Dentures",
    short: "Full upper and lower dentures fabricated to your prescription for a precise, natural fit.",
    description:
      "We fabricate complete dentures from your impressions or digital scans using premium acrylics and validated digital workflows — delivering a precise fit, lifelike characterization, and dependable function your patients can rely on.",
    bullets: [
      "Premium acrylic and porcelain tooth options",
      "Works from physical impressions or digital scans",
      "Hand-characterized shade and gum-tissue matching",
      "5-year fabrication warranty against defects",
    ],
    image: IMG.dentureModel,
    faqs: [
      {
        q: "What turnaround can we expect on a complete denture?",
        a: "Standard cases ship back within 7–10 working days from receipt of impressions or scans, with scheduled try-in stages built around your appointment dates.",
      },
      {
        q: "Do you accept digital scans?",
        a: "Yes. We accept STL/PLY files from all major intraoral scanners, as well as conventional impressions collected on our scheduled pickup runs.",
      },
    ],
  },
  {
    slug: "partial-dentures",
    title: "Partial Dentures",
    short: "Cast-metal and flexible partials engineered to preserve your patient's remaining dentition.",
    description:
      "From precision cast-frame partials to flexible thermoplastic options, we engineer each partial to distribute load evenly, protect abutment teeth, and stay invisible at the smile line — finished to your prescription.",
    bullets: [
      "Cobalt-chrome cast frameworks",
      "Valplast / flexible thermoplastic options",
      "Precision attachments available",
      "Metal-free aesthetic clasps",
    ],
    image: IMG.partialModel,
    faqs: [
      {
        q: "Cast metal vs. flexible — what do you recommend?",
        a: "Cast metal is more rigid and long-lasting; flexible partials are lighter and more aesthetic. Send us the case details and we'll advise on the best framework for the prescription.",
      },
    ],
  },
  {
    slug: "implant-prosthetics",
    title: "Implant Prosthetics",
    short: "Snap-in overdentures and fixed full-arch frameworks compatible with all major implant systems.",
    description:
      "We fabricate removable implant overdentures and fixed full-arch hybrid prostheses to your surgical plan — restoring stability and chewing force while remaining compatible with the implant system your practice uses.",
    bullets: [
      "Locator and Ball attachment overdentures",
      "All-on-4 / All-on-6 hybrid frameworks",
      "Zirconia and titanium milled bars",
      "Compatible with Straumann, Nobel Biocare, BioHorizons & more",
    ],
    image: IMG.implantModel,
    faqs: [
      {
        q: "Which implant systems do you support?",
        a: "We work with all major systems including Straumann, Nobel Biocare, BioHorizons, Zimmer Biomet, and Neodent. Tell us the system and platform and we'll match the correct components.",
      },
    ],
  },
  {
    slug: "night-guards-appliances",
    title: "Night Guards & Orthotic Appliances",
    short: "Bruxism guards, retainers, and custom orthotic appliances built from your models or scans.",
    description:
      "Beyond dentures, our lab fabricates a full range of custom appliances — hard and soft night guards for bruxism, retainers, sports mouthguards, and orthotic appliances — all built to your prescription from models or digital scans.",
    bullets: [
      "Hard, soft, and dual-laminate night guards",
      "Bruxism / TMJ occlusal splints",
      "Retainers and orthodontic appliances",
      "Custom-fit sports and protective guards",
    ],
    image: IMG.aligner,
    faqs: [
      {
        q: "Can you fabricate from a digital scan only?",
        a: "Yes. Most guards and appliances can be produced from a digital scan alone — no physical impression required. Conventional models are equally welcome on our pickup runs.",
      },
    ],
  },
  {
    slug: "relines-repairs",
    title: "Relines & Repairs",
    short: "Fast lab-side repairs and professional relines that get appliances back to your clinic quickly.",
    description:
      "Broken denture or loose fit? Our in-house lab turns most repairs around the same day and relines within 24 hours — collected and returned on our scheduled pickup and delivery runs so your patient isn't left waiting.",
    bullets: [
      "Same-day fracture repairs",
      "Hard and soft relines",
      "Tooth additions and re-bonding",
      "Collected and returned on our pickup runs",
    ],
    image: IMG.dentalLab,
    faqs: [
      {
        q: "How fast can you turn around a repair?",
        a: "Most fractures are repaired same-day. Cases collected on a morning pickup are typically ready for return delivery the same afternoon.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
