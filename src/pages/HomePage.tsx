import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const floatingNoteY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const floatingRibbonY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const heroOrbY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  const { data: treatmentsData = treatments } = useTreatments();
  const { data: blogData = blogPosts } = useBlogPosts();
  const { data: testimonialsData = clinic.testimonials } = useTestimonials();

  const featuredTreatments = treatmentsData.slice(0, 6);
  const latestPosts = blogData.slice(0, 3);
  return (
    <div className="pb-10">
      <section ref={heroRef} className="relative overflow-hidden px-6 pb-14 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <motion.div
          style={{ y: heroOrbY }}
          className="ambient-orb left-[-4rem] top-14 h-72 w-72 bg-[radial-gradient(circle_at_center,rgba(221,160,184,0.4),transparent_68%)]"
        />
        <motion.div
          style={{ y: floatingRibbonY }}
          className="ambient-orb right-[-2rem] top-[12%] h-[25rem] w-[25rem] bg-[radial-gradient(circle_at_center,rgba(232,196,206,0.42),transparent_70%)]"
        />

        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-6 flex flex-wrap items-center gap-3">
            <span className="luxury-chip">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {clinic.badge}
            </span>
            <span className="luxury-chip">{clinic.location}</span>
            <span className="luxury-chip">Consulta com horario marcado</span>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[0.94fr,1.06fr] lg:items-center">
            <Reveal className="space-y-8">
              <motion.div style={{ y: floatingNoteY }} className="space-y-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary/55">
                  Clinica de estetica facial no Jardins
                </p>
                <h1 className="font-display text-5xl leading-[0.92] text-primary sm:text-6xl lg:text-[5.15rem]">
                  Cuidado facial com naturalidade, tecnica e um plano feito para voce.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-primary/70">
                  Na Maison Aura, cada avaliacao considera anatomia, rotina e objetivo estetico
                  para indicar procedimentos com leveza, seguranca e resultado elegante.
                </p>
              </motion.div>

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
                    className="rounded-[1.4rem] border border-primary/10 bg-card/70 px-4 py-4 text-sm leading-6 text-primary/68 shadow-[0_18px_50px_-38px_rgba(106,66,84,0.28)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {clinic.stats.map((item, index) => (
                  <Reveal
                    key={item.label}
                    delay={0.08 * index}
                    className="card-surface interactive-card rounded-[1.9rem] p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/45">
                      Maison Aura
                    </p>
                    <p className="mt-4 text-3xl font-semibold text-primary">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-primary/70">{item.label}</p>
                  </Reveal>
                ))}
              </div>

              <div className="rose-panel grid gap-4 p-5 sm:grid-cols-[1.08fr,0.92fr]">
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/55">
                    Primeira avaliacao
                  </p>
                  <h2 className="font-display text-4xl leading-none text-primary">
                    Planejamento claro desde a primeira conversa.
                  </h2>
                  <p className="text-sm leading-7 text-primary/66">
                    A consulta reune escuta, analise facial, fotografia clinica e indicacao
                    tecnica para que voce entenda prioridades, etapas e tempo de evolucao do
                    tratamento.
                  </p>
                </div>

                <div className="glass-panel rounded-[1.7rem] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/55">
                    O que voce recebe
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      "Leitura facial individualizada",
                      "Plano de tratamento por etapas",
                      "Orientacoes claras de preparo e recuperacao",
                    ].map((step, index) => (
                      <div key={step} className="flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-primary">{step}</p>
                          <p className="text-sm leading-6 text-primary/65">
                            {clinic.evaluationSteps[index]?.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="space-y-4">
              <div className="card-surface editorial-frame overflow-hidden p-4 sm:p-5">
                <div className="relative min-h-[620px] overflow-hidden rounded-[2.2rem] border border-white/40 bg-[linear-gradient(145deg,rgba(255,255,255,0.42),rgba(255,240,246,0.18))]">
                  <motion.div style={{ y: heroImageY }} className="absolute inset-0">
                    <img
                      src={clinic.media.hero}
                      alt="Ambiente acolhedor de clinica de estetica facial"
                      className="h-full w-full object-cover object-[center_20%]"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,251,0.08),rgba(63,28,44,0.14)_44%,rgba(39,18,28,0.6))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,239,245,0.3),transparent_24%),radial-gradient(circle_at_18%_24%,rgba(246,221,201,0.18),transparent_20%)]" />

                  <div className="relative flex min-h-[620px] flex-col justify-between p-5 sm:p-8">
                    <div className="flex justify-start sm:justify-end">
                      <motion.div
                        style={{ y: floatingRibbonY }}
                        className="hidden max-w-[17rem] rounded-[1.6rem] border border-white/24 bg-background/75 p-4 text-primary shadow-[0_20px_50px_-32px_rgba(41,17,27,0.55)] backdrop-blur-xl sm:block"
                      >
                        <div className="overflow-hidden rounded-[1.2rem] border border-white/20">
                          <img
                            src={clinic.media.consultation}
                            alt="Consulta personalizada na Maison Aura"
                            className="h-28 w-full object-cover object-[center_28%]"
                          />
                        </div>
                        <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-primary/50">
                          Consulta personalizada
                        </p>
                        <p className="mt-2 text-base font-semibold leading-7 text-primary">
                          Avaliacao individual, plano claro e orientacao cuidadosa em cada etapa.
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      style={{ y: floatingNoteY }}
                      className="max-w-[30rem] rounded-[1.9rem] border border-white/24 bg-[rgba(42,18,29,0.44)] p-6 text-white backdrop-blur-md"
                    >
                      <p className="text-[10px] uppercase tracking-[0.32em] text-white/72">
                        Maison Aura
                      </p>
                      <p className="mt-3 font-display text-4xl leading-[0.95] sm:text-[3.1rem]">
                        Naturalidade, conforto e um cuidado que respeita sua identidade.
                      </p>
                      <p className="mt-4 max-w-md text-sm leading-7 text-white/82">
                        Atendimento reservado para quem busca suavizar sinais, melhorar a
                        qualidade da pele e manter uma aparencia elegante, sem excessos.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  style={{ y: floatingRibbonY }}
                  className="glass-panel p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/45">
                    Atendimento reservado
                  </p>
                  <p className="mt-3 text-sm leading-7 text-primary/68">
                    Horarios organizados, ambiente acolhedor e orientacao clara para que sua
                    experiencia seja tranquila do inicio ao fim.
                  </p>
                </motion.div>
                <div className="glass-panel p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/45">
                    Foco em naturalidade
                  </p>
                  <p className="mt-3 text-sm leading-7 text-primary/68">
                    Cada indicacao respeita sua expressao, estrutura facial e momento de vida,
                    evitando exageros e priorizando equilibrio.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {clinic.differentiators.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index} className="glass-panel p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/45">
                  Diferencial {index + 1}
                </p>
                <h3 className="mt-4 text-3xl leading-none text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary/66">{item.text}</p>
              </Reveal>
            ))}
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
