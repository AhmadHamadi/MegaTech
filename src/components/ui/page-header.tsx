import { Eyebrow } from "@/components/ui/section";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-surface border-b border-brand-line">
      <div
        className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #29B1C5 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-brand-ink text-balance">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg md:text-xl text-muted-foreground text-pretty">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
