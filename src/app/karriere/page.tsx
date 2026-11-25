import type { Metadata } from "next";
import Image from "next/image";
import { Check, Growth, Helmet, Phone, Trowel, Users } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections";
import { Button, SectionHeading } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere – Jobs & Ausbildung als Maurer in Kamenz",
  description:
    "Die A & K Hochbau GmbH in Kamenz sucht einen Maurer (m/w/d) und bildet zum Maurer oder Hochbaufacharbeiter (m/w/d) aus. Jetzt bewerben.",
  alternates: { canonical: "/karriere" },
};

// Anforderungen laut Stellenseite der bestehenden Website
const jobRequirements = ["Facharbeiterabschluss", "Führerscheinklasse B", "Flexibilität", "Pünktlichkeit", "Teamfähigkeit"];

const apprenticeship = [
  "gut in Mathe, Physik und Deutsch bist",
  "körperlich und gesundheitlich fit bist",
  "anpacken kannst und dich auch mal dreckig machst",
  "Vorstellungsvermögen hast",
  "sorgfältig und genau arbeitest",
  "gern draußen wie drinnen arbeitest",
  "teamfähig und pünktlich bist",
  "keine Angst vor lauten Maschinen hast",
];

const why = [
  { icon: Trowel, title: "Handwerkliche Arbeit", text: "Echte Arbeit mit den Händen – vom Mauerwerk bis zur Außenanlage. Am Ende des Tages siehst du, was du geschafft hast." },
  { icon: Users, title: "Team", text: "Auf der Baustelle arbeitet man zusammen. Wir suchen Leute, die mit anpacken und sich aufeinander verlassen." },
  { icon: Growth, title: "Entwicklung", text: "Neubau, Sanierung, Erdarbeiten, Pflaster: Bei unserem breiten Leistungsspektrum lernst du viele Seiten des Bauens kennen." },
  { icon: Helmet, title: "Ausbildung", text: "Wir bilden selbst aus – zum Maurer oder Hochbaufacharbeiter. Ein solider Start in einen Beruf mit Zukunft." },
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Handwerk mit Zukunft."
        lead="Gestalte mit uns die Zukunft des Bauens. Wir stellen ein und bilden aus."
        image={img("photo-1701850009190-2859ba2aeea6")}
        imageAlt="Maurer trägt mit der Kelle Mörtel auf eine Ziegelwand auf"
      >
        <Button href="/kontakt?anliegen=Bewerbung">Jetzt bewerben</Button>
        <Button href="#stellen" variant="ghost-light">
          Offene Stellen
        </Button>
      </PageHero>

      {/* Stellen & Ausbildung */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="01" eyebrow="Offene Stellen" title="Aktuell suchen wir." />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal id="stellen" as="article" className="flex min-w-0 flex-col bg-white p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-slate px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">Stelle</span>
                <span className="text-sm text-ink-muted">Kamenz · Baustellen in der Region</span>
              </div>
              <h3 className="mt-6 text-3xl font-bold sm:text-4xl">Maurer (m/w/d)</h3>
              <p className="mt-4 text-ink-muted">Du bist ausgebildeter Maurer und willst in einem eingespielten Team arbeiten? Dann melde dich bei uns.</p>
              <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">Das bringst du mit</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {jobRequirements.map((r) => (
                  <li key={r} className="flex items-center gap-3 font-medium">
                    <Check className="size-5 shrink-0 text-accent-deep" /> {r}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <Button href="/kontakt?anliegen=Bewerbung" variant="dark">
                  Jetzt bewerben
                </Button>
              </div>
            </Reveal>

            <Reveal id="ausbildung" as="article" delay={100} className="flex min-w-0 flex-col bg-steel p-6 text-white sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate">Ausbildung</span>
                <span className="text-sm text-white/60">Haupt- oder Realschulabschluss</span>
              </div>
              <h3 className="mt-6 text-[1.7rem] font-bold [overflow-wrap:anywhere] hyphens-auto sm:text-4xl">Maurer oder Hochbau&shy;facharbeiter (m/w/d)</h3>
              <p className="mt-4 text-white/70">
                Du willst etwas errichten, worauf du stolz sein kannst? Dann steht deiner Ausbildung bei uns nichts im
                Weg, wenn du …
              </p>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {apprenticeship.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-white/85">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" /> {r}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/70">… und einen guten Haupt- oder Realschulabschluss hast.</p>
              <div className="mt-auto pt-10">
                <Button href="/kontakt?anliegen=Bewerbung">Ausbildung anfragen</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warum bei uns */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Warum bei uns"
              title="Bauen, was bleibt."
              lead={`Ein regionaler Handwerksbetrieb mit ${site.yearsExperience} Jahren Erfahrung und abwechslungsreichen Baustellen.`}
              align="split"
            />
          </Reveal>
          <ul className="mt-16 grid gap-px bg-concrete sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 80} className="bg-white p-8 sm:pr-10">
                <w.icon className="size-9 text-accent-deep" />
                <h3 className="mt-8 text-2xl font-bold">{w.title}</h3>
                <p className="mt-3 text-ink-muted">{w.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Bewerbung */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
        <div className="grid items-center overflow-hidden bg-slate text-white lg:grid-cols-12">
          <Reveal className="p-8 sm:p-12 lg:col-span-7 lg:p-16">
            <p className="eyebrow text-accent">Bewerbung</p>
            <h2 className="mt-5 text-4xl font-bold sm:text-6xl">Bewirb dich einfach.</h2>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Kein langes Anschreiben nötig: Ruf uns an, schreib uns eine E-Mail oder nutze das Kontaktformular. Wir
              melden uns bei dir.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/kontakt?anliegen=Bewerbung">Jetzt bewerben</Button>
              <Button href={site.phoneHref} variant="ghost-light" arrow={false}>
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-5" /> {site.phoneDisplay}
                </span>
              </Button>
            </div>
          </Reveal>
          <div className="relative hidden h-full min-h-[420px] lg:col-span-5 lg:block">
            <Image
              src={img("photo-1673865641469-34498379d8af")}
              alt="Platzhalter: Bauarbeiter bei Betonarbeiten"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
