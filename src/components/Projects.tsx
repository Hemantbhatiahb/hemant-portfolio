
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import BlurredShape from '@/assets/BlurredShape';
import { ArrowRight, Github, Link as LinkIcon, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform with user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Health & Fitness App',
    category: 'App Development',
    description: 'A cross-platform mobile application for fitness tracking, workout planning, and health monitoring.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit']
  },
  {
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    description: 'An intuitive dashboard for financial data visualization with real-time updates and custom reporting.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#',
    technologies: ['Next.js', 'D3.js', 'TypeScript', 'Tailwind CSS']
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // Set initial animation class for the elements that are already visible
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('[data-animate]').forEach(el => {
        const animationClass = el.getAttribute('data-animate');
        if (animationClass) {
          // Ensure the element starts with opacity 1 if already in view
          if (isElementInViewport(el as HTMLElement)) {
            el.classList.add(`animate-${animationClass}`);
          }
        }
      });
    }

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
  
  // Helper function to check if an element is in viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-16 sm:py-24 md:py-32 px-6 w-full"
    >
      {/* Background elements */}
      <BlurredShape 
        color="bg-indigo-200/30 dark:bg-indigo-600/15"
        size="lg"
        className="-top-40 -left-40 opacity-60"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="section-heading text-center">
          <div className="mb-4">
            <span className="tag">Portfolio</span>
          </div>
          <h2>Recent Projects</h2>
          <p className="mx-auto max-w-2xl mt-4">
            Here are some of my recent projects that showcase my skills and experience in design and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card overflow-hidden group card-3d",
                "hover:shadow-xl relative card-hover"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-white font-semibold">{project.category}</span>
                    <div className="flex space-x-2">
                      <a 
                        href={project.demoLink} 
                        className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.codeLink} 
                        className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                        aria-label="View code"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-muted-foreground">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs py-1 px-2 rounded-full bg-secondary/60 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center text-sm font-medium hover:text-primary transition-all group/link"
                  >
                    <LinkIcon size={16} className="mr-1" />
                    Live Demo
                    <span className="block w-0 group-hover/link:w-full h-0.5 bg-primary mt-0.5 transition-all duration-300"></span>
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center text-sm font-medium hover:text-primary transition-all group/link"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                    <span className="block w-0 group-hover/link:w-full h-0.5 bg-primary mt-0.5 transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
