import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "clinic" ? "luxury" : "clinic")}
      className="fixed bottom-24 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-background/90 text-primary shadow-[0_20px_55px_-30px_rgba(90,70,58,0.65)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
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
