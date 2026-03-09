import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70 shadow-[0_20px_60px_-40px_rgba(90,70,58,0.55)] backdrop-blur",
          centered && "mx-auto",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <div className="space-y-4">
        <h2 className="font-display text-4xl leading-[0.95] text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-primary/70 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
