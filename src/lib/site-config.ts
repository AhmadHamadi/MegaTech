export const siteConfig = {
  name: "MEGATECH Dental Lab",
  shortName: "MEGATECH",
  tagline: "Precision. Technology. Excellence.",
  description:
    "Ontario dental laboratory fabricating precision dentures, night guards, orthotic appliances, and implant prosthetics for dental clinics — with scheduled pickup and delivery across the GTA.",
  url: "https://megatachdentallab.com",
  email: "info@megatechdentallab.com",
  phone: "(905) 208-9191",
  phoneHref: "tel:+19052089191",
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
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
