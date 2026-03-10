import { useEffect, useState, type ReactNode } from "react";
import { ThemeProviderContext, type Theme, type ThemeProviderState } from "./theme-context";

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}

export function ThemeProvider({
    children,
    defaultTheme = 'clinic',
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem('Aura-theme') as Theme) || defaultTheme
    );

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'luxury') {
            root.setAttribute('data-theme', 'luxury');
        } else {
            root.removeAttribute('data-theme');
        }
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem('Aura-theme', theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}
