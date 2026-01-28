"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience, type ExperienceRole } from "@/lib/content/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";

/**
 * Experience Section Component
 * Displays professional experience with projects
 */

export function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-center">
          Professional Experience
        </h2>

        <div className="space-y-16">
          {experience.map((role, index) => (
            <ExperienceItem key={role.role} role={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Individual Experience Item
 */
function ExperienceItem({
  role,
  index,
}: {
  role: ExperienceRole;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  const location = role.location || "";
  const duration = role.duration || "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="space-y-8"
    >
      {/* Company Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-border/50">
        {/* Left: Company & Role */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-accent">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {role.company}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {role.role}
          </h3>
        </div>

        {/* Right: Duration & Location */}
        <div className="space-y-2 md:text-right">
          <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-6">
        {role.projects.map((project, projectIndex) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={projectIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Individual Project Card
 */
function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    stack: string;
    bullets: string[];
  };
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="border border-border rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-accent/30 transition-all duration-300 group"
    >
      {/* Project Title */}
      <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
        {project.title}
      </h4>

      {/* Tech Stack */}
      <div className="mb-4 pb-4 border-b border-border/30">
        <p className="text-sm text-accent/80 font-medium">
          <span className="text-muted-foreground">Stack: </span>
          {project.stack}
        </p>
      </div>

      {/* Bullets */}
      <ul className="space-y-3">
        {project.bullets.map((bullet, bulletIndex) => (
          <li
            key={bulletIndex}
            className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
            <span className="group-hover:text-foreground/90 transition-colors">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
