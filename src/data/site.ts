export const site = {
  name: "Edwin Medina",
  fullName: "Edwin Nichollas Rocha Medina",
  title: "Software Engineer | Full Stack & Backend",
  roles: ["Full Stack", "Backend", "APIs"],
  headline:
    "Construo sistemas, APIs e ferramentas que transformam problemas complexos em soluções simples.",
  location: "Brasil",
  email: "edwinnrm@gmail.com",
  github: "https://github.com/EdwinNRM",
  githubHandle: "EdwinNRM",
  avatar: `${import.meta.env.BASE_URL}images/edwin-medina.png`,
  linkedin: "https://www.linkedin.com/in/edwinnrmedina/",
  linkedinHandle: "edwinnrmedina",
  curriculum: `${import.meta.env.BASE_URL}curriculo-edwin-medina.pdf`,
  domain: import.meta.env.VITE_SITE_URL,
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
] as const;

export const heroStack = [
  "C# / .NET", "Python", "React", "Next.js", "NestJS", "Node.js", "TypeScript", "SQL", "Docker",
];
