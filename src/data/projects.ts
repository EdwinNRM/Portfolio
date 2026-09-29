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
  {
    slug: "kleos",
    name: "Kleos",
    tagline: "Portfólio técnico como narrativa de alto nível.",
    status: "Repo público",
    accent: "violet",
    language: "TypeScript",
    updatedAt: "Set 2026",
    summary:
      "Editor de portfólio técnico com etapas de autoria, prévia editorial e exportação em ZIP estático. O conteúdo fica no navegador, e cada projeto é apresentado por tensão, decisão e prova.",
    problem:
      "Portfólios genéricos mostram o que o profissional construiu, mas não como ele decide, resolve problemas e gerencia trade-offs. Sem essa profundidade, é difícil gerar convicção em recrutamentos senior.",
    solution:
      "Kleos conduz a escrita da identidade, visão técnica, método e até três projetos. A prévia mostra o rascunho salvo no navegador; antes da exportação, o editor verifica campos essenciais e a estrutura dos casos. O ZIP inclui HTML, CSS e imagens enviadas pelo autor.",
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
    results: ["Editor e prévia funcionais na versão de produção local", "ZIP gerado com HTML, CSS e conteúdo editado", "Fluxo verificado no Edge com dados demonstrativos"],
    github: "https://github.com/EdwinNRM/Kleos",
    image: {
      src: "/images/kleos-editor.png",
      alt: "Editor Kleos com campos de identidade e intenção profissional",
      caption: "Editor Kleos em execução com perfil fictício de demonstração.",
    },
  },
  {
    slug: "lazyjob",
    name: "LazyJob",
    tagline: "Vagas, currículo e candidaturas em um só lugar.",
    status: "Repo público",
    accent: "sky",
    language: "TypeScript",
    updatedAt: "Set 2026",
    summary:
      "Aplicação local para organizar vagas em um Kanban, revisar um currículo para cada oportunidade e manter versões em PDF. Combina cadastro manual, coleta assistida e histórico de candidaturas sem enviar inscrições automaticamente.",
    problem:
      "A busca de vagas acontece em fontes diferentes, enquanto currículo, histórico e etapas de candidatura ficam espalhados. Isso dificulta acompanhar cada oportunidade e lembrar qual documento foi preparado ou enviado.",
    solution:
      "O LazyJob reúne oportunidades em seis etapas de Kanban, permite cadastro manual ou consulta a fontes configuradas e mantém o currículo-base e suas versões por vaga. A pessoa revisa, baixa o PDF e se candidata no portal de origem; depois registra a etapa no aplicativo.",
    architecture: [
      "frontend/ → React, TypeScript e Vite para Kanban, configurações e revisão",
      "backend/ → Express com API HTTP local",
      "Prisma + SQLite → vagas, configurações, versões de CV e histórico",
      "Playwright → coleta assistida de portais; RSS e APIs JSON configuráveis",
      "pdf-lib → PDFs de currículo com fonte incorporada",
    ],
    stack: [
      { category: "Frontend", items: ["React", "TypeScript", "Vite", "TanStack Query", "dnd-kit"] },
      { category: "Backend e dados", items: ["Node.js", "Express", "Prisma", "SQLite"] },
      { category: "Automação e documentos", items: ["Playwright", "RSS / APIs JSON", "pdf-lib"] },
    ],
    features: [
      { title: "Kanban de seis etapas", description: "Acompanhamento visual de vagas, da descoberta à candidatura ou arquivamento." },
      { title: "Coleta assistida", description: "Integrações com portais e fontes RSS/API configuradas, com histórico de falhas e deduplicação." },
      { title: "Triagem revisável", description: "Classificação heurística de vagas de TI remotas elegíveis no Brasil, com casos ambíguos pendentes." },
      { title: "Currículo por oportunidade", description: "Revisão do texto e geração de PDF para cada vaga, com versões anteriores preservadas." },
      { title: "IA opcional", description: "Pode reordenar seções existentes, preservando os fatos; sem IA, usa o texto original." },
      { title: "Uso local", description: "Servidor restrito a localhost e dados armazenados no computador do usuário." },
    ],
    decisions: [
      { decision: "Aplicação local de usuário único", motive: "Manter currículo, histórico e configurações no próprio computador, sem serviço público ou contas." },
      { decision: "Candidatura manual", motive: "A automação ajuda a organizar e preparar; a decisão e o envio permanecem com a pessoa." },
      { decision: "Versões imutáveis do currículo", motive: "Permitir revisar o que foi preparado para cada vaga sem sobrescrever documentos anteriores." },
      { decision: "Falhas de coleta visíveis", motive: "Portais podem bloquear automação ou mudar formato; a interface mostra erros e mantém o cadastro manual." },
    ],
    challenges: [
      "Normalizar fontes de vagas com formatos e disponibilidade diferentes sem esconder falhas.",
      "Gerar PDFs legíveis preservando conteúdo, contatos e histórico de versões.",
      "Manter a interação do Kanban funcional por teclado e em telas menores.",
    ],
    role: "Concepção e desenvolvimento do frontend, API local, persistência, fluxo de currículo por vaga e automação de coleta.",
    results: ["47 testes de backend e 10 de frontend passaram", "4 testes de navegador passaram em desktop e celular", "Fluxo de criação de vaga, PDF versionado e registro de candidatura validado com dados fictícios"],
    github: "https://github.com/EdwinNRM/LazyJob",
    image: {
      src: "/images/lazyjob-kanban.png",
      alt: "Kanban do LazyJob com vagas fictícias em seis etapas de candidatura",
      caption: "Kanban do LazyJob com vagas fictícias usadas para demonstração.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
