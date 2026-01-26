export type SkillGroup = {
  category: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  { category: "Languages", skills: ["Node.js", "TypeScript"] },
  {
    category: "Frameworks & Runtimes",
    skills: ["NestJS", "Express.js", "Next.js", "Jest", "gRPC"],
  },
  { category: "Databases & Storage", skills: ["PostgreSQL", "MongoDB"] },
  { category: "Frontend", skills: ["React", "Redux"] },
  { category: "APIs & Communication", skills: ["RESTful APIs"] },
  {
    category: "Infrastructure & DevOps",
    skills: ["Docker", "Kafka", "Redis", "Git"],
  },
]
