
import React, { useEffect, useRef } from 'react';
import BlurredShape from '@/assets/BlurredShape';
import MouseScrollIndicator from '@/assets/MouseScrollIndicator';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
      className="relative min-h-screen flex flex-col justify-center items-center pt-20"
    >
      {/* Background elements */}
      <BlurredShape 
        color="bg-blue-200/20 dark:bg-blue-500/10"
        size="lg"
        className="-top-20 -right-20 opacity-70"
      />
      <BlurredShape 
        color="bg-purple-200/20 dark:bg-purple-500/10"
        size="md"
        className="bottom-40 -left-20 opacity-50"
      />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center z-10 px-6">
        <div 
          className="mb-6"
          data-animate="fade-in-down"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="inline-block tag animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 
          className="mb-6"
          data-animate="fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">beautiful</span> digital experiences
        </h1>
        
        <p 
          className="text-muted-foreground max-w-2xl mx-auto mb-10"
          data-animate="fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          I'm a passionate designer and developer focused on crafting clean & user‑friendly experiences. I'm passionate about building excellent software that improves the lives of those around me.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          data-animate="fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90 scale-on-hover"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:bg-secondary/80 scale-on-hover"
          >
            Contact Me
          </a>
        </div>
        
        <MouseScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
