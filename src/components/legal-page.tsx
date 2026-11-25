import type { ReactNode } from "react";

/** Schlichtes Layout für Rechtstexte. */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-slate pb-14 pt-36 text-white sm:pt-44">
        <div className="container-x">
          <p className="eyebrow text-accent">Rechtliches</p>
          <h1 className="mt-5 text-[2.4rem] font-extrabold hyphens-auto [overflow-wrap:anywhere] sm:text-6xl">{title}</h1>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="max-w-3xl space-y-6 text-lg text-ink-muted [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate [&_strong]:text-slate">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
