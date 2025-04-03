
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary mb-2">Portfolio</h2>
            <p className="text-gray-300 max-w-md">
              Creating clean, responsive, and user-friendly web experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4">
              <a 
                href="#home" 
                className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {year} Jane Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
