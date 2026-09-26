import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 border-t border-zinc-900 py-20 sm:py-28">
      <Container>
        <SectionHeading index="02" eyebrow="Experiência" title="Experiência profissional">
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            Desenvolvimento de software em escala real, liderança técnica e uma base sólida em
            processos e análise — combinadas para entregar software que resolve problemas de negócio.
          </p>
        </SectionHeading>

        <ol className="relative space-y-12 border-l border-zinc-800 pl-6 sm:space-y-16 sm:pl-10">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal delay={index * 40}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[29px] top-1.5 size-2.5 rounded-full ring-4 ring-[#09090b] sm:-left-[45px] ${
                      index === 0 ? "bg-emerald-400" : "bg-zinc-600"
                    }`}
                  />
                  <div className="grid gap-4 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">{job.company}</h3>
                      <p className="mt-1 text-sm font-medium text-emerald-400">{job.role}</p>
                      <p className="mt-1 font-mono text-xs text-zinc-400">{job.period}</p>
                    </div>
                    <div>
                      <p className="text-base leading-relaxed text-zinc-400">{job.summary}</p>
                      <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {job.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-zinc-400">
                            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-emerald-400/80" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}