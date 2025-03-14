
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import BlurredShape from '@/assets/BlurredShape';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={22} className="text-blue-500" />,
    title: 'Email',
    info: 'contact@example.com',
    link: 'mailto:contact@example.com'
  },
  {
    icon: <Phone size={22} className="text-green-500" />,
    title: 'Phone',
    info: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <MapPin size={22} className="text-red-500" />,
    title: 'Location',
    info: 'San Francisco, CA',
    link: 'https://maps.google.com'
  }
];

const Contact = () => {
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
      id="contact" 
      className="relative py-16 sm:py-24 md:py-32 px-6 w-full"
    >
      {/* Background elements */}
      <BlurredShape 
        color="bg-teal-200/20 dark:bg-teal-600/10"
        size="md"
        className="-bottom-40 -right-20 opacity-60"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="section-heading text-center">
          <div className="mb-4" data-animate="fade-in">
            <span className="tag">Contact</span>
          </div>
          <h2 data-animate="fade-in" style={{ animationDelay: '0.1s' }}>Get In Touch</h2>
          <p className="mx-auto max-w-2xl mt-4" data-animate="fade-in" style={{ animationDelay: '0.2s' }}>
            Have a project in mind? I'd love to hear from you. Let's work together to create something amazing.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              data-animate="fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              className={cn(
                "glass-card p-6 text-center transition-all duration-300",
                "hover:shadow-xl hover:translate-y-[-2px]"
              )}
            >
              <div className="flex flex-col items-center">
                <div className="p-3 mb-4 rounded-full bg-secondary/50">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.info}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div 
          className="mt-16 glass-card p-8"
          data-animate="fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90 scale-on-hover"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
