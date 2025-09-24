import React from 'react';
import { ExternalLink, Github, Calendar, MapPin, Video, Users, Cloud, Database } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const PersonalProjects = () => {
  const { themeConfig } = useTheme();

  const projects = [
    {
      title: "Airbnb Clone",
      subtitle: "Travel & Listing Platform",
      duration: "Feb 2024 - Mar 2024",
      description: "A comprehensive full-stack travel booking platform inspired by Airbnb with advanced features for property management and user experience.",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Listing creation with detailed property information",
        "Advanced search with filters (location, price, amenities)",
        "Interactive map-based geolocation using MapBox",
        "Secure user authentication and authorization",
        "Image upload and management with Cloudinary",
        "Property management dashboard for hosts",
        "Mobile-first responsive design"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "MapBox API", "Cloudinary", "Tailwind CSS", "Material UI", "Express.js"],
      highlights: [
        { icon: <MapPin className="text-blue-400" size={20} />, text: "Interactive Maps" },
        { icon: <Cloud className="text-green-400" size={20} />, text: "Cloud Storage" },
        { icon: <Users className="text-purple-400" size={20} />, text: "User Management" },
        { icon: <Database className="text-orange-400" size={20} />, text: "Data Management" }
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Full-Stack"
    },
    {
      title: "Zoom Clone",
      subtitle: "Live Video Conferencing App",
      duration: "Jan 2023 - Mar 2023",
      description: "A real-time video conferencing application with comprehensive communication features, built to handle multiple participants and interactive sessions.",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Real-time video conferencing with WebRTC",
        "Live chat functionality during meetings",
        "Screen sharing capabilities",
        "Participant management and controls",
        "Meeting scheduling and invitations",
        "Secure authentication and session management",
        "Cross-platform compatibility"
      ],
      technologies: ["React.js", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express.js", "Render", "JWT"],
      highlights: [
        { icon: <Video className="text-red-400" size={20} />, text: "HD Video Calls" },
        { icon: <Users className="text-blue-400" size={20} />, text: "Multi-participant" },
        { icon: <Cloud className="text-green-400" size={20} />, text: "Cloud Deployed" },
        { icon: <Database className="text-purple-400" size={20} />, text: "Session Storage" }
      ],
      color: "from-purple-500 to-pink-500",
      category: "Real-time App"
    }
  ];

  return (
    <section id="personal-projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeConfig.textPrimary} mb-6`}>
            Personal <span className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}>Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${themeConfig.gradient} mx-auto mb-4`}></div>
          <p className={`${themeConfig.textSecondary} text-lg max-w-2xl mx-auto`}>
            Innovative full-stack applications showcasing advanced development skills and creative problem-solving
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${themeConfig.cardBg} ${themeConfig.border} border rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Image Column */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group/image`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover/image:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover/image:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover/image:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover/image:translate-y-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover/image:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/image:translate-y-0">
                      <div className="flex gap-2">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                          <ExternalLink size={18} />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                          <Github size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className={`${themeConfig.cardBg} ${themeConfig.border} border rounded-xl p-4 text-center hover:scale-105 transition-all duration-300`}
                        style={{ animationDelay: `${hIndex * 0.1}s` }}
                      >
                        <div className="flex justify-center mb-2">
                          {highlight.icon}
                        </div>
                        <p className={`${themeConfig.textSecondary} text-sm font-medium`}>{highlight.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className={`${themeConfig.textSecondary}`} size={20} />
                      <span className={`${themeConfig.textSecondary} text-sm font-medium`}>{project.duration}</span>
                    </div>
                    
                    <h3 className={`text-3xl lg:text-4xl font-bold ${themeConfig.textPrimary} mb-2`}>
                      {project.title}
                    </h3>
                    <p className={`text-xl font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4`}>
                      {project.subtitle}
                    </p>
                    <p className={`${themeConfig.textSecondary} leading-relaxed text-lg`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h4 className={`text-xl font-bold ${themeConfig.textPrimary} mb-4`}>Key Features:</h4>
                    <div className="grid gap-3">
                      {project.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className={`flex items-start gap-3 p-3 ${themeConfig.cardBg} ${themeConfig.border} border rounded-lg hover:scale-[1.02] transition-all duration-300`}
                          style={{ animationDelay: `${fIndex * 0.05}s` }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}></div>
                          <span className={`${themeConfig.textSecondary} text-sm leading-relaxed`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-xl font-bold ${themeConfig.textPrimary} mb-4`}>Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 ${themeConfig.cardBg} ${themeConfig.border} border rounded-full ${themeConfig.textSecondary} text-sm font-medium hover:scale-105 transition-all duration-300 hover:shadow-md`}
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className={`flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                    <button className={`flex items-center gap-2 ${themeConfig.cardBg} ${themeConfig.border} border ${themeConfig.textPrimary} px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                      <Github size={18} />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Showcase */}
        <div className="mt-20">
          <div className={`${themeConfig.cardBg} ${themeConfig.border} border rounded-3xl p-12 text-center`}>
            <h3 className={`text-3xl font-bold ${themeConfig.textPrimary} mb-6`}>
              Full-Stack Development Expertise
            </h3>
            <p className={`${themeConfig.textSecondary} text-lg mb-8 max-w-3xl mx-auto`}>
              These projects demonstrate my ability to build complete, production-ready applications from concept to deployment, 
              showcasing both frontend finesse and backend robustness.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Frontend Excellence", desc: "React, responsive design, user experience", icon: "🎨" },
                { title: "Backend Mastery", desc: "Node.js, databases, API development", icon: "⚙️" },
                { title: "DevOps & Deployment", desc: "Cloud deployment, performance optimization", icon: "🚀" }
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`${themeConfig.cardBg} ${themeConfig.border} border rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className={`text-xl font-bold ${themeConfig.textPrimary} mb-2`}>{skill.title}</h4>
                  <p className={`${themeConfig.textSecondary} text-sm`}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;