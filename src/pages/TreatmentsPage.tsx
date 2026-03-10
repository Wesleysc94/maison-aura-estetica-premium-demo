import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { clinic, treatments as staticTreatments } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useTreatments } from "@/hooks/use-treatments";

export default function TreatmentsPage() {
  const { data: treatments = staticTreatments } = useTreatments();
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Tratamentos"
        title="Escolha o protocolo ideal com uma navegacao clara, elegante e facil de converter."
        description="Esta pagina foi estruturada para ajudar a paciente a entender indicacoes, beneficios e nivel de recuperacao sem se perder em uma lista fria de procedimentos."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Grid premium"
              title="Tratamentos com leitura rapida e profundidade suficiente para gerar interesse."
              description="Os cards abaixo foram desenhados para parecer caros, limpos e escaneaveis. O CTA de detalhe abre uma pagina individual mais persuasiva para cada procedimento."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {treatments.map((treatment, index) => (
              <Reveal
                key={treatment.slug}
                delay={index * 0.04}
                className="card-surface p-6"
              >
                <span className="rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                  {treatment.category}
                </span>
                <h2 className="mt-5 font-display text-3xl leading-none text-primary">
                  {treatment.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-primary/70">{treatment.excerpt}</p>
                <div className="mt-5 space-y-2 text-sm text-primary/60">
                  <p>Ideal para: {treatment.idealFor}</p>
                  <p>Duracao: {treatment.duration}</p>
                  <p>Recuperacao: {treatment.recovery}</p>
                </div>
                <Link
                  to={`/tratamentos/${treatment.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Ver protocolo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Como funciona sua avaliacao
            </p>
            <div className="mt-6 space-y-5">
              {clinic.evaluationSteps.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-primary/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.consultation}
                alt="Consulta personalizada de estetica facial"
                className="h-[420px] w-full object-cover object-[center_28%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.08),rgba(62,52,46,0.4))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Indicacao inteligente</p>
                <p className="mt-3 font-display text-4xl leading-none">Menos exagero. Mais estrategia facial.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
