import { FormEvent, useState } from "react";
import { CalendarRange, Clock3, Instagram, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { toast } from "sonner";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const firstContactFlow = [
  "A paciente escolhe entre WhatsApp ou formulario para iniciar o contato.",
  "A clinica apresenta disponibilidade, orientacoes e melhor janela para avaliacao.",
  "O encontro acontece com atendimento calmo e plano explicado com clareza.",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSectionReveal();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    toast.success("Demonstracao enviada com sucesso", {
      description: "Em uma versao comercial, esse fluxo pode seguir para CRM, e-mail ou WhatsApp da clinica.",
    });

    (event.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Contato e agendamento"
        title="Um agendamento premium com menos friccao e mais confianca."
        description="A pagina de contato foi redesenhada para parecer concierge, nao formulario burocratico. Isso faz muita diferenca quando o dono da clinica imagina a propria marca aqui."
        ctaLabel="Solicitar avaliacao"
        ctaHref="/contato"
        secondaryCtaLabel="Falar no WhatsApp"
        secondaryCtaHref={clinic.whatsapp}
        secondaryCtaExternal
        image={clinic.media.consultation}
        imageAlt="Atendimento premium da Maison Aura"
        imageEyebrow="Primeiro contato"
        imageTitle="Orientacao clara, resposta elegante e acolhimento desde o inicio."
        highlights={[
          "Formulario simples e direto",
          "WhatsApp como rota de conversao imediata",
          "Informacao util sem sensacao de frieza",
        ]}
        stats={[
          { value: "09h-19h", label: "janela principal de atendimento" },
          { value: "Jardins", label: "localizacao da clinica" },
          { value: "Boutique", label: "ritmo do atendimento" },
        ]}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Canais de contato"
              title="Informacao organizada para reduzir duvida e acelerar a decisao."
              description="Em vez de esconder dados importantes, a pagina mostra caminhos claros de conversa. Isso aumenta confianca e ajuda a transformar interesse em agendamento."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal className="editorial-note">
              <Phone className="h-5 w-5 text-accent" />
              <p className="mt-5 text-xl font-semibold text-primary">Contato direto</p>
              <p className="mt-3 text-sm leading-7 text-primary/72">{clinic.phone}</p>
              <p className="mt-3 text-sm leading-7 text-primary/64">
                Ideal para quem quer confirmar disponibilidade ou tirar uma duvida objetiva.
              </p>
            </Reveal>
            <Reveal delay={0.05} className="editorial-note">
              <MapPin className="h-5 w-5 text-accent" />
              <p className="mt-5 text-xl font-semibold text-primary">Endereco e atmosfera</p>
              <p className="mt-3 text-sm leading-7 text-primary/72">{clinic.address}</p>
              <p className="mt-3 text-sm leading-7 text-primary/64">
                A localizacao ajuda a reforcar um posicionamento premium e urbano da marca.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="editorial-note">
              <Clock3 className="h-5 w-5 text-accent" />
              <p className="mt-5 text-xl font-semibold text-primary">Horario de atendimento</p>
              <p className="mt-3 text-sm leading-7 text-primary/72">{clinic.hours.join(" · ")}</p>
              <p className="mt-3 text-sm leading-7 text-primary/64">
                O texto transmite ordem, previsibilidade e menos sensacao de pressa.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.02fr,0.98fr]">
          <Reveal className="card-surface p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
                  Formulario de avaliacao
                </p>
                <p className="mt-3 text-sm leading-7 text-primary/68">
                  Fluxo demonstrativo preparado para parecer premium e funcional sem depender de banco externo.
                </p>
              </div>
              <span className="rounded-full bg-primary/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                Demo interativa
              </span>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Nome</span>
                  <input className="input-surface" name="name" type="text" placeholder="Seu nome" required />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Telefone</span>
                  <input className="input-surface" name="phone" type="tel" placeholder="(11) 99999-9999" required />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">E-mail</span>
                  <input className="input-surface" name="email" type="email" placeholder="voce@email.com" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-primary/70">Procedimento de interesse</span>
                  <select className="input-surface" name="treatment" defaultValue="">
                    <option value="" disabled>
                      Selecionar
                    </option>
                    <option>Toxina botulinica</option>
                    <option>Preenchimento labial</option>
                    <option>Bioestimulador</option>
                    <option>Skinbooster</option>
                    <option>Plano de rejuvenescimento</option>
                  </select>
                </label>
              </div>
              <label className="space-y-2">
                <span className="text-sm font-medium text-primary/70">O que voce deseja melhorar?</span>
                <textarea
                  className="input-surface min-h-[148px] resize-none"
                  name="message"
                  placeholder="Conte brevemente o que voce busca e se existe alguma data importante no seu calendario."
                />
              </label>
              <button type="submit" className="premium-button w-full justify-center" disabled={isSubmitting}>
                <CalendarRange className="h-4 w-4" />
                {isSubmitting ? "Enviando demonstracao..." : "Solicitar avaliacao"}
              </button>
            </form>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} className="card-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
                O que acontece depois
              </p>
              <div className="mt-6 space-y-5">
                {firstContactFlow.map((item, index) => (
                  <div key={item} className="metric-card flex gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-primary/72">{item}</p>
                  </div>
                ))}
              </div>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary mt-6 inline-flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Ver Instagram da clinica
              </a>
            </Reveal>

            <Reveal delay={0.12} className="card-surface overflow-hidden p-4">
              <iframe
                title="Mapa da clinica"
                src="https://www.google.com/maps?q=Alameda%20Tiete%20415%20Jardins%20Sao%20Paulo&z=15&output=embed"
                className="h-[320px] w-full rounded-[1.6rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl rounded-[2.3rem] border border-primary/10 bg-primary px-8 py-10 text-background shadow-[0_38px_110px_-60px_rgba(44,25,33,0.9)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-background/50">
                Conversao premium
              </p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[0.95] sm:text-5xl">
                A pagina de contato agora parece parte da experiencia, nao um fim burocratico.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:max-w-[18rem]">
              <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="premium-button light justify-center">
                <MessageCircleMore className="h-4 w-4" />
                Falar pelo WhatsApp
              </a>
              <a href={`tel:${clinic.phone.replace(/\D/g, "")}`} className="premium-button-secondary dark justify-center">
                <Phone className="h-4 w-4" />
                Ligar para a clinica
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
