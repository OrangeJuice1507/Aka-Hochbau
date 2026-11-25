import type { Metadata } from "next";
import Image from "next/image";
import { Check, Pin, Users } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ContactCta, PageHero } from "@/components/sections";
import { Button, PlaceholderNote, SectionHeading } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unternehmen – Bauunternehmen aus Kamenz mit 29 Jahren Erfahrung",
  description:
    "Die A & K Hochbau GmbH ist ein Handwerksbetrieb aus Kamenz (OT Gelenau) und arbeitet seit 29 Jahren für Privatkunden, Firmen und öffentliche Auftraggeber.",
  alternates: { canonical: "/unternehmen" },
};

const values = [
  {
    title: "Ihre Wünsche im Mittelpunkt",
    text: "Wir setzen Ihre Vorstellungen gekonnt um – abgestimmt auf Ihr Gebäude, Ihr Grundstück und Ihr Budget.",
  },
  {
    title: "Qualität zum fairen Preis",
    text: "Qualität und Zufriedenheit zu einem guten Preis-Leistungs-Verhältnis – das ist unser Anspruch an jede Baustelle.",
  },
  {
    title: "Ein zuverlässiges Team",
    text: "Eine professionelle Arbeitsweise und ein Team, auf das Sie sich verlassen können – vom Aushub bis zum Ausbau.",
  },
];

const steps = [
  { title: "Anfrage", text: "Sie schildern uns telefonisch oder per Formular Ihr Vorhaben." },
  { title: "Abstimmung", text: "Wir klären Umfang, Gegebenheiten vor Ort und Ihre Wünsche." },
  { title: "Angebot", text: "Sie erhalten ein Angebot für die besprochenen Leistungen." },
  { title: "Ausführung", text: "Unser Team setzt die Arbeiten fachgerecht um." },
];

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Ein Bauunternehmen mit Erfahrung."
        lead={`Handwerksbetrieb aus Kamenz – seit ${site.yearsExperience} Jahren für Privatkunden, Firmen und öffentliche Auftraggeber im Einsatz.`}
        image={img("photo-1541888946425-d81bb19240f5")}
        imageAlt="Platzhalter: Bauteam auf einer Baustelle"
      />

      {/* Einleitung */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <SectionHeading index="01" eyebrow="Wer wir sind" title="Bauen ist Vertrauenssache." />
            <div className="mt-8 space-y-5 text-lg text-ink-muted">
              <p>
                Die {site.name} ist ein Handwerksbetrieb aus Kamenz im Ortsteil Gelenau. Zu unseren Kunden gehören
                Privatkunden, Firmen und öffentliche Auftraggeber.
              </p>
              <p>
                Mit {site.yearsExperience} Jahren Erfahrung bieten wir ein breites Spektrum an Leistungen rund um das
                Bauen: vom Neubau über Sanierung und Umbau bis zu Erdarbeiten, Pflasterarbeiten und Außenanlagen.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <dl className="divide-y divide-concrete-dark/70 border-y border-concrete-dark/70">
              {[
                { k: "Erfahrung", v: `${site.yearsExperience} Jahre` },
                { k: "Standort", v: `${site.address.city}, ${site.address.district}` },
                { k: "Auftraggeber", v: "Privat · Gewerbe · Öffentlich" },
                { k: "Rechtsform", v: "GmbH" },
              ].map((r) => (
                <div key={r.k} className="flex items-baseline justify-between gap-6 py-5">
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">{r.k}</dt>
                  <dd className="text-right font-display text-xl font-bold">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Leitsatz */}
      <section className="relative isolate overflow-hidden bg-slate py-24 text-white sm:py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-accent">Unser Leitsatz</p>
            <blockquote className="mt-8 max-w-5xl font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-7xl lg:text-[5.5rem]">
              „Vom Fundament bis zum <span className="text-accent">Schornsteinkopf!</span>“
            </blockquote>
            <div className="mt-10 max-w-sm text-white/55">
              <div className="measure" />
            </div>
          </Reveal>
          <ul className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 90} className="bg-slate p-8 sm:p-10">
                <Check className="size-7 text-accent" />
                <h3 className="mt-6 text-2xl font-bold">{v.title}</h3>
                <p className="mt-3 text-white/70">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Arbeitsweise"
              title="Von der Anfrage bis zur Ausführung."
              lead="Klare Absprachen von Anfang an – so läuft die Zusammenarbeit mit uns."
              align="split"
            />
          </Reveal>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative lg:pr-10">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center border border-slate font-display text-lg font-bold tabular-nums">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-concrete-dark lg:block" />}
                </div>
                <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 max-w-2xl">
            <PlaceholderNote>Ablauf als Vorschlag – vor Veröffentlichung mit dem Unternehmen abstimmen.</PlaceholderNote>
          </div>
        </div>
      </section>

      {/* Ansprechpartner & Team */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading index="03" eyebrow="Ansprechpartner" title="Menschen, die anpacken." />
            <p className="mt-6 text-lg text-ink-muted">
              Hier stellen sich künftig Geschäftsführung und Team mit Foto und Kontaktdaten vor – damit Sie wissen, mit
              wem Sie bauen.
            </p>
            <div className="mt-10">
              <Button href="/kontakt" variant="dark">
                Kontakt aufnehmen
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {[
              { role: "Geschäftsführung", note: "Name und Foto folgen" },
              { role: "Bauleitung / Ansprechpartner", note: "Name und Foto folgen" },
            ].map((p, i) => (
              <Reveal key={p.role} delay={i * 100}>
                <figure className="bg-paper">
                  <div className="grid aspect-[4/5] place-items-center bg-[repeating-linear-gradient(135deg,#ecebe6_0_12px,#f5f4f0_12px_24px)]">
                    <Users className="size-16 text-concrete-dark" />
                  </div>
                  <figcaption className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">{p.role}</p>
                    <p className="mt-2 font-display text-xl font-bold">{p.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-concrete">
            <Image
              src={img("photo-1772442198624-4fc4d7281e89")}
              alt="Platzhalter: Bauleiter prüft Baupläne"
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading index="04" eyebrow="Standort" title="Zuhause in Kamenz." />
            <p className="mt-6 text-lg text-ink-muted">
              Von unserem Firmensitz im Kamenzer Ortsteil Gelenau aus sind wir für Bauvorhaben in Kamenz und der
              Umgebung im Einsatz.
            </p>
            <address className="mt-8 flex gap-4 not-italic">
              <Pin className="mt-1 size-6 shrink-0 text-accent-deep" />
              <span className="text-lg">
                <strong className="font-semibold">{site.name}</strong>
                <br />
                {site.address.street}, {site.address.zip} {site.address.city}
              </span>
            </address>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/kontakt">Projekt anfragen</Button>
              <Button href={site.mapsUrl} variant="ghost-dark" target="_blank" rel="noopener noreferrer">
                Route planen
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
