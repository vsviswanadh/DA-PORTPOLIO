import React, { useState } from 'react';
import { ExternalLink, Github, BarChart2, Database, LineChart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "D:\project\images\e-commerce.jpeg",
      description: "Built an interactive Power BI dashboard for e-commerce sales analysis, showcasing key metrics like revenue, profit, customer trends, and product performance.",
      image: "e-commerce.jpeg",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      githubUrl: "https://github.com/vsviswanadh/E-COMMERCE-DASHBOARD",
      category: "visualization"
    },
    {
      id: 2,
      title: "Book Data Analysis",
      description: "Performed exploratory data analysis (EDA) on a book dataset using Python libraries to uncover insights on trends, missing data, and statistical summaries.",
      image: "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/vsviswanadh/book-sales-analysis",
      category: "analysis"
    },
    {
      id: 3,
      title: "VNL2023 Dashboard",
      description: "Created a Power BI dashboard for Volleyball Nations League data visualization, enabling performance tracking through KPIs and team comparisons.",
      image: "vnl.jpg",
      technologies: ["Power BI", "Data Cleaning", "Data Visualization"],
      githubUrl: "https://github.com/vsviswanadh/VOLLEY-BALL-NATIONS-LEAGUE-POWER-BI-DASHBOARD",
      category: "visualization"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'visualization', label: 'Visualization' },
    { id: 'analysis', label: 'Analysis' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            A selection of my data analysis projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3 mb-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800/80 rounded-full text-white hover:bg-blue-500 transition-colors"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800/80 rounded-full text-white hover:bg-blue-500 transition-colors"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/vsviswanadh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <span className="mr-2">See more projects on GitHub</span>
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;