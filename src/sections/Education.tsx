import { GraduationCap, Trophy } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { awards, education } from "../data/education";

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-24 border-t border-zinc-900 py-20 sm:py-28">
      <Container>
        <SectionHeading index="05" eyebrow="Formação" title="Formação e reconhecimentos">
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            Engenharia de Software como base técnica, com raízes em Engenharia Mecânica e
            automação — e reconhecimentos em tecnologia.
          </p>
        </SectionHeading>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              <GraduationCap aria-hidden="true" className="size-4" />
              Academics
            </h3>
            <ol className="space-y-5">
              {education.map((item, index) => (
                <Reveal key={`${item.degree}-${item.institution}`} delay={index * 40}>
                  <li className="flex items-start justify-between gap-4 rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100">{item.degree}</h4>
                      <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-zinc-400">{item.period}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              <Trophy aria-hidden="true" className="size-4" />
              Reconhecimentos
            </h3>
            <ul className="space-y-5">
              {awards.map((item, index) => (
                <Reveal key={item.title} delay={index * 40}>
                  <li>
                    <h4 className="text-sm font-semibold text-emerald-400">{item.title}</h4>
                    <p className="mt-1 text-base leading-relaxed text-zinc-400">{item.description}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}