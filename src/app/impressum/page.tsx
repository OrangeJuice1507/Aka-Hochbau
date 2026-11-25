import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PlaceholderNote } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <PlaceholderNote>
        Konzeptentwurf: Die vollständigen Pflichtangaben (Vertretungsberechtigte, Registereintrag, USt-IdNr. usw.)
        werden vor Veröffentlichung aus dem bestehenden Impressum übernommen und rechtlich geprüft.
      </PlaceholderNote>
      <h2>Angaben zum Unternehmen</h2>
      <p>
        <strong>{site.name}</strong>
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </p>
      <p>
        Telefon: <a href={site.phoneHref} className="underline underline-offset-4">{site.phoneDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a>
      </p>
      <p>
        Aktuelles Impressum:{" "}
        <a
          href="https://www.a-und-k-online.de/impressum-datenschutz/impressum/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate underline underline-offset-4"
        >
          a-und-k-online.de/impressum
        </a>
      </p>
    </LegalPage>
  );
}
