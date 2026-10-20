import { Check, Home, ListOrdered, Package, Settings } from "lucide-react";
import Reveal from "./Reveal";
import { headingStyle } from "../lib/styles";

function Phone({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="mx-auto w-full max-w-[17rem]">
      <div className="rounded-[2.25rem] border-[7px] border-slate-900 bg-white shadow-2xl shadow-slate-900/20">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-slate-200" />
        <div className="px-4 pb-4 pt-3 text-slate-800">{children}</div>
      </div>
      <figcaption className="mt-4 text-center text-sm font-medium text-slate-600">{label}</figcaption>
    </figure>
  );
}

/** Mockups (sample data) of the buyer checkout and the seller's mobile order manager. */
export default function ProductVisuals() {
  return (
    <section id="see-it" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              Your customer orders. You run it from your phone.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A clean checkout for your buyers, and a simple order screen for you. Sample screens
              shown.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          {/* ---------------- Buyer checkout ---------------- */}
          <Reveal>
            <Phone label="What your customer sees: checkout">
              <p className="text-sm font-semibold" style={headingStyle}>
                Your Shop · Checkout
              </p>
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-200">
                  <span>Cotton kurti (M, Blue) × 1</span>
                  <span className="font-semibold">৳1,200</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5 opacity-60 ring-1 ring-slate-200">
                  <span>Silk scarf</span>
                  <span className="rounded-full bg-rose-100 px-2 py-0.5 font-semibold text-rose-700">
                    Out of stock
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold text-slate-500">Delivery area</p>
              <div className="mt-1.5 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-blue-50 p-2.5 text-center font-medium text-blue-700 ring-2 ring-blue-500">
                  Inside Dhaka
                  <span className="block font-semibold">৳60</span>
                </div>
                <div className="rounded-xl bg-white p-2.5 text-center ring-1 ring-slate-200">
                  Outside Dhaka
                  <span className="block font-semibold">৳120</span>
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold text-slate-500">Payment</p>
              <div className="mt-1.5 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-white p-2.5 text-center ring-1 ring-slate-200">
                  Cash on delivery
                </div>
                <div className="rounded-xl bg-white p-2.5 text-center ring-1 ring-slate-200">bKash</div>
              </div>

              <div className="mt-4 space-y-1 border-t border-slate-100 pt-3 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Items</span>
                  <span>৳1,200</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Delivery (set automatically)</span>
                  <span>৳60</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Total</span>
                  <span>৳1,260</span>
                </div>
              </div>
              <div className="mt-3 rounded-full bg-blue-600 py-2.5 text-center text-sm font-semibold text-white">
                Place order
              </div>
            </Phone>
          </Reveal>

          {/* ---------------- Seller order manager ---------------- */}
          <Reveal delay={140}>
            <Phone label="What you see: your orders, on your phone">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold" style={headingStyle}>
                  Orders
                </p>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  3 new
                </span>
              </div>

              <ul className="mt-3 space-y-2 text-xs">
                {[
                  { n: "Customer A", d: "Cotton kurti · ৳1,260", s: "New", c: "bg-blue-100 text-blue-700" },
                  { n: "Customer B", d: "Tote bag × 2 · ৳1,920", s: "Packed", c: "bg-amber-100 text-amber-800" },
                  { n: "Customer C", d: "Cotton kurti · ৳1,320", s: "Shipped", c: "bg-emerald-100 text-emerald-700" },
                ].map((o) => (
                  <li
                    key={o.n}
                    className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-200"
                  >
                    <span>
                      <span className="block font-semibold">{o.n}</span>
                      <span className="text-slate-500">{o.d}</span>
                    </span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 font-semibold ${o.c}`}>{o.s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center gap-2 rounded-xl bg-rose-50 p-2.5 text-xs text-rose-800 ring-1 ring-rose-200">
                <Package className="h-4 w-4 shrink-0" aria-hidden />
                <span>
                  <strong>Silk scarf</strong> sold out. Hidden from buyers automatically.
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                Courier and bKash status on every order
              </div>

              <nav className="mt-4 grid grid-cols-3 border-t border-slate-100 pt-3 text-center text-[11px] text-slate-500">
                <span className="flex flex-col items-center gap-1 font-semibold text-blue-600">
                  <ListOrdered className="h-4 w-4" aria-hidden />
                  Orders
                </span>
                <span className="flex flex-col items-center gap-1">
                  <Home className="h-4 w-4" aria-hidden />
                  Products
                </span>
                <span className="flex flex-col items-center gap-1">
                  <Settings className="h-4 w-4" aria-hidden />
                  Settings
                </span>
              </nav>
            </Phone>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
