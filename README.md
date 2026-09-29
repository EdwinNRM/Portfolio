# Meu Portfólio

Sou **Edwin Medina**, Software Engineer com atuação em Full Stack e Backend.

Criei este portfólio para apresentar quem sou, o que faço, os problemas que resolvo e as
decisões por trás dos meus projetos. Também reuni aqui minha trajetória, minhas tecnologias e
as formas de entrar em contato comigo.

**Meu site:** [edwinnrm.dev.br](https://edwinnrm.dev.br/)

## Objetivo

Apresento meu trabalho em **Full Stack e Backend**, com foco em **C#/.NET, Python, FastAPI,
React, TypeScript, APIs REST, SQL, Docker, integração de sistemas, testes e arquitetura de
software**. Uso ResumeOS, Atlas Agroindustrial, Kleos e LazyJob como exemplos concretos do que
construí.

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite 6**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **React Router 6** (páginas individuais de projetos)
- **lucide-react** (ícones)
- **@fontsource-variable/inter** e **@fontsource-variable/jetbrains-mono** (fontes self-hosted)

Escolhi essa stack para manter o site leve e simples de evoluir. Uso uma SPA com metadados por
rota; se eu precisar de SEO mais avançado, posso acrescentar geração estática sem reescrever o
conteúdo das seções.

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

Separei o conteúdo da apresentação: mantenho minhas experiências, projetos e stack em
`src/data/*`, então consigo atualizar as informações sem alterar os componentes.

## Decisões técnicas

- **Dados estáticos.** Mantenho os dados dos projetos em `src/data/projects.ts`, sem depender da
  API do GitHub durante a visita.
- **Tema escuro.** Usei o verde como acento, com espaço para o conteúdo e a leitura dos projetos.
- **Animações discretas.** Uso `IntersectionObserver` e respeito a preferência por movimento
  reduzido (`prefers-reduced-motion`).
- **Acessibilidade.** Incluí HTML semântico, link para pular ao conteúdo, foco visível,
  navegação por teclado e controles identificados no menu mobile.
- **Fontes locais.** Hospedo as fontes com o site, sem chamadas ao Google Fonts.
- **Foto e capturas locais.** Minha foto e as imagens dos quatro projetos ficam em
  `public/images/`, sem depender do GitHub para carregar durante a visita.

## Rodando localmente

Para executar meu portfólio no computador:

```bash
npm install
npm run dev
```

Depois, acesso `http://localhost:5173`.

## Build

```bash
npm run build      # typecheck (tsc -b) + build de produção (vite build)
npm run preview    # serve o dist localmente
```

## Publicação

### GitHub Pages — hospedagem atual

Publico a versão gerada na branch `gh-pages` do meu repositório. Para gerar os arquivos:

```bash
npm ci
npm run build:pages
```

Esse build usa `/` como base, define `https://edwinnrm.dev.br/` nos metadados e cria HTML para
as quatro páginas de projetos. Também gera `404.html`, `.nojekyll` e `CNAME`. Publico **o conteúdo
de `dist/`** na raiz de `gh-pages`; nas configurações do repositório, uso **Deploy from a branch →
gh-pages → /(root)** e o domínio personalizado `edwinnrm.dev.br`.

No Registro.br, deixo o campo **Nome** vazio nos quatro registros A da raiz. Eles apontam para
`185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`. Para `www`, uso
o CNAME `www` → `EdwinNRM.github.io`, sem `/Portfolio`.

Para conferir o build localmente, uso `npm run preview` e abro `http://localhost:4173/`. O
build comum (`npm run build`) atende à minha prévia privada.

### Outras opções de hospedagem

Se eu precisar mudar de plataforma, mantenho `vercel.json` com rewrite para a SPA. No Vercel,
uso o preset **Vite**, `npm run build` e a saída `dist`. No Cloudflare Pages, uso o mesmo build
e configuro uma regra de rewrite de `/*` para `/index.html`.

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

## Como mantenho o conteúdo

- **Currículo:** atualizo `public/curriculo-edwin-medina.pdf` para mudar o arquivo do botão
  “Baixar currículo”.
- **Domínio:** se eu mudar o endereço do site, atualizo `.env.pages`, o CNAME e a URL em
  `scripts/prepare-pages.mjs`.
- **Informações pessoais e projetos:** edito os arquivos em `src/data/*`.

## Licença

Este é um projeto pessoal. Não concedo licença para reutilização livre do conteúdo ou do código.
