import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Instagram,
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
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

const featuredTreatments = treatments.slice(0, 6);
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <div className="pb-10">
      <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <Reveal className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70 shadow-[0_24px_60px_-40px_rgba(90,70,58,0.5)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {clinic.badge}
            </span>

            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-[0.9] text-primary sm:text-6xl lg:text-8xl">
                Rejuvenescimento autoral com luxo leve e resultado natural.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary/75">
                Uma demo pensada para clinicas de estetica facial de alto padrao:
                atmosfera boutique, copy refinada, arquitetura de conversao e uma
                experiencia visual criada para impressionar nos primeiros segundos.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contato" className="premium-button justify-center">
                Agendar avaliacao
              </Link>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary justify-center"
              >
                WhatsApp direto
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {clinic.stats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 * index}
                  className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-[0_24px_70px_-46px_rgba(90,70,58,0.75)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-primary/70">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="card-surface overflow-hidden p-4 sm:p-5">
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16))]">
                  <img
                    src="/media/esthetic-hero.png"
                    alt="Mulher em consulta de estetica premium"
                    className="h-full min-h-[440px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.08),rgba(62,52,46,0.42))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/30 bg-black/20 p-4 text-white backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                      Assinatura de marca
                    </p>
                    <p className="mt-2 font-display text-3xl leading-none">
                      Beauty editorial com confianca clinica.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.6rem] border border-white/70 bg-background/90 p-5">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-primary/60">
                      Percepcao imediata
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex -space-x-3">
                        {[0, 1, 2].map((item) => (
                          <img
                            key={item}
                            src="/media/esthetic-model.png"
                            alt=""
                            className="h-11 w-11 rounded-full border-2 border-background object-cover"
                          />
                        ))}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-primary">
                          Naturalidade sofisticada
                        </p>
                        <p className="text-sm text-primary/60">
                          Protocolos premium com narrativa de marca.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/70 bg-primary p-5 text-background shadow-[0_28px_70px_-46px_rgba(62,52,46,1)]">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-background/55">
                      Jornada de avaliacao
                    </p>
                    <div className="mt-5 space-y-4">
                      {clinic.evaluationSteps.slice(0, 2).map((step, index) => (
                        <div key={step.title} className="flex gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm">
                            {index + 1}
                          </span>
                          <div>
                            <p className="font-medium">{step.title}</p>
                            <p className="text-sm leading-6 text-background/70">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Tratamentos em destaque"
              title="Protocolos premium para suavizar, sustentar e iluminar."
              description="A home foi estruturada para funcionar como vitrine institucional e como landing page de conversao. Cada card apresenta indicacao clara, elegancia visual e CTA facil para agendamento."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredTreatments.map((treatment, index) => (
              <Reveal
                key={treatment.slug}
                delay={index * 0.05}
                className="card-surface group p-6 transition duration-300 hover:-translate-y-1"
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-accent"
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
                src="/media/esthetic-specialist.png"
                alt="Especialista em estetica facial premium"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.02),rgba(62,52,46,0.35))]" />
              <div className="absolute bottom-5 left-5 rounded-[1.4rem] border border-white/25 bg-white/20 p-4 text-white backdrop-blur-md">
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
              description="A pagina sobre foi pensada para unir credibilidade, formacao e proximidade. A especialista aparece como figura central da marca, com um posicionamento claro: resultado sofisticado, sem excesso e com indicacao tecnica consistente."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {clinic.certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 shadow-[0_22px_60px_-46px_rgba(90,70,58,0.55)]"
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
              title="Uma experiencia premium desenhada para gerar confianca e desejo."
              description="A combinacao certa entre copy, design e UX aumenta muito a percepcao de valor. Nesta demo, os diferenciais foram apresentados com clareza visual e narrativa de posicionamento."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clinic.differentiators.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="card-surface p-6"
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
              description="Mesmo como demo, a galeria foi estruturada para parecer profissional: menos apelo comercial, mais contexto clinico, etiquetas discretas e CTA para consulta."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {clinic.beforeAfter.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="card-surface overflow-hidden p-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/media/esthetic-model.png"
                      alt={`Antes do protocolo ${item.title}`}
                      className="h-64 w-full object-cover object-center saturate-[0.7] sepia-[0.12] brightness-[0.88]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                      Antes
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/media/esthetic-model.png"
                      alt={`Depois do protocolo ${item.title}`}
                      className="h-64 w-full object-cover object-center brightness-[1.02] contrast-[1.03]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/75 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                      Depois
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-3xl leading-none text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary/70">{item.focus}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-primary/40">
                    {item.note}
                  </p>
                </div>
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
              title="Uma atmosfera que parece cara, calma e cuidadosamente dirigida."
              description="A clinica foi pensada como med spa boutique: textura, luz quente, materiais sofisticados e atendimento sem pressa. Isso gera desejo e reforca confianca antes mesmo do primeiro contato."
            />
            <div className="space-y-4">
              {clinic.highlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.5rem] border border-primary/10 bg-white/70 p-4"
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
                src="/media/esthetic-clinic.png"
                alt="Ambiente da clinica premium de estetica"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.08),rgba(62,52,46,0.45))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">
                  Luxury med spa mood
                </p>
                <p className="mt-3 font-display text-4xl leading-none">
                  Conforto, discricao e ritual de cuidado.
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
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {clinic.testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 0.06}
                className="card-surface p-6"
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
              description="A estrutura abaixo foi pensada para tirar friccao de quem esta avaliando um procedimento facial e quer seguranca antes de agendar."
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
              title="Blog estrategico para educar, aquecer e aumentar autoridade."
              description="O prototipo inclui uma area editorial pronta para SEO local, campanhas de trafego e nutricao de leads. Os temas abaixo soam atuais e bem posicionados para clinicas premium."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06} className="card-surface p-6">
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
        <Reveal className="mx-auto max-w-6xl rounded-[2.4rem] border border-primary/10 bg-primary px-8 py-10 text-background shadow-[0_40px_120px_-62px_rgba(62,52,46,1)] sm:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-background/55">
                CTA final
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Agende uma avaliacao e descubra um plano facial desenhado para voce.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-background/75">
                Atendimento com horario marcado, experiencia boutique e orientacao
                clara desde o primeiro contato.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/contato" className="premium-button light justify-center">
                Solicitar avaliacao
              </Link>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary dark justify-center"
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
