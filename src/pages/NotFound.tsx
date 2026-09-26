import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { usePageMeta } from "../lib/usePageMeta";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export function NotFound() {
  usePageMeta({ title: "Página não encontrada | Edwin Medina" });

  return (
    <>
      <Header />
      <main>
        <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <p className="font-mono text-sm text-emerald-400">status: 404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-4 max-w-md text-base text-zinc-400">
            O conteúdo que você procura não existe ou foi movido.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-300"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Voltar para o início
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}