"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Close, Menu, Phone } from "./icons";
import { Logo } from "./logo";
import { Button } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Kopfzeile wird beim Scrollen kompakt und deckend
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü bei Seitenwechsel schließen
  useEffect(() => setOpen(false), [pathname]);

  // Scroll sperren + Escape schließt
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        solid ? "bg-slate py-3 shadow-[0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-12px_rgba(0,0,0,0.35)]" : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link href="/" aria-label="A & K Hochbau GmbH – zur Startseite" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative px-3.5 py-2 text-[0.94rem] font-medium transition-colors ${
                    isActive(item.href) ? "text-white" : "text-white/72 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[0.94rem] font-medium text-white/80 transition-colors hover:text-white xl:flex"
          >
            <Phone className="size-[18px]" />
            {site.phoneDisplay}
          </a>
          <span className="hidden sm:block">
            <Button href="/kontakt" className="!min-h-11 !px-5" arrow={false}>
              Projekt anfragen
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="grid size-12 place-items-center text-white lg:hidden"
          >
            {open ? <Close className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </div>

      {/* Mobile-Menü */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[68px] overflow-y-auto bg-slate lg:hidden"
      >
        <nav aria-label="Mobile Navigation" className="container-x flex min-h-full flex-col pb-10 pt-6">
          <ul className="border-t border-white/10">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline gap-4 py-4 font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-white"
                >
                  <span className="w-6 text-xs font-medium tabular-nums text-white/40">0{i + 1}</span>
                  <span className={isActive(item.href) ? "text-accent" : ""}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-10">
            <Button href="/kontakt">Projekt anfragen</Button>
            <Button href={site.phoneHref} variant="ghost-light" arrow={false}>
              <span className="inline-flex items-center gap-2">
                <Phone className="size-5" /> {site.phoneDisplay}
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
