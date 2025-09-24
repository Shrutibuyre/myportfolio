import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import PersonalProjects from './components/PersonalProjects';
import ArtworkGallery from './components/ArtworkGallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import { useTheme } from './contexts/ThemeContext';

const AppContent = () => {
  const { themeConfig } = useTheme();

  return (
    <div className={`min-h-screen ${themeConfig.background} relative overflow-x-hidden`}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <PersonalProjects />
        <CaseStudies />
        <ArtworkGallery />
        <Contact />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;