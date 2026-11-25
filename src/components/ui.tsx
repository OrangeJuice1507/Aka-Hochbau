import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "./icons";

/* ───────────── Button ───────────── */
type Variant = "primary" | "dark" | "ghost-light" | "ghost-dark";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-slate hover:bg-[#d6884d] shadow-[0_1px_0_rgba(0,0,0,0.12)]",
  dark: "bg-slate text-white hover:bg-steel",
  "ghost-light": "border border-white/35 text-white hover:border-white hover:bg-white/10",
  "ghost-dark": "border border-slate/25 text-slate hover:border-slate hover:bg-slate/5",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href">;

export function Button({ href, variant = "primary", children, arrow = true, className = "", ...rest }: ButtonProps) {
  const cls = `group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] px-6 py-3 text-[0.95rem] font-semibold tracking-[-0.005em] transition-[background-color,border-color,color,transform] duration-200 active:translate-y-px ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="size-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );
  // Interne Links über next/link, tel:/mailto:/extern als <a>
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {inner}
    </a>
  );
}

/* ───────────── Text-Link mit Pfeil ───────────── */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-semibold underline decoration-current/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-current ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ───────────── Abschnittsüberschrift ───────────── */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "split";
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  const head = (
    <div className="max-w-3xl">
      <p className={`eyebrow ${dark ? "text-accent" : "text-accent-deep"}`}>
        {index && <span className="tabular-nums">{index}</span>}
        {index && <span aria-hidden>—</span>}
        {eyebrow}
      </p>
      <Tag
        className={`mt-5 text-[2.25rem] font-bold sm:text-5xl lg:text-[3.5rem] ${dark ? "text-white" : "text-slate"}`}
      >
        {title}
      </Tag>
    </div>
  );
  if (align === "split" && lead) {
    return (
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">{head}</div>
        <p className={`text-lg lg:col-span-5 lg:pb-2 ${dark ? "text-white/70" : "text-ink-muted"}`}>{lead}</p>
      </div>
    );
  }
  return (
    <div>
      {head}
      {lead && <p className={`mt-6 max-w-2xl text-lg ${dark ? "text-white/70" : "text-ink-muted"}`}>{lead}</p>}
    </div>
  );
}

/* ───────────── Demo-Kennzeichnung ───────────── */
export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[2px] bg-white/92 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate backdrop-blur ${className}`}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
      Beispielprojekt
    </span>
  );
}

/* ───────────── Platzhalter-Hinweis ───────────── */
export function PlaceholderNote({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`flex items-start gap-3 border-l-2 border-accent py-1 pl-4 text-sm ${tone === "dark" ? "text-white/65" : "text-ink-muted"}`}
    >
      {children}
    </p>
  );
}
