import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "./theme-context";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "clinic" ? "luxury" : "clinic")}
      className="theme-fab fixed bottom-24 left-5 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/90 text-primary shadow-[0_20px_55px_-30px_rgba(90,70,58,0.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-0.5 sm:flex"
      aria-label="Alternar tema"
    >
      {theme === "clinic" ? (
        <MoonStar className="h-5 w-5" />
      ) : (
        <SunMedium className="h-5 w-5 text-accent" />
      )}
    </button>
  );
};
