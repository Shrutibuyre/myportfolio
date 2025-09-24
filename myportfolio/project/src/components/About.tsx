import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: "Full-Stack Development",
      description: "Expert in React, Node.js, and modern web technologies"
    },
    {
      icon: <Palette className="text-pink-400" size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive designs with Figma and Adobe XD"
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: "User-Centered Approach",
      description: "Focused on usability testing and user experience"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Performance Optimization",
      description: "Implementing lazy loading and clean architecture"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate Developer & Designer
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I'm a passionate UI/UX designer and frontend developer based in Pune, India, with a unique blend of 
                creative design skills and technical expertise. My journey in web development has been driven by a 
                love for creating exceptional digital experiences that not only look beautiful but also function flawlessly.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Currently working as a Software Developer at Posiview Digital Technologies, I specialize in developing 
                responsive web applications using React.js, implementing performance optimizations, and creating 
                scalable component-based architectures.
              </p>
              <p className="text-white/70 leading-relaxed">
                I believe in the power of good design and clean code to solve real-world problems and create 
                meaningful connections between users and technology.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "3", label: "Companies Worked" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;