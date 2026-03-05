import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-primary/10 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="font-sans-bold text-lg text-primary/90 group-hover:text-primary transition-colors">
                    {question}
                </span>
                <div className={`relative w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-accent border-accent text-white' : 'text-accent'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-opacity ${isOpen ? 'opacity-0 absolute' : 'opacity-100'}`}><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 absolute'}`}><path d="M5 12h14" /></svg>
                </div>
            </button>
            <div
                ref={contentRef}
                className="transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    marginBottom: isOpen ? '1.5rem' : '0'
                }}
            >
                <p className="font-sans-outfit text-primary/70 text-base leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export const Faq = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.faq-item',
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
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

    const faqs = [
        {
            question: "O implante dentário dói?",
            answer: "Não. O procedimento é realizado com anestesia local de altíssima precisão e planejamento digital. Nossos pacientes relatam muito mais conforto do que imaginavam. O pós-operatório é super tranquilo, acompanhado de perto com medicação rigorosa para garantir sua rápida recuperação e bem-estar."
        },
        {
            question: "Quanto tempo dura o tratamento?",
            answer: "Cada sorriso é único, mas nossa adoção de tecnologias modernas (como alinhadores invisíveis e fluxo digital) reduz significativamente o tempo na cadeira em comparação com tratamentos do passado. Na sua primeira avaliação, entregaremos um cronograma exato do seu caso para que você se planeje com facilidade."
        },
        {
            question: "O procedimento é seguro?",
            answer: "Absolutamente. Contamos com um corpo clínico altamente especialista, formado nas principais faculdades do país, e seguimos rigorosos protocolos de biossegurança internacional. Todos os materiais utilizados são de padrão premium para garantir durabilidade, resultados naturais e paz de espírito."
        },
        {
            question: "Quanto tempo leva para ver o resultado?",
            answer: "Focamos na máxima eficiência sem perda de qualidade. Alguns procedimentos, como o Clareamento Dental ou Facetas de Resina, podem transformar o seu sorriso em poucas semanas, ou até mesmo no mesmo dia da entrega em fases específicas. Tratamentos arquiteturais terão seu tempo projetado para garantir máxima segurança biológica."
        }
    ];

    return (
        <section id="faq" ref={containerRef} className="py-16 lg:py-24 px-8 md:px-16 w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16">

                {/* Header Side */}
                <div className="w-full md:w-1/3 flex flex-col items-start faq-item">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-[1px] bg-accent" />
                        <span className="font-mono-data text-xs text-accent uppercase tracking-widest font-semibold">
                            Esclarecimentos
                        </span>
                    </div>
                    <h2 className="font-serif-drama text-4xl text-primary mb-6 leading-tight">
                        Dúvidas<br />Frequentes.
                    </h2>
                    <p className="font-sans-outfit text-sm text-primary/60">
                        Transparência é o pilar do nosso atendimento. Separamos as perguntas mais comuns para te dar tranquilidade.
                    </p>
                </div>

                {/* FAQ Accordion Side */}
                <div className="w-full md:w-2/3 flex flex-col">
                    <div className="border-t border-primary/10 faq-item">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Faq;
