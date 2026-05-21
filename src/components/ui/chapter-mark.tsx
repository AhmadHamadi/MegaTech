import { cn } from "@/lib/utils";

/**
 * Section opener — small numbered label with a hairline rule.
 * Clean sans, not italic.
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
  const text = tone === "paper" ? "text-white/70" : "text-brand-teal";
  const labelColor = tone === "paper" ? "text-white/85" : "text-brand-ink/75";
  const rule = tone === "paper" ? "bg-white/20" : "bg-brand-ink/15";
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <span className={cn("text-xs font-semibold uppercase tracking-[0.2em]", text)}>
        {number}
      </span>
      <span className={cn("text-xs font-semibold uppercase tracking-[0.2em]", labelColor)}>
        {label}
      </span>
      <span className={cn("h-px flex-1 max-w-[120px]", rule)} />
    </div>
  );
}
