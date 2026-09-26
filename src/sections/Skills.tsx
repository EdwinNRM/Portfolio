import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="tecnologias" className="scroll-mt-24 border-t border-zinc-900 py-20 sm:py-28">
      <Container>
        <SectionHeading index="04" eyebrow="Tecnologias" title="Stack e ferramentas">
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            Tecnologias trabalhadas no dia a dia, organizadas por área de atuação.
          </p>
        </SectionHeading>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.name} delay={index * 40}>
              <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-zinc-400">
                <span aria-hidden="true" className="text-emerald-400">//</span>
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}