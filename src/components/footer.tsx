import Link from "next/link";
import { nav, site } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import { ArrowRight, Facebook, Mail, Phone, Pin } from "./icons";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-slate text-white/70">
      {/* Kontakt-Leiste */}
      <div className="border-b border-white/10">
        <div className="container-x grid gap-8 py-14 md:grid-cols-[1fr_1.25fr] md:items-center">
          <div>
            <p className="font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
              Wir sind für Sie erreichbar.
            </p>
            <p className="mt-3 max-w-md">Rufen Sie an oder schreiben Sie uns – wir melden uns zu Ihrem Vorhaben.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            <a
              href={site.phoneHref}
              className="group flex items-center justify-between gap-4 border border-white/15 px-5 py-4 text-white transition-colors hover:border-accent"
            >
              <span className="flex items-center gap-3">
                <Phone className="size-5 text-accent" />
                <span className="font-semibold">{site.phoneDisplay}</span>
              </span>
              <ArrowRight className="size-4 opacity-50 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 border border-white/15 px-5 py-4 text-white transition-colors hover:border-accent"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Mail className="size-5 shrink-0 text-accent" />
                <span className="truncate font-semibold">{site.email}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 opacity-50 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <address className="mt-7 flex gap-3 not-italic leading-relaxed">
            <Pin className="mt-1 size-5 shrink-0 text-accent" />
            <span>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city} ({site.address.district})
            </span>
          </address>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
          >
            <Facebook className="size-5" /> A &amp; K Hochbau auf Facebook
          </a>
        </div>

        <nav aria-label="Seiten" className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Seiten</p>
          <ul className="mt-5 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Leistungen" className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Leistungen</p>
          <ul className="mt-5 space-y-2.5">
            {serviceCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/leistungen#${c.slug}`} className="transition-colors hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Bauvorhaben?</p>
          <p className="mt-5">Beschreiben Sie uns kurz Ihr Projekt – wir melden uns bei Ihnen.</p>
          <Link
            href="/kontakt"
            className="mt-5 inline-flex min-h-12 items-center gap-2 bg-accent px-5 font-semibold text-slate transition-colors hover:bg-[#d6884d]"
          >
            Projekt anfragen <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {site.name}</p>
          <p className="text-white/40">Konzeptentwurf für einen neuen Internetauftritt – Bilder und Projekte sind Platzhalter.</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
