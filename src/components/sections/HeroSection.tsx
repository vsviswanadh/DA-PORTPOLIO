import React from 'react';
import { ArrowDown, Github, Linkedin, FileDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wide animate-fadeIn">
              DATA ANALYST
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Sai Viswanadh</span>
              <br />
              I analyze data to drive insights
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 animate-fadeInUp animation-delay-200">
              I'm a passionate data analyst specializing in transforming complex data into actionable insights. 
              Currently focused on creating impactful data visualizations and analysis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fadeInUp animation-delay-400">
              <button 
                onClick={scrollToProjects}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
              >
                View My Work
              </button>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-500 hover:border-blue-600 dark:border-blue-400 dark:hover:border-blue-500 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 rounded-full font-medium transition-all transform hover:scale-105 inline-flex items-center"
              >
                <FileDown size={18} className="mr-2" />
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 animate-fadeInUp animation-delay-600">
              <a 
                href="https://github.com/vsviswanadh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/sai-viswanadh-vanapalli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
              <a 
                href="mailto:vsviswanadh2005@gmail.com" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
              >
                vsviswanadh2005@gmail.com
              </a>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full"></div>
              <img 
                src="/photo.jpg" 
                alt="Sai Viswanadh" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;