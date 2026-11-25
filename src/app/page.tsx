import Image from "next/image";
import { Bricks, Check, Grid, Pin, Plan } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ContactCta, InlineCta, ProjectCard, ServiceCard } from "@/components/sections";
import { Button, PlaceholderNote, SectionHeading } from "@/components/ui";
import { projects } from "@/lib/projects";
import { serviceCategories, serviceCount } from "@/lib/services";
import { img, site } from "@/lib/site";

const trust = [
  { value: `${site.yearsExperience}`, unit: "Jahre", label: "Erfahrung am Bau" },
  { value: `${serviceCount}`, unit: "Leistungen", label: "aus einer Hand – vom Aushub bis zum Ausbau" },
  { value: "Kamenz", unit: "", label: "Regional verwurzelt im Ortsteil Gelenau" },
  { value: "3", unit: "Kundengruppen", label: "Privatkunden, Firmen und öffentliche Auftraggeber" },
];

const reasons = [
  {
    icon: Bricks,
    title: "Langjährige Erfahrung",
    text: `${site.yearsExperience} Jahre Erfahrung mit Bauvorhaben in Kamenz und Umgebung – vom kleinen Auftrag bis zum kompletten Projekt.`,
  },
  {
    icon: Grid,
    title: "Vielseitige Leistungen",
    text: "Erdarbeiten, Rohbau, Sanierung, Ausbau und Außenanlagen: Viele Gewerke aus einer Hand bedeuten weniger Schnittstellen.",
  },
  {
    icon: Pin,
    title: "Regionaler Ansprechpartner",
    text: "Unser Firmensitz liegt in Kamenz. Wir kennen die Region und sind für Sie vor Ort erreichbar.",
  },
  {
    icon: Plan,
    title: "Individuelle Lösungen",
    text: "Jedes Grundstück und jedes Gebäude ist anders. Wir stimmen die Ausführung auf Ihr Vorhaben und Ihre Wünsche ab.",
  },
];

