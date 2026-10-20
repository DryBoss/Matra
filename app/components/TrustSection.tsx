import { Quote as QuoteIcon } from "lucide-react";
import Reveal from "./Reveal";
import { METRICS, PAGES, QUOTES, SHOW_SAMPLES } from "../lib/proof";
import { headingStyle } from "../lib/styles";
import { THEMES } from "../lib/themes";

const t = THEMES.blue;
const show = <T extends { placeholder?: boolean }>(items: T[]) =>
  items.filter((i) => !i.placeholder || SHOW_SAMPLES);

/** Real seller quotes, numbers and page logos. Hidden in production until real entries exist. */
export default function TrustSection() {
  const quotes = show(QUOTES);
  const metrics = show(METRICS);
  const pages = show(PAGES);
  if (!quotes.length && !metrics.length && !pages.length) return null;

  const hasSamples = [...quotes, ...metrics, ...pages].some((i) => i.placeholder);

  return (
    <section id="trust" className="scroll-mt-16 border-y border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2
            className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            style={headingStyle}
          >
            Trusted by Facebook sellers
          </h2>
          {hasSamples && (
            <p className="mt-3 inline-block rounded-lg bg-amber-100 px-3 py-1.5 text-sm text-amber-900">
              Sample content, visible only in dev. Replace it in app/lib/proof.ts. It is hidden on the live site.
            </p>
          )}
        </Reveal>

        {metrics.length > 0 && (
          <dl className="mt-10 grid gap-5 sm:grid-cols-3">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-200">
                  <dd
                    className="text-4xl font-semibold tracking-tight text-blue-600"
                    style={headingStyle}
                  >
                    {m.value}
                  </dd>
                  <dt className="mt-2 text-sm text-slate-600">{m.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        )}

        {quotes.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal key={q.name + q.page} delay={i * 120} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${t.iconBox}`}>
                    <QuoteIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
                    {q.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-slate-200 pt-4 text-sm">
                    <span className="font-semibold text-slate-900">{q.name}</span>
                    <span className="block text-slate-500">{q.page}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}

        {pages.length > 0 && (
          <Reveal className="mt-10">
            <p className="text-sm font-medium text-slate-500">Facebook pages selling with Matra</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {pages.map((p) => {
                const inner = (
                  <>
                    {p.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.logo} alt="" className="h-8 w-8 rounded-full object-cover" />
                    ) : (
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${t.iconBox}`}
                      >
                        {p.name.charAt(0)}
                      </span>
                    )}
                    <span className="font-medium text-slate-800">{p.name}</span>
                  </>
                );
                const cls =
                  "inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 ring-1 ring-slate-200";
                return (
                  <li key={p.name}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <span className={cls}>{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
