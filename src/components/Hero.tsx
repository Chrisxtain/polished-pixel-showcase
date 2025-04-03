
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="max-w-3xl lg:w-1/2">
          <h2 className="text-lg md:text-xl font-medium text-primary animate-fade-in-up">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 animate-fade-in-up animate-delay-100">
            Jane Doe
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-4 animate-fade-in-up animate-delay-200">
            Frontend Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl animate-fade-in-up animate-delay-300">
            I craft responsive websites and web applications that provide intuitive, pixel-perfect user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center animate-fade-in-up animate-delay-500">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-primary/20 rounded-full -z-10 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Professional developer working on laptop" 
              className="rounded-2xl object-cover shadow-xl border border-gray-200 dark:border-gray-800 transform hover:scale-[1.02] transition-transform duration-500 ease-in-out"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-background dark:border-gray-900 shadow-lg animate-pulse">
              <span>10+<br/>Years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-blue-100 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10 -z-10"></div>
    </section>
  );
};

export default Hero;
