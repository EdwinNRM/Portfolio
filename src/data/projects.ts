import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "resumeos",
    name: "ResumeOS",
    tagline: "Currículo tratado como sistema, não como documento.",
    status: "Repo público",
    accent: "emerald",
    language: "TypeScript",
    updatedAt: "Fev 2026",
    summary:
      "Editor de currículos ATS-first, local-first e sem login, construído como monorepo com React, Zustand e um backend FastAPI dedicado à exportação e às regras ATS.",
    problem:
      "A maioria das ferramentas trata o currículo como um documento visual. O resultado são currículos bonitos que reprovam em sistemas ATS e editores pesados que adicionam ruído em vez de estrutura.",
    solution:
      "ResumeOS trata o currículo como um sistema: um schema estruturado compartilhado entre frontend e backend, um editor em blocos sem distrações, um preview focado em ATS e um fluxo local-first, sem contas e sem armazenamento no servidor.",
    architecture: [
      "Monorepo: web / api / shared",
      "web → React + Zustand + Vite (editor e preview)",
      "api → FastAPI (exportação PDF e motor ATS)",
      "shared → schema, validação e regras ATS (fonte única de verdade)",
    ],
    stack: [
      { category: "Frontend", items: ["React 18", "TypeScript", "Vite", "Zustand", "Zod", "lucide-react"] },
      { category: "Backend", items: ["Python", "FastAPI", "Pydantic", "Uvicorn"] },
      { category: "Arquitetura", items: ["Monorepo", "Schema compartilhado", "API stateless"] },
    ],
    features: [
      { title: "Editor em blocos", description: "Estrutura estilo Notion para redigir o currículo sem ruído visual." },
      { title: "Preview ATS-friendly", description: "Renderização que prioriza estrutura semântica e legibilidade para sistemas ATS." },
      { title: "Local-first e sem login", description: "Armazenamento no navegador. Sem contas, sem servidor de dados." },
      { title: "Exportação para PDF", description: "Pipeline de exportação executado pela API FastAPI." },
      { title: "Segurança por design", description: "Validação de schema no front e no back e pipeline de renderização sanitizada, sem injeção de HTML cru." },
    ],
    decisions: [
      { decision: "Schema compartilhado entre web e API", motive: "Uma única fonte de verdade para estrutura e validação do currículo, entregue em TS e Python." },
      { decision: "Zustand no frontend", motive: "Gerenciamento de estado leve para um app local-first, sem biblioteca pesada." },
      { decision: "Zod com tipagem derivada", motive: "Validação de runtime consistente no frontend a partir do mesmo schema." },
      { decision: "API stateless", motive: "Sem sessão ou estado persistente no servidor — mais simples e com menor superfície de ataque." },
    ],
    challenges: [
      "Manter compatibilidade com ATS sem sacrificar a estrutura semântica do conteúdo.",
      "Garantir validação consistente entre o schema TypeScript e o Python.",
      "Construir um fluxo de exportação PDF confiável a partir de um schema estruturado.",
    ],
    role: "Arquitetura do monorepo, schema compartilhado, editor de blocos, motor ATS e API de exportação.",
    results: ["8 commits em organização evolutiva", "Web deployada no GitHub Pages", "README com arquitetura, segurança e roadmap"],
    github: "https://github.com/EdwinNRM/ResumeOS",
    demo: "https://EdwinNRM.github.io/ResumeOS",
  },
  {
    slug: "atlas-match-engine",
    name: "Atlas Match Engine",
    tagline: "Inteligência de carreira com matching explicável.",
    status: "Repo público",
    accent: "sky",
    language: "Python",
    updatedAt: "Fev 2026",
    summary:
      "Serviço em Python/FastAPI que agrega vagas de fontes públicas (LinkedIn Guest, RSS e APIs), avalia a compatibilidade com um perfil de desenvolvedor e apresenta o resultado com explicações.",
    problem:
      "Descobrir oportunidades relevantes é trabalhoso e opaco: cada fonte é isolada, não há contexto de perfil e não existe uma noção clara de por que uma vaga combina ou não com você.",
    solution:
      "Atlas expande o perfil do usuário em buscas inteligentes, coleta oportunidades de múltiplas fontes públicas, pontua cada uma internamente e traduz o resultado em níveis de compatibilidade legíveis com a explicação da correspondência.",
    architecture: [
      "Serviço independente: ResumeOS → Atlas → fontes de vagas",
      "app/ → ingestão, scoring e camada de interface",
      "Dashboard web mínimo em /atlas/dashboard",
      "CLI para testar o motor sem interface",
    ],
    stack: [
      { category: "Backend", items: ["Python 3.11+", "FastAPI", "Pydantic", "Uvicorn", "httpx", "feedparser", "Beautiful Soup", "Jinja2"] },
      { category: "Integração", items: ["APIs públicas", "RSS", "LinkedIn Guest Jobs"] },
      { category: "Arquitetura", items: ["Serviço modular", "Pronto para microsserviço"] },
    ],
    features: [
      { title: "Agregação multi-fonte", description: "LinkedIn Guest, RSS e APIs públicas como fontes de oportunidades." },
      { title: "Matching explicável", description: "Score interno traduzido em níveis de compatibilidade com a justificativa da correspondência." },
      { title: "Expansão de queries a partir do perfil", description: "As buscas derivam do perfil do usuário, não de termos fixos." },
      { title: "Dashboard mínimo", description: "Compatibilidade, fonte e motivo do match em uma interface limpa." },
      { title: "Extensível", description: "Arquitetura modular preparada para evoluir para uma camada mais ampla de inteligência de carreira." },
    ],
    decisions: [
      { decision: "Somente fontes públicas", motive: "Sem scraping autenticado, sem automação de candidaturas e sem coleta invasiva de dados." },
      { decision: "Score interno + explicação legível", motive: "Transparência sobre se, e o quanto, uma oportunidade se alinha ao perfil." },
      { decision: "Serviço separado do editor", motive: "ResumeOS e Atlas evoluem de forma independente sem acoplamento." },
    ],
    challenges: [
      "Normalizar dados de fontes heterogêneas em um formato único.",
      "Traduzir um score numérico em informação útil para uma pessoa decidir.",
      "Operar apenas com endpoints públicos e ainda assim gerar resultados relevantes.",
    ],
    role: "Arquitetura do serviço, ingestão de dados, lógica de matching e dashboard de controle.",
    results: ["4 commits", "CLI e dashboard funcionais com uma única origem de dados", "README documentando visão e limites do serviço"],
    github: "https://github.com/EdwinNRM/atlas-match-engine",
  },
  {
    slug: "kleos",
    name: "Kleos",
    tagline: "Portfólio técnico como narrativa de alto nível.",
    status: "Repo público",
    accent: "violet",
    language: "TypeScript",
    updatedAt: "Fev 2026",
    summary:
      "Gerador de portfólio técnico focado em julgamento técnico e prova narrativa: autoria local, preview com validação de qualidade e exportação para um artefato 100% estático.",
    problem:
      "Portfólios genéricos mostram o que o profissional construiu, mas não como ele decide, resolve problemas e gerencia trade-offs. Sem essa profundidade, é difícil gerar convicção em recrutamentos senior.",
    solution:
      "Kleos é a camada narrativa do ecossistema Calliope: um editor local com guardrails de qualidade que força foco, e uma exportação que gera um portfólio estático pronto para qualquer host.",
    architecture: [
      "Três estágios: autoria (editor local) → validação (preview) → exportação (ZIP estático)",
      "Editor em Next.js; artefato final em HTML, CSS e assets puros",
      "Sem banco de dados, sem contas, sem armazenamento server-side",
    ],
    stack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Ferramentas", items: ["JSZip", "ESLint"] },
      { category: "Arquitetura", items: ["Editor + artefato estático", "Export ZIP"] },
    ],
    features: [
      { title: "Narrative-first", description: "Leitura sequencial e de alta densidade, em vez de grade de cards." },
      { title: "Evidência visual", description: "Sistema dedicado para fluxogramas, dashboards e screenshots." },
      { title: "Guardrails de qualidade", description: "Limites de quantidade de projetos e extensão narrativa para manter autoridade." },
      { title: "Controle local", description: "Os dados permanecem do autor — sem nuvem obrigatória." },
      { title: "Exportação estática", description: "Artefato zipado com HTML/CSS/assets, sem runtime Node no site final." },
    ],
    decisions: [
      { decision: "Next.js apenas para autoria", motive: "Experiência de edição rica sem impactar o artefato final exportado." },
      { decision: "Artefato 100% estático", motive: "Qualquer host estático funciona: GitHub Pages, Vercel, Netlify." },
      { decision: "Limites rígidos de conteúdo", motive: "Menos projetos e texto mais seletivo geram mais convicção." },
    ],
    challenges: [
      "Equilibrar um editor robusto com um artefato final simples.",
      "Definir guardrails de qualidade que orientem sem engessar a escrita.",
    ],
    role: "Concepção do produto, editor local, pipeline de exportação e guardrails editoriais.",
    results: ["3 estágios de workflow implementados", "Exportação em ZIP estático", "Distingue o papel do currículo (ResumeOS) da narrativa (Kleos)"],
    github: "https://github.com/EdwinNRM/Kleos",
  },
  {
    slug: "atlas-agroindustrial",
    name: "Atlas Agroindustrial",
    tagline: "Da DRE ao diagnóstico: dados para decisões financeiras.",
    status: "Repo público",
    accent: "amber",
    language: "Power BI / Python",
    updatedAt: "Set 2026",
    summary:
      "Case de BI financeiro e FP&A com geração de dados em Python, modelo dimensional e oito páginas de análise no Power BI: DRE, orçamento, margens, forecast e diagnóstico de desvios. Empresa e dados inteiramente fictícios.",
    problem:
      "Saber se o resultado ficou acima ou abaixo do plano não explica o desvio. A gestão precisa identificar quais contas, produtos e unidades pressionam a margem, além de antecipar riscos do Forecast em relação ao Budget.",
    solution:
      "Uma jornada analítica em oito páginas conectando resultado, performance, drivers, operação, futuro, diagnóstico e decisão. O relatório parte da DRE consolidada e chega às exceções e prioridades do Management Cockpit. Todo o case utiliza uma empresa fictícia e dados sintéticos de 2023 a 2026.",
    architecture: [
      "Python → geração e validação reproduzíveis dos dados sintéticos",
      "data/processed → seis arquivos CSV consumidos pelo modelo",
      "Power Query (M) → ingestão e tipagem com parâmetro DataPath",
      "Modelo dimensional → Fato Financeiro e dimensões conformadas",
      "DAX → indicadores financeiros, margens e variações entre cenários",
      "PBIP / PBIR / TMDL → relatório e modelo semântico versionáveis",
    ],
    stack: [
      { category: "Business Intelligence", items: ["Power BI", "DAX", "Power Query (M)"] },
      { category: "Dados", items: ["Python", "pandas", "NumPy", "CSV"] },
      { category: "Modelagem e versionamento", items: ["Modelo dimensional", "PBIP", "PBIR", "TMDL"] },
    ],
    features: [
      { title: "DRE e visão executiva", description: "Formação do resultado, KPIs, evolução do EBITDA e comparação de Actual com Budget." },
      { title: "Performance comercial e operacional", description: "Análise de receita, volume, preço médio, custos e margens por produto, unidade e região." },
      { title: "Forecast e cenários", description: "Comparação entre Actual, Budget e Forecast, incluindo bridge de Budget para Forecast." },
      { title: "Diagnóstico de desvios", description: "Decomposition Tree para investigar os drivers por região, unidade, categoria, produto e conta." },
      { title: "Management Cockpit", description: "Indicadores, exceções, riscos e prioridades gerenciais em uma visão integrada." },
      { title: "Dados reproduzíveis", description: "41.472 lançamentos sintéticos, gerados com seed fixa e validação de consistência." },
    ],
    decisions: [
      { decision: "Empresa fictícia e dados sintéticos", motive: "Demonstrar situações financeiras plausíveis sem utilizar dados de empresas reais." },
      { decision: "Modelo dimensional", motive: "Conectar perspectivas financeiras, comerciais e operacionais por dimensões consistentes." },
      { decision: "PBIP como código-fonte", motive: "Versionar definições do relatório e do modelo semântico, permitindo revisar mudanças no Git." },
      { decision: "Jornada de análise em oito páginas", motive: "Organizar a investigação do resultado até os drivers e as prioridades de decisão." },
      { decision: "Parâmetro DataPath compartilhado", motive: "Configurar a localização dos seis CSVs em um único ponto, facilitando a reprodução do case." },
    ],
    challenges: [
      "Gerar dados com chaves consistentes e histórias de negócio controladas entre Actual, Budget e Forecast.",
      "Manter coerência entre DRE, receita, custos, margens e variações ao mudar os filtros.",
      "Conectar oito páginas de análise sem transformar o relatório em um conjunto de dashboards isolados.",
    ],
    role: "Concepção do case, geração e validação de dados em Python, modelagem dimensional, Power Query, medidas DAX, design das oito páginas e documentação técnica.",
    results: ["8 páginas integradas de análise financeira", "41.472 lançamentos sintéticos no período de 2023–2026", "Cenários Actual, Budget e Forecast", "Modelo e relatório versionados com documentação de arquitetura e dicionário de dados"],
    github: "https://github.com/EdwinNRM/AtlasAgroindustrial",
    image: {
      src: "/images/atlas-management-cockpit.png",
      alt: "Dashboard Management Cockpit da Atlas Agroindustrial com KPIs financeiros, evolução do EBITDA e análise de desvios",
      caption: "Management Cockpit — captura real do projeto. Empresa e dados fictícios, criados para demonstração.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
