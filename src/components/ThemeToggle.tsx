import { MoonStar, SunMedium } from "lucide-react";

import { cn } from "@/lib/utils";

import { useTheme } from "./theme-context";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "clinic" ? "luxury" : "clinic")}
      className={cn(
        "theme-fab inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background text-primary shadow-[0_16px_40px_-28px_rgba(90,70,58,0.22)] transition duration-300 hover:bg-card",
        className,
      )}
      aria-label="Alternar tema"
      type="button"
    >
      {theme === "clinic" ? (
        <MoonStar className="h-5 w-5" />
      ) : (
        <SunMedium className="h-5 w-5 text-accent" />
      )}
    </button>
  );
};
