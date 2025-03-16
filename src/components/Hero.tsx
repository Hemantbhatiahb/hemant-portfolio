import React, { useEffect, useRef, useState } from "react";
import BlurredShape from "@/assets/BlurredShape";
import MouseScrollIndicator from "@/assets/MouseScrollIndicator";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to the center of the screen
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements =
      sectionRef.current?.querySelectorAll("[data-animate]");
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden"
    >
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${
            mousePosition.y * -20
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <BlurredShape
          color="bg-blue-200/30 dark:bg-blue-500/20"
          size="lg"
          className="-top-20 -right-20 opacity-70"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${
            mousePosition.y * -10
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <BlurredShape
          color="bg-purple-200/30 dark:bg-purple-500/20"
          size="md"
          className="bottom-40 -left-20 opacity-50"
        />
      </div>

      {/* Floating elements */}
      <div
        className="absolute right-[20%] top-[30%] w-12 h-12 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 animate-float shadow-xl"
        style={{ animationDuration: "15s" }}
      ></div>

      <div
        className="absolute left-[15%] bottom-[25%] w-20 h-20 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-float-delay shadow-xl"
        style={{ animationDuration: "20s", animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center z-10 px-6">
        <div
          className="mb-6"
          data-animate="fade-in-down"
          style={{ animationDelay: "0.3s" }}
        >
          <span
            className="inline-block tag animate-fade-in shimmer-bg"
            style={{ animationDelay: "0.1s" }}
          >
            Welcome to my portfolio
          </span>
        </div>

        <h1
          className="mb-6 relative"
          data-animate="fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Seamless
          </span>{" "}
          Web Experiences
          {/* Decorative elements */}
          <span className="absolute -top-10 -right-10 text-6xl text-purple-200/30 dark:text-purple-500/20 font-light rotate-12">{`{ }`}</span>
          <span className="absolute -bottom-8 -left-6 text-5xl text-blue-200/30 dark:text-blue-500/20 font-light rotate-[6deg]">
            /
          </span>
        </h1>

        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-10"
          data-animate="fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          An adaptable self learning professional who specializes in building
          scalable and performant web applications, writing efficient,
          modularized and comprehensible code and building highly responsive and
          elegant UI.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          data-animate="fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 scale-on-hover relative overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:bg-secondary/80 scale-on-hover border border-transparent hover:border-primary/10"
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
