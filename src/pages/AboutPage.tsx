import { Check, Sparkles } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function AboutPage() {
  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Sobre a clinica"
        title="Uma marca pensada para acolher com elegancia e conduzir com seguranca."
        description="A pagina sobre traduz historia, filosofia de atendimento e posicionamento de marca. O objetivo e fazer a clinica parecer real, desejada e pronta para competir no segmento premium."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
          <Reveal className="space-y-7">
            <SectionIntro
              eyebrow="Nossa historia"
              title="A Maison Aura nasceu para oferecer estetica facial com calma, criterio e refinamento."
              description="A narrativa da marca se apoia em uma visao mais madura do rejuvenescimento: menos intervencao impulsiva, mais estrategia, cuidado e resultados que envelhecem bem com a paciente."
            />
            <div className="space-y-4 text-base leading-8 text-primary/70">
              <p>
                Da primeira conversa ao pos-procedimento, cada ponto de contato foi desenhado para transmitir serenidade e confianca. O ambiente evita o visual frio de clinicas tradicionais e cria uma atmosfera mais proxima de um luxury med spa boutique.
              </p>
              <p>
                O posicionamento valoriza naturalidade, tecnologia bem indicada e uma leitura facial que respeita estrutura, expressao e estilo de vida. Isso torna a marca mais sofisticada e mais crivel para o publico de alto padrao.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.specialist}
                alt="Retrato da especialista Maison Aura"
                className="h-[560px] w-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.05),rgba(62,52,46,0.42))]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/20 bg-card/20 p-5 text-primary-foreground backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Fundadora</p>
                <h2 className="mt-3 font-display text-4xl">Dra. Helena Voss</h2>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Especialista em harmonizacao facial, protocolos autorais de rejuvenescimento e planejamento facial sofisticado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Filosofia de atendimento"
              title="Resultado refinado nasce de escuta, indicacao precisa e uma execucao sem excesso."
              description="A clinica se apresenta como especialista segura, acolhedora e tecnicamente exigente. Esse discurso tem forte poder de conversao no nicho de harmonizacao facial premium."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Naturalidade acima de tendencias passageiras",
              "Planejamento progressivo em vez de promessas imediatistas",
              "Proximidade e acompanhamento como parte do luxo percebido",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.06} className="card-surface p-6">
                <Sparkles className="h-5 w-5 text-accent" />
                <p className="mt-5 text-base leading-8 text-primary/70">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Formacao e autoridade
            </p>
            <div className="mt-6 space-y-4">
              {clinic.certifications.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.35rem] border border-primary/10 bg-background/80 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Visao da marca
            </p>
            <h2 className="mt-5 font-display text-4xl leading-none text-primary">
              Estetica premium com presenca editorial e base clinica solida.
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/70">
              O branding equilibra feminilidade adulta, calor, limpeza e profundidade. O site foi desenhado para evitar tanto o visual medico frio quanto o excesso de romantizacao comum em clinicas genericas do segmento.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-7 text-primary/70">
              <p>Paleta clara em petal blush, ivory quente, champagne nude e ameixa suave.</p>
              <p>Serif editorial nos titulos e sans precisa nos textos.</p>
              <p>Microinteracoes suaves, hover premium e narrativa orientada a agendamento.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
