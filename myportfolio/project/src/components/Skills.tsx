import React from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Settings,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & UI/UX",
      icon: <Code className="text-purple-400" size={28} />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 82 }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Design Tools",
      icon: <Palette className="text-pink-400" size={28} />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Wireframing", level: 88 },
        { name: "Prototyping", level: 87 },
        { name: "Usability Testing", level: 82 },
        { name: "Responsive Design", level: 95 }
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Backend Development",
      icon: <Database className="text-blue-400" size={28} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "SQL", level: 82 },
        { name: "REST APIs", level: 88 },
        { name: "MVC Architecture", level: 85 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Programming Languages",
      icon: <Settings className="text-green-400" size={28} />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "C#/.NET", level: 70 },
        { name: "PHP", level: 72 },
        { name: "TypeScript", level: 85 },
        { name: "JSX", level: 92 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-yellow-400" size={28} />,
      skills: [
        { name: "Git/GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS (Basic)", level: 65 },
        { name: "Render Deployment", level: 85 },
        { name: "CI/CD", level: 72 }
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Core Concepts",
      icon: <Globe className="text-indigo-400" size={28} />,
      skills: [
        { name: "OOP", level: 85 },
        { name: "DOM Manipulation", level: 90 },
        { name: "Async JavaScript", level: 88 },
        { name: "API Integration", level: 92 },
        { name: "Performance Optimization", level: 85 },
        { name: "Code Splitting", level: 80 }
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium text-sm">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillBar 2s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile Development', 'Cross-browser Testing', 'SEO Optimization', 
              'Web Performance', 'Accessibility (WCAG)', 'Progressive Web Apps',
              'Component Libraries', 'State Management', 'Testing & Debugging',
              'Version Control', 'Code Review', 'Team Collaboration'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--skill-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;