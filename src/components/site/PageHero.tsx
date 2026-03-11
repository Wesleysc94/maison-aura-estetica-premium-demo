import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Agendar avaliacao",
  ctaHref = "/contato",
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-8 lg:px-12 lg:pb-12">
      <div className="ambient-orb left-[-6rem] top-20 h-56 w-56 bg-[radial-gradient(circle_at_center,rgba(198,167,123,0.24),transparent_68%)]" />
      <div className="ambient-orb right-[-4rem] top-12 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(216,194,183,0.24),transparent_70%)]" />
      
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border/50 bg-card/82 shadow-[0_30px_120px_-55px_rgba(90,70,58,0.32)] backdrop-blur transition-transform duration-500 hover:-translate-y-2">
        <div className={cn("grid lg:items-center", image ? "lg:grid-cols-[1.1fr,0.9fr]" : "px-7 py-10 md:px-12 md:py-12")}>
          <div className={cn(image ? "p-8 sm:p-12 lg:p-14" : "mx-auto flex max-w-4xl flex-col items-center text-center")}>
            <Reveal className={cn("space-y-6", !image && "flex flex-col items-center")}>
              <span className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-primary/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
              <h1 className={cn("font-display text-4xl leading-[0.95] text-primary sm:text-5xl", image ? "lg:text-[4.2rem]" : "mx-auto max-w-[16ch] lg:text-[4.6rem]")}>
                {title}
              </h1>
              <p className={cn("text-base leading-8 text-primary/72 sm:text-lg", !image ? "mx-auto max-w-2xl" : "max-w-xl")}>
                {description}
              </p>
              <Link
                to={ctaHref}
                className={cn("premium-button mt-4 inline-flex items-center gap-2", !image && "mx-auto")}
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          
          {image && (
            <Reveal delay={0.1} className="h-full w-full">
              <img 
                src={image} 
                alt={title} 
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-full lg:min-h-[500px]" 
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
