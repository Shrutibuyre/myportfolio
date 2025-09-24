import React from 'react';
import { Palette, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme, themeConfig } = useTheme();

  const themes = [
    { key: 'pastel', label: 'Pastel', icon: <Palette size={16} /> },
    { key: 'dark', label: 'Dark', icon: <Moon size={16} /> },
    { key: 'bw', label: 'B&W', icon: <Sun size={16} /> }
  ];

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className={`${themeConfig.cardBg} ${themeConfig.border} border rounded-full p-2 shadow-lg`}>
        <div className="flex gap-1">
          {themes.map((t) => (
            <button
              key={t.key}
              onClick={() => setTheme(t.key as any)}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === t.key
                  ? `bg-gradient-to-r ${themeConfig.accent} text-white shadow-md`
                  : `${themeConfig.textSecondary} hover:bg-black/10`
              }`}
              title={t.label}
            >
              {t.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;