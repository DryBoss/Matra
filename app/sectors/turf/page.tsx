import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, Mail, MessageCircle } from "lucide-react";
import SampleBooking from "../../components/SampleBooking";
import { CONTACT, FEATURES, TIERS } from "../../lib/content";
import { IMAGES, layeredBg } from "../../lib/images";
import { headingStyle } from "../../lib/styles";

export const metadata: Metadata = {
  title: "Sports Turfs | Matra",
  description:
    "Online booking for sports turfs: WhatsApp booking, a built-in CRM and bKash tracking. Start at ৳0 per month and pay ৳30 per booking, or switch to a flat plan.",
};

/* Numbers used in the plan comparison */
const KICKOFF_FEE = 30;
const PRO_PRICE = 1499;
const CHAMPIONS_PRICE = 3999;
const BREAK_EVEN = Math.ceil(PRO_PRICE / KICKOFF_FEE); // 50 bookings a month

const STEPS = [
  {
    title: "We set up your turf",
    body: "Tell us your pitch sizes, slot times and prices. We build your booking system for free.",
  },
  {
    title: "Players book on WhatsApp",
    body: "Customers message to pick an open slot. Each booking lands in your list automatically.",
  },
  {
    title: "Payments get tracked",
    body: "Every bKash payment is matched to its booking, so you see what is paid and what is pending.",
  },
  {
    title: "You pay only what you earn",
    body: "Stay on Kickoff and pay ৳30 per booking. Move to a flat plan when your bookings grow.",
  },
];

const FAQ = [
  {
    q: "Is it really free to start?",
    a: "Yes. Setting up your turf costs nothing, and the Kickoff Plan has no monthly fee. You pay ৳30 only for each booking that comes in.",
  },
  {
    q: "Do my customers need to install an app?",
    a: "No. They book by sending a message on WhatsApp, which they already use every day.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Many turfs begin on Kickoff and move to Pro League once their monthly bookings make the flat fee cheaper.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. We build and set up everything for you. You only manage your slots and bookings.",
  },
  {
    q: "What is the difference between Pro League and Champions?",
    a: "Both have 0% commission. Champions adds your own custom domain, so players visit your turf's own web address.",
  },
];

export default function TurfPage() {
  return (
    <main>
      <TurfHero />
      <WhatYouGet />
      <HowItWorks />
      <Plans />
      <Faq />
      <FinalCta />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function TurfHero() {
  return (
    <section
      className="relative overflow-hidden bg-emerald-950 text-white"
      style={layeredBg(IMAGES.turfHero)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <Link
          href="/#sectors"
          className="inline-flex items-center gap-2 rounded-full text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All businesses
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h1
              className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
              style={headingStyle}
            >
              Online booking for sports turf owners
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              Fill more slots without answering every call. Players book on
              WhatsApp, you track every bKash payment, and you start at ৳0 per
              month.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                See plans
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-400/60 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Contact us
              </a>
            </div>
          </div>

          <SampleBooking />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  What you get                                                              */
/* -------------------------------------------------------------------------- */

function WhatYouGet() {
  return (
    <section id="features" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            style={headingStyle}
          >
            Included in every plan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            The same full system on every plan. The plans only differ in how
            you pay and whether you get your own domain.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body, points }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3
                className="mt-5 text-xl font-semibold text-slate-900"
                style={headingStyle}
              >
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  How it works (a real sequence, so the numbers mean something)             */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            style={headingStyle}
          >
            From first message to first booking
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white"
                style={headingStyle}
              >
                {i + 1}
              </span>
              <h3
                className="mt-4 text-lg font-semibold text-slate-900"
                style={headingStyle}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Plans                                                                     */
/* -------------------------------------------------------------------------- */

function Plans() {
  return (
    <section
      id="plans"
      className="scroll-mt-16 py-16 sm:py-24"
      style={{
        backgroundImage: "url(/images/pitch-lines-light.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            style={headingStyle}
          >
            Choose how you pay
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Start free and pay per booking. Switch to a flat monthly price when
            it works out cheaper.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-6 ${
                tier.featured
                  ? "bg-slate-950 text-white shadow-xl ring-2 ring-emerald-500 md:-mt-2 md:pb-8"
                  : "bg-white text-slate-800 ring-1 ring-slate-200"
              }`}
            >
              <div
                aria-hidden
                className="relative -mx-6 -mt-6 mb-5 h-40 rounded-t-2xl"
                style={layeredBg(IMAGES[tier.imageKey])}
              >
                <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                {tier.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950 shadow">
                    Best for busy turfs
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold" style={headingStyle}>
                {tier.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-1">
                <span
                  className="text-4xl font-semibold tracking-tight"
                  style={headingStyle}
                >
                  {tier.price}
                </span>
                <span
                  className={
                    tier.featured ? "text-slate-400" : "text-slate-500"
                  }
                >
                  {tier.unit}
                </span>
              </p>

              <p
                className={`mt-2 inline-flex w-fit rounded-full px-3 py-1 text-sm font-medium ${
                  tier.featured
                    ? "bg-emerald-500/15 text-emerald-300"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {tier.highlight}
              </p>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  tier.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {tier.description}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.featured ? "text-emerald-400" : "text-emerald-600"
                      }`}
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
                  tier.featured
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Plain-language guide to picking */}
        <div className="mt-8 rounded-2xl bg-white/90 p-6 ring-1 ring-slate-200 backdrop-blur sm:p-8">
          <h3
            className="text-lg font-semibold text-slate-900"
            style={headingStyle}
          >
            Which plan fits your turf?
          </h3>
          <ul className="mt-4 space-y-3 leading-relaxed text-slate-700">
            <li>
              Under {BREAK_EVEN} bookings a month, Kickoff costs less. At{" "}
              {BREAK_EVEN} bookings it costs ৳{KICKOFF_FEE * BREAK_EVEN}, which
              is already more than the ৳{PRO_PRICE.toLocaleString("en-US")}{" "}
              Pro League price.
            </li>
            <li>
              From {BREAK_EVEN} bookings a month, Pro League is cheaper, and
              every extra booking costs you nothing in fees.
            </li>
            <li>
              Choose Champions if you want players to find you at your own web
              address. It costs ৳
              {(CHAMPIONS_PRICE - PRO_PRICE).toLocaleString("en-US")} more per
              month than Pro League.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ (native <details>, so no JavaScript needed)                           */
/* -------------------------------------------------------------------------- */

function Faq() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2
          className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          style={headingStyle}
        >
          Questions turf owners ask
        </h2>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-5 py-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded font-semibold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing call to action                                                    */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-emerald-950 text-white"
      style={layeredBg(IMAGES.turfCta)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-slate-950/80"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={headingStyle}
        >
          Tell us about your turf
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          Send us a message and we will set up your booking page for free. You
          pay nothing until your first booking.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Message us on WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-400/60 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            <Mail className="h-5 w-5" aria-hidden />
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
