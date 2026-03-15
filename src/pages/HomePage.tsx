import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Instagram,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { clinic, blogPosts, treatments } from "@/data/siteContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BeforeAfterCaseCard } from "@/components/site/BeforeAfterCaseCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useTreatments } from "@/hooks/use-treatments";
import { useBlogPosts } from "@/hooks/use-blog";
import { useTestimonials } from "@/hooks/use-testimonials";
import { cn } from "@/lib/utils";

/* ─── Static data ─── */
const consultationNotes = [
  "Anatomia, textura e qualidade da pele entram na leitura do caso.",
  "As etapas sao priorizadas conforme objetivo estetico, agenda e tempo de recuperacao.",
  "O resultado e construido com evolucao gradual, sem excesso de intervencao.",
];

const firstVisitNotes = [
  "Leitura facial detalhada e fotografia clinica quando necessario.",
  "Plano progressivo, respeitando rotina, agenda e tempo biologico da pele.",
  "Orientacoes claras sobre preparo, recuperacao e manutencao.",
];

const prestigeChips = [
  "Atendimento privado",
  "Experiencia boutique",
  "Planejamento autoral",
];

const signaturePromises = [
  {
    title: "Diagnostico sem pressa",
    text: "A experiencia comeca com escuta e priorizacao, nao com pressao comercial.",
  },
  {
    title: "Plano com ritmo",
    text: "O tratamento respeita agenda, vida social e tempo biologico da pele.",
  },
  {
    title: "Resultado que envelhece bem",
    text: "A proposta prioriza naturalidade hoje e boa leitura estetica ao longo do tempo.",
  },
];

