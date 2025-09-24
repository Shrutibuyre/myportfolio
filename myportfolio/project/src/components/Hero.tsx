import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { themeConfig } = useTheme();
  
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8 relative group">
          <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${themeConfig.gradient} p-1 animate-pulse`}>
            <div className={`w-full h-full rounded-full ${themeConfig.cardBg} flex items-center justify-center`}>
              <span className={`text-4xl font-bold ${themeConfig.textPrimary}`}>SB</span>
            </div>
          </div>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${themeConfig.gradient} opacity-75 group-hover:opacity-100 animate-pulse`}></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className={`text-5xl md:text-7xl font-bold ${themeConfig.textPrimary} mb-4`}>
            <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent animate-pulse`}>
              Shruti Buyre
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl ${themeConfig.textSecondary} max-w-2xl mx-auto`}>
            Innovative UI/UX Designer & Frontend Developer
          </p>
          
          <p className={`text-lg ${themeConfig.textSecondary} max-w-3xl mx-auto leading-relaxed opacity-80`}>
            Crafting exceptional digital experiences with a perfect blend of creativity and technical expertise. 
            Specializing in React, modern design systems, and user-centered development.
          </p>

          {/* Contact Info */}
          <div className={`flex flex-wrap justify-center gap-6 ${themeConfig.textSecondary} text-sm opacity-80`}>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9075318809</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>shrutibuyre18@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍 Pune, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://linkedin.com/in/shrutibuyre"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 ${themeConfig.cardBg} ${themeConfig.border} border rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg`}
            >
              <Linkedin size={24} className={themeConfig.textPrimary} />
            </a>
            <a
              href="https://github.com/Shrutibuyre"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 ${themeConfig.cardBg} ${themeConfig.border} border rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg`}
            >
              <Github size={24} className={themeConfig.textPrimary} />
            </a>
            <a
              href="mailto:shrutibuyre18@gmail.com"
              className={`p-3 ${themeConfig.cardBg} ${themeConfig.border} border rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg`}
            >
              <Mail size={24} className={themeConfig.textPrimary} />
            </a>
            <a
              href="#"
              className={`p-3 ${themeConfig.cardBg} ${themeConfig.border} border rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg`}
            >
              <ExternalLink size={24} className={themeConfig.textPrimary} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToNext}
              className={`group bg-gradient-to-r ${themeConfig.accent} text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              Explore My Work
              <ArrowDown size={20} className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${themeConfig.border} rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${themeConfig.textSecondary.replace('text-', 'bg-')} rounded-full mt-2 opacity-50`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;