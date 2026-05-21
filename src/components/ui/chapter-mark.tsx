import { cn } from "@/lib/utils";

/**
 * Editorial chapter mark — small serif italic label + hairline rule.
 * Used at the top of every major section as the site's signature
 * visual anchor. Recognizable with the logo removed.
 */
export function ChapterMark({
  number,
  label,
  className,
  tone = "ink",
}: {
  number: string;
  label: string;
  className?: string;
  tone?: "ink" | "paper";
}) {
  const text = tone === "paper" ? "text-white/70" : "text-brand-ink/60";
  const rule = tone === "paper" ? "bg-white/20" : "bg-brand-ink/15";
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <span className={cn("font-serif italic text-sm tracking-wide", text)}>
        {number} <span className="not-italic"> — </span> {label}
      </span>
      <span className={cn("h-px flex-1 max-w-[120px]", rule)} />
    </div>
  );
}
