import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Briefcase, GraduationCap, Award, ExternalLink, Menu, X, Terminal, Sparkles } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Call on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    languages: ['C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Express.js'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
    databases: ['MongoDB', 'SQL'],
    others: ['REST APIs', 'Responsive Design', 'Full-Stack Architecture']
  };

  const projects = [
    {
      title: 'ProjectMUJToppers',
      role: 'Full-Stack Developer',
      description: 'A comprehensive web application featuring university toppers with authentication, admin dashboard, and student database integration.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      link: 'https://www.mujtoppers.in/',
      highlights: ['Authentication System', 'Admin Dashboard', 'Database Integration', 'Git Collaboration']
    },
    {
      title: 'Weather Website',
      role: 'Developer',
      description: 'Interactive weather application using OpenWeather API to provide real-time weather information.',
      tech: ['JavaScript', 'API Integration', 'HTML/CSS'],
      link: 'https://sahil-u07.github.io/Updated-WEATHER/',
      highlights: ['API Integration', 'Real-time Data', 'Responsive Design']
    },
    {
      title: 'GitHub Utilities',
      role: 'Open Source Contributor',
      description: 'Collection of full-stack tools including GitHub API integrations for fetching and displaying user data.',
      tech: ['JavaScript', 'REST APIs', 'React'],
      link: 'https://github.com/Sahil-u07',
      highlights: ['REST Integration', 'Component Architecture', 'Open Source']
    }
  ];

  const experience = {
    company: 'IOTA Studio',
    role: 'Full-Stack Web Development Intern',
    period: 'June 2024 - November 2024',
    responsibilities: [
      'Built and optimized full-stack web apps using React.js, Node.js, MongoDB & SQL',
      'Collaborated with design, frontend, and backend teams',
      'Focused on code reusability, API efficiency, and responsive UI/UX'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sahil Lenka
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400' : 'text-gray-300'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 inline-block animate-fade-in-down">
            <img
              src="/1732083451784.jpg"
              alt="Sahil Lenka"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl ring-4 ring-cyan-400/50 hover:ring-cyan-400 hover:scale-110 transition-all duration-300"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-2 animate-fade-in">
            Sahil Lenka
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 px-4 animate-fade-in animation-delay-200">
            Full-Stack Web Developer
          </p>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 animate-fade-in animation-delay-400">
            Building scalable, real-world solutions with modern tech stacks. Currently interning at IOTA Studio, passionate about creating impactful web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 animate-fade-in animation-delay-600">
            <a href="https://github.com/Sahil-u07" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 text-sm sm:text-base shadow-lg hover:shadow-cyan-500/50">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sahil-lenka-3608a2311/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 text-sm sm:text-base shadow-lg hover:shadow-blue-500/50">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:sahillenka@gmail.com" className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 text-sm sm:text-base shadow-lg hover:shadow-cyan-500/50">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base animate-fade-in animation-delay-800"
          >
            View My Work
          </button>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4 animate-bounce-slow" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Education</h3>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-white">Manipal University Jaipur</span>
              </p>
              <p className="text-sm sm:text-base text-gray-400">B.Tech in Computer Science & Engineering</p>
              <p className="text-sm sm:text-base text-gray-400">Expected Graduation: 2028</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4 animate-bounce-slow" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">2x Hackathon Finalist at university-level and national competitions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Event Coordinator - International Student Cell, MUJ</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Active Open Source Contributor</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Who I Am</h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Computer Science student at Manipal University Jaipur with an insatiable curiosity for building things that matter. What started as a fascination with how websites work has evolved into a deep commitment to full-stack development and creating solutions that make a real difference.
              </p>
              <p>
                Currently, I'm honing my craft as a Full-Stack Development Intern at IOTA Studio, where I work alongside talented teams to build production-grade applications. From architecting scalable backends with Node.js and MongoDB to crafting intuitive user interfaces with React, I thrive on the challenge of bringing ideas to life through code.
              </p>
              <p>
                Beyond the classroom and workplace, I'm an active contributor to open-source projects and a 2x hackathon finalist, having competed at both university and national levels. I believe in learning by doing, which is why you'll find me constantly experimenting with new technologies and contributing to projects that push my boundaries.
              </p>
              <p>
                When I'm not coding, I'm coordinating cross-cultural events as part of the International Student Cell at MUJ, where I've learned that great technology is built by diverse teams with different perspectives. I'm always looking for opportunities to collaborate, learn, and build something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Skills</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 capitalize text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-slate-900/80 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300 border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-10 h-10 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-cyan-400 mb-3">{project.role}</p>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start text-sm text-gray-400">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{experience.role}</h3>
                <p className="text-lg sm:text-xl text-cyan-400 mb-2">{experience.company}</p>
                <p className="text-sm sm:text-base text-gray-400">{experience.period}</p>
              </div>
              <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 animate-bounce-slow" />
            </div>

            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-cyan-400 mr-3 text-xl">▹</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-cyan-400">Tech Team Member</h4>
              <p className="text-white font-medium mb-2 text-sm sm:text-base">ProjectMUJToppers</p>
              <p className="text-gray-300 text-xs sm:text-sm">Developed backend logic, authentication flows, and helped deploy the final product</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-cyan-400">Event Coordinator</h4>
              <p className="text-white font-medium mb-2 text-sm sm:text-base">International Student Cell, MUJ</p>
              <p className="text-gray-300 text-xs sm:text-sm">Coordinated cross-cultural events and networking with international students</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 px-4">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <a href="mailto:sahillenka@gmail.com" className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3 group-hover:animate-bounce" />
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
              <p className="text-sm sm:text-base text-white break-all">sahillenka@gmail.com</p>
            </a>

            <a href="tel:+917439968486" className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30">
              <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3 group-hover:animate-bounce" />
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Phone</p>
              <p className="text-sm sm:text-base text-white">+91 7439968486</p>
            </a>

            <a href="https://www.linkedin.com/in/sahil-lenka-3608a2311/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30">
              <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3 group-hover:animate-bounce" />
              <p className="text-xs sm:text-sm text-gray-400 mb-1">LinkedIn</p>
              <p className="text-sm sm:text-base text-white">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900/80 backdrop-blur-sm py-6 sm:py-8 px-4 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            Designed and built by Sahil Lenka
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
