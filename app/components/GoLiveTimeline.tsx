import { headingStyle } from "../lib/styles";

const STEPS = [
  { when: "Day 1", title: "You tell us how you work", body: "A short chat on WhatsApp. No forms, no meetings." },
  { when: "Days 2 to 5", title: "We build it for free", body: "Your site, dashboard and payments, set up for you." },
  { when: "Day 6", title: "You go live", body: "Share your link with customers and start taking work." },
];

/** Home page hero card: the path from first message to a live site. */
export default function GoLiveTimeline() {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "350ms" }}>
      <div className="animate-float">
        <div className="mx-auto w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900/90 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
            From message to live site
          </p>

          <ol className="relative mt-6 space-y-6">
            <span
              aria-hidden
              className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-emerald-400 via-emerald-400/40 to-slate-700"
            />
            {STEPS.map((s, i) => (
              <li
                key={s.when}
                className="animate-fade-up relative flex gap-4"
                style={{ animationDelay: `${600 + i * 300}ms` }}
              >
                <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-slate-950">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                    {s.when}
                  </p>
                  <p className="mt-0.5 text-lg font-semibold text-white" style={headingStyle}>
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-7 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm leading-relaxed text-emerald-200">
            Then you pay only when you earn. Nothing is charged up front.
          </p>
        </div>
      </div>
    </div>
  );
}
