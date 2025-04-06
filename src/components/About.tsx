
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
            <Avatar className="w-80 h-100 border-4 border-primary/20 shadow-xl">
              <AvatarImage 
                src="https://media.licdn.com/dms/image/v2/D4E22AQFVXMxPNKd9Ag/feedshare-shrink_1280/B4EZXeBx85GgAk-/0/1743186769505?e=1746662400&v=beta&t=m8O_GGkme-qvCOIpm6ysdE--cmRoBuILR22afCVVyB0" 
                alt="Profile"
                className="object-cover object-top"
              />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-foreground/80 mb-6">
              I'm a passionate frontend developer and UI/UX designer with over 2 years of experience creating beautiful, functional web solutions. Based in Nigeria, I enjoy transforming complex problems into simple, intuitive designs.
            </p>

            <p className="text-foreground/80 mb-6">
              My journey in web development began at Nnamdi Azikiwe University, where I studied Computer Science with a focus on Software development. Since then, I've worked with startups and established companies to build products and softwares that users love.
            </p>

            <p className="text-foreground/80 mb-6">
              When I'm not coding, you'll find me playing games, experimenting with photography, watching movies, listening to music or attending web development meetups in the Area.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Education</h4>
                <p className="text-foreground/80">Nnamdi Azikiwe University. Awka</p>
                <p className="text-foreground/60">B.S. Computer Science, 2021</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Experience</h4>
                <p className="text-foreground/80">2+ Years</p>
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
