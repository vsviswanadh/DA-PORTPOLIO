import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: [
        "Led the frontend development of the company's flagship SaaS product, improving performance metrics by 40%",
        "Implemented modern React patterns and best practices across a team of 5 developers",
        "Architected and developed a component library used across multiple products",
        "Collaborated with UX/UI designers to implement accessible and responsive interfaces"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Tailwind CSS", "Jest", "CI/CD"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "WebSolutions",
      location: "New York, NY",
      startDate: "Mar 2020",
      endDate: "Dec 2021",
      description: [
        "Developed and maintained multiple client projects from concept to deployment",
        "Built RESTful APIs and database schemas for various business requirements",
        "Implemented authentication systems and user management functionality",
        "Collaborated in an agile team environment, participating in sprint planning and reviews"
      ],
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "AWS"]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "CreativeAgency",
      location: "Boston, MA",
      startDate: "Jun 2018",
      endDate: "Feb 2020",
      description: [
        "Developed responsive websites and web applications for diverse clients",
        "Maintained and updated existing client websites",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Participated in code reviews and contributed to internal tooling"
      ],
      technologies: ["HTML/CSS", "JavaScript", "jQuery", "PHP", "WordPress", "Bootstrap"]
    }
  ];
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Work Experience
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            My professional journey and roles
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex overflow-x-auto md:flex-wrap gap-4 mb-8 pb-2 justify-start md:justify-center">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === index
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Briefcase size={16} className="mr-2" />
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {experiences[activeTab].title}
                </h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mt-1">
                  {experiences[activeTab].company} • {experiences[activeTab].location}
                </p>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {experiences[activeTab].startDate} — {experiences[activeTab].endDate}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-blue-500">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experiences[activeTab].technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
            >
              <span>Download Full Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;