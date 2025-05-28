import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/johndoe', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/johndoe', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:john@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              John.Dev
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Building digital experiences that matter.</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Made with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;