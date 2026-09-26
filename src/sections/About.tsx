import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { aboutHighlights, aboutBottom } from "../data/about";
import { trajectory } from "../data/experience";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading index="01" eyebrow="Sobre" title="Engenheiro de Software com visão de negócio">
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400">
            Atualmente Desenvolvedor Full Stack na Anbetec, trabalho com APIs REST, integração entre
            sistemas, bancos de dados e evolução de aplicações. Participei do desenvolvimento e
            sustentação de sistemas utilizados por mais de 20.000 usuários e, por um ano, atuei como
            Product Owner, fazendo a ponte entre negócio, clientes e desenvolvimento.
          </p>
        </SectionHeading>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Trajetória
            </h3>
            <ol className="relative border-l border-zinc-800 pl-6">
              {trajectory.map((step, index) => (
                <li key={step.label} className="relative pb-6 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[28px] top-1 size-2 rounded-full ${
                      index === trajectory.length - 1 ? "bg-emerald-400" : "bg-zinc-700"
                    }`}
                  />
                  <p className="text-sm font-semibold text-zinc-200">{step.label}</p>
                  <p className="mt-0.5 text-sm text-zinc-400">{step.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="flex flex-col gap-4">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 transition-colors hover:border-zinc-700">
                  <h3 className="text-sm font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-zinc-400">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-zinc-300">
              {aboutBottom[0]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">{aboutBottom[1]}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}