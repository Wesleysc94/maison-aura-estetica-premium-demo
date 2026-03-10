import { FormEvent } from "react";
import { CalendarRange, Clock3, Instagram, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";

export default function ContactPage() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      treatment_interest: formData.get("treatment") as string,
      message: formData.get("message") as string,
    };

    if (!supabase) {
      toast.success("Solicitacao registrada localmente", {
        description: "O site esta sem banco conectado no momento. Use o WhatsApp para concluir o atendimento agora.",
      });
      (event.target as HTMLFormElement).reset();
      return;
    }

    const { error } = await supabase.from("leads").insert(data);

    if (error) {
      console.error("Error saving lead:", error);
      toast.error("Erro ao enviar solicitacao", {
        description: "Nao foi possivel salvar seus dados. Tente novamente via WhatsApp.",
      });
      return;
    }

    toast.success("Solicitacao enviada!", {
      description: "Recebemos seus dados e entraremos em contato em breve.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Contato e agendamento"
        title="Uma pagina acolhedora, clara e pronta para converter contato em consulta."
        description="Formulario, WhatsApp, mapa, horario e Instagram aparecem em uma unica experiencia fluida. O objetivo e reduzir friccao e deixar o caminho para o agendamento evidente."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Formulario de avaliacao
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
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
                  placeholder="Conte brevemente o que voce busca e se ha alguma data importante no seu calendario."
                />
              </label>
              <button type="submit" className="premium-button w-full justify-center">
                <CalendarRange className="h-4 w-4" />
                Solicitar avaliacao
              </button>
            </form>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} className="card-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
                Informacoes da clinica
              </p>
              <div className="mt-6 space-y-4 text-sm text-primary/70">
                <a href={clinic.whatsapp} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-accent" />
                  {clinic.phone}
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent" />
                  {clinic.address}
                </p>
                <p className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-accent" />
                  {clinic.hours.join(" . ")}
                </p>
                <a href={clinic.instagram} className="flex items-center gap-3 hover:text-primary">
                  <Instagram className="h-4 w-4 text-accent" />
                  @maisonaura.estetica
                </a>
              </div>
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
    </div>
  );
}
