import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}

export function SectionHeading({ index, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-sm text-emerald-400">{index}</span>
        <span className="h-px w-8 bg-zinc-800" aria-hidden="true" />
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-zinc-400">{eyebrow}</p>
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
