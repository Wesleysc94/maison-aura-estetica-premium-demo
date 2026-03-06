import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll restoration for cross-page anchor links
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          setIsScrolled(self.direction === 1 || self.progress > 0);
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'inicio') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[3rem] px-5 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-12 w-[95%] max-w-5xl
        ${isScrolled
          ? 'bg-primary/95 backdrop-blur-xl border border-primary-foreground/10 shadow-lg text-primary-foreground'
          : 'bg-transparent text-white'
        }
      `}
    >
      <div className="font-sans-bold font-bold text-xl tracking-tight drop-shadow-sm">
        Aura Odonto Premium
      </div>

      <ul className="hidden md:flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-4 lg:gap-x-8 gap-y-2 font-sans-outfit text-sm lg:text-base font-medium">
        {[
          { label: 'Início', id: 'inicio' },
          { label: 'A Clínica', id: 'sobre' },
          { label: 'Equipe', id: 'equipe' },
          { label: 'Avaliações', id: 'avaliacoes' },
          { label: 'Tratamentos', id: 'tratamentos' },
          { label: 'Localização', id: 'contato' }
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className="cursor-pointer hover:text-accent font-semibold whitespace-nowrap transition-colors hover:-translate-y-[1px] transform drop-shadow-sm"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleNavClick('contato')}
        className="group relative overflow-hidden bg-gradient-to-r from-accent/90 to-accent text-accent-foreground px-6 py-2.5 rounded-[2rem] font-sans-outfit text-sm font-bold hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0 shadow-[0_0_15px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_20px_hsl(var(--accent)/0.6)]"
      >
        <span className="relative z-10 flex items-center gap-2 whitespace-nowrap drop-shadow-sm">
          <span className="hidden sm:inline">Agendar Avaliação</span>
          <span className="sm:hidden">Agendar</span>
        </span>
        <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
      </button>
    </nav>
  );
};

export default Navbar;
