import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useTreatment } from "@/hooks/use-treatments";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: treatment, isLoading } = useTreatment(slug || "");

  useSectionReveal();

  if (isLoading) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!treatment) {
    return (
      <div className="px-6 pb-24 pt-36 sm:px-8 lg:px-12">
        <div className="metric-card mx-auto max-w-3xl border border-primary/10 bg-card/80 p-8 text-center shadow-[0_30px_120px_-60px_rgba(90,70,58,0.45)] transition-transform duration-500 hover:-translate-y-2">
          <h1 className="font-display text-5xl text-primary">Tratamento nao encontrado</h1>
          <p className="mt-4 text-base leading-8 text-primary/70">
            O protocolo solicitado nao esta disponivel no momento.
          </p>
          <button onClick={() => navigate("/tratamentos")} className="premium-button mt-8 inline-flex">
            Voltar para tratamentos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <section className="px-6 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/tratamentos")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para tratamentos
          </button>
        </div>
      </section>

      <PageHero
        eyebrow={treatment.category}
        title={treatment.name}
        description={treatment.excerpt}
        ctaLabel="Agendar avaliação"
        ctaHref="/contato"
        secondaryCtaLabel="Falar pelo WhatsApp"
        secondaryCtaHref={clinic.whatsapp}
        secondaryCtaExternal
        image={clinic.media.hero}
        imageAlt={`Imagem ilustrativa do tratamento ${treatment.name}`}
        imageEyebrow="Protocolo Maison Aura"
        imageTitle="Um plano elegante e bem indicado vale mais do que uma execucao padronizada."
        highlights={treatment.benefits.slice(0, 3)}
        stats={[
          { value: treatment.duration, label: "duracao do atendimento" },
          { value: treatment.recovery, label: "ritmo de recuperacao" },
          { value: "Autoral", label: "tipo de conducao" },
        ]}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Beneficios
            </p>
            <div className="mt-6 space-y-4">
              {treatment.benefits.map((item) => (
                <div key={item} className="metric-card flex gap-3 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/72">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Indicado para
            </p>
            <h2 className="mt-5 font-display text-4xl leading-none text-primary">
              {treatment.idealFor}
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/70">
              A leitura final sempre considera volume, qualidade da pele, expressao, rotina e o tipo de resultado que a paciente quer sustentar no tempo. O objetivo e evitar excesso e construir coerencia.
            </p>
            <div className="mt-8 space-y-4">
              {treatment.steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-primary/72">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            "Bom para quem quer leveza sem parecer que fez demais.",
            "Melhor indicado quando existe objetivo claro e criterio de prioridade.",
            "Fica mais sofisticado quando entra em um plano, nao como gesto isolado.",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.05} className="editorial-note">
              <Sparkles className="h-4 w-4 text-accent" />
              <p className="mt-5 text-base leading-8 text-primary/74">{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[2.2rem] border border-primary/10 bg-primary px-8 py-10 text-background shadow-[0_40px_120px_-60px_rgba(62,52,46,1)] transition-transform duration-500 hover:-translate-y-2">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-background/55">
                Agendamento
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl">
                Agende sua avaliacao para receber um plano facial realmente sob medida.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-background/75">
                Atendimento com horario marcado, orientacao clara e uma conducao que faz a paciente sentir que esta em boas maos.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/contato" className="premium-button light justify-center">
                Quero agendar
              </Link>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary dark justify-center"
              >
                Falar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
