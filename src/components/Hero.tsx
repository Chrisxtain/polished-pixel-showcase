
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <h2 className="text-lg md:text-xl font-medium text-primary animate-fade-in-up">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 animate-fade-in-up animate-delay-100">
            Jane Doe
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mt-4 animate-fade-in-up animate-delay-200">
            Frontend Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl animate-fade-in-up animate-delay-300">
            I craft responsive websites and web applications that provide intuitive, pixel-perfect user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 py-3 px-8 rounded-md transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10 -z-10"></div>
    </section>
  );
};

export default Hero;
