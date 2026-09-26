import { BookOpenCheck } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { teaching } from "../data/teaching";

export function Teaching() {
  return (
    <section aria-label="Professor Formador" className="border-t border-zinc-900 py-14">
      <Container>
        <Reveal>
          <div className="rounded-lg border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.04] to-transparent p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                  <BookOpenCheck aria-hidden="true" className="size-4" />
                  {teaching.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
                  {teaching.subjectLine}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-400">
                  Atualmente ministro seis disciplinas na Universidade Evangélica de Goiás.
                  {" "}
                  Ensinar consolida o domínio técnico. Ministrar esses conteúdos exige e evidencia
                  comunicação clara, liderança técnica e capacidade de estruturar e transmitir
                  conceitos de forma precisa.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Disciplinas atuais ({teaching.contexts.length})
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {teaching.contexts.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-emerald-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Evidência de
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {teaching.evidence.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-emerald-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
