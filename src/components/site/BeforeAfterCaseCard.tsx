import { clinic, type BeforeAfterCase } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const visualMap = {
  midface: {
    src: clinic.media.results.midface,
    imageClass: "object-[center_30%]",
  },
  lips: {
    src: clinic.media.results.lips,
    imageClass: "object-[center_50%]",
  },
  skin: {
    src: clinic.media.results.skin,
    imageClass: "object-[center_38%]",
  },
} as const;

export function BeforeAfterCaseCard({
  item,
  compact = false,
}: {
  item: BeforeAfterCase;
  compact?: boolean;
}) {
  const visual = visualMap[item.variant];

  return (
    <article className={cn("card-surface interactive-card h-full overflow-hidden p-4 sm:p-5", compact && "sm:p-4")}>
      <div className="relative overflow-hidden rounded-[1.8rem]">
        <img
          src={visual.src}
          alt={item.title}
          className={cn("h-[300px] w-full object-cover sm:h-[340px]", visual.imageClass)}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,15,20,0.02),rgba(24,15,20,0.28))]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-[rgba(38,22,29,0.58)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
          Caso acompanhado
        </div>
      </div>

      <div className="px-1 pb-1 pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/50">
          Resultado observado
        </p>
        <h3 className="mt-3 font-display text-[1.9rem] leading-[0.95] text-primary sm:text-[2.05rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-primary/78">{item.focus}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-primary/50">{item.note}</p>

        <div className={cn("mt-5 grid gap-3", compact ? "md:grid-cols-2" : "sm:grid-cols-2")}>
          <div className="rounded-[1.35rem] border border-border/70 bg-background/82 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/45">
              Queixa inicial
            </p>
            <p className="mt-3 text-sm leading-6 text-primary/78">{item.beforeLabel}</p>
          </div>
          <div className="rounded-[1.35rem] border border-border/70 bg-background/82 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/45">
              Direcao do resultado
            </p>
            <p className="mt-3 text-sm leading-6 text-primary/78">{item.afterLabel}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
