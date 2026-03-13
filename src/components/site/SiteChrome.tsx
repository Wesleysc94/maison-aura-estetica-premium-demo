import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircleMore,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

import { clinic } from "@/data/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
function HeaderLink({ href, label, isTransparent }: { href: string; label: string; isTransparent?: boolean }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "site-nav-link rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300",
          isTransparent 
            ? "text-white/80 hover:bg-white/10 hover:text-white" 
            : "text-primary/70 hover:bg-card/78 hover:text-primary",
          isActive && (isTransparent ? "bg-white/15 text-white" : "bg-card/92 text-primary shadow-sm")
        )
      }
    >
      {label}
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="mt-24 px-6 pb-28 pt-6 sm:px-8 lg:px-12">
      <div className="site-shell-footer mx-auto grid max-w-6xl gap-10 rounded-[2.6rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,250,252,0.88),rgba(248,238,242,0.94))] p-8 shadow-[0_34px_120px_-68px_rgba(118,72,92,0.28)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 md:grid-cols-[1.3fr,0.8fr,0.9fr]">
        <div className="space-y-5">
          <span className="luxury-chip">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {clinic.badge}
          </span>
          <div>
            <p className="font-display text-4xl text-primary">{clinic.name}</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-primary/70">
              {clinic.tagline}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/60">
            Navegacao
          </p>
          <div className="grid gap-3">
            {clinic.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-primary/70 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/60">
            Contato
          </p>
          <div className="space-y-3 text-sm text-primary/70">
            <a className="flex items-center gap-3 hover:text-primary" href={clinic.whatsapp}>
              <Phone className="h-4 w-4 text-accent" />
              {clinic.phone}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              {clinic.address}
            </p>
            <p className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 text-accent" />
              {clinic.hours[0]}
            </p>
            <a className="flex items-center gap-3 hover:text-primary" href={clinic.instagram}>
              <Instagram className="h-4 w-4 text-accent" />
              Instagram da clinica
            </a>
          </div>
          <div className="metric-card px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/45">
              Status
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-primary/72">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Sistema operacional para novos agendamentos
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={clinic.whatsapp}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: [1, 1.01, 1],
        boxShadow: [
          "0 18px 40px -24px rgba(18, 143, 79, 0.26)",
          "0 24px 54px -22px rgba(18, 143, 79, 0.42)",
          "0 18px 40px -24px rgba(18, 143, 79, 0.26)",
        ],
      }}
      transition={{
        opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ y: -3, scale: 1.03 }}
      className="site-shell-fab fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[rgba(20,20,20,0.84)] px-3 py-3 text-sm font-semibold text-white backdrop-blur-xl sm:bottom-6 sm:right-6 sm:px-4"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </motion.a>
  );
}

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Inversão de cor somente após o hero/social proof (aprox 100vh - header height)
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Chama imediatamente para setar o estado inicial correto em loads na metade da pagina
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeTop = location.pathname === "/" && !isScrolled && !menuOpen;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-primary">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(148,93,118,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[22rem] z-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,184,195,0.2),transparent_72%)] blur-3xl" />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <div className="mx-auto mb-3 hidden max-w-6xl items-center justify-center rounded-full border border-white/10 bg-[rgba(52,31,39,0.62)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/72 shadow-[0_18px_44px_-30px_rgba(40,21,29,0.65)] backdrop-blur-xl lg:flex">
          Consultas privadas no Jardins . Planejamento facial autoral . Atendimento com horario marcado
        </div>
        <div 
          className={cn(
            "site-shell-header mx-auto flex max-w-6xl items-center justify-between rounded-[2.2rem] px-5 py-3 transition-all duration-500 hover:-translate-y-1",
            isHomeTop 
              ? "border border-white/10 bg-[rgba(54,33,42,0.34)] shadow-[0_24px_90px_-54px_rgba(29,13,19,0.38)] backdrop-blur-xl" 
              : "border border-border/70 bg-background/82 shadow-[0_24px_90px_-54px_rgba(111,72,90,0.24)] backdrop-blur-2xl"
          )}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 bg-[linear-gradient(135deg,#6f3852,#bf7e9c)] text-background shadow-[0_18px_50px_-18px_rgba(62,52,46,0.45)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className={cn("font-display text-2xl leading-none transition-colors duration-500", isHomeTop ? "text-white" : "text-primary")}>
                {clinic.name}
              </p>
              <p className={cn("text-[10px] uppercase tracking-[0.32em] transition-colors duration-500", isHomeTop ? "text-white/80" : "text-primary/60")}>
                Estetica facial premium
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {clinic.nav.map((item) => (
              <HeaderLink key={item.href} href={item.href} label={item.label} isTransparent={isHomeTop} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link to="/contato" className="premium-button">
              Agendar consulta
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden",
              isHomeTop ? "border-white/20 bg-white/10 text-white" : "border-border/70 bg-background/84 text-primary"
            )}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="site-shell-mobile mx-auto mt-3 max-w-6xl rounded-[1.9rem] border border-border/70 bg-background/90 p-4 shadow-[0_20px_90px_-48px_rgba(90,70,58,0.24)] backdrop-blur-xl lg:hidden">
            <div className="grid gap-2">
              <div className="mb-2 rounded-[1.4rem] border border-border/60 bg-primary/5 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/55">
                Consultas privadas no Jardins
              </div>
              {clinic.nav.map((item) => (
                <HeaderLink key={item.href} href={item.href} label={item.label} />
              ))}
              <div className="mt-2 flex items-center gap-3">
                <ThemeToggle />
                <Link to="/contato" className="premium-button flex-1 justify-center">
                  Agendar consulta
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
