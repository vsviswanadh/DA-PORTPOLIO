import React, { useState } from 'react';
import { 
  Database, 
  BarChart2, 
  Code2, 
  Brain,
  PenTool
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'databases' | 'visualization' | 'analytics' | 'tools';
  icon?: React.ReactNode;
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const skills: Skill[] = [
    // Programming
    { name: 'Python', level: 85, category: 'programming', icon: <Code2 /> },
    { name: 'Java', level: 80, category: 'programming', icon: <Code2 /> },
    
    // Databases
    { name: 'MySQL', level: 85, category: 'databases', icon: <Database /> },
    
    // Data Visualization
    { name: 'Power BI', level: 90, category: 'visualization', icon: <BarChart2 /> },
    { name: 'Matplotlib', level: 85, category: 'visualization', icon: <BarChart2 /> },
    { name: 'Seaborn', level: 85, category: 'visualization', icon: <BarChart2 /> },
    
    // Analytics
    { name: 'Data Cleaning', level: 90, category: 'analytics', icon: <Brain /> },
    { name: 'EDA', level: 85, category: 'analytics', icon: <Brain /> },
    { name: 'Statistical Analysis', level: 80, category: 'analytics', icon: <Brain /> },
    
    // Tools & Libraries
    { name: 'NumPy', level: 85, category: 'tools', icon: <PenTool /> },
    { name: 'Pandas', level: 90, category: 'tools', icon: <PenTool /> }
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'databases', label: 'Databases' },
    { id: 'visualization', label: 'Visualization' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'tools', label: 'Tools & Libraries' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            Technologies and skills I use to analyze data and create insights
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.5s ease forwards',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  {React.cloneElement(skill.icon as React.ReactElement, {
                    size: 20,
                    className: 'text-blue-500 dark:text-blue-400'
                  })}
                </div>
                <h3 className="font-medium text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    transition: 'width 1s ease-in-out'
                  }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm font-medium text-blue-500">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;