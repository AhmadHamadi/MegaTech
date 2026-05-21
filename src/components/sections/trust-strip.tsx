const items = ["CDO Registered", "CDCP Provider", "In-House Lab", "5,000+ Smiles Restored"];

export function TrustStrip() {
  return (
    <section className="border-y border-brand-ink/10 bg-white">
      <div className="container py-10 md:py-12">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-brand-ink/45 mb-8">
          <span className="font-serif italic normal-case tracking-normal text-sm text-brand-ink/55">
            Trusted by dental professionals
          </span>
          <span className="mx-3 text-brand-ink/20">·</span>
          across Ontario
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {items.map((label, i) => (
            <div key={label} className="flex items-center gap-3 text-brand-ink/75">
              <span className="font-serif italic text-xs text-brand-teal">
                0{i + 1}
              </span>
              <span className="text-sm md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
