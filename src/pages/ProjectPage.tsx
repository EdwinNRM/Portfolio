import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { getProject } from "../data/projects";
import { site } from "../data/site";
import { usePageMeta } from "../lib/usePageMeta";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { NotFound } from "./NotFound";

const accentStyles = {
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
} as const;

function Block({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section className="mt-16 border-t border-zinc-800/70 pt-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-emerald-400">{index}</span>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">{title}</h2>
        </div>
        {children}
      </section>
    </Reveal>
  );
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  usePageMeta({
    title: project
      ? `${project.name} | Edwin Medina`
      : "Projeto não encontrado | Edwin Medina",
    description: project?.summary,
  });

  if (!project) {
    return <NotFound />;
  }

  const accent = accentStyles[project.accent];

  return (
    <>
      <Header />
      <main>
        <article className="pb-10">
          <Container className="max-w-3xl pb-16 pt-14 sm:pt-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              voltar para o início
            </Link>

            <p className={`mt-10 font-mono text-sm ${accent}`}>{project.name.toLowerCase()}/</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
              {project.name}
            </h1>
            <p className={`mt-3 font-mono text-sm sm:text-base ${accent}`}>{project.tagline}</p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Stack resumida">
              {project.stack
                .flatMap((group) => group.items)
                .slice(0, 8)
                .map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-900/50 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-300"
              >
                <Github aria-hidden="true" className="size-4" />
                Ver repositório
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
                >
                  Abrir demo
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-y border-zinc-800/70 py-4 font-mono text-xs text-zinc-400">
              <span>linguagem: <span className={accent}>{project.language}</span></span>
              <span>status: {project.status.toLowerCase()}</span>
              <span>última atualização: {project.updatedAt.toLowerCase()}</span>
            </div>
          </Container>

          <Container className="max-w-3xl">
            {project.image && (
              <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30">
                <a href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Abrir captura de ${project.name} em tamanho original`}>
                  <img src={project.image.src} alt={project.image.alt} width={1343} height={757} className="h-auto w-full" />
                </a>
                <figcaption className="px-5 py-4 text-base leading-relaxed text-zinc-400">{project.image.caption}</figcaption>
              </figure>
            )}
            <Block index="01" title="Problema">
              <p className="text-base leading-relaxed text-zinc-400">{project.problem}</p>
            </Block>

            <Block index="02" title="Solução">
              <p className="text-base leading-relaxed text-zinc-400">{project.solution}</p>
            </Block>

            <Block index="03" title="Arquitetura">
              <ul className="space-y-3">
                {project.architecture.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-base leading-relaxed text-zinc-300">
                    <span aria-hidden="true" className={`mt-2 size-1.5 shrink-0 rounded-full ${accent}`} />
                    <span className="font-mono">{line}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block index="04" title="Stack">
              <div className="grid gap-8 sm:grid-cols-2">
                {project.stack.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {group.category}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-zinc-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block index="05" title="Principais características">
              <ul className="space-y-5">
                {project.features.map((feature) => (
                  <li key={feature.title}>
                    <h3 className="text-sm font-semibold text-zinc-200">{feature.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-zinc-400">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block index="06" title="Decisões técnicas">
              <ul className="space-y-5">
                {project.decisions.map((decision) => (
                  <li key={decision.decision}>
                    <h3 className="text-sm font-semibold text-zinc-200">{decision.decision}</h3>
                    <p className="mt-1 text-base leading-relaxed text-zinc-400">{decision.motive}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block index="07" title="Desafios e resoluções">
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-base leading-relaxed text-zinc-400">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-zinc-600" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </Block>

            {project.results && project.results.length > 0 && (
              <Block index="08" title="Resultados">
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 text-base leading-relaxed text-zinc-400">
                      <span aria-hidden="true" className={`mt-1.5 text-xs ${accent}`}>✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            <Block index="09" title="Meu papel">
              <p className="text-base leading-relaxed text-zinc-400">{project.role}</p>
            </Block>

            <Reveal>
              <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Continuar explorando
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Outros projetos em <span className={accent}>{site.githubHandle}</span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50"
                  >
                    <Github aria-hidden="true" className="size-4" />
                    GitHub
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-300"
                  >
                    Início
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
