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
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

/**
 * @deprecated Use ChapterMark instead — the new editorial section opener
 */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif italic text-sm tracking-wide text-brand-ink/60">
      — {children}
    </span>
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
  const descColor = tone === "paper" ? "text-white/70" : "text-brand-ink/65";
  return (
    <div
      className={cn(
        "max-w-3xl mb-14 md:mb-20",
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
          "font-display text-[2.25rem] md:text-[3.5rem] leading-[1.05] font-normal text-balance tracking-tight",
          headingColor,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 text-lg md:text-xl text-pretty leading-relaxed max-w-2xl",
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
