import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarClock,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

import { clinic } from "@/data/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "site-nav-link rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-primary/68 transition-all duration-500 hover:bg-card/78 hover:text-primary",
          isActive && "site-nav-link-active bg-card/92 text-primary shadow-[0_18px_44px_-24px_rgba(100,60,79,0.32)]",
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
      <div className="site-shell-footer mx-auto grid max-w-6xl gap-10 rounded-[2.4rem] border border-border/70 bg-background/76 p-8 shadow-[0_34px_120px_-68px_rgba(118,72,92,0.24)] backdrop-blur-2xl md:grid-cols-[1.3fr,0.8fr,0.9fr]">
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
        </div>
      </div>
    </footer>
  );
}

function StickyActions() {
  return (
    <>
      <motion.a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -4 }}
        className="site-shell-fab group fixed bottom-24 right-5 z-40 hidden items-center gap-2 rounded-full border border-border/70 bg-background/88 px-4 py-3 text-sm font-semibold text-primary shadow-[0_22px_55px_-28px_rgba(111,72,90,0.26)] backdrop-blur-xl sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
          <Phone className="h-4 w-4" />
        </span>
        Falar
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </motion.a>

      <div className="fixed bottom-3 left-4 right-4 z-30 sm:left-1/2 sm:right-auto sm:w-[min(960px,calc(100%-2rem))] sm:-translate-x-1/2">
        <div className="site-shell-sticky rounded-[2rem] border border-border/70 bg-background/84 px-4 py-3 shadow-[0_22px_88px_-44px_rgba(111,72,90,0.24)] backdrop-blur-2xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/55">
                Agendamento discreto
              </p>
              <p className="hidden text-sm text-primary/70 sm:block">
                Consulta estrategica com horario reservado, orientacao clara e contato facilitado.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/contato" className="premium-button button-shimmer flex-1 justify-center sm:flex-none">
                <CalendarClock className="h-4 w-4" />
                Agendar avaliacao
              </Link>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary button-shimmer flex-1 justify-center sm:flex-none"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-primary">
      <div className="ambient-orb left-[-10rem] top-[-4rem] h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(220,174,192,0.28),transparent_70%)]" />
      <div className="ambient-orb right-[-10rem] top-[18rem] h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,rgba(228,198,177,0.18),transparent_72%)]" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <div className="site-shell-header mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] border border-border/70 bg-background/82 px-5 py-3 shadow-[0_24px_90px_-54px_rgba(111,72,90,0.24)] backdrop-blur-2xl">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6f3852,#bf7e9c)] text-background shadow-[0_18px_50px_-18px_rgba(62,52,46,0.45)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-primary">{clinic.name}</p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-primary/60">
                Estetica facial premium
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {clinic.nav.map((item) => (
              <HeaderLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contato" className="premium-button button-shimmer">
              Agendar consulta
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/84 text-primary lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="site-shell-mobile mx-auto mt-3 max-w-6xl rounded-[1.9rem] border border-border/70 bg-background/86 p-4 shadow-[0_20px_90px_-48px_rgba(90,70,58,0.24)] backdrop-blur-xl lg:hidden">
            <div className="grid gap-2">
              {clinic.nav.map((item) => (
                <HeaderLink key={item.href} href={item.href} label={item.label} />
              ))}
              <Link to="/contato" className="premium-button button-shimmer mt-2 justify-center">
                Agendar consulta
              </Link>
            </div>
          </div>
        )}
      </header>

      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} {...pageTransition}>
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ThemeToggle />
      <StickyActions />
    </div>
  );
}
