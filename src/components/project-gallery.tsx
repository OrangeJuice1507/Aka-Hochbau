"use client";

import { useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "./sections";

type Filter = "Alle" | ProjectCategory;

// Breite Kacheln im 3er-Raster: ergibt 4 volle Reihen mit wechselndem Rhythmus
const wide = new Set([0, 3, 4, 7]);

/** Projektübersicht mit Kategorie-Filter (Portfolio-Seite). */
export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("Alle");
  const list = filter === "Alle" ? projects : projects.filter((p) => p.category === filter);
  const filters: Filter[] = ["Alle", ...projectCategories];

  return (
    <div>
      <div role="group" aria-label="Projekte filtern" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {filters.map((f) => {
          const count = f === "Alle" ? projects.length : projects.filter((p) => p.category === f).length;
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-[0.94rem] font-medium transition-colors ${
                active ? "border-slate bg-slate text-white" : "border-slate/20 text-slate hover:border-slate"
              }`}
            >
              {f}
              <span className={`text-xs tabular-nums ${active ? "text-white/60" : "text-ink-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid auto-rows-[300px] gap-4 sm:grid-cols-2 sm:auto-rows-[320px] lg:grid-cols-3 lg:auto-rows-[340px]">
        {list.map((p, i) => (
          <li
            key={p.id}
            className={`fade-in ${filter === "Alle" && wide.has(i) ? "lg:col-span-2" : ""}`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <ProjectCard
              project={p}
              className="h-full"
              sizes="(min-width:1024px) 40vw, (min-width:640px) 50vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
