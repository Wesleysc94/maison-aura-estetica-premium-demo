import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (path: string, hash?: string) => {
        if (location.pathname !== path) {
            navigate(hash ? `${path}#${hash}` : path);
        } else if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-dark text-cream pt-12 pb-8 px-6 md:px-12 rounded-t-[3rem] relative mt-16">

            {/* Powerful Pre-Footer CTA */}
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 mb-12 border-b border-white/10 pb-12 mt-4">
                <h2 className="font-serif-drama text-4xl md:text-5xl lg:text-6xl text-cream leading-tight drop-shadow-md">
                    Agende sua avaliação
                </h2>
                <p className="font-sans-outfit text-cream/70 text-lg md:text-xl max-w-xl font-light">
                    Estamos prontos para cuidar do seu sorriso. Entre em contato e descubra qual tratamento é ideal para você com nossa equipe de especialistas.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-xl">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group relative w-full sm:w-1/2 overflow-hidden bg-accent text-white px-8 py-4 rounded-[2.5rem] font-sans-outfit text-base font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex justify-center"
                    >
                        <span className="relative z-10">Agendar Avaliação</span>
                        <div className="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <button
                        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                        className="group relative w-full sm:w-1/2 overflow-hidden bg-[#25D366] text-white px-8 py-4 rounded-[2.5rem] font-sans-outfit text-base font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] flex justify-center"
                    >
                        <span className="relative z-10 flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Falar no WhatsApp
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

                {/* Brand & System Status */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="font-sans-bold text-3xl tracking-tight text-cream">
                        Aura Odonto Premium
                    </div>
                    <p className="font-sans-outfit text-cream/60 text-sm leading-relaxed">
                        Odontologia de excelência em Guaianases. Precisão clínica, reabilitação avançada e estética natural em um ambiente humano e acolhedor.
                    </p>

                    <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="font-mono-data text-xs text-cream/80 uppercase tracking-widest">
                            Sistema Operacional
                        </span>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-2xl font-sans-outfit">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-mono-data text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-accent"></span> A Clínica
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <button onClick={() => handleNavClick('/', 'sobre')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Sobre a Aura</button>
                            <button onClick={() => handleNavClick('/', 'especialidades')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Nossos Diferenciais</button>
                            <button onClick={() => handleNavClick('/', 'avaliacoes')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Testemunhos</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-mono-data text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-accent"></span> Tratamentos
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <button onClick={() => handleNavClick('/tratamentos/prevencao-integral')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Prevenção e Limpeza</button>
                            <button onClick={() => handleNavClick('/tratamentos/ortodontia')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Ortodontia e Estética</button>
                            <button onClick={() => handleNavClick('/tratamentos/reabilitacao')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Reabilitação Oral</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 col-span-1 md:col-span-2 lg:col-span-1">
                        <h4 className="font-mono-data text-xs text-accent uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-accent"></span> Contato
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <span className="text-cream/50 xl:text-cream/70 block">Guaianases, São Paulo - SP</span>
                            <span className="text-cream/50 xl:text-cream/70 block">WhatsApp: (11) 99999-9999</span>
                            <button
                                onClick={() => handleNavClick('/', 'contato')}
                                className="text-left text-accent border-b border-accent/30 hover:border-accent hover:text-white transition-all w-max pb-0.5 mt-2"
                            >
                                Agendar Avaliação &rarr;
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono-data text-xs text-cream/40 px-4">
                <span>&copy; {new Date().getFullYear()} Aura Odonto Premium. Todos os direitos reservados.</span>
                <div className="flex gap-6">
                    <button onClick={(e) => e.preventDefault()} className="hover:text-cream/80 transition-colors">Privacidade</button>
                    <button onClick={(e) => e.preventDefault()} className="hover:text-cream/80 transition-colors">Termos</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
