import type { SVGProps } from "react";

/** Schlanke Linien-Icons (1.5px Strich), einheitlich auf 24er-Raster. */
type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
/** Kelle – Handwerk */
export const Trowel = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 21l6-6M9 15l2-2M11 13l7-7 3 3-7 7-3-3Z" />
  </svg>
);
/** Ziegelverband – Erfahrung / Bestand */
export const Bricks = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 9.33h18M3 14.66h18M9 4v5.33M15 4v5.33M6 9.33v5.33M12 9.33v5.33M18 9.33v5.33M9 14.66V20M15 14.66V20" />
  </svg>
);
/** Werkzeugraster – Vielseitigkeit */
export const Grid = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
  </svg>
);
/** Grundriss / Plan – individuelle Lösungen */
export const Plan = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 3h18v18H3zM3 12h7v9M10 3v5M14 12h7M14 12v5" />
  </svg>
);
export const Users = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20a6 6 0 0 1 12 0M16 5.2a3 3 0 0 1 0 5.6M18 14.5a5.5 5.5 0 0 1 3 5.5" />
  </svg>
);
export const Growth = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20h16M7 16v-4M12 16V8M17 16V4" />
  </svg>
);
export const Helmet = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 17h18M5 17v-2a7 7 0 0 1 14 0v2M10 8.5V6h4v2.5" />
  </svg>
);
export const Facebook = (p: P) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4a20 20 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
  </svg>
);
