import React from 'react';
import { Code2, Database, BarChart2, Brain } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    { 
      icon: <Code2 size={24} className="text-blue-500" />, 
      title: 'Data Analysis', 
      description: 'Proficient in Python and data analysis libraries' 
    },
    { 
      icon: <Database size={24} className="text-blue-500" />, 
      title: 'Database Management', 
      description: 'Experienced in MySQL and data handling' 
    },
    { 
      icon: <BarChart2 size={24} className="text-blue-500" />, 
      title: 'Data Visualization', 
      description: 'Expert in Power BI and visualization tools' 
    },
    { 
      icon: <Brain size={24} className="text-blue-500" />, 
      title: 'Problem Solver', 
      description: 'Strong analytical and critical thinking skills' 
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            Get to know me better
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              I'm a data analyst passionate about transforming complex data into actionable insights. 
              With a strong foundation in data analysis and visualization, I specialize in creating 
              comprehensive dashboards and performing detailed statistical analysis.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              Currently pursuing my B.Tech in Information Technology, I'm constantly learning and 
              applying new analytical tools and methodologies to extract meaningful insights from data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-white dark:bg-gray-800/80 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;