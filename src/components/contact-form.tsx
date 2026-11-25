"use client";

import Link from "next/link";
import { useEffect, useId, useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/services";
import { site } from "@/lib/site";
import { ArrowRight, Check, Mail } from "./icons";

type Values = { name: string; email: string; phone: string; type: string; message: string; privacy: boolean };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", type: "", message: "", privacy: false };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Bitte geben Sie Ihren Namen an.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (v.phone && !/^[+()\d\s/-]{6,}$/.test(v.phone.trim())) e.phone = "Bitte prüfen Sie die Telefonnummer.";
  if (!v.type) e.type = "Bitte wählen Sie die Art des Vorhabens.";
  if (v.message.trim().length < 10) e.message = "Bitte beschreiben Sie Ihr Anliegen kurz (mind. 10 Zeichen).";
  if (!v.privacy) e.privacy = "Bitte bestätigen Sie die Datenschutzhinweise.";
  return e;
}

/**
 * Kontaktformular – frontendseitig vorbereitet.
 * Es ist KEIN Versand-Backend angebunden. Nach dem Absenden wird das offen
 * kommuniziert und die Nachricht kann per E-Mail-Programm verschickt werden.
 * Anbindung später z. B. über eine Server Action oder einen Formular-Dienst.
 */
export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Vorauswahl über ?anliegen=… (z. B. von Leistungs- oder Karriereseite)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("anliegen");
    if (!q) return;
    const match = projectTypes.find((t) => t.toLowerCase().startsWith(q.toLowerCase()));
    if (match) setValues((v) => ({ ...v, type: match }));
  }, []);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setValues((v) => ({ ...v, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    const body = [
      `Name: ${values.name}`,
      `E-Mail: ${values.email}`,
      values.phone && `Telefon: ${values.phone}`,
      `Art des Vorhabens: ${values.type}`,
      "",
      values.message,
    ]
      .filter((l) => l !== "")
      .join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Anfrage: ${values.type}`)}&body=${encodeURIComponent(body)}`;

    return (
      <div role="status" className="bg-white p-8 sm:p-10">
        <p className="eyebrow text-accent-deep">Demo-Formular</p>
        <h3 className="mt-4 text-3xl font-bold">Ihre Angaben sind vollständig.</h3>
        <p className="mt-4 text-ink-muted">
          Dieses Formular ist in der Konzeptversion noch nicht an einen Versand angebunden –{" "}
          <strong className="font-semibold text-slate">Ihre Nachricht wurde nicht übermittelt.</strong> Sie können sie
          mit einem Klick über Ihr E-Mail-Programm senden oder uns direkt anrufen.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-6 font-semibold text-slate hover:bg-[#d6884d]"
          >
            <Mail className="size-5" /> Per E-Mail senden
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate/25 px-6 font-semibold hover:border-slate"
          >
            {site.phoneDisplay} anrufen
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-ink-muted underline underline-offset-4 hover:text-slate"
        >
          Angaben bearbeiten
        </button>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-[2px] border bg-white px-4 py-3.5 text-[1rem] text-slate placeholder:text-slate/40 transition-colors focus:border-slate focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/40";
  const border = (k: keyof Values) => (errors[k] ? "border-[#b3402a]" : "border-slate/20 hover:border-slate/45");
  const errorText = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-2 text-sm font-medium text-[#b3402a]">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Values) => ({
    id: `${uid}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor={`${uid}-name`} className="text-sm font-semibold">
          Name <span className="text-accent-deep">*</span>
        </label>
        <input
          {...aria("name")}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          className={`${field} ${border("name")}`}
        />
        {errorText("name")}
      </div>
      <div className="sm:col-span-1">
        <label htmlFor={`${uid}-email`} className="text-sm font-semibold">
          E-Mail <span className="text-accent-deep">*</span>
        </label>
        <input
          {...aria("email")}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          className={`${field} ${border("email")}`}
        />
        {errorText("email")}
      </div>
      <div className="sm:col-span-1">
        <label htmlFor={`${uid}-phone`} className="text-sm font-semibold">
          Telefon <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input
          {...aria("phone")}
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={`${field} ${border("phone")}`}
        />
        {errorText("phone")}
      </div>
      <div className="sm:col-span-1">
        <label htmlFor={`${uid}-type`} className="text-sm font-semibold">
          Art des Vorhabens <span className="text-accent-deep">*</span>
        </label>
        <div className="relative">
          <select
            {...aria("type")}
            name="type"
            value={values.type}
            onChange={(e) => set("type", e.target.value)}
            className={`${field} ${border("type")} appearance-none pr-10 ${values.type ? "" : "text-slate/50"}`}
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t} className="text-slate">
                {t}
              </option>
            ))}
          </select>
          <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        {errorText("type")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-message`} className="text-sm font-semibold">
          Nachricht <span className="text-accent-deep">*</span>
        </label>
        <textarea
          {...aria("message")}
          name="message"
          rows={6}
          placeholder="Was planen Sie? Ort, Umfang und gewünschter Zeitraum helfen uns weiter."
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${field} ${border("message")} resize-y`}
        />
        {errorText("message")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-privacy`} className="flex cursor-pointer items-start gap-3 text-[0.94rem] text-ink-muted">
          <span className="relative mt-0.5 grid size-6 shrink-0 place-items-center">
            <input
              {...aria("privacy")}
              type="checkbox"
              name="privacy"
              checked={values.privacy}
              onChange={(e) => set("privacy", e.target.checked)}
              className={`peer size-6 cursor-pointer appearance-none rounded-[2px] border bg-white checked:border-slate checked:bg-slate ${errors.privacy ? "border-[#b3402a]" : "border-slate/30"}`}
            />
            <Check className="pointer-events-none absolute size-4 text-white opacity-0 peer-checked:opacity-100" />
          </span>
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="font-medium text-slate underline underline-offset-4">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.{" "}
            <span className="text-accent-deep">*</span>
          </span>
        </label>
        {errorText("privacy")}
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">* Pflichtfelder</p>
        <button
          type="submit"
          className="group inline-flex min-h-13 items-center justify-center gap-2.5 bg-slate px-8 py-3.5 font-semibold text-white transition-colors hover:bg-steel"
        >
          Anfrage absenden
          <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
