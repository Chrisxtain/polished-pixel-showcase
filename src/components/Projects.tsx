
import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity application for managing tasks and projects. Includes features like drag-and-drop organization, priority tagging, and deadline reminders.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['React', 'Redux', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A weather application that shows current conditions and forecasts for any location. Integrates with weather APIs and uses geolocation.',
      image: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['JavaScript', 'API Integration', 'CSS3'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md project-card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.github}
                    className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    aria-label="View source code on GitHub"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-primary hover:underline transition-all"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
