import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Agendar avaliacao",
  ctaHref = "/contato",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-32 sm:px-8 lg:px-12">
      <div className="ambient-orb left-[-6rem] top-20 h-56 w-56 bg-[radial-gradient(circle_at_center,rgba(198,167,123,0.24),transparent_68%)]" />
      <div className="ambient-orb right-[-4rem] top-12 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(216,194,183,0.24),transparent_70%)]" />
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/50 bg-card/80 px-7 py-10 shadow-[0_30px_120px_-55px_rgba(90,70,58,0.42)] backdrop-blur md:px-12 md:py-14">
        <Reveal className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-primary/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h1 className="font-display text-5xl leading-[0.92] text-primary sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-primary/70">
            {description}
          </p>
          <Link
            to={ctaHref}
            className="premium-button inline-flex items-center gap-2"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
