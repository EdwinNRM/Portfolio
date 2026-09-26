import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "../components/Container";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";
import { site } from "../data/site";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 border-t border-zinc-900 py-20 sm:py-28">
      <Container>
        <SectionHeading index="03" eyebrow="Projetos" title="Código, decisões e resultados">
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            Aplicações, serviços e análise de dados. Explore o problema, a arquitetura e as
            decisões por trás de cada projeto.
          </p>
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Github aria-hidden="true" className="size-4" />
            Ver todos os repositórios no GitHub
            <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
