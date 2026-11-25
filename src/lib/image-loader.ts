type LoaderArgs = { src: string; width: number; quality?: number };

/**
 * Bild-Loader für next/image.
 * Unsplash-Bilder werden über deren CDN in passender Breite und im besten
 * Format (auto=format → AVIF/WebP) geladen. Lokale Bilder bleiben unverändert.
 */
export default function imageLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 70));
    return url.toString();
  }
  return src;
}
