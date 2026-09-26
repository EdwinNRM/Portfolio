import type { ExperienceItem } from "../types";

export const trajectory: { label: string; note: string }[] = [
  { label: "Engenharia Mecânica", note: "base de raciocínio analítico e precisão" },
  { label: "Processos · Operações · Dados", note: "visão de negócio e operação" },
  { label: "Desenvolvimento de Software", note: "transição para tecnologia" },
  { label: "Full Stack / Backend", note: "sistemas, APIs e integrações" },
  { label: "Engenharia de Software", note: "arquitetura, testes e qualidade" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Anbetec",
    role: "Desenvolvedor Full Stack",
    period: "2026 — Atual",
    summary:
      "Desenvolvimento e evolução de aplicações e APIs REST, com foco em integração entre sistemas, bancos de dados e resolução de problemas técnicos no dia a dia.",
    highlights: [
      "Desenvolvimento Full Stack de aplicações",
      "APIs REST e integração entre sistemas",
      "NextJS, NestJS, NodeJS e TypeScript",
      "Bancos de dados e modelagem",
      "Docker e Git no fluxo de trabalho",
      "Manutenção e evolução de sistemas",
    ],
  },
  {
    company: "Framework Digital",
    role: "Desenvolvedor de Software",
    period: "2022 — 2025",
    summary:
      "Desenvolvimento e sustentação de sistemas utilizados por mais de 20.000 usuários. Atuei com APIs, SQL e NoSQL, integrações entre sistemas e, por um ano, como Product Owner, fazendo a interface entre negócio, clientes e desenvolvimento.",
    highlights: [
      "Sistemas utilizados por mais de 20.000 usuários",
      "Desenvolvimento de APIs e integrações entre sistemas",
      "C#, .NET, React e TypeScript",
      "Bancos SQL e NoSQL",
      "Product Owner por 1 ano — interface entre negócio, clientes e dev",
      "Liderança de 4 desenvolvedores",
      "Gestão de 11 projetos internos",
    ],
  },
  {
    company: "Universidade Evangélica de Goiás",
    role: "Professor Formador",
    period: "2026 — Atual",
    summary:
      "Ministro conteúdos no curso de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de APIs, integração de sistemas e testes de software.",
    highlights: [
      "Desenvolvimento de APIs",
      "Integração de sistemas",
      "Testes de software e qualidade",
      "Resolução de problemas técnicos",
    ],
  },
  {
    company: "Companhia Metalgraphica Paulista",
    role: "Analista de Logística Sênior",
    period: "2022",
    summary:
      "Atuação em processos e operações de logística, aplicando análise de dados para apoiar decisões operacionais.",
    highlights: [
      "Processos e operações logísticas",
      "Análise de dados para apoio à decisão",
      "Visão de operação aplicada à tecnologia",
    ],
  },
  {
    company: "COFCO International",
    role: "Controlling Analyst Sênior",
    period: "2016 — 2020",
    summary:
      "Análise financeira e controladoria em ambiente corporativo multinacional, com automação de processos, dashboards e uso de SAP e TOTVS Datasul.",
    highlights: [
      "Análise financeira e controladoria",
      "SAP e TOTVS Datasul",
      "Automação e dashboards",
      "Ambiente corporativo multinacional",
    ],
  },
];