import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import BlurredShape from "@/assets/BlurredShape";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "R&D Engineer",
    company: "Nokia Networks",
    duration: "Aug 2021 - Nov 2024",
    description:
      "Developed and optimized scalable React applications using Redux, Context API, and advanced hooks. Improved performance, built reusable components, and ensured high code quality through testing and code reviews.",
    achievements: [
      "Built reusable UI components for consistent and efficient development.",
      "Increased dashboard engagement by 20% with interactive data visualizations using Highcharts.",
      "Achieved 90% test coverage using Jest for robust code quality.",
      "Improved load times by 30% through Webpack optimization and lazy loading.",
      "Mentored 3+ developers, enhancing team productivity.",
    ],
  },
];

const Experience = () => {
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
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-16 sm:py-24 md:py-32 px-6 w-full"
    >
      {/* Background elements */}
      <BlurredShape
        color="bg-purple-200/20 dark:bg-purple-600/10"
        size="md"
        className="-top-20 -left-20 opacity-60"
      />

      <div className="max-w-7xl mx-auto">
        <div className="section-heading text-center">
          <div className="mb-4" data-animate="fade-in">
            <span className="tag">Experience</span>
          </div>
          <h2 data-animate="fade-in" style={{ animationDelay: "0.1s" }}>
            Work Experience
          </h2>
          <p
            className="mx-auto max-w-2xl mt-4"
            data-animate="fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            My professional journey and the valuable experience I've gained over
            the years.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-animate="fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              className={cn(
                "glass-card mb-6 last:mb-0 transition-all duration-300",
                "hover:shadow-lg"
              )}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/50 mt-1">
                    <Briefcase size={22} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="text-base text-primary/90 font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <Accordion
                      type="single"
                      collapsible
                      className="border-t border-border/30 pt-2"
                    >
                      <AccordionItem
                        value={`achievements-${index}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="py-2 font-medium text-base">
                          Key Achievements
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Award
                                  size={16}
                                  className="text-green-500 mt-1 shrink-0"
                                />
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
