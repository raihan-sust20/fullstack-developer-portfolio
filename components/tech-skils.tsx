"use client";

import Image from "next/image";
import { skills } from "@/lib/content/skills";

/**
 * Skills Section Component
 * Displays technical skills grouped by category with icons
 */

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => {
            return (
              <div
                key={group.category}
                className="border border-border rounded-xl p-6 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors"
              >
                <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">
                  {group.category}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {group.skills.map((skill) => {
                    return <SkillCard key={skill} skill={skill} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Individual Skill Card with Icon and Name
 */
function SkillCard({ skill }: { skill: string }) {
  // Convert skill name to filename format (lowercase, replace spaces with hyphens)
  const iconFileName = skill
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\./g, "");
  const iconPath = `/images/tech-skills/${iconFileName}-icon.png`;

  return (
    <div className="group cursor-default">
      <div className="flex flex-col items-center gap-3 p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
        {/* Skill Icon */}
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image
            src={iconPath}
            alt={`${skill} icon`}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Skill Name */}
        <span className="text-sm text-center text-foreground/80 group-hover:text-accent transition-colors duration-300 font-medium leading-tight">
          {skill}
        </span>
      </div>
    </div>
  );
}