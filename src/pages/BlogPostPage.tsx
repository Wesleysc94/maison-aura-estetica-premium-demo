import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, Sparkles } from "lucide-react";

import { clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useBlogPost, useBlogPosts } from "@/hooks/use-blog";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: post } = useBlogPost(slug || "");
  const { data: posts = [] } = useBlogPosts();

  useSectionReveal();

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 text-center">
        <Reveal>
          <h1 className="font-display text-3xl text-primary">Conteudo nao encontrado</h1>
          <button onClick={() => navigate("/conteudo")} className="premium-button mt-6">
            Voltar ao Blog
          </button>
        </Reveal>
      </div>
    );
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const fallbackHighlights = [
    "O que observar antes de decidir por esse tipo de tratamento.",
    "Como manter naturalidade e resultado coerente ao longo do tempo.",
    "Por que contexto, anatomia e expectativa mudam completamente a indicacao.",
  ];

  return (
    <div className="pb-10">
      <section className="px-6 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/conteudo")}
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-x-1" />
            Voltar para conteudo clinico
          </button>
        </div>
      </section>

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        ctaLabel="Agendar avaliação"
        ctaHref="/contato"
        secondaryCtaLabel="Explorar outros conteudos"
        secondaryCtaHref="/conteudo"
        image={post.image ?? clinic.media.editorial}
        imageAlt={post.title}
        imageEyebrow="Conteudo Maison Aura"
        imageTitle="Informacao clara tambem faz parte da experiencia premium."
        highlights={[
          `${post.readTime} de leitura`,
          post.date ?? "Conteudo curado",
          "Tom editorial orientado para confianca",
        ]}
        stats={[
          { value: post.readTime, label: "tempo de leitura" },
          { value: "Guia", label: "formato do artigo" },
          { value: "Premium", label: "tom da experiencia" },
        ]}
      />

      {post.content ? (
        <section className="gsap-section px-6 py-12 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl">
            <div className="prose prose-lg prose-rose mx-auto text-primary/80 prose-headings:font-display prose-headings:font-normal prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent/80">
              <div className="mb-8 flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                <span className="rounded-full bg-primary/5 px-3 py-1 text-primary">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                {post.date && <span>{post.date}</span>}
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="gsap-section px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr,1.05fr]">
            <Reveal className="card-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
                Leitura orientada
              </p>
              <div className="mt-6 space-y-4">
                {fallbackHighlights.map((item) => (
                  <div key={item} className="metric-card flex gap-3 p-4">
                    <Sparkles className="mt-1 h-4 w-4 text-accent" />
                    <p className="text-sm leading-7 text-primary/72">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="card-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
                Resumo do artigo
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[0.95] text-primary">
                {post.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-primary/72">{post.excerpt}</p>
              <p className="mt-5 text-base leading-8 text-primary/72">
                Este layout foi preparado para a demo continuar elegante mesmo quando o artigo ainda nao recebeu um corpo completo. Assim, a area de conteudo parece em construcao editorial, nao inacabada.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="gsap-section px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
                Continuar lendo
              </p>
            </Reveal>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.05} className="card-surface interactive-card p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/45">
                    {item.category}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-[0.96] text-primary">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-primary/70">{item.excerpt}</p>
                  <Link to={`/conteudo/${item.slug}`} className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
                    Abrir artigo
                    <ArrowUpRight className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
