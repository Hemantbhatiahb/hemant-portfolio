import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import BlurredShape from "@/assets/BlurredShape";
import { Check, Code, Layers, Lightbulb } from "lucide-react";

const skills = [
  "Frontend Development",
  "React & Next.js",
  "TypeScript",
  "Backend Integration",
  "Web Optimization",
  "CSS & Animations",
  "RESTful APIs",
  "UI/UX Design",
  "Problem-Solving",
  "Version Control",
];

const services = [
  {
    icon: <Lightbulb size={22} className="text-amber-500" />,
    title: "Frontend Development",
    description:
      "Crafting responsive, intuitive, and high-performance web interfaces using React and modern JavaScript frameworks.",
  },
  {
    icon: <Code size={22} className="text-blue-500" />,
    title: "Backend Integration",
    description:
      "Building scalable and secure backend systems, ensuring seamless API integrations and efficient data handling.",
  },
  {
    icon: <Layers size={22} className="text-purple-500" />,
    title: "Web Optimization",
    description:
      "Focusing on performance, accessibility, and security to deliver refined, fast, and user-centric web experiences.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute("data-animate");
            if (animationClass) {
              entry.target.classList.add(`animate-${animationClass}`);
            }
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
    <section ref={sectionRef} id="about" className="relative">
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
          <h2 data-animate="fade-in" style={{ animationDelay: "0.1s" }}>
            My Background
          </h2>
          <p
            className="mx-auto max-w-2xl mt-4"
            data-animate="fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            With over 3 years of experience in design and development, I combine
            technical expertise with a keen eye for aesthetics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div data-animate="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated FullStack Engineer with 3 years of experience in
                building scalable and performant web applications. My expertise
                lies in crafting efficient, modular, and maintainable code while
                designing intuitive and elegant user interfaces with React.{" "}
              </p>
              <p>
                I’m passionate about solving complex problems with simple, clean
                solutions—always prioritizing security, performance, and the
                end-user experience.{" "}
              </p>
              <p>
                When I’m not coding, you’ll find me learning about the latest in
                web technologies, exploring ways to optimize performance, or
                brainstorming new projects to build.{" "}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">My Skills</h4>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check size={16} className="text-green-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-animate="fade-in-up" style={{ animationDelay: "0.5s" }}>
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
                      <h4 className="font-bold text-lg mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
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
