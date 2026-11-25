import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";
import type { ServiceCategory } from "@/lib/services";
import { site } from "@/lib/site";
import { ArrowRight, ArrowUpRight, Phone } from "./icons";
import { Reveal } from "./reveal";
import { Button, DemoBadge } from "./ui";

/* ───────────── Unterseiten-Hero ───────────── */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-slate pb-16 pt-36 text-white sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(32,42,51,0.95)_0%,rgba(32,42,51,0.82)_45%,rgba(32,42,51,0.45)_100%)]"
      />
      <div className="container-x">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-[2.6rem] font-extrabold sm:text-6xl lg:text-[4.5rem]">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">{lead}</p>}
        {children && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}

/* ───────────── Leistungskarte (Startseite) ───────────── */
export function ServiceCard({ service, index }: { service: ServiceCategory; index: number }) {
  return (
    <Link
      href={`/leistungen#${service.slug}`}
      className="group flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(32,42,51,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-concrete">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-0 bg-slate px-3 py-2 text-xs font-semibold tabular-nums text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-[1.4rem] font-bold">{service.cardTitle}</h3>
        <p className="mt-3 text-ink-muted">{service.teaser}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.95rem] font-semibold text-slate">
          Mehr erfahren
          <ArrowRight className="size-4 text-accent-deep transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/* ───────────── Projektkarte ───────────── */
export function ProjectCard({ project, className = "", sizes }: { project: Project; className?: string; sizes: string }) {
  return (
    <article className={`group relative isolate overflow-hidden bg-steel ${className}`}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate/90 via-slate/25 to-transparent transition-opacity duration-500 group-hover:from-slate/95"
      />
      {project.demo && <DemoBadge className="absolute left-4 top-4" />}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-[1.4rem]">{project.title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100 group-focus-within:max-h-12 group-focus-within:opacity-100 max-md:max-h-12 max-md:opacity-100">
          {project.scope}
        </p>
      </div>
    </article>
  );
}

/* ───────────── Kontakt-CTA (Abschluss) ───────────── */
export function ContactCta({
  title = "Sie planen ein Bauvorhaben?",
  text = "Lassen Sie uns über Ihr Projekt sprechen.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-accent text-slate">
      {/* dezente Maßlinien-Struktur als Hintergrund */}
      <svg aria-hidden className="absolute inset-0 -z-10 h-full w-full opacity-[0.12]">
        <defs>
          <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#202A33" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
      <div className="container-x grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 className="text-[2.5rem] font-extrabold sm:text-6xl lg:text-7xl">{title}</h2>
          <p className="mt-5 max-w-xl text-xl font-medium text-slate/80">{text}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
          <Button href="/kontakt" variant="dark" className="w-full sm:w-auto">
            Jetzt Kontakt aufnehmen
          </Button>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 font-semibold underline decoration-slate/30 underline-offset-[6px] hover:decoration-slate"
          >
            <Phone className="size-5" /> oder anrufen: {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── Kompakter Inline-CTA ───────────── */
export function InlineCta({ text, href = "/kontakt", label = "Anfrage stellen" }: { text: string; href?: string; label?: string }) {
  return (
    <div className="flex flex-col gap-5 border-t border-slate/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-xl text-lg font-medium">{text}</p>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 font-semibold text-slate"
      >
        {label}
        <span className="grid size-10 place-items-center rounded-full bg-slate text-white transition-colors group-hover:bg-accent group-hover:text-slate">
          <ArrowUpRight className="size-[18px]" />
        </span>
      </Link>
    </div>
  );
}
