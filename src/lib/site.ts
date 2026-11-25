/**
 * Zentrale Unternehmensdaten.
 * Quelle: bestehende Website https://www.a-und-k-online.de/ (Stand Nov. 2026).
 * Nur belegte Angaben eintragen – alles andere als Platzhalter kennzeichnen.
 */
export const site = {
  /**
   * false = Konzeptentwurf: Suchmaschinen sperren (noindex, robots Disallow).
   * Erst auf true setzen, wenn die Seite mit echten Inhalten live geht.
   */
  live: false,
  name: "A & K Hochbau GmbH",
  shortName: "A & K Hochbau",
  url: "https://www.a-und-k-online.de",
  slogan: "Vom Fundament bis zur Fertigstellung.",
  /** Laut bestehender Website: „29-jährige Erfahrung“ */
  yearsExperience: 29,
  phone: "+49 3578 303177",
  phoneHref: "tel:+493578303177",
  phoneDisplay: "03578 303177",
  email: "info@aundk-online.de",
  address: {
    street: "Am Wüsteberg 2",
    zip: "01917",
    city: "Kamenz",
    district: "OT Gelenau",
    region: "Sachsen",
    country: "DE",
  },
  geo: { lat: 51.25173, lng: 14.06724 },
  facebook: "https://www.facebook.com/a.und.k.hochbau.gmbh/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=51.251730,14.067240",
} as const;

export const nav = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Baut eine Unsplash-CDN-URL (Platzhalterbilder, Unsplash-Lizenz). */
export const img = (id: string) => `https://images.unsplash.com/${id}`;
