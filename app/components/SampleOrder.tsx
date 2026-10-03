import { headingStyle } from "../lib/styles";
import { THEMES, type ThemeKey } from "../lib/themes";

export type SampleOrderProps = {
  caption: string;
  badge: string;
  itemLabel: string;
  itemAmount: string;
  feeLabel: string;
  feeAmount: string;
  /** Shown before the fee amount. Defaults to a minus sign. */
  feePrefix?: string;
  keepLabel: string;
  keepAmount: string;
  note: string;
};

/** A tiny receipt that shows the pay-when-you-earn model in one glance. */
export default function SampleOrder({
  theme,
  sample,
}: {
  theme: ThemeKey;
  sample: SampleOrderProps;
}) {
  const t = THEMES[theme];
  return (
    <div className="animate-fade-up" style={{ animationDelay: "350ms" }}>
      <div className="animate-float">
        <figure className="mx-auto w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900 p-6 shadow-2xl shadow-black/40">
          <figcaption className="flex items-center justify-between gap-3 text-sm text-slate-400">
            <span>{sample.caption}</span>
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
              {sample.badge}
            </span>
          </figcaption>

          <dl className="mt-6 space-y-4">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-300">{sample.itemLabel}</dt>
              <dd className="text-lg font-medium text-white">
                {sample.itemAmount}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-slate-400">{sample.feeLabel}</dt>
              <dd className="text-slate-300">{sample.feePrefix ?? "− "}{sample.feeAmount}</dd>
            </div>
            <div className="h-px bg-slate-700" />
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-medium text-white">{sample.keepLabel}</dt>
              <dd
                className={`text-3xl font-semibold ${t.keep}`}
                style={headingStyle}
              >
                {sample.keepAmount}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            {sample.note}
          </p>
        </figure>
      </div>
    </div>
  );
}
