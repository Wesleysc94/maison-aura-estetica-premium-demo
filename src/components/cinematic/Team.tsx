import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Team = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.team-card',
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="equipe" ref={containerRef} className="py-12 md:py-16 px-8 md:px-16 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Content Side (Left / Top in mobile) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 team-element">
                    <span className="w-8 h-[1px] bg-accent" />
                    <span className="font-mono-data text-xs text-accent uppercase tracking-widest font-semibold">
                        Direção Clínica
                    </span>
                </div>

                <h2 className="font-serif-drama text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight team-element">
                    A excelência por trás do seu sorriso.
                </h2>

                <p className="font-sans-outfit text-primary/70 text-lg leading-relaxed mb-8 team-element">
                    Mais do que tratar dentes, nossa filosofia é baseada na arquitetura facial e no acolhimento humano. Cada paciente carrega uma história, e nosso papel é materializar sua melhor versão com precisão cirúrgica e visão artística.
                </p>

                {/* Professional Info */}
                <div className="flex flex-col gap-2 border-l-2 border-accent/40 pl-6 mb-10 team-element">
                    <span className="font-sans-bold text-xl text-primary tracking-wide">Dra. Amanda Souffi</span>
                    <span className="font-mono-data text-xs text-accent uppercase tracking-widest">Cirurgiã-Dentista | CRO SP 00000</span>
                </div>

                {/* Stats / Badges */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 team-element">
                    <div className="flex flex-col gap-1">
                        <span className="font-serif-drama text-3xl text-primary">+10</span>
                        <span className="font-sans-outfit text-xs text-primary/50 uppercase tracking-wider">Anos de Experiência</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-serif-drama text-3xl text-primary">+5k</span>
                        <span className="font-sans-outfit text-xs text-primary/50 uppercase tracking-wider">Pacientes Atendidos</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-serif-drama text-3xl text-primary">USP</span>
                        <span className="font-sans-outfit text-xs text-primary/50 uppercase tracking-wider">Especialização</span>
                    </div>
                </div>
            </div>

            {/* Image Side (Right) */}
            <div className="w-full lg:w-1/2 relative team-element">
                <div className="team-card aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/5] w-full max-w-lg mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop")', // Foto de Equipe Dentistas
                            filter: 'contrast(1.05) saturate(0.95)'
                        }}
                    ></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
            </div>

        </section>
    );
};

export default Team;
