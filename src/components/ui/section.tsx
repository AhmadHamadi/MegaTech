import { cn } from "@/lib/utils";
import { ChapterMark } from "./chapter-mark";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
      <span className="h-px w-8 bg-brand-teal" />
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  chapter,
  title,
  description,
  align = "left",
  tone = "ink",
}: {
  eyebrow?: string;
  chapter?: { number: string; label: string };
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "paper";
}) {
  const headingColor = tone === "paper" ? "text-white" : "text-brand-ink";
  const descColor = tone === "paper" ? "text-white/70" : "text-muted-foreground";
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
      )}
    >
      {chapter ? (
        <ChapterMark
          number={chapter.number}
          label={chapter.label}
          tone={tone}
          className={align === "center" ? "justify-center" : ""}
        />
      ) : eyebrow ? (
        <Eyebrow>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.05]",
          headingColor,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg text-pretty leading-relaxed",
            align === "center" && "mx-auto",
            descColor,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
