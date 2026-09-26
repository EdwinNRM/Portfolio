import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    items: ["C#", ".NET", "Python", "FastAPI", "Node.js", "PHP", "Laravel"],
  },
  {
    name: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "React Native"],
  },
  {
    name: "Banco de dados",
    items: ["SQL", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "NoSQL"],
  },
  {
    name: "DevOps / Ferramentas",
    items: ["Docker", "Git", "GitHub", "Swagger / OpenAPI"],
  },
  {
    name: "Engenharia",
    items: [
      "APIs REST",
      "Clean Code",
      "SOLID",
      "Testes de software",
      "Integração de sistemas",
      "Arquitetura de software",
    ],
  },
];