import React, { useState, useEffect } from 'react';
import { Download, MapPin, Mail, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'UI/UX Design', level: 95, category: 'design' },
    { name: 'React', level: 90, category: 'development' },
    { name: 'TypeScript', level: 85, category: 'development' },
    { name: 'Figma', level: 92, category: 'design' },
    { name: 'Tailwind CSS', level: 88, category: 'development' },
    { name: 'Adobe Creative Suite', level: 87, category: 'design' },
    { name: 'Node.js', level: 80, category: 'development' },
    { name: 'Prototyping', level: 90, category: 'design' },
  ];

  const designSkills = skills.filter(skill => skill.category === 'design');
  const developmentSkills = skills.filter(skill => skill.category === 'development');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that bridge the gap between design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className={`transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
                Hello, I'm Shruti Buyre
              </h2>
              
              <div className="space-y-4 font-roboto text-gray-600">
                <p>
                  I'm a passionate UI/UX Designer and Frontend Developer with over 5 years of experience 
                  creating digital experiences that are both beautiful and functional. I believe in the 
                  power of design to solve complex problems and create meaningful connections between 
                  users and technology.
                </p>
                
                <p>
                  My journey began in web development, but I quickly fell in love with the intersection 
                  of design and technology. This unique perspective allows me to bridge the gap between 
                  creative vision and technical implementation, ensuring that designs not only look great 
                  but also work seamlessly.
                </p>
                
                <p>
                  When I'm not designing or coding, you can find me exploring new design trends, 
                  contributing to open-source projects, or mentoring aspiring designers and developers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-[#00ADB5]" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-[#00ADB5]" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-[#00ADB5]" />
                  <span>buyreshruti@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="inline-flex items-center space-x-2 text-[#00ADB5] hover:text-[#00ADB5]/80 text-sm font-medium">
                    <Download className="h-4 w-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className={`transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#00ADB5] to-[#007bff] rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">SB</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">
                Shruti Buyre
              </h3>
              <p className="font-roboto text-gray-600">
                UI/UX Designer & Frontend Developer
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transition-all duration-1000 delay-600 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 text-center mb-12">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design Skills */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                Design Skills
              </h3>
              <div className="space-y-4">
                {designSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-roboto text-gray-700">{skill.name}</span>
                      <span className="font-roboto text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: mounted ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                Development Skills
              </h3>
              <div className="space-y-4">
                {developmentSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-roboto text-gray-700">{skill.name}</span>
                      <span className="font-roboto text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-[#00ADB5] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: mounted ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;