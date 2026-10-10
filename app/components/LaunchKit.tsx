import { Check } from "lucide-react";
import { headingStyle } from "../lib/styles";
import { THEMES, type ThemeKey } from "../lib/themes";

export type LaunchKitProps = {
  caption: string;
  badge: string;
  /** Four short lines: what is ready when your site goes live. */
  items: string[];
  note: string;
};

/** A "what is ready on launch day" checklist for the sector page heroes. */
export default function LaunchKit({
  theme,
  kit,
}: {
  theme: ThemeKey;
  kit: LaunchKitProps;
}) {
  const t = THEMES[theme];
  return (
    <div className="animate-fade-up" style={{ animationDelay: "350ms" }}>
      <div className="animate-float">
        <figure className="mx-auto w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900 p-6 shadow-2xl shadow-black/40">
          <figcaption className="flex items-center justify-between gap-3 text-sm text-slate-400">
            <span>{kit.caption}</span>
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${t.liveBadge}`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${t.ping}`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${t.ping}`}
                />
              </span>
              {kit.badge}
            </span>
          </figcaption>

          <ul className="mt-6 space-y-4">
            {kit.items.map((item, i) => (
              <li
                key={item}
                className="animate-fade-up flex items-center gap-3"
                style={{ animationDelay: `${600 + i * 250}ms` }}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${t.iconBox}`}
                >
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-lg text-white" style={headingStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-slate-700 pt-5 text-sm leading-relaxed text-slate-400">
            {kit.note}
          </p>
        </figure>
      </div>
    </div>
  );
}
