import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import { serviceCategories } from "@/lib/services";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bauunternehmen in Kamenz – Hochbau, Sanierung & Außenanlagen | A & K Hochbau GmbH",
    template: "%s | A & K Hochbau GmbH Kamenz",
  },
  description:
    "A & K Hochbau GmbH aus Kamenz: Neubau, Altbausanierung, Erdarbeiten, Pflasterarbeiten und Außenanlagen für Privatkunden, Firmen und öffentliche Auftraggeber – mit 29 Jahren Erfahrung.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: "/",
  },
  formatDetection: { telephone: true, email: true, address: true },
  // Konzeptentwurf: nicht indexieren, bis die Seite live geht (site.live).
  robots: site.live ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#202A33",
  width: "device-width",
  initialScale: 1,
};

/** Strukturierte Daten: nur belegte Angaben aus der bestehenden Website. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "LocalBusiness"],
      "@id": `${site.url}/#unternehmen`,
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      areaServed: { "@type": "City", name: "Kamenz" },
      sameAs: [site.facebook],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bauleistungen",
        itemListElement: serviceCategories.flatMap((c) =>
          c.items.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: i.name } })),
        ),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "de-DE",
      publisher: { "@id": `${site.url}/#unternehmen` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${inter.variable} ${manrope.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Scroll-Reveal nur aktivieren, wenn JavaScript läuft */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#inhalt"
          className="sr-only z-[60] bg-accent px-4 py-3 font-semibold text-slate focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
