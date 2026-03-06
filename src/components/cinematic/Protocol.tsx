import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        step: "01",
        title: "Avaliação Inicial",
        desc: "Uma consulta detalhada para entender seu histórico e examinar a saúde de seus dentes e gengivas com cuidado e atenção.",
        Animation: () => (
            // Rotating organic/geometric pattern
            <svg className="w-full h-full opacity-60" viewBox="0 0 200 200" fill="none">
                <g className="protocol-anim-1 origin-center">
                    <circle cx="100" cy="100" r="60" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 8" />
                    <circle cx="100" cy="100" r="40" stroke="hsl(var(--primary-foreground))" strokeWidth="0.5" />
                    <path d="M100 20 L100 180 M20 100 L180 100" stroke="hsl(var(--primary-foreground))" strokeWidth="0.5" strokeOpacity="0.3" />
                </g>
            </svg>
        )
    },
    {
        step: "02",
        title: "Plano de Cuidado",
        desc: "Apresentamos as opções de tratamento de forma clara, priorizando os procedimentos mais importantes para eliminar dor e focar na sua saúde em primeiro lugar.",
        Animation: () => (
            // Scanning laser effect
            <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="w-full h-full max-w-sm max-h-64 border border-primary-foreground/20 rounded-xl relative overflow-hidden bg-primary-foreground/5">
                    {/* Grid bg */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)/0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)/0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    {/* Laser line */}
                    <div className="protocol-anim-2 absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
                </div>
            </div>
        )
    },
    {
        step: "03",
        title: "Acompanhamento",
        desc: "O tratamento não acaba na cadeira. Mantemos contato para garantir sua recuperação e agendar os retornos de prevenção com facilidade.",
        Animation: () => (
            // Pulsing EKG/Waveform
            <svg className="w-full h-full opacity-60" viewBox="0 0 200 100" fill="none">
                <path
                    className="protocol-anim-3"
                    d="M0 50 L60 50 L75 20 L90 80 L105 40 L115 60 L130 50 L200 50"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </svg>
        )
    }
];

export const Protocol = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Sticky Stacking Logic
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: containerRef.current,
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                });

                // If there is a card after this one, scale/blur this one down when the next one covers it
                if (i < cardsRef.current.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.3,
                        filter: 'blur(10px)',
                        ease: "none",
                        scrollTrigger: {
                            trigger: cardsRef.current[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true,
                        }
                    });
                }
            });

            // 2. SVG Animations inside the cards
            gsap.to('.protocol-anim-1', {
                rotation: 360,
                duration: 14,
                repeat: -1,
                ease: "linear"
            });

            gsap.fromTo('.protocol-anim-2',
                { top: '0%' },
                { top: '100%', duration: 1.2, repeat: -1, yoyo: true, ease: "power1.inOut" }
            );

            gsap.fromTo('.protocol-anim-3',
                { strokeDasharray: 400, strokeDashoffset: 400 },
                { strokeDashoffset: 0, duration: 1.5, repeat: -1, ease: "power2.inOut" }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-background pt-32 pb-40">
            {/* Header outside the pinned area */}
            <div className="w-full max-w-7xl mx-auto px-8 md:px-16 mb-24 relative z-10">
                <h2 className="font-serif-drama text-5xl md:text-6xl text-primary">Arquivo Fixo.</h2>
                <p className="font-sans-outfit text-primary/70 mt-4 max-w-xl text-lg">
                    O método Souffi de intervenção previsível. Três passos sistemáticos. Zero improviso.
                </p>
            </div>

            {protocols.map((proto, i) => (
                <div
                    key={proto.step}
                    ref={el => cardsRef.current[i] = el}
                    className="h-screen w-full flex items-center justify-center p-8 sticky top-[10vh]"
                >
                    <div className="w-full max-w-5xl h-[70vh] bg-primary/20 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-border/20">

                        {/* Visual/Animation Side */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black/10 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-border/10">
                            <proto.Animation />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full p-12 md:p-16 flex flex-col justify-center">
                            <div className="font-mono-data text-accent text-lg mb-6 tracking-widest border-b border-accent/20 pb-4 inline-block w-max">
                                FASE — {proto.step}
                            </div>
                            <h3 className="font-sans-bold text-3xl md:text-5xl text-primary-foreground mb-6">
                                {proto.title}
                            </h3>
                            <p className="font-sans-outfit text-primary-foreground/70 text-base md:text-lg leading-relaxed">
                                {proto.desc}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
};

export default Protocol;
