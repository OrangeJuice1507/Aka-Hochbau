"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Dezentes Einblenden beim Scrollen. Ein einziger IntersectionObserver pro
 * Element, wird nach dem ersten Sichtbarwerden getrennt. Ohne JS oder bei
 * „reduzierter Bewegung“ ist der Inhalt sofort sichtbar (siehe globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  id,
}: {
  id?: string;
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
