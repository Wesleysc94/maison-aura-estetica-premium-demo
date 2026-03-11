import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { clinic } from "@/data/siteContent";
import { BeforeAfterCaseCard } from "@/components/site/BeforeAfterCaseCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsPage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Antes e depois"
        title="Casos acompanhados com leitura responsavel, clareza e elegancia."
        description="A area de resultados valoriza contexto clinico, naturalidade e transparencia, sem recorrer a montagens artificiais ou promessas exageradas."
        image={clinic.media.results.skin}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Casos em destaque"
              title="Resultados organizados para reforcar credibilidade sem comprometer a etica."
              description="Cada caso resume foco do tratamento, direcao do resultado e tipo de estrategia adotada de forma mais clara e responsavel."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clinic.beforeAfter.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="h-full">
                <BeforeAfterCaseCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr,1fr]">
          <Reveal className="card-surface p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
                  Transparencia
                </p>
                <h2 className="mt-3 font-display text-4xl leading-none text-primary">
                  Cada resultado depende de avaliacao individual, anatomia e plano bem indicado.
                </h2>
                <p className="mt-5 text-base leading-8 text-primary/70">
                  Para manter a comunicacao etica e sofisticada, a galeria deixa claro que cada protocolo exige indicacao personalizada, resposta biologica favoravel e manutencao coerente.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Prova social
            </p>
            <div className="mt-6 space-y-5">
              {clinic.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="metric-card p-4">
                  <p className="text-sm leading-7 text-primary/70">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-primary/40">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="mx-auto flex max-w-6xl justify-center">
          <Link to="/contato" className="premium-button">
            Agendar avaliacao estrategica
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
