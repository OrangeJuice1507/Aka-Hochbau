import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { ContactCta, PageHero } from "@/components/sections";
import { PlaceholderNote } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projekte & Referenzen",
  description:
    "Einblicke in Bauprojekte der A & K Hochbau GmbH aus Kamenz: Hochbau, Sanierung, Pflasterarbeiten und Außenanlagen.",
  alternates: { canonical: "/projekte" },
};

export default function ProjektePage() {
  return (
    <>
      <PageHero
        eyebrow="Projekte & Referenzen"
        title="Handwerk, das sichtbar bleibt."
        lead="Hochbau, Sanierung, Pflasterarbeiten und Außenanlagen – hier entsteht die Übersicht ausgeführter Projekte."
        image={img("photo-1609867271967-a82f85c48531")}
        imageAlt="Baustelle mit Kran und Rohbau"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal className="mb-12 max-w-3xl">
            <PlaceholderNote>
              <span>
                <strong className="font-semibold text-slate">Konzeptdarstellung:</strong> Alle Einträge sind
                Beispielprojekte mit lizenzfreien Platzhalterbildern. Sie sind keine Referenzen der {site.name} und
                werden durch echte Projekte mit eigenen Fotos ersetzt.
              </span>
            </PlaceholderNote>
          </Reveal>
          <ProjectGallery />
        </div>
      </section>

      <ContactCta title="Ihr Projekt könnte das nächste sein." text="Erzählen Sie uns von Ihrem Vorhaben – wir beraten Sie gern." />
    </>
  );
}
