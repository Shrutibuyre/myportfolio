import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const { themeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#personal-projects', label: 'Personal Projects' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#artwork', label: 'Artwork' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled ? `${themeConfig.cardBg} shadow-lg` : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-bold bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>
            Shruti Buyre
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${themeConfig.textSecondary} hover:${themeConfig.textPrimary.replace('text-', '')} transition-colors duration-300 relative group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${themeConfig.gradient} group-hover:w-full transition-all duration-300`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${themeConfig.textSecondary} hover:${themeConfig.textPrimary.replace('text-', '')} transition-colors duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden ${themeConfig.cardBg} rounded-lg mt-2 p-4`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-2 ${themeConfig.textSecondary} hover:${themeConfig.textPrimary.replace('text-', '')} transition-colors duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;