import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { site } from "../data/site";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 border-t border-zinc-900 py-20 sm:py-28">
      <Container>
        <SectionHeading index="06" eyebrow="Contato" title="Vamos conversar?">
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Estou aberto a oportunidades em desenvolvimento de software, backend, full stack e
            engenharia de software.
          </p>
        </SectionHeading>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${site.email}`}
              className="group rounded-xl border border-zinc-800 bg-[#101012] p-6 transition-colors hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between"><Mail aria-hidden="true" className="size-5 text-emerald-400" /><ArrowUpRight aria-hidden="true" className="size-4 text-zinc-500 transition-colors group-hover:text-emerald-400" /></div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Email</p>
              <p className="mt-2 break-all text-sm font-medium text-zinc-100">{site.email}</p>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 bg-[#101012] p-6 transition-colors hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between"><Linkedin aria-hidden="true" className="size-5 text-emerald-400" /><ArrowUpRight aria-hidden="true" className="size-4 text-zinc-500 transition-colors group-hover:text-emerald-400" /></div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">LinkedIn</p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{site.linkedinHandle}</p>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 bg-[#101012] p-6 transition-colors hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between"><Github aria-hidden="true" className="size-5 text-emerald-400" /><ArrowUpRight aria-hidden="true" className="size-4 text-zinc-500 transition-colors group-hover:text-emerald-400" /></div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">GitHub</p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{site.githubHandle}</p>
            </a>
          </div>

          <a
            href={site.curriculum}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-300"
          >
            <Download aria-hidden="true" className="size-4" />
            Baixar currículo
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