export default function Home() {
  const featured = [projects[0], projects[1], projects[2], projects[3]];

  return (
    <>
      {/* ═════════ 1 · Hero ═════════ */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-slate text-white">
        <Image
          src={img("photo-1609867271967-a82f85c48531")}
          alt="Baustelle eines mehrgeschossigen Gebäudes mit Kran"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[65%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(32,42,51,0.92)_0%,rgba(32,42,51,0.7)_45%,rgba(32,42,51,0.25)_100%),linear-gradient(0deg,rgba(32,42,51,0.85)_0%,rgba(32,42,51,0)_45%)]"
        />

        <div className="container-x flex flex-1 flex-col justify-end pb-28 pt-36 sm:pb-36 lg:pb-44">
          <p className="eyebrow text-accent">Bauunternehmen in Kamenz</p>
          <h1 className="mt-6 max-w-[15ch] text-[3rem] font-extrabold leading-[1.02] sm:text-7xl lg:text-[6.25rem]">
            Vom Fundament bis zur Fertigstellung.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-white/80 sm:text-xl">
            Ihr zuverlässiger Partner für Bau, Sanierung und Außenanlagen in Kamenz und Umgebung.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/kontakt">Projekt anfragen</Button>
            <Button href="/leistungen" variant="ghost-light">
              Unsere Leistungen
            </Button>
          </div>
        </div>

        {/* Planbeschriftung – Standortangabe als Signatur */}
        <div className="pointer-events-none absolute bottom-28 right-12 hidden w-64 text-white/55 xl:block">
          <div className="measure" />
          <p className="mt-3 flex justify-between text-[0.7rem] font-medium uppercase tracking-[0.18em]">
            <span>51,2517° N</span>
            <span>14,0672° O</span>
          </p>
          <p className="mt-1 text-right text-[0.7rem] uppercase tracking-[0.18em]">Kamenz · OT Gelenau</p>
        </div>
      </section>

      {/* ═════════ 2 · Vertrauen ═════════ */}
      <section aria-label="Auf einen Blick" className="relative z-10">
        <div className="container-x">
          <Reveal className="-mt-16 grid grid-cols-2 gap-px bg-concrete shadow-[0_30px_60px_-30px_rgba(32,42,51,0.35)] lg:-mt-20 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="bg-white p-5 sm:p-8">
                <p className="flex flex-wrap items-baseline gap-x-2 font-display text-slate">
                  <span className="text-[2rem] font-extrabold leading-none tracking-[-0.03em] sm:text-[2.6rem]">{t.value}</span>
                  {t.unit && <span className="text-sm font-bold text-accent-deep sm:text-base">{t.unit}</span>}
                </p>
                <p className="mt-3 text-sm leading-snug text-ink-muted sm:text-[0.95rem]">{t.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ═════════ 3 · Leistungen ═════════ */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Leistungen"
              title="Unsere Leistungen"
              lead="Von einzelnen Bauarbeiten bis zu umfassenden Bau- und Sanierungsprojekten."
              align="split"
            />
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {serviceCategories.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12">
            <InlineCta
              text={`Alle ${serviceCount} Einzelleistungen – übersichtlich nach Bereichen sortiert.`}
              href="/leistungen"
              label="Zur Leistungsübersicht"
            />
          </Reveal>
        </div>
      </section>

      {/* ═════════ 4 · Projekte ═════════ */}
      <section className="bg-slate py-24 text-white sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Projekte"
              title="Handwerk, das sichtbar bleibt."
              lead="So können ausgeführte Bauvorhaben künftig präsentiert werden – mit Bildern, Leistungsumfang und Ort."
              tone="dark"
              align="split"
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-[300px_300px] lg:grid-rows-[340px_340px]">
            <Reveal className="h-[380px] md:col-span-7 md:row-span-2 md:h-auto">
              <ProjectCard project={featured[0]} className="h-full" sizes="(min-width:768px) 58vw, 100vw" />
            </Reveal>
            <Reveal delay={80} className="h-[300px] md:col-span-5 md:h-auto">
              <ProjectCard project={featured[1]} className="h-full" sizes="(min-width:768px) 42vw, 100vw" />
            </Reveal>
            <Reveal delay={160} className="grid h-[300px] gap-4 sm:grid-cols-2 md:col-span-5 md:h-auto max-sm:h-auto">
              <ProjectCard project={featured[2]} className="h-[300px] md:h-full" sizes="(min-width:768px) 21vw, 100vw" />
              <ProjectCard project={featured[3]} className="h-[300px] md:h-full" sizes="(min-width:768px) 21vw, 100vw" />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
            <PlaceholderNote tone="dark">
              Konzeptdarstellung: Die gezeigten Projekte sind Beispiele mit Platzhalterbildern und keine Referenzen
              der {site.name}.
            </PlaceholderNote>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button href="/projekte" variant="ghost-light">
                Alle Projekte
              </Button>
              <Button href="/kontakt">Ihr Projekt anfragen</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ 5 · Warum A & K ═════════ */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading index="03" eyebrow="Warum A & K" title="Erfahrung. Qualität. Verlässlichkeit." />
              <p className="mt-6 max-w-md text-lg text-ink-muted">
                Ein Bauvorhaben ist Vertrauenssache. Darauf können Sie bei uns bauen.
              </p>
            </div>
          </Reveal>
          <ul className="grid border-l border-t border-concrete-dark/60 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <Reveal
                as="li"
                key={r.title}
                delay={i * 80}
                className="border-b border-r border-concrete-dark/60 bg-paper p-8 transition-colors duration-300 hover:bg-white sm:p-10"
              >
                <span className="grid size-14 place-items-center bg-slate text-accent">
                  <r.icon className="size-7" />
                </span>
                <h3 className="mt-8 text-[1.4rem] font-bold">{r.title}</h3>
                <p className="mt-3 text-ink-muted">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ═════════ 6 · Über uns ═════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-concrete sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={img("photo-1541888946425-d81bb19240f5")}
                alt="Platzhalter: Bauteam auf einer Baustelle"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-4 max-w-[17rem] bg-slate p-6 text-white sm:-right-6 sm:p-7">
              <p className="font-display text-4xl font-extrabold tracking-[-0.03em]">
                {site.yearsExperience} <span className="text-accent">Jahre</span>
              </p>
              <p className="mt-2 text-sm text-white/70">Erfahrung in Bau, Sanierung und Außenanlagen</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <SectionHeading index="04" eyebrow="Unternehmen" title="Ein Bauunternehmen mit Erfahrung." />
            <div className="mt-7 space-y-5 text-lg text-ink-muted">
              <p>
                Die {site.name} ist ein Handwerksbetrieb aus Kamenz im Ortsteil Gelenau. Seit {site.yearsExperience}{" "}
                Jahren setzen wir Bauvorhaben für Privatkunden, Firmen und öffentliche Auftraggeber um.
              </p>
              <p>
                Unser Anspruch: Qualität und Zufriedenheit zu einem guten Preis-Leistungs-Verhältnis – und ein Team,
                das zuverlässig anpackt.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 text-[1rem] sm:grid-cols-2">
              {["Handwerksbetrieb aus Kamenz", "Privat, Gewerbe & Öffentlich", "Breites Leistungsspektrum", "Zuverlässiges Team"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 font-medium">
                    <Check className="size-5 shrink-0 text-accent-deep" /> {t}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10">
              <Button href="/unternehmen" variant="dark">
                Mehr über uns
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ 7 · Karriere ═════════ */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid overflow-hidden bg-steel text-white lg:grid-cols-12">
            <div className="relative min-h-[280px] lg:col-span-5 lg:min-h-full">
              <Image
                src={img("photo-1701850009190-2859ba2aeea6")}
                alt="Platzhalter: Maurer trägt Mörtel auf eine Ziegelwand auf"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <Reveal className="p-8 sm:p-12 lg:col-span-7 lg:p-16">
              <p className="eyebrow text-accent">
                <span className="tabular-nums">05</span> <span aria-hidden>—</span> Karriere
              </p>
              <h2 className="mt-5 text-[2.25rem] font-bold sm:text-5xl">Werde Teil unseres Teams.</h2>
              <p className="mt-5 max-w-xl text-lg text-white/75">
                Wir stellen ein und bilden aus. Wenn du gern draußen arbeitest, anpacken kannst und etwas bauen willst,
                auf das du stolz sein kannst, dann bist du bei uns richtig.
              </p>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  { tag: "Stelle", title: "Maurer (m/w/d)" },
                  { tag: "Ausbildung", title: "Maurer / Hochbaufacharbeiter (m/w/d)" },
                ].map((j) => (
                  <li key={j.title}>
                    <a
                      href={`/karriere#${j.tag === "Stelle" ? "stellen" : "ausbildung"}`}
                      className="group flex h-full flex-col border border-white/15 p-5 transition-colors hover:border-accent hover:bg-white/5"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{j.tag}</span>
                      <span className="mt-2 font-display text-lg font-bold leading-snug">{j.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/karriere">Karriere entdecken</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════ 8 · Kontakt-CTA ═════════ */}
      <ContactCta />
    </>
  );
}

export const metadata = {
  alternates: { canonical: "/" },
};
