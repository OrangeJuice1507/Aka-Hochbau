import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PlaceholderNote } from "@/components/ui";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <PlaceholderNote>
        Konzeptentwurf: Die Datenschutzerklärung wird vor Veröffentlichung an die neue Website angepasst (Hosting,
        Kontaktformular, Kartendienst) und rechtlich geprüft.
      </PlaceholderNote>
      <h2>Technische Hinweise zu dieser Konzeptversion</h2>
      <p>
        Das Kontaktformular ist noch nicht mit einem Versand verbunden – eingegebene Daten werden nicht übertragen oder
        gespeichert.
      </p>
      <p>
        Die Karte auf der Kontaktseite (OpenStreetMap) wird erst nach Klick auf „Karte laden“ eingebunden. Schriftarten
        werden lokal ausgeliefert. Platzhalterbilder werden vom Bilddienst Unsplash geladen.
      </p>
      <p>
        Aktuelle Datenschutzerklärung:{" "}
        <a
          href="https://www.a-und-k-online.de/impressum-datenschutz/datenschutz/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate underline underline-offset-4"
        >
          a-und-k-online.de/datenschutz
        </a>
      </p>
    </LegalPage>
  );
}
