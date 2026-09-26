import { useEffect, useRef, useState } from "react";
import { ExternalLink, FileDown, Github, Linkedin, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navItems, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { Container } from "../components/Container";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(navItems.map((item) => item.href.slice(1)));
  const { pathname } = useLocation();
  const sectionHref = (href: string) => pathname === "/" ? href : `/${href}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-zinc-800 bg-[#09090b]/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <a
          href={sectionHref("#top")}
          className="font-mono text-sm font-semibold tracking-tight text-zinc-100"
          onClick={closeMenu}
        >
          Edwin Medina
          <span className="ml-1 text-emerald-400">_</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={sectionHref(item.href)}
                aria-current={pathname === "/" && isActive ? "location" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-400/5 text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.github}
            aria-label="GitHub de Edwin Medina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-50"
          >
            <Github aria-hidden="true" className="size-4" />
          </a>
          <a
            href={site.linkedin}
            aria-label="LinkedIn de Edwin Medina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-50"
          >
            <Linkedin aria-hidden="true" className="size-4" />
          </a>
          <a
            href={site.curriculum}
            download
            className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Currículo
            <FileDown aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-10 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-50 lg:hidden"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-800 bg-[#09090b] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={sectionHref(item.href)}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-zinc-800 pt-4">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-50"
              >
                GitHub
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-50"
              >
                LinkedIn
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
              <a
                href={site.curriculum}
                download
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-zinc-100 px-3 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Baixar currículo
                <FileDown aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
