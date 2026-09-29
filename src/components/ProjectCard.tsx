import { ArrowUpRight, Folder, Github, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../types";

const accentStyles = {
  emerald: { text: "text-emerald-400", dot: "bg-emerald-400", hover: "hover:border-emerald-400/40" },
  sky: { text: "text-sky-400", dot: "bg-sky-400", hover: "hover:border-sky-400/40" },
  violet: { text: "text-violet-400", dot: "bg-violet-400", hover: "hover:border-violet-400/40" },
  amber: { text: "text-amber-400", dot: "bg-amber-400", hover: "hover:border-amber-400/40" },
} as const;

const trees: Record<string, string[]> = {
  resumeos: ["web", "api", "shared"],
  kleos: ["src", "public", "next.config.ts"],
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = accentStyles[project.accent];
  const technologies = project.stack.flatMap((group) => group.items);

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#101012] transition-colors ${accent.hover}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 px-5 py-3 font-mono text-xs text-zinc-400">
        <span className="inline-flex items-center gap-2"><GitBranch aria-hidden="true" className={`size-3.5 ${accent.text}`} />{project.language}</span>
        <span>{project.status}</span>
      </div>
      <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true" className="project-visual block aspect-video overflow-hidden border-b border-zinc-800 bg-[#0c0c0e]">
        {project.image ? (
          <img src={project.image.src} alt="" loading="lazy" decoding="async" width={1343} height={757} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
        ) : (
          <div className="flex h-full flex-col justify-center px-8 py-5 font-mono text-sm sm:px-10">
            <p className={`mb-4 text-base ${accent.text}`}><span className="text-zinc-500">~/</span>{project.name.toLowerCase()}</p>
            <div className="space-y-2.5 border-l border-zinc-700 pl-5">
              {(trees[project.slug] ?? ["src"]).map((entry) => (
                <p key={entry} className="flex items-center gap-3 text-zinc-400"><Folder className={`size-4 ${accent.text} opacity-70`} />{entry}</p>
              ))}
            </div>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
            <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-white">{project.name}</Link>
          </h3>
          <span className={`mt-2 size-2 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${accent.text}`}>{project.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">{project.summary}</p>
        <ul className="mb-6 mt-5 flex flex-wrap gap-2" aria-label="Stack do projeto">
          {technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-xs text-zinc-300">{tech}</li>
          ))}
          {technologies.length > 4 && <li className="rounded-md border border-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400" aria-label={`${technologies.length - 4} outras tecnologias nos detalhes`}>+{technologies.length - 4}</li>}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-4">
          <Link to={`/projects/${project.slug}`} className={`inline-flex min-h-11 items-center gap-2 text-sm font-medium ${accent.text} hover:underline underline-offset-4`}>
            Explorar projeto <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.name} no GitHub`} className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100">
            <Github aria-hidden="true" className="size-4" /> Código
          </a>
        </div>
      </div>
    </article>
  );
}
