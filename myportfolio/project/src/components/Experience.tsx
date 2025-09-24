import React from 'react';
import { Calendar, MapPin, ArrowRight, Building, Users, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Posiview Digital Technologies",
      position: "Software Developer",
      duration: "May 2024 - June 2025",
      location: "Pune",
      type: "Full-time",
      description: "Developing and implementing responsive web applications using React.js, HTML/CSS, and JavaScript.",
      achievements: [
        "Collaborated on UI/UX enhancements and API integration for scalable platforms",
        "Optimized performance using lazy loading, code splitting, and clean component architecture",
        "Reduced load time and improved user experience significantly",
        "Contributed to component-based development methodologies"
      ],
      technologies: ["React.js", "JavaScript", "HTML/CSS", "API Integration", "Performance Optimization"],
      color: "from-purple-500 to-purple-600",
      icon: <Building className="text-purple-400" size={24} />
    },
    {
      company: "Unified Mentor",
      position: "Web Developer Intern",
      duration: "2024",
      location: "Gurugram",
      type: "Internship",
      description: "Assisted in website layout development and design conceptualization.",
      achievements: [
        "Assisted in website layout development and design conceptualization",
        "Engaged in user-focused fixes and improvements",
        "Contributed to design testing and quality assurance",
        "Collaborated with senior developers on various projects"
      ],
      technologies: ["HTML/CSS", "JavaScript", "UI/UX Design", "Testing", "Design Systems"],
      color: "from-pink-500 to-pink-600",
      icon: <Users className="text-pink-400" size={24} />
    },
    {
      company: "Twilearn",
      position: "Web Developer Intern",
      duration: "2024",
      location: "Pune",
      type: "Internship",
      description: "Developed website layouts and integrated databases for enhanced functionality.",
      achievements: [
        "Developed responsive website layouts with modern design principles",
        "Integrated databases for enhanced functionality and data management",
        "Designed sample pages with careful attention to color and typography",
        "Collaborated on frontend and backend integration projects"
      ],
      technologies: ["HTML/CSS", "JavaScript", "Database Integration", "Responsive Design", "Typography"],
      color: "from-blue-500 to-blue-600",
      icon: <Code className="text-blue-400" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            My professional journey in web development and UI/UX design
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left Column - Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} mr-4`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <div className="flex items-center text-white/60 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-white/80">
                      <Calendar size={16} className="mr-2 text-purple-400" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Right Column - Role Details */}
                <div className="lg:w-2/3">
                  <h4 className="text-2xl font-bold text-white mb-3">{exp.position}</h4>
                  <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-white/70">
                          <ArrowRight size={16} className="text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects that make a difference.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;