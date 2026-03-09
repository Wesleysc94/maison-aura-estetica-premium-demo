import { blogPosts } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Conteudo"
        title="Um blog com cara de marca viva, estrategica e pronta para SEO local."
        description="A area editorial reforca autoridade, ajuda campanhas de trafego e amplia a percepcao de cuidado. Os temas e a estilizacao foram pensados para clinicas premium de estetica facial."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
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
            <div className="mt-6 inline-flex rounded-full bg-primary/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary/60">
              {featuredPost.category} . {featuredPost.readTime}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/media/esthetic-clinic.png"
                alt="Ambiente editorial da clinica"
                className="h-[360px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,52,46,0.06),rgba(62,52,46,0.38))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/25 bg-white/20 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">Editorial premium</p>
                <p className="mt-3 font-display text-4xl leading-none">Conteudo que educa sem perder desejo.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Mais temas"
              title="Pautas certas para aquecer leads e fortalecer posicionamento."
              description="O grid abaixo mostra como a area de conteudo pode crescer de forma consistente sem comprometer o tom sofisticado da marca."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05} className="card-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/50">
                  {post.category}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-primary">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-primary/70">{post.excerpt}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-primary/40">
                  {post.readTime}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
