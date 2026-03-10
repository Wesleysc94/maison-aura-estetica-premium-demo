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

export default function HomePage() {
  const { data: treatmentsData = treatments } = useTreatments();
  const { data: blogData = blogPosts } = useBlogPosts();
  const { data: testimonialsData = clinic.testimonials } = useTestimonials();

  const featuredTreatments = treatmentsData.slice(0, 6);
  const latestPosts = blogData.slice(0, 3);
  return (
    <div className="pb-10">
      <section className="px-6 pb-14 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-6 flex flex-wrap items-center gap-3">
            <span className="luxury-chip">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {clinic.badge}
            </span>
            <span className="luxury-chip">{clinic.location}</span>
            <span className="luxury-chip">Atendimento com hora marcada</span>
          </Reveal>

          <div className="grid gap-12 xl:grid-cols-[0.78fr,1.22fr] xl:items-center">
            <Reveal className="space-y-8">
              <div className="space-y-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary/55">
                  Clinica de estetica facial no Jardins
                </p>
                <h1 className="max-w-[8.5ch] font-display text-5xl leading-[0.98] text-primary sm:text-6xl xl:text-[4.45rem]">
                  Cuidado facial com naturalidade, tecnica e um plano feito para voce.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-primary/78">
                  Na Maison Aura, cada avaliacao considera anatomia, rotina e objetivo estetico
                  para indicar procedimentos com leveza, seguranca e resultado elegante.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contato" className="premium-button justify-center">
                  Agendar avaliacao
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button-secondary justify-center"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  Falar com a equipe
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Consulta detalhada e sem pressa",
                  "Protocolos personalizados",
                  "Acompanhamento no pos-procedimento",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-border/70 bg-card px-4 py-4 text-sm font-medium leading-6 text-primary/82 shadow-[0_18px_40px_-34px_rgba(106,66,84,0.14)]"
                  >
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
                    alt="Atendimento de estetica facial em ambiente acolhedor"
                    className="h-[560px] w-full object-cover object-[center_22%]"
                  />
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.15fr,0.85fr]">
                <div className="glass-panel p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                    Consulta personalizada
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-[0.98] text-primary">
                    Planejamento facial com criterio, leveza e foco na naturalidade.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-primary/76">
                    Atendimento reservado para quem busca suavizar sinais, melhorar a qualidade
                    da pele e manter uma aparencia elegante, sem excessos.
                  </p>
                </div>

                <div className="glass-panel p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                    O que orienta a indicacao
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Anatomia e qualidade da pele",
                      "Rotina, objetivos e tempo de recuperacao",
                      "Evolucao gradual e expectativa realista",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 rounded-[1.2rem] border border-border/70 bg-background/75 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                        <p className="text-sm leading-6 text-primary/78">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 space-y-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {clinic.stats.map((item, index) => (
                <Reveal key={item.label} delay={0.05 * index} className="card-surface rounded-[1.85rem] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                    Maison Aura
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-primary/78">{item.label}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08} className="glass-panel p-6">
              <div className="space-y-6">
                <div className="max-w-2xl space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/55">
                    Primeira avaliacao
                  </p>
                  <h2 className="font-display text-4xl leading-[0.98] text-primary">
                    Sua consulta comeca com escuta, analise e prioridades bem definidas.
                  </h2>
                  <p className="text-sm leading-7 text-primary/78">
                    Organizamos a avaliacao para que voce entenda o que faz sentido para o seu
                    caso, quais etapas sao recomendadas e como cada procedimento se encaixa no
                    resultado que voce deseja construir.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {clinic.evaluationSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-[1.35rem] border border-border/70 bg-background/82 p-5"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <p className="mt-4 font-semibold text-primary">{step.title}</p>
                      <p className="mt-3 text-sm leading-6 text-primary/72">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Tratamentos em destaque"
              title="Protocolos para suavizar, sustentar e melhorar a qualidade da pele."
              description="Selecionamos procedimentos que ajudam a tratar sinais de cansaco, flacidez, perda de contorno e textura com indicacao individualizada."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredTreatments.map((treatment, index) => (
              <Reveal
                key={treatment.slug}
                delay={index * 0.05}
                className="card-surface interactive-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                    {treatment.category}
                  </span>
                  <Star className="h-4 w-4 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none text-primary">
                  {treatment.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">
                  {treatment.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-background px-3 py-2 text-xs text-primary/70">
                    {treatment.duration}
                  </span>
                  <span className="rounded-full bg-background px-3 py-2 text-xs text-primary/70">
                    {treatment.recovery}
                  </span>
                </div>
                <Link
                  to={`/tratamentos/${treatment.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.specialist}
                alt="Especialista em estetica facial"
                className="h-[520px] w-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.02),rgba(62,52,46,0.35))]" />
              <div className="absolute bottom-5 left-5 rounded-[1.4rem] border border-white/20 bg-card/20 p-4 text-primary-foreground backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-white/75">
                  Especialista
                </p>
                <p className="mt-2 font-display text-3xl">Dra. Helena Voss</p>
                <p className="mt-1 text-sm text-white/80">
                  Harmonizacao facial e rejuvenescimento autoral
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-7">
            <SectionIntro
              eyebrow="Sobre a especialista"
              title="Autoridade serena, olhar artistico e foco absoluto na naturalidade."
              description="A atuacao da clinica combina formacao tecnica, leitura facial individualizada e acompanhamento proximo para construir resultados coerentes e elegantes."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-primary/10 bg-card/70 p-5 shadow-[0_22px_60px_-46px_rgba(90,70,58,0.55)]"
                >
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-sm leading-7 text-primary/70">{item}</p>
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

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Por que escolher nossa clinica"
              title="Uma experiencia pensada para transmitir confianca, calma e criterio."
              description="Do primeiro contato ao pos-procedimento, cada etapa foi organizada para que voce se sinta bem orientada e segura na sua decisao."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clinic.differentiators.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="card-surface interactive-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-primary/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Antes e depois"
              title="Comparacoes sutis, confiaveis e apresentadas com elegancia."
              description="A galeria foi organizada para apresentar resultados com contexto clinico, leitura responsavel e expectativa realista."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clinic.beforeAfter.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="h-full"
              >
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

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <Reveal className="space-y-6">
            <SectionIntro
              eyebrow="Experiencia e ambiente"
              title="Uma atmosfera calma, acolhedora e pensada para o seu conforto."
              description="Ambiente reservado, luz suave e atendimento sem pressa ajudam a tornar a experiencia mais tranquila antes, durante e depois da consulta."
            />
            <div className="space-y-4">
              {clinic.highlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.5rem] border border-primary/10 bg-card/70 p-4"
                >
                  <ChevronRight className="mt-1 h-5 w-5 text-accent" />
                  <p className="text-sm leading-7 text-primary/70">{item}</p>
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
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/20 bg-card/20 p-5 text-primary-foreground backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">
                  Ambiente da clinica
                </p>
                <p className="mt-3 font-display text-4xl leading-none">
                  Conforto, discricao e cuidado em cada detalhe.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Depoimentos"
              title="Prova social com tom sofisticado e acolhedor."
              description="A area de depoimentos ajuda a reduzir objecoes sem soar comercial demais. O foco aqui esta em confianca, naturalidade e experiencia."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 0.06}
                className="card-surface interactive-card p-6"
              >
                <div className="flex items-center gap-2 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="mt-5 text-base leading-8 text-primary/75">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-primary/60">{testimonial.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="FAQ"
              title="Duvidas reais que ajudam a converter com mais tranquilidade."
              description="As respostas abaixo ajudam a esclarecer duvidas frequentes de quem esta avaliando um procedimento facial e quer seguranca antes de agendar."
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

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Conteudo e SEO"
              title="Conteudo para orientar pacientes e fortalecer autoridade."
              description="Os temas abaixo ajudam a esclarecer duvidas frequentes, preparar a paciente para a consulta e aprofundar a confianca na indicacao clinica."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06} className="card-surface interactive-card p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category} . {post.readTime}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{post.excerpt}</p>
                <Link
                  to="/conteudo"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explorar conteudo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[2.4rem] border border-[#7d5a6a]/35 bg-[linear-gradient(135deg,#563445,#694356)] px-8 py-10 text-white shadow-[0_40px_120px_-62px_rgba(41,21,30,0.75)] sm:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
                CTA final
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Agende uma avaliacao e descubra um plano facial desenhado para voce.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
                Atendimento com horario marcado, experiencia boutique e orientacao
                clara desde o primeiro contato.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:max-w-[18rem]">
              <Link to="/contato" className="premium-button light w-full justify-center">
                Solicitar avaliacao
              </Link>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_38px_-28px_rgba(14,8,11,0.34)] transition hover:-translate-y-0.5 hover:bg-white/15"
              >
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
