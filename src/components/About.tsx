
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import BlurredShape from '@/assets/BlurredShape';
import { Check, Code, Layers, Lightbulb } from 'lucide-react';

const skills = [
  'UI/UX Design',
  'Frontend Development',
  'React & React Native',
  'TypeScript',
  'Figma & Design Tools',
  'CSS & Animations',
  'Node.js',
  'RESTful APIs'
];

const services = [
  {
    icon: <Lightbulb size={22} className="text-amber-500" />,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
  },
  {
    icon: <Code size={22} className="text-blue-500" />,
    title: 'Web Development',
    description: 'Building fast, responsive and feature-rich websites and web applications.'
  },
  {
    icon: <Layers size={22} className="text-purple-500" />,
    title: 'App Development',
    description: 'Crafting native and cross-platform mobile applications with React Native.'
  }
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animate');
            if (animationClass) {
              entry.target.classList.add(`animate-${animationClass}`);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animateElements = sectionRef.current?.querySelectorAll('[data-animate]');
    animateElements?.forEach(el => observer.observe(el));
    
    return () => {
      animateElements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative"
    >
      {/* Background elements */}
      <BlurredShape 
        color="bg-pink-200/20 dark:bg-pink-600/10"
        size="md"
        className="-bottom-20 right-20 opacity-50"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="section-heading text-center">
          <div className="mb-4" data-animate="fade-in">
            <span className="tag">About Me</span>
          </div>
          <h2 data-animate="fade-in" style={{ animationDelay: '0.1s' }}>My Background</h2>
          <p className="mx-auto max-w-2xl mt-4" data-animate="fade-in" style={{ animationDelay: '0.2s' }}>
            With over 5 years of experience in design and development, I combine technical expertise with a keen eye for aesthetics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div data-animate="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate designer and developer who loves creating elegant solutions to complex problems. My journey in tech began 5 years ago, and I've been constantly learning and improving since then.
              </p>
              <p>
                I believe that great design is about more than just aesthetics - it's about creating intuitive, enjoyable experiences that solve real problems for users.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new technologies, contributing to open source, or enjoying the outdoors.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">My Skills</h4>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2"
                  >
                    <Check size={16} className="text-green-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div data-animate="fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-bold mb-6">What I Do</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-6 transition-all duration-300",
                    "hover:shadow-xl hover:translate-y-[-2px]"
                  )}
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 rounded-full bg-secondary/50">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
