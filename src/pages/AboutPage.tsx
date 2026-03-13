import { Check, Sparkles } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const brandPillars = [
  "Naturalidade acima de tendencias passageiras",
  "Planejamento progressivo no lugar de promessas imediatas",
  "Atendimento calmo como parte da percepcao premium",
];

const atmosphereNotes = [
  "Luz suave, ritmo tranquilo e menos sensacao de consultorio corrido.",
  "Comunicacao clara para reduzir ansiedade antes do procedimento.",
  "Estetica pensada para transmitir acolhimento sem perder credibilidade tecnica.",
];

export default function AboutPage() {
  useSectionReveal();

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Sobre a Maison Aura"
        title="Uma marca criada para acolher com elegancia e conduzir com seguranca."
        description="Mais do que um consultorio bonito, a Maison Aura foi pensada como uma experiencia completa: leitura cuidadosa, repertorio tecnico e um ambiente que faz a paciente se sentir bem orientada do primeiro contato ao pos."
        image={clinic.media.specialist}
        imageAlt="Retrato da especialista Maison Aura"
        imageEyebrow="Direcao clinica"
        imageTitle="Formacao solida, olhar autoral e conducao serena em cada caso."
        highlights={[
          "Feminilidade adulta, sem infantilizacao",
          "Autoridade tecnica com linguagem acolhedora",
          "Luxo percebido em cada ponto de contato",
        ]}
        stats={[
          { value: "11 anos", label: "de repertorio em estetica facial" },
          { value: "Jardins", label: "endereco simbolico da marca" },
          { value: "1:1", label: "atendimento com leitura personalizada" },
        ]}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
          <Reveal className="space-y-7">
            <SectionIntro
              eyebrow="Nossa historia"
              title="A Maison Aura nasceu para oferecer estetica facial com calma, criterio e presenca."
              description="A proposta da clinica e combinar leitura facial individualizada, protocolos seguros e uma experiencia boutique que nao parece artificio de marketing, e sim extensao do cuidado."
            />
            <div className="space-y-4 text-base leading-8 text-primary/72">
              <p>
                Da primeira conversa ao retorno, cada etapa foi desenhada para diminuir ruido e aumentar confianca. O objetivo nao e impressionar pela quantidade de procedimentos, mas pela forma como a paciente entende o proprio plano.
              </p>
              <p>
                O resultado desejado e sempre sofisticado e legivel: menos cansaco, mais definicao, mais pele bonita e mais coerencia entre imagem e expressao.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              A assinatura da marca
            </p>
            <div className="mt-6 space-y-4">
              {brandPillars.map((item) => (
                <div key={item} className="metric-card flex gap-3 p-4">
                  <Sparkles className="mt-1 h-4 w-4 text-accent" />
                  <p className="text-sm leading-7 text-primary/72">{item}</p>
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
              eyebrow="Filosofia de atendimento"
              title="Luxo aqui nao e excesso. E previsibilidade, leveza e orientacao clara."
              description="Esse e o ponto que mais ajuda um futuro dono de clinica a visualizar valor: o site comunica um posicionamento que parece caro sem parecer distante, tecnico sem parecer frio, e feminino sem cair no lugar-comum."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {atmosphereNotes.map((item, index) => (
              <Reveal key={item} delay={index * 0.05} className="card-surface interactive-card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/45">
                  {`Ponto ${index + 1}`}
                </p>
                <p className="mt-5 text-base leading-8 text-primary/72">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Formacao e autoridade
            </p>
            <div className="mt-6 space-y-4">
              {clinic.certifications.map((item) => (
                <div key={item} className="metric-card flex gap-3 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-primary/72">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.environment}
                alt="Ambiente da Maison Aura"
                className="h-[520px] w-full object-cover object-[center_40%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.06),rgba(62,52,46,0.5))]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/20 bg-[rgba(42,25,31,0.46)] p-6 text-white backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">Ambiente da clinica</p>
                <p className="mt-3 font-display text-4xl leading-none">
                  Credibilidade clinica com atmosfera acolhedora e adulta.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  E essa traducao visual faz o site funcionar muito bem como peça comercial para vender o projeto a um possivel dono de clinica.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