export default function HomePage() {
  const { data: treatmentsData = treatments } = useTreatments();
  const { data: blogData = blogPosts } = useBlogPosts();
  const { data: testimonialsData = clinic.testimonials } = useTestimonials();

  const featuredTreatments = treatmentsData.slice(0, 6);
  const latestPosts = blogData.slice(0, 3);

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          A. HERO — "A Cena de Abertura" (fullscreen cinematic)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={clinic.media.hero}
            alt="Estética facial premium Maison Aura"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="hero-gradient-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,15,18,0.45)_0%,rgba(20,15,18,0)_80%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-4 pt-32 pb-16 text-center sm:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <span className="luxury-chip border-white/20 bg-white/[0.08] text-white/90">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {clinic.badge}
                </span>
              </div>

              <div className="space-y-2 flex flex-col items-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/50">
                  Clinica de estetica facial no Jardins
                </p>
                <h1 className="font-display text-[3.2rem] leading-[0.92] text-white sm:text-[4.5rem] lg:text-[6rem] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <span className="font-sans text-[1.4rem] font-bold uppercase tracking-[0.18em] text-accent sm:text-[1.8rem]">
                    Beleza e{" "}
                  </span>
                  <br />
                  <span className="font-display italic">Naturalidade.</span>
                </h1>
              </div>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                Na Maison Aura, cada indicacao considera anatomia, qualidade da pele e rotina
                para propor rejuvenescimento natural, com acompanhamento calmo e resultado elegante.
              </p>

              <div className="mt-10 flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row sm:items-center">
                <Link to="/contato" className="premium-button justify-center flex-1">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Agendar avaliacao
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button-secondary dark justify-center flex-1"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  <span>Falar com a equipe</span>
                </a>
              </div>

              <div className="mt-10 flex w-full max-w-3xl items-center justify-between rounded-[2rem] border border-white/14 bg-[rgba(31,18,24,0.74)] p-1 px-4 shadow-[0_30px_70px_-48px_rgba(8,4,6,0.7)] sm:rounded-full sm:px-8">
                {clinic.stats.map((item, index) => (
                  <div
                    key={item.label}
                    className={cn(
                      "group flex flex-1 flex-col items-center justify-center p-3 text-center",
                      index !== clinic.stats.length - 1 && "border-r border-white/10"
                    )}
                  >
                    <p className="font-mono-data text-xl font-bold text-white drop-shadow-md sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 max-w-[140px] text-[8px] uppercase leading-[1.45] tracking-[0.15em] text-white/80 sm:text-[9px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-chip-strip mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-3">
            {prestigeChips.map((item, index) => (
              <span
                key={item}
                className="hero-chip"
                style={{ animationDelay: `${0.18 + index * 0.1}s` }}
              >
                <span className="hero-chip__dot" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
        
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-4 rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_24px_60px_-46px_rgba(113,72,90,0.16)] lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
                  Atendimento desenhado com calma
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.94] text-primary sm:text-5xl">
                  Uma experiencia clara desde o primeiro clique ate o plano facial.
                </h2>
              </div>
              <p className="text-base leading-8 text-primary/72">
                O contato com a clinica comeca com orientacao objetiva, atmosfera acolhedora e um caminho visualmente sereno para transmitir seguranca antes mesmo da consulta.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          B. CONSULTA ESTRATEGICA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 xl:grid-cols-[0.95fr,1.05fr] xl:items-start">
            <Reveal className="space-y-6">
              <SectionIntro
                eyebrow="Consulta estrategica"
                title="Planejamento facial claro, sereno e focado em naturalidade."
                description="O primeiro encontro organiza prioridades, possibilidades e expectativa realista para que voce entenda o caminho antes de iniciar qualquer protocolo."
              />
              <div className="space-y-3">
                {consultationNotes.map((item) => (
                  <div key={item} className="metric-card p-4">
                    <p className="text-sm leading-6 text-primary/78">{item}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {firstVisitNotes.map((item) => (
                  <div key={item} className="metric-card text-sm font-medium leading-6 text-primary/82">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="space-y-4">
              <div className="card-surface overflow-hidden p-3 sm:p-4">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={clinic.media.hero}
                    alt="Atendimento de estetica facial em ambiente reservado"
                    className="h-[440px] w-full object-cover object-[center_20%] sm:h-[560px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {clinic.evaluationSteps.map((step, index) => (
                  <Reveal key={step.title} delay={0.05 * index} className="card-surface interactive-card p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="mt-5 text-xl font-semibold tracking-tight text-primary">{step.title}</p>
                    <p className="mt-3 text-sm leading-6 text-primary/72">{step.text}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          C. TRATAMENTOS EM DESTAQUE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Tratamentos em destaque"
              title="Protocolos que tratam expressao, contorno e qualidade da pele com elegancia."
              description="Selecionamos procedimentos para suavizar sinais de cansaco, flacidez, perda de definicao e textura de forma individualizada."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredTreatments.map((treatment, index) => (
              <Reveal key={treatment.slug} delay={index * 0.05} className="card-surface interactive-card p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                    {treatment.category}
                  </span>
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none text-primary">{treatment.name}</h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{treatment.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-background px-3 py-2 font-mono-data text-xs text-primary/70">{treatment.duration}</span>
                  <span className="rounded-full bg-background px-3 py-2 font-mono-data text-xs text-primary/70">{treatment.recovery}</span>
                </div>
                <Link to={`/tratamentos/${treatment.slug}`} className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          D. ESPECIALISTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.94fr,1.06fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.specialist}
                alt="Especialista em estetica facial"
                className="h-[520px] w-full object-cover object-[center_18%]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.05),rgba(62,52,46,0.32))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/20 bg-[rgba(47,30,37,0.62)] p-5 text-white backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">Direcao clinica</p>
                <p className="mt-3 font-display text-3xl leading-none">Dra. Helena Voss</p>
                <p className="mt-2 text-sm text-white/82">
                  Estetica facial com foco em rejuvenescimento natural e planejamento autoral.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-7">
            <SectionIntro
              eyebrow="Sobre a especialista"
              title="Formacao tecnica, olhar artistico e uma conducao serena em cada indicacao."
              description="A atuacao da clinica combina leitura facial individualizada, protocolos seguros e acompanhamento proximo para construir resultados elegantes."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.certifications.map((item) => (
                <div key={item} className="metric-card">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-sm leading-7 text-primary/72">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/sobre" className="premium-button-secondary inline-flex">
              <span>Conhecer a filosofia da clinica</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          E. PHILOSOPHY / MANIFESTO — Dark, fullwidth, text reveal
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="gsap-section relative overflow-hidden py-20 sm:py-28 lg:py-36"
        style={{
          background: "linear-gradient(180deg, hsl(333 24% 12%), hsl(330 22% 8%))",
        }}
      >
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img
            src={clinic.media.editorial}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-white/40">
            Nossa filosofia
          </p>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-9 text-white/45 sm:text-xl">
              A maioria das clinicas de estetica foca em procedimentos isolados, volume exagerado e promessas imediatistas.
            </p>
            <h2 className="font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Nos focamos em <span className="italic text-accent">naturalidade</span>, planejamento e resultado <span className="italic text-accent">sofisticado</span>.
            </h2>
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/sobre" className="premium-button-secondary dark">
              <span>Descobrir a Maison Aura</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          F. DIFERENCIAIS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Por que escolher nossa clinica"
              title="Uma experiencia organizada para transmitir confianca, calma e criterio."
              description="Do primeiro contato ao pos-procedimento, cada etapa foi desenhada para que voce se sinta orientada e segura."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clinic.differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="card-surface interactive-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-primary/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          G. ASSINATURA DA EXPERIENCIA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Assinatura da experiencia
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[0.94] text-primary sm:text-5xl">
              O luxo percebido vem da forma como a paciente se sente conduzida.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary/70">
              O upgrade da home tambem reforca isso: o site nao vende so procedimento. Ele vende criterio, atmosfera e um atendimento que parece adulto, desejavel e bem resolvido.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {signaturePromises.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="editorial-note h-full">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/45">
                  {item.title}
                </p>
                <p className="mt-5 text-base leading-8 text-primary/74">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          H. RESULTADOS ACOMPANHADOS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Resultados acompanhados"
              title="Casos apresentados com coerencia visual, contexto clinico e expectativa realista."
              description="A galeria destaca observacoes de tratamento e direcao do resultado sem recorrer a comparativos artificiais."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clinic.beforeAfter.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <BeforeAfterCaseCard item={item} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex justify-center">
            <Link to="/resultados" className="premium-button-secondary">
              <span>Ver galeria completa</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          I. EXPERIENCIA E AMBIENTE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="Experiencia e ambiente"
              title="Uma atmosfera calma, acolhedora e pensada para o seu conforto."
              description="Ambiente reservado, luz suave e atendimento sem pressa tornam a experiencia mais tranquila."
            />
            <div className="space-y-4">
              {clinic.highlights.map((item) => (
                <div key={item} className="metric-card flex gap-3">
                  <ChevronRight className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/72">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.environment}
                alt="Ambiente da clinica de estetica facial"
                className="h-[520px] w-full object-cover object-[center_46%]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.08),rgba(62,52,46,0.45))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/20 bg-[rgba(47,30,37,0.58)] p-5 text-white backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.3em] text-white/72">Ambiente da clinica</p>
                <p className="mt-3 font-display text-4xl leading-none">
                  Conforto, discricao e cuidado em cada detalhe.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          J. DEPOIMENTOS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Depoimentos"
              title="Relatos que reforcam seguranca, naturalidade e experiencia."
              description="A prova social foi mantida com tom elegante, acolhedor e centrado na confianca da paciente."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.06} className="card-surface interactive-card p-6">
                <div className="flex items-center gap-2 text-accent">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-primary/75">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-primary/60">{testimonial.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          K. FAQ
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Perguntas frequentes"
              title="Respostas objetivas para quem quer decidir com mais tranquilidade."
              description="As respostas abaixo ajudam a esclarecer duvidas frequentes antes da avaliacao e reduzem insegurancas."
            />
          </Reveal>
          <Reveal delay={0.08} className="card-surface mt-10 p-6 sm:p-8">
            <Accordion type="single" collapsible className="space-y-2">
              {clinic.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="metric-card px-5 transition-transform duration-500 hover:-translate-y-1"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-primary/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          L. CONTEUDO / BLOG
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Conteudo clinico"
              title="Conteudo para orientar pacientes e fortalecer autoridade clinica."
              description="Os temas abaixo ajudam a esclarecer duvidas, preparar a paciente para a consulta e aprofundar a confianca na indicacao."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06} className="card-surface interactive-card p-6">
                <p className="font-mono-data text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{post.excerpt}</p>
                <Link to={`/conteudo/${post.slug}`} className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
                  Explorar conteudo
                  <ArrowUpRight className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          M. CTA FINAL — "A Cena de Encerramento"
          ═══════════════════════════════════════════════════════════════ */}
      <section className="gsap-section section-shell-tight">
        <Reveal className="mx-auto max-w-6xl rounded-[2.4rem] border border-[#7d5a6a]/35 bg-[linear-gradient(135deg,#563445,#694356)] px-8 py-12 text-white shadow-[0_40px_120px_-62px_rgba(41,21,30,0.75)] transition-transform duration-500 hover:-translate-y-2 sm:px-10 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="font-mono-data text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Proximo passo
              </p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Agende uma avaliacao e descubra um plano facial desenhado para voce.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Atendimento com horario marcado, experiencia boutique e orientacao clara desde o primeiro contato.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:max-w-[18rem]">
              <Link to="/contato" className="premium-button light w-full justify-center">
                <span className="relative z-10 flex items-center gap-2">Solicitar avaliacao</span>
              </Link>
              <a href={clinic.instagram} target="_blank" rel="noreferrer" className="premium-button-secondary dark w-full justify-center">
                <Instagram className="h-4 w-4" />
                <span>Ver Instagram da clinica</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
