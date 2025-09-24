import React from 'react';
import { ExternalLink, Github, Star, Calendar, Code, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TaskFlow - Project Management",
      description: "A comprehensive project management application with real-time collaboration, task tracking, and team communication features.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      category: "Web Application",
      featured: true,
      links: {
        live: "#",
        github: "#"
      },
      stats: {
        stars: "2.3k",
        forks: "456",
        date: "2024"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "EcoShop - Sustainable E-commerce",
      description: "An eco-friendly e-commerce platform promoting sustainable products with carbon footprint tracking and green shipping options.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Stripe", "Express.js", "PostgreSQL", "AWS"],
      category: "E-commerce",
      featured: true,
      links: {
        live: "#",
        github: "#"
      },
      stats: {
        stars: "1.8k",
        forks: "312",
        date: "2024"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "MindSpace - Mental Health App",
      description: "A mental wellness platform offering guided meditation, mood tracking, and anonymous peer support communities.",
      image: "https://images.pexels.com/photos/3768931/pexels-photo-3768931.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Node.js", "WebRTC", "Chart.js"],
      category: "Mobile App",
      featured: false,
      links: {
        live: "#",
        github: "#"
      },
      stats: {
        stars: "987",
        forks: "203",
        date: "2024"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DataViz Dashboard",
      description: "An interactive data visualization dashboard for business intelligence with real-time analytics and custom reporting.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "D3.js", "Python", "FastAPI", "Redis"],
      category: "Analytics",
      featured: false,
      links: {
        live: "#",
        github: "#"
      },
      stats: {
        stars: "1.2k",
        forks: "189",
        date: "2023"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      title: "CodeCollab - Developer Platform",
      description: "A collaborative coding platform with real-time code sharing, version control integration, and peer code reviews.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Monaco Editor", "WebSocket", "Docker", "Kubernetes"],
      category: "Developer Tools",
      featured: false,
      links: {
        live: "#",
        github: "#"
      },
      stats: {
        stars: "3.1k",
        forks: "678",
        date: "2023"
      },
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "FitTrack - Fitness Companion",
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social challenges.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Firebase", "Wear OS", "HealthKit", "ML Kit"],
      category: "Mobile App",
      featured: false,
      links: {
        live: "#",
        github: "#"
      },
      stats: {
        stars: "756",
        forks: "134",
        date: "2023"
      },
      color: "from-pink-500 to-rose-500"
    }
  ];

  const categories = ["All", "Web Application", "E-commerce", "Mobile App", "Analytics", "Developer Tools"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A showcase of innovative projects that demonstrate my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="text-yellow-400 mr-2" size={24} />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star size={14} className="text-yellow-400" />
                      <span className="text-white text-sm">{project.stats.stars}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.stats.date}
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={project.links.live}
                        className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium hover:scale-105 transition-all duration-300`}
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.links.github}
                        className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <Github size={14} className="mr-2" />
                        Code
                      </a>
                    </div>

                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center">
                        <Star size={14} className="mr-1" />
                        {project.stats.stars}
                      </span>
                      <span>{project.stats.forks} forks</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded-full text-white/60 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={project.links.live}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                  <div className="flex items-center text-white/60 text-xs">
                    <Star size={12} className="mr-1" />
                    {project.stats.stars}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Github size={32} className="text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">More Projects on GitHub</h3>
            </div>
            <p className="text-white/70 mb-6">
              Explore my complete portfolio of projects, contributions, and open-source work
            </p>
            <a
              href="https://github.com/Shrutibuyre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Github size={20} className="mr-2" />
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;