export const siteConfig = {
  name: "MEGATACH Dental Lab",
  shortName: "MEGATACH",
  tagline: "Precision. Technology. Excellence.",
  description:
    "Ontario-based dental laboratory specializing in precision dentures, repairs, relines, and implant-supported prosthetics. Trusted by dental professionals and patients across the GTA.",
  url: "https://megatachdentallab.com",
  email: "info@megatachdentallab.com",
  phone: "(416) 555-0100",
  phoneHref: "tel:+14165550100",
  address: {
    street: "Suite 200",
    city: "Toronto",
    region: "Ontario",
    postal: "M5V 0A1",
    country: "Canada",
  },
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
