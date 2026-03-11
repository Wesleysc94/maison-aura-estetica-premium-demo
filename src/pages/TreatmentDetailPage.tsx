import { useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { clinic, treatments as staticTreatments } from "@/data/siteContent";
import { Reveal } from "@/components/site/Reveal";
import { useTreatment } from "@/hooks/use-treatments";

gsap.registerPlugin(ScrollTrigger);

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: treatment, isLoading } = useTreatment(slug || "");

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
          <button
            onClick={() => navigate("/tratamentos")}
            className="premium-button mt-8 inline-flex"
          >
            Voltar para tratamentos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <section className="gsap-section px-6 pb-14 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/tratamentos")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para tratamentos
          </button>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
            <Reveal className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-card/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {treatment.category}
              </span>
              <h1 className="font-display text-5xl leading-[0.92] text-primary sm:text-6xl">
                {treatment.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary/70">
                {treatment.excerpt}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-primary/60">
                <span className="rounded-full bg-card/70 px-4 py-2 shadow-[0_18px_50px_-36px_rgba(90,70,58,0.5)]">
                  {treatment.duration}
                </span>
                <span className="rounded-full bg-card/70 px-4 py-2 shadow-[0_18px_50px_-36px_rgba(90,70,58,0.5)]">
                  {treatment.recovery}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={clinic.media.hero}
                  alt={`Imagem ilustrativa do tratamento ${treatment.name}`}
                  className="h-[500px] w-full object-cover object-[center_24%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.04),rgba(62,52,46,0.42))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/20 bg-card/20 p-5 text-primary-foreground backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/75">Protocolo Maison Aura</p>
                  <p className="mt-3 font-display text-4xl leading-none">{treatment.name}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Beneficios
            </p>
            <div className="mt-6 space-y-4">
              {treatment.benefits.map((item) => (
                <div key={item} className="metric-card flex gap-3 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Indicado para
            </p>
            <h2 className="mt-5 font-display text-4xl leading-none text-primary">
              {treatment.idealFor}
            </h2>
            <p className="mt-5 text-base leading-8 text-primary/70">
              O plano de tratamento sempre considera pele, volume, expressao, rotina e objetivo final. A proposta e evitar excesso e construir um resultado coerente com o seu rosto.
            </p>
            <div className="mt-8 space-y-4">
              {treatment.steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-primary/70">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
                Agende sua avaliacao para receber um plano facial sob medida.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-background/75">
                Atendimento com horario marcado, orientacao clara e acompanhamento proximo.
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
