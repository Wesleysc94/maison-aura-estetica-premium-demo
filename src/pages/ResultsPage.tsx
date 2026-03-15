import { Link } from "react-router-dom";
import { AlertCircle, Check } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { BeforeAfterCaseCard } from "@/components/site/BeforeAfterCaseCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const credibilityPillars = [
  "Sem promessas irreais e sem montagem apelativa.",
  "Contexto clinico e direcao do resultado sempre acompanham o caso.",
  "A leitura visual respeita etica, naturalidade e expectativa realista.",
];

export default function ResultsPage() {
  useSectionReveal();

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Resultados acompanhados"
        title="Casos apresentados com contexto, responsabilidade e desejo visual."
        description="A secao de resultados foi tratada como uma extensao de credibilidade da marca. O objetivo nao e chocar com comparativos, e sim mostrar refinamento, coerencia de indicacao e uma assinatura estetica consistente."
        image={clinic.media.results.skin}
        imageAlt="Caso acompanhado de qualidade de pele"
        imageEyebrow="Galeria Maison Aura"
        imageTitle="Antes e depois com leitura mais editorial, etica e premium."
        highlights={[
          "Comunicacao etica e sofisticada",
          "Casos com leitura objetiva do resultado",
          "Prova social alinhada ao posicionamento da marca",
        ]}
        stats={[
          { value: `${clinic.beforeAfter.length}`, label: "casos organizados" },
          { value: "5 estrelas", label: "tom de prova social dominante" },
          { value: "Natural", label: "assinatura do resultado" },
        ]}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Como apresentamos resultados"
              title="A galeria vende confianca antes de vender procedimento."
              description="Esse e um dos pontos que mais diferenciam o projeto: o resultado e apresentado como criterio clinico e nao como exibicao vazia."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {credibilityPillars.map((item, index) => (
              <Reveal key={item} delay={index * 0.05} className="editorial-note">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/45">
                  Criterio {index + 1}
                </p>
                <p className="mt-5 text-base leading-8 text-primary/74">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Casos em destaque"
              title="Resultados organizados para reforcar credibilidade sem comprometer a etica."
              description="Cada caso resume foco de tratamento, direcao do resultado e a leitura que fez sentido para aquela paciente."
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
                  Transparencia
                </p>
                <h2 className="mt-3 font-display text-4xl leading-none text-primary">
                  Cada resultado depende de avaliacao individual, anatomia e plano bem indicado.
                </h2>
                <div className="mt-6 space-y-3">
                  {[
                    "A galeria reforca criterio, nao promessa.",
                    "A resposta biologica e sempre individual.",
                    "A manutencao tambem faz parte do bom resultado.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-7 text-primary/72">
                      <Check className="mt-1 h-4 w-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Prova social
            </p>
            <div className="mt-6 space-y-5">
              {clinic.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="metric-card p-4">
                  <p className="text-sm leading-7 text-primary/72">"{testimonial.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-primary/40">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[2.3rem] border border-[#7d5a6a]/25 bg-[linear-gradient(135deg,#4c2f3d,#6a4355)] px-8 py-10 text-white shadow-[0_38px_120px_-60px_rgba(41,21,30,0.78)]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Proximo passo
              </p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[0.95] sm:text-5xl">
                Agende uma avaliacao e descubra o melhor caminho para o seu caso.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
                A prova social fica mais poderosa quando termina em um convite claro para conversa e planejamento.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:max-w-[18rem]">
              <Link to="/contato" className="premium-button light justify-center">
                Agendar avaliação estratégica
              </Link>
              <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="premium-button-secondary dark justify-center">
                Falar agora com a equipe
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
