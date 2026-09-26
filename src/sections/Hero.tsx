import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Terminal } from "../components/Terminal";
import { heroStack, site } from "../data/site";

const highlights = [
  { value: "20.000+", label: "usuários nos sistemas em que atuei" },
  { value: "4", label: "desenvolvedores na equipe que liderei" },
  { value: "11", label: "projetos internos sob minha gestão" },
];

export function Hero() {
  return (
    <section id="top" aria-label="Apresentação" className="hero-section relative overflow-hidden">
      <Container className="relative pt-12 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 font-mono text-sm text-emerald-400">
              <span className="text-zinc-400">Olá, eu sou</span>
            </p>
            <h1 className="hero-name font-semibold text-zinc-50">{site.name}</h1>
            <p className="mt-6 text-xl font-medium tracking-tight text-zinc-200 sm:text-2xl">Software Engineer</p>
            <p className="mt-2 font-mono text-sm text-emerald-400 sm:text-base">
              Full Stack <span className="px-1 text-zinc-600">/</span> Backend
              <span className="px-1 text-zinc-600">/</span> APIs
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">{site.headline}</p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologias principais">
              {heroStack.map((tech) => (
                <li key={tech} className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-sm text-zinc-300">{tech}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projetos" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-emerald-400 px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300">
                Ver projetos <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a href="#contato" className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-300">
                Vamos conversar <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"><Github aria-hidden="true" className="size-4" /> GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"><Linkedin aria-hidden="true" className="size-4" /> LinkedIn</a>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"><Mail aria-hidden="true" className="size-4" /> E-mail</a>
            </div>
          </div>
          <div className="profile-panel mx-auto w-full max-w-sm lg:justify-self-end">
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
              <span className="font-mono text-xs text-zinc-400">perfil.md</span>
              <span aria-hidden="true" className="flex gap-1.5"><span className="size-2 rounded-full bg-zinc-600" /><span className="size-2 rounded-full bg-zinc-600" /><span className="size-2 rounded-full bg-emerald-400/70" /></span>
            </div>
            <div className="px-6 pb-7 pt-8 text-center">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Conhecer o perfil de Edwin Medina no GitHub" className="portrait-link relative mx-auto block w-52 rounded-full sm:w-60">
                <img src={site.avatar} alt="Foto de perfil de Edwin Medina" width={460} height={460} fetchPriority="high" className="aspect-square w-full rounded-full object-cover" />
                <span aria-hidden="true" className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full border-4 border-[#101012] bg-emerald-400 text-zinc-950"><Github className="size-5" /></span>
              </a>
              <p className="mt-6 text-lg font-semibold text-zinc-100">{site.name}</p>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-10 items-center gap-1.5 font-mono text-sm text-emerald-400 hover:text-emerald-300">@{site.githubHandle} <ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
            </div>
            <Terminal compact />
          </div>
        </div>
        <dl className="mt-14 grid gap-6 border-t border-zinc-800/80 py-8 sm:mt-16 sm:grid-cols-3 sm:gap-8 sm:py-10">
          {highlights.map((item) => (
            <div key={item.value} className="flex flex-col">
              <dt className="max-w-[26ch] text-sm leading-relaxed text-zinc-400">{item.label}</dt>
              <dd className="order-first mb-2 font-mono text-3xl font-medium tracking-tight text-zinc-100">{item.value}<span className="text-emerald-400">_</span></dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
