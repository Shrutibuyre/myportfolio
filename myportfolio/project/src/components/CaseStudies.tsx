import React from 'react';
import { ExternalLink, Github, Users, Zap, Target, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      subtitle: "Increasing conversion rates through UX optimization",
      description: "Complete redesign of a fashion e-commerce platform focusing on user experience, mobile responsiveness, and conversion optimization.",
      challenge: "The existing platform had a 23% cart abandonment rate and poor mobile experience affecting sales.",
      solution: "Implemented a mobile-first design approach with streamlined checkout process, improved product discovery, and enhanced visual hierarchy.",
      results: [
        { metric: "Conversion Rate", value: "+45%", icon: <Target className="text-green-400" size={20} /> },
        { metric: "Mobile Sales", value: "+67%", icon: <Users className="text-blue-400" size={20} /> },
        { metric: "Page Load Time", value: "-40%", icon: <Zap className="text-yellow-400" size={20} /> },
        { metric: "User Satisfaction", value: "+52%", icon: <Award className="text-purple-400" size={20} /> }
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe API", "Performance Optimization"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500",
      category: "E-Commerce"
    },
    {
      title: "Healthcare Dashboard Design",
      subtitle: "Streamlining patient data visualization",
      description: "Design and development of a comprehensive healthcare dashboard for medical professionals to track patient data, appointments, and treatment progress.",
      challenge: "Medical staff struggled with complex interfaces and needed quick access to critical patient information during busy schedules.",
      solution: "Created an intuitive, data-driven dashboard with customizable widgets, real-time updates, and accessible design principles.",
      results: [
        { metric: "Task Completion", value: "+38%", icon: <Target className="text-green-400" size={20} /> },
        { metric: "User Errors", value: "-55%", icon: <Users className="text-blue-400" size={20} /> },
        { metric: "Training Time", value: "-60%", icon: <Zap className="text-yellow-400" size={20} /> },
        { metric: "Staff Satisfaction", value: "+48%", icon: <Award className="text-purple-400" size={20} /> }
      ],
      technologies: ["React.js", "Chart.js", "Material-UI", "Express.js", "PostgreSQL", "WebSocket"],
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500",
      category: "Healthcare"
    },
    {
      title: "EdTech Learning Platform",
      subtitle: "Enhancing online learning experience",
      description: "Development of an interactive learning platform with gamification elements, progress tracking, and collaborative features for students and educators.",
      challenge: "Students showed low engagement rates and high dropout rates in online courses due to lack of interactive elements.",
      solution: "Implemented gamification mechanics, interactive quizzes, peer collaboration tools, and personalized learning paths with AI recommendations.",
      results: [
        { metric: "Course Completion", value: "+72%", icon: <Target className="text-green-400" size={20} /> },
        { metric: "Student Engagement", value: "+89%", icon: <Users className="text-blue-400" size={20} /> },
        { metric: "Learning Speed", value: "+34%", icon: <Zap className="text-yellow-400" size={20} /> },
        { metric: "Teacher Satisfaction", value: "+61%", icon: <Award className="text-purple-400" size={20} /> }
      ],
      technologies: ["React.js", "Python", "TensorFlow", "WebRTC", "Socket.io", "AWS", "Docker"],
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-teal-500",
      category: "Education"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Studies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Deep dives into projects that delivered measurable business impact
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Column */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group/image">
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-2xl opacity-20 group-hover/image:opacity-30 transition-opacity duration-300`}></div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${study.color} text-white`}>
                        {study.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-4`}>
                      {study.subtitle}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                      <h4 className="font-semibold text-red-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                      <h4 className="font-semibold text-green-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                      >
                        <div className="flex justify-center mb-2">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                        <div className="text-white/60 text-sm">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className={`flex items-center px-6 py-3 bg-gradient-to-r ${study.color} text-white rounded-full font-semibold hover:scale-105 transition-all duration-300`}>
                      View Live Demo
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                    <button className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                      View Code
                      <Github size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to see more detailed case studies?
            </h3>
            <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
              I have comprehensive documentation and process insights for each project, including user research, wireframes, and development methodologies.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Request Detailed Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;