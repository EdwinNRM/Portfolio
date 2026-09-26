interface TagProps {
  children: string;
  muted?: boolean;
}

export function Tag({ children, muted = false }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs leading-none ${
        muted
          ? "border-zinc-800 bg-transparent text-zinc-500"
          : "border-zinc-800 bg-zinc-900 text-zinc-300"
      }`}
    >
      {children}
    </span>
  );
}