
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    return 'light';
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef(null);

  // Handle custom cursor
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;
      
      // Follow cursor with delay for smooth effect
      const cursor = cursorRef.current;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle scroll progress
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight || 0;
      setScrollProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Initialize intersection observer for animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Apply initial animation to already visible elements
    document.querySelectorAll('[data-animate]').forEach(el => {
      const animationClass = el.getAttribute('data-animate');
      if (animationClass) {
        // Set a small timeout to ensure elements are rendered first
        setTimeout(() => {
          el.classList.add(`animate-${animationClass}`);
        }, 100);
      }
    });
    
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
    
    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => observer.observe(el));
    
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="gradient-bg min-h-screen transition-colors duration-300 perspective-1000">
      {/* Custom cursor effect */}
      <div 
        ref={cursorRef} 
        className="cursor-dot hidden md:block fixed w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 pointer-events-none z-[999] mix-blend-plus-lighter blur-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      {/* Floating shapes */}
      <div className="fixed top-1/4 left-10 w-64 h-64 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float opacity-70 pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-10 w-80 h-80 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-delay opacity-70 pointer-events-none"></div>
      
      {/* Theme toggle button - repositioned to be fixed in the top-right corner */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={toggleTheme} 
          size="icon"
          variant="outline"
          className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Moon className="h-5 w-5" aria-hidden="true" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
