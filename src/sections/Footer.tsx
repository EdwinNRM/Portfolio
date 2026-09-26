import { Container } from "../components/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-sm text-zinc-500">
          © {new Date().getFullYear()} Edwin Medina
          <span className="text-emerald-400">_</span>
        </p>
        <p className="font-mono text-xs text-zinc-600">
          Construído com React · TypeScript · Vite · Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}