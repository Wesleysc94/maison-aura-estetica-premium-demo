import { motion } from "framer-motion";

import { clinic, type BeforeAfterCase } from "@/data/siteContent";
import { cn } from "@/lib/utils";

type VisualState = "before" | "after";

const visualMap = {
  midface: {
    src: clinic.media.results.midface,
    before: "bg-[size:182%] bg-[position:51%_18%] saturate-[0.78] brightness-[0.9]",
    after: "bg-[size:168%] bg-[position:52%_18%] brightness-[1.06] contrast-[1.04]",
  },
  lips: {
    src: clinic.media.results.lips,
    before: "bg-[size:212%] bg-[position:51%_42%] saturate-[0.74] brightness-[0.9]",
    after: "bg-[size:198%] bg-[position:50%_42%] brightness-[1.05] contrast-[1.08]",
  },
  skin: {
    src: clinic.media.results.skin,
    before: "bg-[size:170%] bg-[position:50%_20%] saturate-[0.7] brightness-[0.88]",
    after: "bg-[size:158%] bg-[position:50%_20%] brightness-[1.06] contrast-[1.03]",
  },
} as const;

function VariantOverlay({
  variant,
  state,
}: {
  variant: BeforeAfterCase["variant"];
  state: VisualState;
}) {
  if (variant === "midface") {
    return state === "before" ? (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(48,34,40,0.08),transparent_35%),radial-gradient(circle_at_50%_44%,rgba(37,28,32,0.28),transparent_52%)]" />
        <div className="absolute left-1/2 top-[42%] h-20 w-28 -translate-x-1/2 rounded-[999px] border border-white/25 bg-white/5 backdrop-blur-[2px]" />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(252,243,244,0.36),transparent_34%),radial-gradient(circle_at_50%_45%,rgba(223,178,192,0.34),transparent_46%)]" />
        <div className="absolute left-1/2 top-[40%] h-20 w-28 -translate-x-1/2 rounded-[999px] border border-white/45 bg-white/10 shadow-[0_0_50px_rgba(255,245,247,0.35)]" />
      </>
    );
  }

  if (variant === "lips") {
    return state === "before" ? (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(43,31,37,0.06)_100%)]" />
        <div className="absolute left-1/2 top-[58%] h-16 w-24 -translate-x-1/2 rounded-[999px] border border-white/25" />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(221,157,176,0.44),transparent_24%),linear-gradient(180deg,transparent_0%,rgba(246,235,239,0.08)_100%)]" />
        <div className="absolute left-1/2 top-[58%] h-16 w-24 -translate-x-1/2 rounded-[999px] border border-[#f6d6df] shadow-[0_0_36px_rgba(220,162,179,0.45)]" />
      </>
    );
  }

  return state === "before" ? (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(39,28,34,0.22),transparent_50%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.45)_0.7px,transparent_0.7px)] [background-size:10px_10px]" />
    </>
  ) : (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,240,245,0.25),transparent_50%),linear-gradient(180deg,rgba(246,231,236,0.14),transparent)]" />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.9)_0.9px,transparent_0.9px)] [background-size:14px_14px]" />
    </>
  );
}

function VisualPanel({
  variant,
  state,
  label,
}: {
  variant: BeforeAfterCase["variant"];
  state: VisualState;
  label: string;
}) {
  const visual = visualMap[variant];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-64 overflow-hidden rounded-[1.75rem] border border-white/45 bg-[#fbf1f4] sm:h-72"
    >
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-[1.035]",
          state === "before" ? visual.before : visual.after,
        )}
        style={{ backgroundImage: `url(${visual.src})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,24,29,0.06),rgba(33,24,29,0.24))]" />
      <VariantOverlay variant={variant} state={state} />

      <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur">
        {state === "before" ? "Antes" : "Depois"}
      </div>

      <div className="absolute bottom-3 left-3 right-3 rounded-[1.1rem] border border-white/20 bg-card/20 p-3 text-primary-foreground backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.26em] text-white/70">
          {label}
        </p>
      </div>
    </motion.div>
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
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "card-surface interactive-card overflow-hidden p-5 sm:p-6",
        compact ? "h-full" : "h-full",
      )}
    >
      <div className={cn("grid gap-3", compact ? "md:grid-cols-2" : "grid-cols-2")}>
        <VisualPanel variant={item.variant} state="before" label={item.beforeLabel} />
        <VisualPanel variant={item.variant} state="after" label={item.afterLabel} />
      </div>

      <div className="px-1 pb-1 pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/45">
          Caso ilustrativo
        </p>
        <h3 className="mt-3 font-display text-[1.9rem] leading-[0.95] text-primary sm:text-[2.05rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-primary/70">{item.focus}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-primary/45">
          {item.note}
        </p>
      </div>
    </motion.article>
  );
}
