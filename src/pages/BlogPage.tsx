import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { clinic, blogPosts as staticPosts } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useBlogPosts } from "@/hooks/use-blog";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const { data: blogPosts = staticPosts } = useBlogPosts();
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Conteudo"
        title="Conteudo para orientar pacientes e aprofundar a confianca na clinica."
        description="Aqui reunimos temas frequentes da estetica facial para esclarecer duvidas, preparar a paciente para a consulta e ampliar a educacao em torno dos tratamentos."
        image={clinic.media.editorial}
      />

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/50">
              Artigo em destaque
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] text-primary">
              {featuredPost.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary/70">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="inline-flex rounded-full bg-primary/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary/60">
                {featuredPost.category} . {featuredPost.readTime}
              </span>
              <Link to={`/conteudo/${featuredPost.slug}`} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
                Ler artigo completo
                <ArrowUpRight className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={clinic.media.editorial}
                alt="Ambiente editorial da clinica"
                className="h-[360px] w-full object-cover object-[center_32%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.06),rgba(62,52,46,0.38))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/20 bg-card/20 p-5 text-primary-foreground backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">Conteudo da clinica</p>
                <p className="mt-3 font-display text-4xl leading-none">Informacao clara para decidir com mais seguranca.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gsap-section px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Mais temas"
              title="Temas que ajudam a paciente a entender melhor cada indicacao."
              description="A area de conteudo cresce com consistencia quando combina orientacao pratica, linguagem clara e profundidade clinica."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05} className="card-surface interactive-card p-6 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-primary/70">{post.excerpt}</p>
                
                <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary/40">
                    {post.readTime}
                  </p>
                  <Link to={`/conteudo/${post.slug}`} className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-accent">
                    Acessar
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
