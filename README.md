# edwinmedina.dev — Portfolio de Edwin Medina

Portfólio profissional de **Edwin Medina**, Software Engineer | Full Stack & Backend.

Um site construído para funcionar como vitrine técnica para recrutadores, tech leads e gestores
de engenharia: responde rápido quem é o Edwin, o que ele faz, quais problemas resolve, quais
projetos construiu e como entrar em contato.

## Objetivo

Posicionar Edwin Medina como **Software Engineer / Full Stack / Backend** com foco em **C#/.NET,
Python, FastAPI, React, TypeScript, APIs REST, SQL, Docker, integração de sistemas, testes e
arquitetura de software** — com o GitHub (ResumeOS, Atlas Match Engine, Kleos e Atlas Agroindustrial) como
evidência técnica.

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite 6**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **React Router 6** (páginas individuais de projetos)
- **lucide-react** (ícones)
- **@fontsource-variable/inter** e **@fontsource-variable/jetbrains-mono** (fontes self-hosted)

Stack escolhida por ser leve, rápida e fácil de manter. Sem SSG/SSR de propósito: para o
escopo de um portfólio, um SPA com meta tags por rota atende bem, mantém o deploy simples e a
experiência de desenvolvimento rápida. Se SEO avançado se tornar prioridade, a base atual pode
migrar para Vite SSG (ex.: vite-press/astro) sem reescrever as seções.

## Arquitetura

```
src/
  components/     UI genérica (Container, Tag, Reveal, Terminal, ProjectCard...)
  sections/       Seções da home (Header, Hero, About, Experience, Projects, Skills, Education, Teaching, Contact, Footer)
  pages/          Home, ProjectPage (/projects/:slug), NotFound
  data/           Conteúdo separado da apresentação (perfil, experiência, projetos, stack, formação)
  hooks/          useActiveSection (scrollspy do header)
  lib/            usePageMeta (SEO por rota)
  types/          Tipos compartilhados
  App.tsx         Rotas
  index.css       Tema Tailwind
```

**Princípio principal:** conteúdo separado de apresentação. Experiências, projetos e stack vivem
em `src/data/*` — alterar o conteúdo não exige tocar nos componentes.

## Decisões técnicas

- **Dados estáticos, não API em runtime.** Os dados dos repositórios vêm de `src/data/projects.ts`.
  O site continua funcionando com o GitHub indisponível e não faz chamadas por renderização.
  Para atualizar números (stars etc.), basta editar o arquivo de dados.
- **Dark theme com acento único (emerald).** Design inspirado em Linear/Vercel/GitHub: bastante
  espaço negativo, tipografia forte, detalhes de terminal/client como elemento secundário.
- **Animações discretas.** Reveal-on-scroll via `IntersectionObserver`, com respeito a
  `prefers-reduced-motion`.
- **Acessibilidade.** HTML semântico, skip link, foco visível, ARIA no menu mobile, contraste
  adequado e navegação por teclado.
- **Fontes self-hosted.** Sem request externo a Google Fonts.
- **Foto e evidências locais.** A foto original do GitHub está em `public/images/edwin-medina.png`;
  a captura real do Management Cockpit está em `public/images/atlas-management-cockpit.png`.
  Esses arquivos evitam dependência do GitHub durante a visita. Para atualizar a foto, substitua
  o PNG mantendo o caminho em `src/data/site.ts`.

## Como executar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Como fazer build

```bash
npm run build      # typecheck (tsc -b) + build de produção (vite build)
npm run preview    # serve o dist localmente
```

## Como fazer deploy

### Vercel (recomendado)

O projeto já inclui `vercel.json` com rewrite SPA. O Vercel detecta Vite automaticamente:

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório em https://vercel.com/new — framework preset **Vite**, build
`npm run build`, output `dist`.

### Cloudflare Pages

Build command: `npm run build` · Output directory: `dist`. Adicione uma SPA redirect rule:

- Source: `/*`
- Destination: `/index.html`
- Status: `200 (Rewrite)`

### GitHub Pages

```bash
npm run build
```

Faça o push do conteúdo de `dist` para a branch `gh-pages` (o projeto `‑‑base ./` via
`vite.config.ts` se necessário). Alternativa: `npm run deploy` pode ser configurada com
`gh-pages`, como nos demais projetos do repositório.

## SEO

- `index.html`: `title`, `description`, Open Graph e Twitter Card.
- `usePageMeta`: atualiza `title`/`description` por rota (home e páginas de projeto).
- `public/robots.txt` e `public/sitemap.xml`.
- `public/og.svg`: imagem de marca para compartilhamento.

## Estrutura de dados dos projetos

Cada projeto em `src/data/projects.ts` contém:

- Problema, solução, arquitetura, stack, características, decisões técnicas, desafios,
  resultados e papel desempenhado — tudo baseado nos repositórios reais do GitHub
  (READMEs, `package.json`, `requirements.txt` e estrutura de arquivos).

## Pontos que dependem de você

1. **Currículo:** `public/curriculo-edwin-medina.pdf` contém uma cópia do PDF do projeto de perfil.
   Substitua esse arquivo para atualizar o documento oferecido em "Baixar currículo".
2. **Domínio:** o site assume `https://edwinmedina.dev` em `index.html`, `robots.txt`,
   `sitemap.xml` e `og:url`. Ajuste em `src/data/site.ts` e nos arquivos `public/` se o domínio
   for outro.
3. **Dados:** revisar `src/data/*` e ajustar qualquer informação (períodos, resumos, links).

## Licença

Projeto pessoal. Conteúdo e código não são licenciados para uso livre.
