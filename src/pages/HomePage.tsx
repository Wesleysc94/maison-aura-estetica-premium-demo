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

const heroHighlights = [
  "Consulta com hora marcada e sem pressa",
  "Planejamento facial guiado por anatomia e rotina",
  "Acompanhamento proximo no pos-procedimento",
];

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

export default function HomePage() {
  const { data: treatmentsData = treatments } = useTreatments();
  const { data: blogData = blogPosts } = useBlogPosts();
  const { data: testimonialsData = clinic.testimonials } = useTestimonials();

  const featuredTreatments = treatmentsData.slice(0, 6);
  const latestPosts = blogData.slice(0, 3);

  return (
    <div className="pb-10">
      <section className="px-6 pb-12 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-6 flex flex-wrap items-center gap-3">
            <span className="luxury-chip">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {clinic.badge}
            </span>
            <span className="luxury-chip">{clinic.location}</span>
            <span className="luxury-chip">Atendimento com hora marcada</span>
          </Reveal>

          <div className="grid gap-8 xl:grid-cols-[0.95fr,1.05fr] xl:items-start">
            <Reveal className="space-y-8">
              <div className="max-w-[38rem] space-y-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary/55">
                  Clinica de estetica facial no Jardins
                </p>
                <h1 className="font-display text-[3.55rem] leading-[0.92] text-primary sm:max-w-[10.5ch] sm:text-[4.5rem] xl:text-[5.1rem]">
                  Estetica facial com criterio, leveza e um plano realmente personalizado.
                </h1>
                <p className="max-w-xl text-base leading-8 text-primary/78 sm:text-lg">
                  Na Maison Aura, cada indicacao considera anatomia, qualidade da pele e rotina
                  para propor rejuvenescimento natural, com acompanhamento calmo e resultado
                  elegante.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contato" className="premium-button justify-center sm:min-w-[13.5rem]">
                  Agendar avaliacao
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button-secondary justify-center sm:min-w-[13.5rem]"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  Falar com a equipe
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div key={item} className="metric-card text-sm font-medium leading-6 text-primary/82">
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {clinic.stats.map((item, index) => (
                  <Reveal key={item.label} delay={0.04 * index} className="metric-card">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/45">
                      Maison Aura
                    </p>
                    <p className="mt-4 text-3xl font-semibold text-primary">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-primary/72">{item.label}</p>
                  </Reveal>
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
                  />
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr,0.98fr]">
                <div className="glass-panel p-6 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                    Consulta estrategica
                  </p>
                  <h2 className="mt-4 max-w-[12ch] font-display text-[2.35rem] leading-[0.96] text-primary sm:text-[2.7rem]">
                    Planejamento facial claro, sereno e focado em naturalidade.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-primary/76">
                    O primeiro encontro organiza prioridades, possibilidades e expectativa realista
                    para que voce entenda o caminho antes de iniciar qualquer protocolo.
                  </p>
                </div>

                <div className="glass-panel p-6 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                    O que orienta a indicacao
                  </p>
                  <div className="mt-4 space-y-3">
                    {consultationNotes.map((item) => (
                      <div key={item} className="rounded-[1.2rem] border border-border/70 bg-background/82 px-4 py-4">
                        <p className="text-sm leading-6 text-primary/78">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-[0.9fr,1.1fr]">
            <Reveal className="glass-panel p-6 sm:p-7">
              <div className="max-w-2xl space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/55">
                  Primeira avaliacao
                </p>
                <h2 className="font-display text-4xl leading-[0.98] text-primary sm:text-[2.9rem]">
                  Sua consulta comeca com escuta, analise e prioridades bem definidas.
                </h2>
                <p className="text-sm leading-7 text-primary/78">
                  Organizamos a avaliacao para que voce saiba o que faz sentido para o seu caso,
                  quais etapas merecem prioridade e como cada procedimento se encaixa em um
                  resultado sofisticado e sustentavel.
                </p>
              </div>
              <div className="soft-divider my-6" />
              <div className="space-y-3">
                {firstVisitNotes.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                    <p className="text-sm leading-6 text-primary/74">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

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
          </div>
        </div>
      </section>

      <section className="section-shell">
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
                  <span className="rounded-full bg-background px-3 py-2 text-xs text-primary/70">{treatment.duration}</span>
                  <span className="rounded-full bg-background px-3 py-2 text-xs text-primary/70">{treatment.recovery}</span>
                </div>
                <Link to={`/tratamentos/${treatment.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:-translate-y-px">
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-tight">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.94fr,1.06fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.specialist}
                alt="Especialista em estetica facial"
                className="h-[520px] w-full object-cover object-[center_18%]"
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
              Conhecer a filosofia da clinica
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-shell-tight">
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

      <section className="section-shell-tight">
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
              Ver galeria completa
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-shell-tight">
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

      <section className="section-shell-tight">
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

      <section className="section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="FAQ"
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
                  className="rounded-[1.3rem] border border-primary/10 px-5"
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

      <section className="section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Conteudo e SEO"
              title="Conteudo para orientar pacientes e fortalecer autoridade clinica."
              description="Os temas abaixo ajudam a esclarecer duvidas, preparar a paciente para a consulta e aprofundar a confianca na indicacao."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06} className="card-surface interactive-card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category} . {post.readTime}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{post.excerpt}</p>
                <Link to="/conteudo" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:-translate-y-px">
                  Explorar conteudo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-tight">
        <Reveal className="mx-auto max-w-6xl rounded-[2.4rem] border border-[#7d5a6a]/35 bg-[linear-gradient(135deg,#563445,#694356)] px-8 py-10 text-white shadow-[0_40px_120px_-62px_rgba(41,21,30,0.75)] sm:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">CTA final</p>
              <h2 className="mt-4 max-w-[13ch] font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Agende uma avaliacao e descubra um plano facial desenhado para voce.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
                Atendimento com horario marcado, experiencia boutique e orientacao clara desde o primeiro contato.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:max-w-[18rem]">
              <Link to="/contato" className="premium-button light w-full justify-center">
                Solicitar avaliacao
              </Link>
              <a href={clinic.instagram} target="_blank" rel="noreferrer" className="premium-button-secondary dark w-full justify-center">
                <Instagram className="h-4 w-4" />
                Ver Instagram da clinica
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
