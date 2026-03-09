import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
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
          "rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-primary/70 transition-all duration-300 hover:bg-white/70 hover:text-primary",
          isActive && "bg-white text-primary shadow-[0_12px_40px_-24px_rgba(90,70,58,0.7)]",
        )
      }
    >
      {label}
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/10 px-6 pb-28 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr,0.8fr,0.9fr]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
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
      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-24 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_rgba(37,211,102,0.9)] transition-transform duration-300 hover:-translate-y-1"
      >
        WhatsApp
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-primary/10 bg-background/95 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/60">
              Agendamento premium
            </p>
            <p className="text-sm text-primary/70">
              Avaliacao estrategica com plano facial autoral e atendimento com horario marcado.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/contato" className="premium-button flex-1 justify-center sm:flex-none">
              Agendar avaliacao
            </Link>
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="premium-button-secondary flex-1 justify-center sm:flex-none"
            >
              Falar no WhatsApp
            </a>
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
      <div className="ambient-orb left-[-10rem] top-[-4rem] h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(216,194,183,0.24),transparent_70%)]" />
      <div className="ambient-orb right-[-10rem] top-[18rem] h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,rgba(198,167,123,0.16),transparent_72%)]" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 py-3 shadow-[0_20px_90px_-50px_rgba(90,70,58,0.5)] backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-background shadow-[0_18px_50px_-18px_rgba(62,52,46,0.8)]">
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
            <Link to="/contato" className="premium-button">
              Agendar consulta
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-background text-primary lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-6xl rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-[0_20px_90px_-48px_rgba(90,70,58,0.58)] backdrop-blur-xl lg:hidden">
            <div className="grid gap-2">
              {clinic.nav.map((item) => (
                <HeaderLink key={item.href} href={item.href} label={item.label} />
              ))}
              <Link to="/contato" className="premium-button mt-2 justify-center">
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
