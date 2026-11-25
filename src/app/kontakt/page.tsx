import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ArrowRight, Facebook, Mail, Phone, Pin } from "@/components/icons";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/sections";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – Bauvorhaben in Kamenz anfragen",
  description:
    "Kontakt zur A & K Hochbau GmbH, Am Wüsteberg 2, 01917 Kamenz. Telefon 03578 303177, E-Mail info@aundk-online.de – oder direkt das Anfrageformular nutzen.",
  alternates: { canonical: "/kontakt" },
};

const channels = [
  { icon: Phone, label: "Telefon", value: site.phoneDisplay, href: site.phoneHref, hint: "Rufen Sie uns einfach an." },
  { icon: Mail, label: "E-Mail", value: site.email, href: `mailto:${site.email}`, hint: "Schreiben Sie uns jederzeit." },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lassen Sie uns über Ihr Projekt sprechen."
        lead="Ob Neubau, Sanierung oder Pflasterarbeiten – beschreiben Sie uns kurz Ihr Vorhaben."
        image={img("photo-1772442198624-4fc4d7281e89")}
        imageAlt="Bauleiter prüft Baupläne"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Kontaktwege */}
          <aside className="lg:col-span-4">
            <h2 className="text-3xl font-bold">Direkter Kontakt</h2>
            <ul className="mt-8 grid gap-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-5 bg-white p-5 transition-shadow hover:shadow-[0_18px_36px_-20px_rgba(32,42,51,0.35)]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center bg-slate text-accent">
                      <c.icon className="size-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{c.label}</span>
                      <span className="mt-1 block break-words font-display text-lg font-bold">{c.value}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-accent-deep transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-5 bg-white p-5">
                <span className="grid size-12 shrink-0 place-items-center bg-slate text-accent">
                  <Pin className="size-6" />
                </span>
                <address className="not-italic">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Anschrift</span>
                  <span className="mt-1 block font-display text-lg font-bold leading-snug">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">Ortsteil Gelenau</span>
                </address>
              </li>
            </ul>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-slate"
            >
              <Facebook className="size-5" /> Folgen Sie uns auf Facebook
            </a>
          </aside>

          {/* Formular */}
          <div className="lg:col-span-8">
            <div className="bg-white p-6 sm:p-10">
              <h2 className="text-3xl font-bold">Projekt anfragen</h2>
              <p className="mt-3 text-ink-muted">Je genauer Ihre Angaben, desto besser können wir Ihr Vorhaben einschätzen.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section aria-labelledby="anfahrt" className="pb-24 sm:pb-32">
        <div className="container-x">
          <h2 id="anfahrt" className="text-3xl font-bold">
            Anfahrt
          </h2>
          <div className="mt-8 h-[420px] overflow-hidden">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
