import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { clinic, blogPosts as staticPosts } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useBlogPosts } from "@/hooks/use-blog";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function BlogPage() {
  const { data: blogPosts = staticPosts } = useBlogPosts();
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);
  const themes = Array.from(new Set(blogPosts.map((post) => post.category))).slice(0, 4);

  useSectionReveal();

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Conteudo editorial"
        title="Artigos que ampliam confianca, repertorio e desejo de marca."
        description="A area de conteudo agora funciona como extensao da autoridade da clinica. Ela educa, aquece a conversa comercial e reforca um posicionamento premium com linguagem mais editorial."
        image={clinic.media.editorial}
        imageAlt="Editorial de conteudo Maison Aura"
        imageEyebrow="Educacao da marca"
        imageTitle="Conteudo bem apresentado ajuda a vender criterio, nao so procedimento."
        highlights={[
          "Linguagem clara para pacientes",
          "Tom editorial alinhado ao posicionamento premium",
          "Estrutura pronta para crescer como area de autoridade",
        ]}
        stats={[
          { value: `${blogPosts.length}`, label: "temas publicados" },
          { value: `${themes.length}`, label: "frentes editoriais" },
          { value: "Autoridade", label: "funcao principal da area" },
        ]}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr,0.92fr]">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.8rem]">
                <img
                  src={featuredPost.image ?? clinic.media.editorial}
                  alt={featuredPost.title}
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
              <div className="p-2 sm:p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/45">
                  Artigo em destaque
                </p>
                <h2 className="mt-5 font-display text-5xl leading-[0.94] text-primary">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-primary/72">{featuredPost.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-primary/58">
                    {featuredPost.category}
                  </span>
                  <span className="rounded-full bg-background px-4 py-2 text-xs uppercase tracking-[0.24em] text-primary/48">
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link to={`/conteudo/${featuredPost.slug}`} className="premium-button mt-8 inline-flex">
                  Ler artigo completo
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/48">
              Temas que fortalecem a marca
            </p>
            <div className="mt-6 space-y-4">
              {themes.map((theme) => (
                <div key={theme} className="metric-card flex gap-3 p-4">
                  <Sparkles className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-base font-semibold text-primary">{theme}</p>
                    <p className="mt-1 text-sm leading-7 text-primary/68">
                      Tema com bom potencial para educar, nutrir autoridade e criar repertorio comercial.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Mais temas"
              title="Conteudos que ajudam a paciente a entender melhor cada indicacao."
              description="A area ganha forca quando cada card parece editorial e conversacional, nao uma lista fria de posts."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05} className="card-surface interactive-card flex flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-[0.96] text-primary">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-primary/70">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary/40">{post.readTime}</p>
                  <Link to={`/conteudo/${post.slug}`} className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-accent">
                    Explorar
                    <ArrowUpRight className="h-3.5 w-3.5 transition-all duration-500 ease-out group-hover:-translate-y-px group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
