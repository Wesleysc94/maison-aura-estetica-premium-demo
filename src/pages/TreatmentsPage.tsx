import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { clinic, treatments as staticTreatments } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useTreatments } from "@/hooks/use-treatments";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function TreatmentsPage() {
  const { data: treatments = staticTreatments } = useTreatments();
  const categories = Array.from(new Set(treatments.map((item) => item.category)));

  useSectionReveal();

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Tratamentos autorais"
        title="Protocolos desenhados para preservar expressao, pele e presenca."
        description="Em vez de uma vitrine de nomes tecnicos, esta pagina organiza o que cada protocolo entrega, para quem faz sentido e como ele se encaixa em um plano elegante."
        ctaLabel="Agendar avaliacao"
        ctaHref="/contato"
        secondaryCtaLabel="Falar com a equipe"
        secondaryCtaHref={clinic.whatsapp}
        secondaryCtaExternal
        image={clinic.media.hero}
        imageAlt="Consulta autoral de estetica facial"
        imageEyebrow="Consulta autoral"
        imageTitle="Cada indicacao parte da leitura facial e da vida real da paciente."
        highlights={[
          "Planos em camadas, sem excesso",
          "Recuperacao explicada com clareza",
          "Protocolo alinhado ao seu ritmo",
        ]}
        stats={[
          { value: `${treatments.length}`, label: "protocolos selecionados" },
          { value: "1:1", label: "curadoria de indicacao" },
          { value: "11 anos", label: "de repertorio em estetica facial" },
        ]}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="space-y-7">
            <SectionIntro
              eyebrow="Como a leitura acontece"
              title="Nao vendemos procedimentos isolados. Organizamos uma estrategia facial."
              description="A consulta considera queixa principal, qualidade da pele, rotina, timing social e o tipo de resultado que a paciente quer preservar. Esse contexto define se vale mais textura, sustento, expressao ou um plano combinado."
            />
            <div className="story-grid md:grid-cols-2">
              {[
                "Objetivo estetico e momento de vida entram na decisao.",
                "A indicacao precisa caber na agenda e no pos-procedimento.",
                "O protocolo certo e o que envelhece bem no seu rosto.",
                "Combinar tratamentos so faz sentido quando a leitura pede.",
              ].map((item) => (
                <div key={item} className="editorial-note text-sm leading-7 text-primary/74">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Categorias da curadoria
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category} className="metric-card">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <p className="mt-4 text-lg font-semibold text-primary">{category}</p>
                  <p className="mt-2 text-sm leading-7 text-primary/68">
                    Selecionado para entrar em planos mais elegantes, previsiveis e coerentes com a expressao.
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Protocolos da Maison Aura"
              title="Uma vitrine organizada para comparar sem perder desejo."
              description="As cartas abaixo mantem o clima premium do site, mas ja ajudam a paciente a entender o papel de cada tratamento na construcao do resultado."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {treatments.map((treatment, index) => (
              <Reveal
                key={treatment.slug}
                delay={index * 0.04}
                className="card-surface interactive-card flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                    {treatment.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-primary/45">
                    {treatment.duration}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-3xl leading-[0.96] text-primary">
                  {treatment.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-primary/70">{treatment.excerpt}</p>

                <div className="mt-5 rounded-[1.4rem] border border-border/70 bg-background/74 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/45">
                    Ideal para
                  </p>
                  <p className="mt-3 text-sm leading-7 text-primary/72">{treatment.idealFor}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-background px-3 py-2 text-xs text-primary/68">{treatment.recovery}</span>
                  {treatment.benefits.slice(0, 2).map((benefit) => (
                    <span key={benefit} className="rounded-full bg-primary/5 px-3 py-2 text-xs text-primary/62">
                      {benefit}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/tratamentos/${treatment.slug}`}
                  className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Ver protocolo completo
                  <ArrowUpRight className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Como decidimos o plano
            </p>
            <div className="mt-6 space-y-5">
              {clinic.evaluationSteps.map((item, index) => (
                <div key={item.title} className="metric-card flex gap-4 p-4">
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
                className="h-[460px] w-full object-cover object-[center_28%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.08),rgba(62,52,46,0.46))]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/20 bg-[rgba(45,28,34,0.44)] p-6 text-white backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Indicacao inteligente</p>
                <p className="mt-3 font-display text-4xl leading-none">Menos exagero. Mais criterio facial.</p>
                <div className="mt-5 space-y-3">
                  {[
                    "Prioridade para o que entrega mais refinamento primeiro.",
                    "Combinacao de protocolos so quando o rosto pede.",
                    "Explicacao clara sobre tempo, investimento e recuperacao.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                      <Check className="mt-0.5 h-4 w-4 text-white/90" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
