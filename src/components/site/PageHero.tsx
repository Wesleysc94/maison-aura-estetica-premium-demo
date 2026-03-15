import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type PageHeroStat = {
  value: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaExternal?: boolean;
  image?: string;
  imageAlt?: string;
  imageEyebrow?: string;
  imageTitle?: string;
  highlights?: string[];
  stats?: PageHeroStat[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Agendar avaliação",
  ctaHref = "/contato",
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaExternal = false,
  image,
  imageAlt,
  imageEyebrow,
  imageTitle,
  highlights = [],
  stats = [],
}: PageHeroProps) {
  const SecondaryAction = secondaryCtaHref
    ? secondaryCtaExternal
      ? "a"
      : Link
    : null;

  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-14">
      <div className="ambient-orb left-[-7rem] top-12 h-56 w-56 bg-[radial-gradient(circle_at_center,rgba(191,127,156,0.22),transparent_68%)]" />
      <div className="ambient-orb right-[-4rem] top-10 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(216,194,183,0.28),transparent_72%)]" />

      <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-border/65 bg-background/92 p-2 shadow-[0_34px_140px_-70px_rgba(118,72,92,0.28)]">
        <div className={cn("overflow-hidden rounded-[2rem] border border-border/60 bg-card/96", image ? "grid lg:grid-cols-[1.04fr,0.96fr]" : "")}>
          <div className={cn("relative overflow-hidden", image ? "p-8 sm:p-10 lg:p-12" : "px-7 py-10 md:px-12 md:py-14")}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,127,156,0.12),transparent_52%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(117,79,95,0.3),transparent)]" />
            <Reveal className={cn("space-y-7", !image && "mx-auto flex max-w-4xl flex-col items-center text-center")}>
              <div className={cn("flex flex-wrap items-center gap-3", !image && "justify-center")}>
                <span className="luxury-chip">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {eyebrow}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/68">
                  Curadoria Maison Aura
                </span>
              </div>

              <div className="space-y-5">
                <h1 className={cn("font-display text-4xl leading-[0.92] text-primary sm:text-5xl", image ? "max-w-[12ch] lg:text-[4.6rem]" : "mx-auto max-w-[14ch] lg:text-[4.8rem]")}>
                  {title}
                </h1>
                <p className={cn("text-base leading-8 text-primary/72 sm:text-lg", image ? "max-w-xl" : "mx-auto max-w-2xl")}>
                  {description}
                </p>
              </div>

              {highlights.length > 0 && (
                <div className={cn("flex flex-wrap gap-3", !image && "justify-center")}>
                  {highlights.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/88 px-4 py-2 text-sm text-primary/82 shadow-[0_12px_32px_-28px_rgba(90,70,58,0.2)]">
                      <Check className="h-4 w-4 text-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              )}

              <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", !image && "justify-center")}>
                <Link to={ctaHref} className="premium-button justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    {ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>

                {SecondaryAction && secondaryCtaHref && (
                  <SecondaryAction
                    {...(secondaryCtaExternal
                      ? { href: secondaryCtaHref, target: "_blank", rel: "noreferrer" }
                      : { to: secondaryCtaHref })}
                    className="premium-button-secondary page-hero-secondary-button justify-center"
                  >
                    {secondaryCtaLabel}
                  </SecondaryAction>
                )}
              </div>

              {stats.length > 0 && (
                <div
                  className={cn(
                    "grid gap-3",
                    image ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-3",
                    !image && "w-full max-w-3xl"
                  )}
                >
                  {stats.map((stat) => (
                    <div key={stat.label} className="page-hero-stat">
                      <p
                        className={cn(
                          "page-hero-stat__value font-display text-primary",
                          stat.value.length > 18 && "page-hero-stat__value--long"
                        )}
                      >
                        {stat.value}
                      </p>
                      <p className="page-hero-stat__label mt-3 text-[11px] uppercase tracking-[0.24em] text-primary/48">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>

          {image && (
            <Reveal delay={0.12} className="relative min-h-[360px] overflow-hidden bg-background lg:min-h-[100%]">
              <img
                src={image}
                alt={imageAlt ?? title}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,25,33,0.06),rgba(44,25,33,0.42))]" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.7rem] border border-white/20 bg-[rgba(36,23,29,0.68)] p-5 text-white backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/72">
                  {imageEyebrow ?? "Atmosfera da clinica"}
                </p>
                <p className="mt-3 font-display text-4xl leading-[0.94]">
                  {imageTitle ?? "Estetica facial com experiencia boutique e conducao serena."}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
