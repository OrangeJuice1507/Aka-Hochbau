import { img } from "./site";

/**
 * DEMO-PROJEKTE – keine realen Referenzen der A & K Hochbau GmbH.
 * Sie zeigen nur, wie echte Projekte später präsentiert werden können.
 * Ersetzen: Titel, Ort, Jahr, Beschreibung und eigene Fotos eintragen,
 * dann `demo: false` setzen.
 */
export type ProjectCategory = "Hochbau" | "Sanierung" | "Pflasterarbeiten" | "Außenanlagen";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  scope: string;
  image: string;
  imageAlt: string;
  demo: boolean;
};

export const projectCategories: ProjectCategory[] = [
  "Hochbau",
  "Sanierung",
  "Pflasterarbeiten",
  "Außenanlagen",
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Einfamilienhaus in Massivbauweise",
    category: "Hochbau",
    location: "Ort folgt",
    scope: "Bodenplatte · Mauerwerk · Rohbau",
    image: img("photo-1673978484308-6f32e2c4a984"),
    imageAlt: "Beispielbild: Rohbau mit Gerüst und gemauerter Stütze",
    demo: true,
  },
  {
    id: "p2",
    title: "Hofeinfahrt mit Betonsteinpflaster",
    category: "Pflasterarbeiten",
    location: "Ort folgt",
    scope: "Unterbau · Pflaster · Entwässerung",
    image: img("photo-1783125127341-81112b795c23"),
    imageAlt: "Beispielbild: Haus mit gepflasterter Einfahrt",
    demo: true,
  },
  {
    id: "p3",
    title: "Sanierung eines Altbaus",
    category: "Sanierung",
    location: "Ort folgt",
    scope: "Abdichtung · Putz · Innenausbau",
    image: img("photo-1634586648651-f1fb9ec10d90"),
    imageAlt: "Beispielbild: Innenraum während der Sanierung mit Stützen",
    demo: true,
  },
  {
    id: "p4",
    title: "Gartenmauer aus Naturstein",
    category: "Außenanlagen",
    location: "Ort folgt",
    scope: "Fundament · Natursteinmauer",
    image: img("photo-1694432759476-8db2bef4b334"),
    imageAlt: "Beispielbild: Natursteinmauer mit Pflanzgefäßen",
    demo: true,
  },
  {
    id: "p5",
    title: "Fundament und Bodenplatte",
    category: "Hochbau",
    location: "Ort folgt",
    scope: "Erdarbeiten · Fundament · Bodenplatte",
    image: img("photo-1774931363306-5a896cd4dd02"),
    imageAlt: "Beispielbild: Bauarbeiter beim Betonieren",
    demo: true,
  },
  {
    id: "p6",
    title: "Terrasse und Außenanlage",
    category: "Außenanlagen",
    location: "Ort folgt",
    scope: "Erdarbeiten · Terrasse · Bepflanzungsflächen",
    image: img("photo-1776186243408-3c0489503faa"),
    imageAlt: "Beispielbild: Moderne Terrasse mit Grünflächen",
    demo: true,
  },
  {
    id: "p7",
    title: "Gehweg mit Sechseckpflaster",
    category: "Pflasterarbeiten",
    location: "Ort folgt",
    scope: "Wegebau · Pflaster",
    image: img("photo-1763462980602-07eb86874ac4"),
    imageAlt: "Beispielbild: Weg aus sechseckigen Pflastersteinen im Rasen",
    demo: true,
  },
  {
    id: "p8",
    title: "Putz- und Ausbauarbeiten",
    category: "Sanierung",
    location: "Ort folgt",
    scope: "Putz · Trockenbau · Estrich",
    image: img("photo-1768321916886-30dc323bddf7"),
    imageAlt: "Beispielbild: Innenausbau mit Metallständern",
    demo: true,
  },
];
