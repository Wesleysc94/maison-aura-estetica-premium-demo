import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Instagram,
  MessageCircleMore,
  MoveRight,
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
      <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="ambient-orb left-[-3rem] top-20 h-64 w-64 bg-[radial-gradient(circle_at_center,rgba(218,168,189,0.34),transparent_68%)]" />
        <div className="ambient-orb right-[2%] top-[16%] h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(231,203,176,0.28),transparent_70%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.96fr,1.04fr] lg:items-center">
          <Reveal className="space-y-8">
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-card/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70 shadow-[0_24px_60px_-40px_rgba(102,67,82,0.4)] backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {clinic.badge}
            </motion.span>

            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-[0.9] text-primary sm:text-6xl lg:text-8xl">
                Estetica facial com toque couture, tecnologia suave e resultados que parecem seus.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary/75">
                Uma experiencia boutique para quem deseja rejuvenescimento natural,
                harmonia facial e uma jornada de cuidado elegante. O foco em
                agendamento existe, mas entra com discricao, clareza e alto valor percebido.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contato" className="premium-button button-shimmer justify-center">
                Agendar avaliacao
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary button-shimmer justify-center"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp direto
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {clinic.stats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 * index}
                  className="card-surface interactive-card rounded-[1.75rem] p-5"
                >
                  <p className="text-2xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-primary/70">{item.label}</p>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.05fr,0.95fr]">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-[1.8rem] p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CalendarClock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-primary/55">
                      Agenda privada
                    </p>
                    <p className="mt-2 text-sm leading-7 text-primary/70">
                      Avaliacoes com horario marcado, escuta calma e plano facial definido em etapas.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-[1.8rem] p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary/55">
                  Primeiro contato
                </p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-sm leading-7 text-primary/70">
                    Atendimento discreto pelo WhatsApp e encaminhamento claro para consulta.
                  </p>
                  <MoveRight className="h-4 w-4 shrink-0 text-accent" />
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <motion.div
              animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-14 z-10 hidden w-52 rounded-[1.5rem] border border-border/50 bg-card/80 p-4 shadow-[0_30px_80px_-48px_rgba(95,54,78,0.45)] backdrop-blur xl:block"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary/50">
                Assinatura Maison Aura
              </p>
              <p className="mt-3 font-display text-3xl leading-none text-primary">
                Naturalidade com acabamento precioso.
              </p>
            </motion.div>

            <div className="card-surface interactive-card overflow-hidden p-4 sm:p-5">
              <div className="grid gap-4">
                <div className="relative min-h-[640px] overflow-hidden rounded-[2.1rem] border border-white/50 bg-[linear-gradient(140deg,rgba(255,255,255,0.48),rgba(255,255,255,0.1))]">
                  <motion.div
                    animate={{ scale: [1, 1.025, 1], y: [0, -8, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={clinic.media.hero}
                      alt="Retrato editorial para clinica premium de estetica facial"
                      className="h-full w-full object-cover object-[center_22%]"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,250,0.06),rgba(88,49,67,0.26)_54%,rgba(64,34,49,0.58))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(247,224,231,0.36),transparent_20%),radial-gradient(circle_at_18%_15%,rgba(232,205,182,0.25),transparent_20%),radial-gradient(circle_at_62%_75%,rgba(104,60,79,0.24),transparent_28%)]" />

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="absolute right-4 top-4 hidden max-w-[17rem] rounded-[1.55rem] border border-white/25 bg-card/20 p-4 text-primary-foreground backdrop-blur-md sm:block"
                  >
                    <div className="overflow-hidden rounded-[1.2rem] border border-white/20">
                      <img
                        src={clinic.media.consultation}
                        alt="Consulta e ritual de cuidado Maison Aura"
                        className="h-28 w-full object-cover object-[center_28%]"
                      />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-white/70">
                      Experience note
                    </p>
                    <p className="mt-2 text-base font-semibold leading-7">
                      Consulta autoral, leitura facial cuidadosa e indicacao sem pressa.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="absolute bottom-5 left-5 right-5 max-w-[24rem] rounded-[1.7rem] border border-white/30 bg-black/[0.18] p-6 text-white backdrop-blur-md"
                  >
                    <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                      Hero premium
                    </p>
                    <p className="mt-3 font-display text-4xl leading-[0.92] sm:text-[3.25rem]">
                      Feminilidade elegante, glow preciso e rejuvenescimento sem excesso.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="absolute bottom-5 right-5 hidden rounded-[1.4rem] border border-white/25 bg-card/20 px-4 py-3 text-primary-foreground backdrop-blur-md sm:block"
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                      Agendamento
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/90">
                      Consulta estrategica com plano facial autoral.
                    </p>
                  </motion.div>
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel rounded-[1.7rem] p-6"
                  >
                    <p className="text-[11px] uppercase tracking-[0.32em] text-primary/60">
                      Percepcao de marca
                    </p>
                    <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="grid grid-cols-4 gap-2 sm:w-[10.5rem]">
                        {[
                          "from-[#f9eef1] to-[#efd7df]",
                          "from-[#ecd8cf] to-[#d6b39e]",
                          "from-[#d7b4c1] to-[#b9869a]",
                          "from-[#6a4254] to-[#3f2631]",
                        ].map((tone) => (
                          <div
                            key={tone}
                            className={`h-14 rounded-[1rem] bg-gradient-to-br ${tone} shadow-[0_18px_34px_-24px_rgba(101,63,80,0.6)]`}
                          />
                        ))}
                      </div>
                      <div className="max-w-sm">
                        <p className="text-lg font-semibold text-primary">
                          Luxo feminino discreto, com assinatura editorial.
                        </p>
                        <p className="mt-2 text-sm leading-7 text-primary/60">
                          Blush petal, champagne quente e ameixa suave para parecer premium, delicado e adulto ao mesmo tempo.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-[1.7rem] border border-white/60 bg-primary p-6 text-background shadow-[0_28px_70px_-46px_rgba(85,49,67,0.9)]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.32em] text-background/60">
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
                  </motion.div>
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
                src={clinic.media.specialist}
                alt="Especialista em estetica facial premium"
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
              description="A pagina sobre foi pensada para unir credibilidade, formacao e proximidade. A especialista aparece como figura central da marca, com um posicionamento claro: resultado sofisticado, sem excesso e com indicacao tecnica consistente."
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
              title="Uma atmosfera que parece cara, calma e cuidadosamente dirigida."
              description="A clinica foi pensada como med spa boutique: textura, luz quente, materiais sofisticados e atendimento sem pressa. Isso gera desejo e reforca confianca antes mesmo do primeiro contato."
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
                alt="Ambiente da clinica premium de estetica"
                className="h-[520px] w-full object-cover object-[center_46%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.08),rgba(62,52,46,0.45))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/20 bg-card/20 p-5 text-primary-foreground backdrop-blur">
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
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
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
