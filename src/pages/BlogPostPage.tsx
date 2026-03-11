import { useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { blogPosts as staticPosts } from "@/data/siteContent";
import { Reveal } from "@/components/site/Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // No mundo real viria do hook do Supabase. Aqui usamos fallback de mock para consistencia.
  const post = staticPosts.find((p) => p.slug === slug);

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

  return (
    <div className="pb-10">
      <section className="gsap-section px-6 pb-14 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() => navigate("/conteudo")}
            className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-primary/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-x-1" />
            Voltar para conteudo clinico
          </button>

          <Reveal>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
              <span className="rounded-full bg-primary/5 px-3 py-1 text-primary">{post.category}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
              <span>{post.date}</span>
            </div>
            <h1 className="mt-8 font-display text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary/70 sm:text-xl">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {post.image && (
        <section className="gsap-section px-6 py-6 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-[2rem]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="h-[400px] w-full object-cover transition-transform duration-1000 hover:scale-105 sm:h-[500px] lg:h-[600px]" 
            />
          </Reveal>
        </section>
      )}

      {post.content && (
        <section className="gsap-section px-6 py-12 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl">
            <div 
              className="prose prose-lg prose-rose mx-auto text-primary/80 prose-headings:font-display prose-headings:font-normal prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>
        </section>
      )}

      <section className="gsap-section px-6 py-16 sm:px-8 lg:px-12">
        <Reveal className="mx-auto flex max-w-3xl justify-center">
          <Link to="/contato" className="premium-button inline-flex">
            Falar com a equipe ou Agendar avaliacao
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
