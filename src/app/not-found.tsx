import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Seite nicht gefunden", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-slate pb-24 pt-40 text-white sm:pt-52">
      <div className="container-x">
        <p className="eyebrow text-accent">Fehler 404</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold sm:text-7xl">Diese Seite ist noch nicht gebaut.</h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Zur Startseite</Button>
          <Button href="/kontakt" variant="ghost-light">
            Kontakt
          </Button>
        </div>
      </div>
    </section>
  );
}
