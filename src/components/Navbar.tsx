import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-display font-semibold">
            HEMANT
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-primary font-medium text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="transition-colors hover:text-primary font-medium text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="transition-colors hover:text-primary font-medium text-sm"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center">
          <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90 scale-on-hover">
            <a
              href="https://drive.google.com/file/d/10oxdivTbWIYQY5R927i5jYP4ko2LkXbL/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume / CV
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
