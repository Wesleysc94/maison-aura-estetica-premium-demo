import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroBg from '../../assets/hero-bg.png';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text fade-up staggered animation
            gsap.fromTo(
                '.hero-stagger',
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 0.1, // Small delay so the page loads first
                }
            );

            // Parallax and fade out background image on scroll
            gsap.to(bgRef.current, {
                y: '30%',
                opacity: 0.3, // Faz a imagem sumir e escurecer muito no scroll
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 md:px-16 overflow-hidden pt-28 pb-40 md:py-0"
        >
            {/* Background Image with Parallax & Soft Vignette Concept */}
            <div className="absolute inset-0 z-0 bg-primary/20 overflow-hidden">
                {/* Imagem Premium com Efeito Breathe Constante (CSS + GSAP) */}
                <div
                    ref={bgRef}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-110"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        animation: 'breathe 20s infinite alternate ease-in-out'
                    }}
                />

                {/* Overlay base clínico suave (Navy Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-dark/30 to-background/10 mix-blend-multiply" />

                {/* Máscara radial super suave focada apenas na região de leitura (centro) para dar contraste sem parecer uma caixa dura */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.7)_0%,rgba(26,26,26,0)_60%)] pointer-events-none" />

                {/* Efeito Fade out (esfumaçado) impecável na base da Hero, conectando a imagem escura ao fundo creme natural da próxima seção */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>

            {/* Content wrapper - Centered */}
            <div className="relative z-10 w-full max-w-4xl text-cream flex flex-col items-center gap-6 mt-10 md:mt-16 mb-8 md:mb-0 text-center">

                {/* Typographic Pattern */}
                <div className="flex flex-col items-center relative z-20">
                    <h1 className="flex flex-col gap-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-center">
                        <span className="hero-stagger font-sans-bold text-3xl md:text-5xl lg:text-6xl text-cream uppercase tracking-wide">
                            Perfeição do Sorriso
                        </span>
                        <span className="hero-stagger font-serif-drama text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.85]">
                            E o <span className="text-accent">Equilíbrio.</span>
                        </span>
                    </h1>

                    <p className="hero-stagger font-sans-outfit text-lg md:text-xl text-cream/90 max-w-2xl font-light mt-10 leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                        Odontologia completa e de alta qualidade para toda sua família. Atendimento humanizado, conforto e tratamentos de ponta porque a sua saúde e estética são nossa prioridade.
                    </p>
                </div>

                <div className="hero-stagger mt-8 flex flex-col sm:flex-row gap-6 items-center">
                    <button
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden bg-accent text-white px-10 py-4 rounded-[2.5rem] font-sans-outfit text-base font-bold hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                            Agendar uma Avaliação
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                        <div className="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>

                    <div className="font-sans-bold text-sm text-white drop-shadow-lg tracking-widest sm:pl-6 sm:border-l border-white/40 text-center sm:text-left bg-dark/30 backdrop-blur-md px-4 py-3 rounded-2xl mx-2">
                        Clínica Geral • Limpezas <br />
                        Ortodontia • Próteses
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-stagger absolute bottom-10 left-0 w-full z-10 flex justify-center pointer-events-none">
                <div
                    className="flex flex-col items-center gap-2 pointer-events-auto cursor-pointer group bg-dark/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-dark/60 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                    onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="font-mono-data text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-cream font-bold text-center whitespace-nowrap">Conheça a Souffi</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-accent group-hover:translate-y-1 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
