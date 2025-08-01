import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'design' | 'development';
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    case_study?: string;
  };
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'design' | 'development'>('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      description: 'Complete UI/UX design for a modern e-commerce mobile application with intuitive navigation and smooth user flow.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'design',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      links: { case_study: '#' }
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'React-based dashboard application with real-time updates, drag-and-drop functionality, and responsive design.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'development',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      links: { live: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'design',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      links: { case_study: '#' }
    },
    {
      id: 4,
      title: 'Weather Progressive Web App',
      description: 'PWA built with React and OpenWeather API, featuring offline functionality and responsive design.',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'development',
      technologies: ['React', 'PWA', 'API Integration'],
      links: { live: '#', github: '#' }
    },
    {
      id: 5,
      title: 'Restaurant Website Redesign',
      description: 'Modern website redesign focusing on user experience, accessibility, and mobile-first approach.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'design',
      technologies: ['Figma', 'User Research', 'Wireframing'],
      links: { case_study: '#' }
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React, featuring smooth animations and responsive design.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'development',
      technologies: ['React', 'TypeScript', 'Framer Motion'],
      links: { live: '#', github: '#' }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my design and development projects, each crafted with attention to detail and user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-lg p-1 shadow-md">
            {(['all', 'design', 'development'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-[#00ADB5] text-white'
                    : 'text-gray-600 hover:text-[#00ADB5]'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-[#00ADB5] hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-[#00ADB5] hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.case_study && (
                    <a
                      href={project.links.case_study}
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-[#00ADB5] hover:text-white transition-colors duration-200"
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.category === 'design'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="font-roboto text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;