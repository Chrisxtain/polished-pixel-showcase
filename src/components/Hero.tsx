
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted transition-colors duration-500"
    >
      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="max-w-3xl lg:w-1/2">
          <h2 className="text-lg md:text-xl font-medium text-primary animate-fade-in-up">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 animate-fade-in-up animate-delay-100">
            Tochukwu Christian
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mt-4 animate-fade-in-up animate-delay-200">
            Frontend Developer & UI/UX Designer
          </p>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl animate-fade-in-up animate-delay-300">
            I craft responsive websites and web applications that provide intuitive, pixel-perfect user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-background dark:bg-muted hover:bg-muted dark:hover:bg-muted/80 text-foreground border border-border py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center animate-fade-in-up animate-delay-500">
          <div className="relative w-full max-w-sm aspect-square">
            <div className="absolute inset-0 bg-primary/20 rounded-full -z-10 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Professional developer working on laptop" 
              className="rounded-2xl object-cover shadow-xl border border-border transform hover:scale-[1.02] transition-transform duration-500 ease-in-out"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold border-4 border-background dark:border-background/80 shadow-lg animate-pulse">
              <span>10+<br/>Years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-foreground/50 hover:text-primary dark:hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-10 -z-10"></div>
    </section>
  );
};

export default Hero;
