export function Terminal({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div aria-hidden="true" className="border-t border-zinc-800 bg-[#0c0c0e] px-6 py-5 font-mono text-sm leading-relaxed">
        <p><span className="text-emerald-400">$</span> whoami</p>
        <p className="mt-2 text-zinc-400">Software Engineer · Full Stack · Backend</p>
        <p className="mt-3 text-emerald-400">$ <span className="terminal-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-emerald-400" /></p>
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0c0c0e] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_16px_40px_-20px_rgba(0,0,0,0.9)]"
    >
      <div className="flex items-center gap-2 border-b border-zinc-800/80 px-4 py-3">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2 font-mono text-[11px] text-zinc-500">~/edwin-medina</span>
      </div>
      <div className="space-y-3 px-4 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <p>
          <span className="text-emerald-400">$</span> whoami
        </p>
        <p className="text-zinc-100">Edwin Medina</p>
        <p className="text-zinc-400">Software Engineer · Full Stack · Backend</p>
        <p className="pt-2">
          <span className="text-emerald-400">$</span> stack
        </p>
        <p className="text-zinc-400">
          C# · .NET · Python · React · TypeScript · SQL · Docker
        </p>
        <p className="pt-2">
          <span className="text-emerald-400">$</span>
          <span className="ml-2 inline-block h-4 w-2 translate-y-0.5 bg-emerald-400 terminal-caret" />
        </p>
      </div>
    </div>
  );
}
