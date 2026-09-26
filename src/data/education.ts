import type { EducationItem, AwardItem } from "../types";

export const education: EducationItem[] = [
  {
    degree: "Pós-graduação Lato Sensu em Inteligência Artificial e Machine Learning",
    institution: "Universidade Pitágoras Unopar Anhanguera",
    period: "2026",
    type: "postgrad",
  },
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "UniEVANGÉLICA",
    period: "2025",
    type: "degree",
  },
  {
    degree: "Bacharelado em Engenharia Mecânica",
    institution: "Universidade Paulista",
    period: "2016",
    type: "degree",
  },
  {
    degree: "Técnico em Mecatrônica",
    institution: "ETEC Philadelpho Gouvêa Netto",
    period: "2010",
    type: "course",
  },
];

export const awards: AwardItem[] = [
  {
    title: "GitHub Campus Expert",
    description: "Programa oficial de liderança de estudantes do GitHub.",
  },
  {
    title: "Prêmio Schaeffler de Excelência Tecnológica — Honra ao Mérito",
    description: "Reconhecimento em excelência tecnológica.",
  },
  {
    title: "Medalha de Ouro na Olimpíada de Programação",
    description: "Desempenho em competição de programação.",
  },
  {
    title: "Tricampeão do Robocode interno",
    description: "Três conquistas consecutivas na competição de Robocode.",
  },
  {
    title: "1º lugar no Hackathon de Engenharia de Software",
    description: "Primeira colocação em hackathon da área.",
  },
];
