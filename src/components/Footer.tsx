
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Hemantbhatiahb' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/hemantb1/' },
    { icon: <Twitter size={20} />, href: 'https://x.com/hemantb5496' }
  ];
  
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <a href="#" className="text-xl font-display font-semibold">Hemant</a>
          <p className="text-sm text-muted-foreground mt-2">
            Creating beautiful digital experiences
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="p-2 rounded-full bg-background text-muted-foreground hover:text-primary transition-colors"
                aria-label="Social media"
                target='_blank'
                rel='noreferrer noopener'
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            © {year} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
