
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <h2 className="text-2xl font-bold text-primary mb-2">Portfolio</h2>
            <p className="text-gray-300 dark:text-gray-400 max-w-md">
              Creating clean, responsive, and user-friendly web experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4 animate-bounce">
              <a 
                href="#home" 
                className="h-12 w-12 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </a>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm animate-fade-in">
              &copy; {year} Jane Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
