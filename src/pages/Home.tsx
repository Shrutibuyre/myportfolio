import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Download, Eye, Github } from 'lucide-react';

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Design Side - Left */}
      <div className={`w-full lg:w-1/2 min-h-screen bg-white flex items-center justify-center p-8 lg:p-16 relative transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-gray-300 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-8 w-16 h-16 border border-gray-300 rounded-full"></div>
        </div>

        <div className="max-w-lg text-center lg:text-left relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl mb-6 mx-auto lg:mx-0">
              <Palette className="h-10 w-10 text-[#00ADB5]" />
            </div>
            
            <h1 className="font-poppins text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              UI/UX
              <br />
              <span className="text-[#00ADB5]">Designer</span>
            </h1>
            
            <p className="font-roboto text-xl text-gray-600 mb-8 leading-relaxed">
              Crafting beautiful, intuitive digital experiences that connect users with technology through thoughtful design and seamless interactions.
            </p>
          </div>
          
          <div className="space-y-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-3 bg-[#00ADB5] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#00ADB5]/90 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <Eye className="h-5 w-5" />
              <span>View Design Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
              {['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-[#00ADB5] hover:text-[#00ADB5] transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Design Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-100">
            <div className="text-center lg:text-left">
              <div className="font-poppins text-3xl font-bold text-[#00ADB5] mb-1">50+</div>
              <div className="font-roboto text-sm text-gray-600">Design Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-poppins text-3xl font-bold text-[#00ADB5] mb-1">5+</div>
              <div className="font-roboto text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

      {/* Development Side - Right */}
      <div className={`w-full lg:w-1/2 min-h-screen bg-[#121212] flex items-center justify-center p-8 lg:p-16 relative transition-all duration-1000 delay-300 ${
        mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
        {/* Background Code Pattern */}
        <div className="absolute inset-0 opacity-50 font-mono text-xs text-[#00ADB5] overflow-hidden">
          <div className="absolute top-16 left-8">
            <div>const developer = &#123;</div>
            <div className="ml-4">name: 'Shruti Buyre',</div>
            <div className="ml-4">skills: ['React', 'TypeScript'],</div>
            <div className="ml-4">passion: 'Clean Code'</div>
            <div>&#125;;</div>
          </div>
          <div className="absolute bottom-20 right-8">
            <div>function buildAmazingApps() &#123;</div>
            <div className="ml-4">return creativity + code;</div>
            <div>&#125;</div>
          </div>
        </div>

        <div className="max-w-lg text-center lg:text-left relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-900 to-[#00ADB5] rounded-2xl mb-6 mx-auto lg:mx-0">
              <Code className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="font-poppins text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Frontend
              <br />
              <span className="text-[#00ADB5]">Developer</span>
            </h1>
            
            <p className="font-roboto text-xl text-gray-300 mb-8 leading-relaxed">
              Building responsive, performant web applications with modern technologies, clean architecture, and pixel-perfect implementations.
            </p>
          </div>
          
          <div className="space-y-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-3 bg-[#00ADB5] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#00ADB5]/90 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <Github className="h-5 w-5" />
              <span>View Code Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-[#00ADB5] hover:text-[#00ADB5] transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Development Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-800">
            <div className="text-center lg:text-left">
              <div className="font-poppins text-3xl font-bold text-[#00ADB5] mb-1">100+</div>
              <div className="font-roboto text-sm text-gray-400">Commits This Month</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-poppins text-3xl font-bold text-[#00ADB5] mb-1">25+</div>
              <div className="font-roboto text-sm text-gray-400">Projects Built</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Resume Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#00ADB5] text-white p-4 rounded-full shadow-2xl hover:bg-[#00ADB5]/90 transition-all duration-300 hover:scale-110 group">
          <Download className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-400"></div>
          <div className="text-xs font-medium">Scroll</div>
        </div>
      </div>
    </div>
  );
};

export default Home;