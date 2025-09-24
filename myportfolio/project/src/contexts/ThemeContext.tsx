import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'pastel' | 'dark' | 'bw';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: {
    background: string;
    cardBg: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
    gradient: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themeConfigs = {
  pastel: {
    background: 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50',
    cardBg: 'bg-white/80 backdrop-blur-md',
    textPrimary: 'text-gray-800',
    textSecondary: 'text-gray-600',
    accent: 'from-pink-300 to-purple-300',
    border: 'border-pink-200/50',
    gradient: 'from-pink-400 via-purple-400 to-blue-400'
  },
  dark: {
    background: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    cardBg: 'bg-white/5 backdrop-blur-sm',
    textPrimary: 'text-white',
    textSecondary: 'text-white/70',
    accent: 'from-purple-400 to-pink-400',
    border: 'border-white/10',
    gradient: 'from-purple-400 to-pink-400'
  },
  bw: {
    background: 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50',
    cardBg: 'bg-white/90 backdrop-blur-md',
    textPrimary: 'text-black',
    textSecondary: 'text-gray-700',
    accent: 'from-gray-600 to-gray-800',
    border: 'border-gray-300/50',
    gradient: 'from-gray-700 to-black'
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('pastel');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themeConfigs[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themeConfig: themeConfigs[theme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};