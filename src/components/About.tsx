
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Avatar className="w-80 h-80 border-4 border-primary/20 shadow-xl">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-foreground/80 mb-6">
              I'm a passionate frontend developer and UI/UX designer with over 5 years of experience creating beautiful, functional web interfaces. Based in San Francisco, I enjoy transforming complex problems into simple, intuitive designs.
            </p>

            <p className="text-foreground/80 mb-6">
              My journey in web development began at Stanford University, where I studied Computer Science with a focus on Human-Computer Interaction. Since then, I've worked with startups and established companies to build products that users love.
            </p>

            <p className="text-foreground/80 mb-6">
              When I'm not coding, you'll find me hiking in California's beautiful national parks, experimenting with photography, or attending web development meetups in the Bay Area.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Education</h4>
                <p className="text-foreground/80">Stanford University</p>
                <p className="text-foreground/60">B.S. Computer Science, 2018</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Experience</h4>
                <p className="text-foreground/80">5+ Years</p>
                <p className="text-foreground/60">Frontend Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
