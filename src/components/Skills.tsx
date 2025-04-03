
import React from 'react';
import { Code, PenTool, Database, Globe, Settings, Users, Edit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux'],
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: <PenTool className="w-8 h-8 text-primary" />,
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping', 'User Research'],
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'RESTful APIs', 'GraphQL'],
    },
    {
      id: 4,
      title: 'Tools & Platforms',
      icon: <Settings className="w-8 h-8 text-primary" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Docker', 'AWS', 'Vercel'],
    },
    {
      id: 5,
      title: 'Languages',
      icon: <Globe className="w-8 h-8 text-primary" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
    },
    {
      id: 6,
      title: 'Soft Skills',
      icon: <Users className="w-8 h-8 text-primary" />,
      skills: ['Team Collaboration', 'Project Management', 'Communication', 'Problem-Solving', 'Time Management'],
    },
    {
      id: 7,
      title: 'Copywriting',
      icon: <Edit className="w-8 h-8 text-primary" />,
      skills: ['Content Creation', 'Blog Writing', 'Technical Writing', 'SEO Optimization', 'Marketing Copy'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the technologies and skills I've worked with and developed expertise in:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold mt-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm border border-border skill-item"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
