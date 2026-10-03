import { headingStyle } from "../lib/styles";

/** A tiny receipt that shows the pay-when-you-earn model in one glance. */
export default function SampleBooking() {
  return (
    <div
      className="animate-fade-up"
      style={{ animationDelay: "350ms" }}
    >
      <div className="animate-float">
        <figure className="mx-auto w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900 p-6 shadow-2xl shadow-black/40">
          <figcaption className="flex items-center justify-between text-sm text-slate-400">
            <span>Sample booking, Kickoff Plan</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Paid via bKash
            </span>
          </figcaption>

          <dl className="mt-6 space-y-4">
            <div className="flex items-baseline justify-between">
              <dt className="text-slate-300">Evening slot, 7 to 8 PM</dt>
              <dd className="text-lg font-medium text-white">৳1,200</dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="text-slate-400">Our fee for this booking</dt>
              <dd className="text-slate-300">− ৳30</dd>
            </div>
            <div className="h-px bg-slate-700" />
            <div className="flex items-baseline justify-between">
              <dt className="font-medium text-white">You keep</dt>
              <dd
                className="text-3xl font-semibold text-emerald-400"
                style={headingStyle}
              >
                ৳1,170
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            No booking, no fee. Set-up costs you nothing.
          </p>
        </figure>
      </div>
    </div>
  );
}
