/** Textbasierte Wortmarke – Platzhalter, bis das Originallogo als SVG vorliegt. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const fg = tone === "light" ? "text-white" : "text-slate";
  return (
    <span className={`flex items-center gap-3 ${fg}`}>
      <span
        aria-hidden
        className={`relative grid size-10 place-items-center border-[1.5px] font-display text-[0.95rem] font-extrabold tracking-[-0.04em] ${tone === "light" ? "border-white/80" : "border-slate"}`}
      >
        A&amp;K
        <span className="absolute -bottom-[1.5px] left-[-1.5px] h-[3px] w-[calc(100%+3px)] bg-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-[-0.02em]">A &amp; K Hochbau</span>
        <span className={`mt-1 text-[0.66rem] font-medium uppercase tracking-[0.2em] ${tone === "light" ? "text-white/60" : "text-ink-muted"}`}>
          GmbH · Kamenz
        </span>
      </span>
    </span>
  );
}
