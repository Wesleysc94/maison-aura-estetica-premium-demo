import { clinic, type BeforeAfterCase } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const visualMap = {
  midface: {
    src: clinic.media.results.midface,
    before: "object-[center_24%]",
    after: "object-[center_18%]",
  },
  lips: {
    src: clinic.media.results.lips,
    before: "object-[center_54%]",
    after: "object-[center_50%]",
  },
  skin: {
    src: clinic.media.results.skin,
    before: "object-[center_38%]",
    after: "object-[center_34%]",
  },
} as const;

function VisualPanel({
  variant,
  state,
  label,
}: {
  variant: BeforeAfterCase["variant"];
  state: "before" | "after";
  label: string;
}) {
  const visual = visualMap[variant];
  const toneClass =
    state === "before"
      ? "brightness-[0.9] contrast-[0.95] saturate-[0.82]"
      : "brightness-[1.03] contrast-[1.02] saturate-[1.02]";

  return (
    <div className="relative h-64 overflow-hidden rounded-[1.65rem] border border-white/25 bg-card sm:h-72">
      <img
        src={visual.src}
        alt={label}
        className={cn("h-full w-full object-cover", visual[state], toneClass)}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,14,18,0.06),rgba(22,14,18,0.18))]" />

      <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-[rgba(34,20,27,0.58)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white backdrop-blur-sm">
        {state === "before" ? "Antes" : "Depois"}
      </div>

      <div className="absolute bottom-3 left-3 right-3 rounded-[1rem] border border-white/20 bg-[rgba(32,18,24,0.62)] p-3 text-white backdrop-blur-sm">
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">{label}</p>
      </div>
    </div>
  );
}

export function BeforeAfterCaseCard({
  item,
  compact = false,
}: {
  item: BeforeAfterCase;
  compact?: boolean;
}) {
  return (
    <article className={cn("card-surface interactive-card overflow-hidden p-5 sm:p-6", compact ? "h-full" : "h-full")}>
      <div className={cn("grid gap-3", compact ? "md:grid-cols-2" : "grid-cols-2")}>
        <VisualPanel variant={item.variant} state="before" label={item.beforeLabel} />
        <VisualPanel variant={item.variant} state="after" label={item.afterLabel} />
      </div>

      <div className="px-1 pb-1 pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50">
          Caso ilustrativo
        </p>
        <h3 className="mt-3 font-display text-[1.9rem] leading-[0.95] text-primary sm:text-[2.05rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-primary/78">{item.focus}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-primary/50">{item.note}</p>
      </div>
    </article>
  );
}
