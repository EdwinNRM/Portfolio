import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experience";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Teaching } from "../sections/Teaching";
import { usePageMeta } from "../lib/usePageMeta";

export function Home() {
  usePageMeta({
    title: "Edwin Medina | Software Engineer | Full Stack & Backend",
    description:
      "Software Engineer e Desenvolvedor Full Stack especializado em C#, .NET, Python, APIs REST, React, SQL e integração de sistemas.",
  });
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </>
  );
}