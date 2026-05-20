import { Award, BadgeCheck, Microscope, Users } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "CDO Registered" },
  { icon: Award, label: "CDCP Provider" },
  { icon: Microscope, label: "In-House Lab" },
  { icon: Users, label: "5,000+ Smiles Restored" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-brand-line bg-brand-surface">
      <div className="container py-8 md:py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Trusted by dental professionals across Ontario
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 text-brand-ink/80"
            >
              <Icon className="h-5 w-5 text-brand-teal" />
              <span className="text-sm md:text-base font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
