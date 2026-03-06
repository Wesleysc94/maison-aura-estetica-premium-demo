import React from 'react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'clinic' ? 'luxury' : 'clinic')}
            className="fixed bottom-6 left-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden shadow-xl
                border border-white/10
                hover:scale-110 hover:shadow-2xl"
            style={{
                background: theme === 'clinic' ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                color: theme === 'clinic' ? 'hsl(var(--accent))' : 'hsl(var(--primary-foreground))'
            }}
            aria-label="Alternar Tema"
        >
            <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${theme === 'luxury' ? 'rotate-180' : 'rotate-0'}`}>
                {/* Icône Modo Clínica (Aura Clean) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`absolute transition-opacity duration-300 ${theme === 'clinic' ? 'opacity-100' : 'opacity-0'}`}
                >
                    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>

                {/* Ícone Modo Luxo (Gema/Diamante) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`absolute transition-opacity duration-300 ${theme === 'luxury' ? 'opacity-100' : 'opacity-0'}`}
                >
                    <path d="m6 9 6-5 6 5M6 9v6l6 5 6-5V9M6 9l6 5 6-5" />
                </svg>
            </div>
        </button>
    );
};
