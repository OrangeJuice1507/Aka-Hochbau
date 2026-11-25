import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ContactCta, PageHero } from "@/components/sections";
import { Button } from "@/components/ui";
import { serviceCategories, serviceCount } from "@/lib/services";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen – Hochbau, Sanierung, Erdarbeiten & Pflasterarbeiten in Kamenz",
  description:
    "Neubau, Altbausanierung, Erd- und Baggerarbeiten, Pflasterarbeiten, Außenanlagen, Trockenbau und mehr: alle Bauleistungen der A & K Hochbau GmbH aus Kamenz im Überblick.",
  alternates: { canonical: "/leistungen" },
};

/** Zuordnung Kategorie → Vorauswahl im Kontaktformular */
const formType: Record<string, string> = {
  hochbau: "Neubau",
  sanierung: "Umbau",
  erdarbeiten: "Erd",
  aussenanlagen: "Pflaster",
  ausbau: "Ausbau",
  naturstein: "Naturstein",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Unsere Leistungen"
        lead={`Vielfältige Bauleistungen aus einer Hand – ${serviceCount} Leistungen in sechs Bereichen, vom ersten Spatenstich bis zur fertigen Außenanlage.`}
        image={img("photo-1704005445445-2747074be8ac")}
        imageAlt="Maurerkelle mit Mörtel auf einer Ziegelwand"
      />

      {/* Sprungmarken */}
      <nav aria-label="Leistungsbereiche" className="sticky top-[68px] z-30 border-b border-concrete bg-paper/95 backdrop-blur">
        <div className="container-x">
          <ul className="-mx-1 flex gap-1 overflow-x-auto py-3">
            {serviceCategories.map((c, i) => (
              <li key={c.slug} className="shrink-0">
                <a
                  href={`#${c.slug}`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[0.92rem] font-medium text-slate/80 transition-colors hover:bg-white hover:text-slate"
                >
                  <span className="text-xs tabular-nums text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="py-12 sm:py-20">
        {serviceCategories.map((c, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={c.slug} id={c.slug} aria-labelledby={`${c.slug}-title`} className="py-12 sm:py-16">
              <div className="container-x grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-concrete lg:sticky lg:top-40">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(min-width:1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-0 top-0 bg-slate px-4 py-3 font-display text-lg font-bold tabular-nums text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={100} className="lg:col-span-6">
                  <p className="eyebrow text-accent-deep">Bereich {String(i + 1).padStart(2, "0")}</p>
                  <h2 id={`${c.slug}-title`} className="mt-4 text-4xl font-bold sm:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-5 text-lg text-ink-muted">{c.intro}</p>

                  <ul className="mt-8 border-t border-concrete-dark/70">
                    {c.items.map((s) => (
                      <li key={s.name} className="grid gap-1 border-b border-concrete-dark/70 py-5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6 lg:grid-cols-1 lg:gap-1 xl:grid-cols-[minmax(0,13rem)_1fr] xl:gap-6">
                        <h3 className="font-display text-lg font-bold">{s.name}</h3>
                        <p className="text-ink-muted">{s.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                    <Button href={`/kontakt?anliegen=${encodeURIComponent(formType[c.slug])}`} variant="dark">
                      {c.title} anfragen
                    </Button>
                    <Link href="/projekte" className="group inline-flex items-center gap-2 font-semibold">
                      Projektbeispiele ansehen
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <ContactCta
        title="Ihre Leistung ist nicht dabei?"
        text="Sprechen Sie uns an – viele Bauarbeiten lassen sich kombinieren oder individuell abstimmen."
      />
    </>
  );
}
