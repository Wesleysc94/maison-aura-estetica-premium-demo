import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, description, icon, delay }: { title: string, description: string, icon: React.ReactNode, delay: number }) => {
    return (
        <div className="feature-card bg-primary/5 backdrop-blur-md border border-border/20 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-accent/40 hover:bg-primary/10 transition-colors duration-300 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-accent shadow-inner">
                {icon}
            </div>
            <div>
                <h3 className="font-sans-bold text-xl text-primary mb-3 drop-shadow-sm">{title}</h3>
                <p className="font-sans-outfit text-primary/70 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export const Features = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-10 lg:py-16 px-8 md:px-16 w-full max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-12 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-accent" />
                    <span className="font-mono-data text-xs text-accent uppercase tracking-widest font-semibold">
                        A Clínica
                    </span>
                </div>

                <h2 className="font-serif-drama text-5xl md:text-7xl text-primary mb-6 leading-none">
                    Nossos Diferenciais.
                </h2>

                <p className="font-sans-outfit text-lg text-primary/70 max-w-xl">
                    Cuidamos de sorrisos com excelência e dedicação. Conheça os pilares que tornam o nosso atendimento único e focado no seu bem-estar.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                    delay={0}
                    title="Atendimento Humanizado"
                    description="Sabemos que ir ao dentista pode gerar ansiedade em algumas pessoas. Nosso processo de atendimento foca totalmente no seu conforto, sem pressa, tirando todas as suas dúvidas com muito cuidado e atenção."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" /><path d="m18 15-2-2" /><path d="m15 18-2-2" /></svg>}
                />

                <FeatureCard
                    delay={0.15}
                    title="Tecnologia e Precisão"
                    description="Tratamentos seguros e previsíveis. Utilizamos técnicas atualizadas para reabilitar a função mastigatória e proporcionar resultados estéticos naturais, usando materiais duráveis e de alta qualidade."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-microscope"><path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></svg>}
                />

                <FeatureCard
                    delay={0.3}
                    title="Prevenção Contínua"
                    description="A prevenção é sempre o melhor tratamento. Oferecemos profilaxia completa e um plano de acompanhamento periódico para manter seus dentes fortes e saudáveis ao longo de toda a vida."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>}
                />
            </div>

        </section>
    );
};

export default Features;
