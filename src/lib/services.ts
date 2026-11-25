import { img } from "./site";

/**
 * Leistungen laut bestehender Website (22 Einzelleistungen), hier in
 * Kategorien gruppiert. Beschreibungen erklären die Leistung allgemein und
 * enthalten keine unbelegten Zusagen (Fristen, Garantien o. Ä.).
 */
export type ServiceItem = { name: string; text: string };
export type ServiceCategory = {
  slug: string;
  title: string;
  /** Kurztitel für Karten auf der Startseite */
  cardTitle: string;
  teaser: string;
  intro: string;
  image: string;
  imageAlt: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "hochbau",
    title: "Hochbau",
    cardTitle: "Neubau & Hochbau",
    teaser: "Vom Fundament über das Mauerwerk bis zum fertigen Rohbau – solide gebaut.",
    intro:
      "Ob Einfamilienhaus, Anbau oder Gewerbebau: Wir übernehmen die massiven Bauarbeiten, auf denen alles Weitere aufbaut.",
    image: img("photo-1704005445445-2747074be8ac"),
    imageAlt: "Maurer setzt Ziegelsteine mit der Kelle in frischen Mörtel",
    items: [
      { name: "Neubau / Hausbau", text: "Rohbau und Massivbau für Wohn- und Gewerbegebäude." },
      { name: "Sichtmauerwerk", text: "Sauber gesetztes Mauerwerk, das als Fassade sichtbar bleibt." },
      { name: "Fundamentarbeiten", text: "Streifen-, Punkt- und Einzelfundamente als tragfähige Basis." },
      { name: "Bodenplatten", text: "Bewehrte Bodenplatten für Häuser, Garagen und Nebengebäude." },
    ],
  },
  {
    slug: "sanierung",
    title: "Umbau & Sanierung",
    cardTitle: "Sanierung & Umbau",
    teaser: "Bestehende Gebäude erhalten, modernisieren und neu nutzbar machen.",
    intro:
      "Altbauten und denkmalgeschützte Substanz brauchen Erfahrung und Sorgfalt. Wir sanieren, bauen um und bauen aus.",
    image: img("photo-1768839725085-829e6ac7ac26"),
    imageAlt: "Zwei Hände tragen mit Kellen frischen Putz auf eine Wand auf",
    items: [
      { name: "Altbausanierung", text: "Instandsetzung und Modernisierung älterer Gebäude." },
      { name: "Um- und Ausbauarbeiten", text: "Grundrisse verändern, Räume erweitern, Dachgeschosse ausbauen." },
      { name: "Denkmalsanierung", text: "Behutsame Arbeiten an historischer Bausubstanz." },
      { name: "Mauerwerksabdichtung", text: "Schutz von Kellern und Wänden vor Feuchtigkeit." },
    ],
  },
  {
    slug: "erdarbeiten",
    title: "Erd- & Tiefbauarbeiten",
    cardTitle: "Erdarbeiten & Fundamente",
    teaser: "Aushub, Entwässerung und Baugrund – die Vorarbeit, die man später nicht sieht.",
    intro:
      "Bevor gebaut wird, muss der Boden stimmen. Wir übernehmen Erd- und Baggerarbeiten bis zur Entwässerung.",
    image: img("photo-1768085091650-e8e89ef57b76"),
    imageAlt: "Gelber Bagger hebt Erde vor blauem Himmel aus",
    items: [
      { name: "Erdarbeiten / Baggerarbeiten", text: "Aushub für Baugruben, Leitungsgräben und Geländeprofile." },
      { name: "Entwässerung", text: "Ableitung von Regen- und Oberflächenwasser rund ums Gebäude." },
      { name: "Kranarbeiten", text: "Heben und Versetzen schwerer Bauteile auf der Baustelle." },
      { name: "Baumaschinenverleih", text: "Baumaschinen für Ihr Vorhaben – sprechen Sie uns an." },
    ],
  },
  {
    slug: "aussenanlagen",
    title: "Pflaster & Außenanlagen",
    cardTitle: "Pflasterarbeiten & Außenanlagen",
    teaser: "Einfahrten, Wege, Stellplätze und Außenflächen, die lange halten.",
    intro:
      "Gut geplante Außenflächen werten jedes Grundstück auf. Wir pflastern, befestigen und gestalten – vom Unterbau bis zur letzten Fuge.",
    image: img("photo-1551394846-d03c5a4bc4bc"),
    imageAlt: "Sauber verlegtes graues Betonsteinpflaster",
    items: [
      { name: "Pflasterarbeiten", text: "Verlegung von Beton- und Natursteinpflaster." },
      { name: "Wege, Einfahrten & Parkplätze", text: "Tragfähige Befestigung für Zufahrten und Stellflächen." },
      { name: "Außenanlagen", text: "Gestaltung und Bau von Freiflächen rund ums Haus." },
      { name: "Zaunbau", text: "Einfriedungen und Zaunanlagen für Ihr Grundstück." },
    ],
  },
  {
    slug: "ausbau",
    title: "Ausbau & Innenarbeiten",
    cardTitle: "Trockenbau & Ausbau",
    teaser: "Trockenbau, Estrich und Putz – für Räume, die fertig werden.",
    intro:
      "Nach dem Rohbau kommt der Ausbau. Wir schaffen ebene Böden, saubere Wände und flexible Raumaufteilungen.",
    image: img("photo-1768321914149-5a6428ec2f82"),
    imageAlt: "Innenraum im Ausbau mit Metallständerwerk und Trockenbauplatten",
    items: [
      { name: "Trockenbau", text: "Wände, Decken und Verkleidungen in Ständerbauweise." },
      { name: "Estrich", text: "Tragfähige, ebene Untergründe für jeden Bodenbelag." },
      { name: "Putzarbeiten", text: "Innen- und Außenputz für langlebige Oberflächen." },
      { name: "Dachterrassen", text: "Ausbau und Abdichtung begehbarer Dachflächen." },
    ],
  },
  {
    slug: "naturstein",
    title: "Naturstein & Betongestaltung",
    cardTitle: "Naturstein & weitere Bauleistungen",
    teaser: "Mauern, Einfassungen und modellierter Beton mit handwerklichem Anspruch.",
    intro:
      "Naturstein und modellierter Beton geben Gebäuden und Gärten Charakter. Hier zeigt sich Handwerk im Detail.",
    image: img("photo-1791230943704-5dbcfddd5dd0"),
    imageAlt: "Rustikale Mauer aus gestapelten grauen Natursteinen",
    items: [
      { name: "Natursteinarbeiten", text: "Mauern, Treppen und Einfassungen aus Naturstein." },
      { name: "Betonmodellierarbeiten", text: "Gestaltete Betonoberflächen und -elemente." },
    ],
  },
];

export const serviceCount = serviceCategories.reduce((n, c) => n + c.items.length, 0);

/** Auswahlliste für das Kontaktformular */
export const projectTypes = [
  "Neubau / Hausbau",
  "Umbau / Sanierung",
  "Erd- & Baggerarbeiten",
  "Pflaster & Außenanlagen",
  "Ausbau (Trockenbau, Estrich, Putz)",
  "Naturstein / Betongestaltung",
  "Baumaschinenverleih",
  "Bewerbung",
  "Sonstiges",
] as const;
