"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Pin } from "./icons";

/**
 * Karte mit Zwei-Klick-Lösung: OpenStreetMap wird erst nach Zustimmung geladen,
 * vorher werden keine Daten an Dritte übertragen.
 */
export function MapEmbed() {
  const [load, setLoad] = useState(false);
  const { lat, lng } = site.geo;
  const d = 0.012;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d * 1.6}%2C${lat - d}%2C${lng + d * 1.6}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;

  if (load) {
    return (
      <iframe
        title={`Karte: Standort ${site.name}`}
        src={src}
        loading="lazy"
        className="h-full min-h-[360px] w-full border-0 grayscale-[35%]"
      />
    );
  }

  return (
    <div className="relative grid h-full min-h-[360px] place-items-center overflow-hidden bg-steel text-white">
      {/* stilisierter Lageplan als Vorschau */}
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none" viewBox="0 0 400 300">
        <defs>
          <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#fff" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#map-grid)" />
        <path d="M-10 210 C 80 190, 140 120, 230 130 S 360 80, 420 60" stroke="#fff" strokeWidth="6" fill="none" />
        <path d="M120 -10 C 130 80, 170 160, 160 310" stroke="#fff" strokeWidth="3" fill="none" />
        <path d="M260 310 C 250 220, 300 170, 410 170" stroke="#fff" strokeWidth="3" fill="none" />
      </svg>
      <div className="relative max-w-sm px-6 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-slate">
          <Pin className="size-7" />
        </span>
        <p className="mt-5 font-display text-xl font-bold">
          {site.address.street}, {site.address.zip} {site.address.city}
        </p>
        <p className="mt-3 text-sm text-white/70">
          Beim Laden der Karte werden Daten an OpenStreetMap übertragen.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setLoad(true)}
            className="inline-flex min-h-11 items-center justify-center bg-white px-5 font-semibold text-slate hover:bg-paper"
          >
            Karte laden
          </button>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center border border-white/30 px-5 font-semibold hover:border-white"
          >
            Route planen
          </a>
        </div>
      </div>
    </div>
  );
}
