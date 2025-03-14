
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import BlurredShape from '@/assets/BlurredShape';
import { ArrowRight, Github, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform with user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Health & Fitness App',
    category: 'App Development',
    description: 'A cross-platform mobile application for fitness tracking, workout planning, and health monitoring.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    description: 'An intuitive dashboard for financial data visualization with real-time updates and custom reporting.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    demoLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
        color="bg-indigo-200/20 dark:bg-indigo-600/10"
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
                "glass-card overflow-hidden group transition-all duration-300",
                "hover:shadow-xl"
              )}
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-muted-foreground">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    <LinkIcon size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
