import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Seshadri Rao Gudlavalleru Engineering College",
      location: "Gudlavalleru",
      period: "2022-2026",
      grade: "CGPA: 8.58"
    },
    {
      degree: "Intermediate in M.P.C",
      institution: "Sri Chaitanya Boys Junior College",
      location: "Machilipatnam",
      period: "2020-2022",
      grade: "Marks: 881"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-500 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <Calendar size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <div className="mt-4 inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {edu.grade}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
            >
              <GraduationCap size={20} className="mr-2" />
              <span>View Full Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;