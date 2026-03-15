import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
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
          "site-nav-link rounded-full px-4 py-2 text-sm font-semibold tracking-wide",
          isTransparent && "site-nav-link--transparent",
          isActive && "site-nav-link--active"
        )
      }
    >
      <span className="site-nav-link__label">{label}</span>
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
    <a
      href={clinic.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="site-shell-fab fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[rgba(20,20,20,0.84)] px-3 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-22px_rgba(18,143,79,0.35)] sm:bottom-6 sm:right-6 sm:px-4"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHomeTop = location.pathname === "/" && !menuOpen;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-primary">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <div
          className={cn(
            "site-shell-header mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] px-5 py-3 backdrop-blur-xl transition-colors duration-300",
            isHomeTop
              ? "border border-white/12 bg-[rgba(54,33,42,0.68)] shadow-[0_24px_60px_-50px_rgba(29,13,19,0.44)]"
              : "border border-border/75 bg-background/96 shadow-[0_20px_60px_-50px_rgba(111,72,90,0.28)]"
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
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
              isHomeTop ? "border-white/20 bg-white/10 text-white" : "border-border/70 bg-background/84 text-primary"
            )}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[rgba(27,16,22,0.34)] lg:hidden"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="site-shell-mobile fixed inset-x-4 top-[5.75rem] z-50 rounded-[1.75rem] border border-border/70 bg-background p-4 shadow-[0_24px_64px_-44px_rgba(90,70,58,0.28)] lg:hidden sm:inset-x-8">
            <div className="mb-3 rounded-[1.25rem] bg-primary/5 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/55">
              Navegacao da clinica
            </div>
            <div className="grid gap-2">
              {clinic.nav.map((item) => (
                <HeaderLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <ThemeToggle />
              <Link to="/contato" className="premium-button flex-1 justify-center">
                Agendar consulta
              </Link>
            </div>
          </div>
        </>
      )}

      <main>
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
