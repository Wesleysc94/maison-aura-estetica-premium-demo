import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function ResultsPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Antes e depois"
        title="Galeria premium com contexto, seguranca e apresentacao sofisticada."
        description="A area de resultados foi desenhada para soar profissional e confiavel. Em vez de apelo exagerado, ela valoriza leitura facial, naturalidade e transparencia."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Casos em destaque"
              title="Comparativos organizados para reforcar credibilidade e desejo."
              description="Os blocos abaixo usam composicao simetrica, labels discretas e uma legenda de protocolo para parecerem parte de uma operacao premium real."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {clinic.beforeAfter.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="card-surface overflow-hidden p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/media/esthetic-model.png"
                      alt={`Antes do caso ${item.title}`}
                      className="h-72 w-full object-cover saturate-[0.72] sepia-[0.1] brightness-[0.9]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                      Antes
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/media/esthetic-model.png"
                      alt={`Depois do caso ${item.title}`}
                      className="h-72 w-full object-cover brightness-[1.04] contrast-[1.04]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                      Depois
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-3xl leading-none text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-primary/70">{item.focus}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-primary/40">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
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
                  Resultados ilustrativos e sempre dependentes de avaliacao individual.
                </h2>
                <p className="mt-5 text-base leading-8 text-primary/70">
                  Para manter a comunicacao etica e sofisticada, a galeria deixa claro que cada protocolo exige indicacao personalizada, anatomia favoravel e plano de manutencao coerente.
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
                <div key={testimonial.name} className="rounded-[1.35rem] border border-primary/10 bg-background/80 p-4">
                  <p className="text-sm leading-7 text-primary/70">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-primary/40">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="mx-auto flex max-w-6xl justify-center">
          <Link to="/contato" className="premium-button">
            Agendar avaliacao estrategica
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
