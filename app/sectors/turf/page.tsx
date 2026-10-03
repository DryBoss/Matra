import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, Mail, MessageCircle } from "lucide-react";
import Reveal from "../../components/Reveal";
import SampleBooking from "../../components/SampleBooking";
import { CONTACT, FEATURES, TIERS } from "../../lib/content";
import { IMAGES, layeredBg } from "../../lib/images";
import { headingStyle } from "../../lib/styles";

export const metadata: Metadata = {
  title: "Sports Turfs | Matra",
  description:
    "Get a custom automated booking website for your sports turf. Includes a built-in CRM, analytics tools, and bKash tracking. Start for free with our pay-per-usage plan.",
};

const STEPS = [
  {
    title: "We build your website",
    body: "Tell us your pitch sizes, slot times, and prices. We build your automated booking website and set everything up for you.",
  },
  {
    title: "Players book online",
    body: "Customers visit your new website to pick an open slot. Each booking lands in your built-in CRM automatically.",
  },
  {
    title: "Track payments & analytics",
    body: "Every bKash payment is tracked. Use your analytics dashboard to see your earnings, peak hours, and popular slots.",
  },
  {
    title: "Pay per usage",
    body: "Start with our pay-as-you-go plan and pay a small percentage per booking. Upgrade to a flat plan to keep 100% of your earnings.",
  },
];

const FAQ = [
  {
    q: "Is it really free to start?",
    a: "Yes. Setting up your booking website costs nothing, and our base plan has no fixed monthly fee. You only pay a 5% fee on direct website orders or for active platform usage.",
  },
  {
    q: "Do my customers need to install an app?",
    a: "No. They can book everything automatically through your custom website from any browser on their phone or computer.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Many turfs begin on the pay-as-you-go plan and move to our flat Pro League plan once they want 0% commissions and complete data ownership.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. We build the website and set up the analytics tools for you. You only manage your slots and watch the bookings come in.",
  },
  {
    q: "What is the difference between the base and premium plans?",
    a: "The Kickoff plan has zero monthly fees but takes a small cut of bookings. Pro League gives you 0% commission and database ownership, while Champions adds a premium custom domain.",
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
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      {/* Artwork with a slow, subtle zoom */}
      <div
        aria-hidden
        className="absolute inset-0 animate-slow-zoom"
        style={layeredBg(IMAGES.turfHero)}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <Link
          href="/#sectors"
          className="group animate-fade-up inline-flex items-center gap-2 rounded-full text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden
          />
          All solutions
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h1
              className="animate-fade-up text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
              style={{ ...headingStyle, animationDelay: "100ms" }}
            >
              Automated booking websites for sports turfs
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-200"
              style={{ animationDelay: "220ms" }}
            >
              Fill more slots without answering every call. Get a custom website
              with built-in analytics, track bKash payments automatically, and
              start for free with our flexible pay-per-usage plan.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "340ms" }}
            >
              <a
                href="#plans"
                className="btn-press inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                See plans
              </a>
              <a
                href="#contact"
                className="btn-press inline-flex items-center justify-center rounded-full border border-slate-400/60 px-7 py-3.5 font-semibold text-white hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
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
        <Reveal>
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              Included in every plan
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The same full system on every plan. The plans only differ in how
              you pay and whether you get your own custom domain.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body, points }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <article className="group h-full rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
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
            </Reveal>
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
        <Reveal>
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              From first click to first booking
            </h2>
          </div>
        </Reveal>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 140} className="h-full">
                <div className="group relative h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110"
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
                </div>
              </Reveal>
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
        <Reveal>
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              Flexible pricing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Start free and pay per usage. Switch to a flat monthly price when
              your bookings grow and it works out cheaper.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 140}
              className={`h-full ${tier.featured ? "md:-mt-2" : ""}`}
            >
              <article
                className={`group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  tier.featured
                    ? "bg-slate-950 text-white shadow-xl ring-2 ring-emerald-500 hover:shadow-2xl md:pb-8"
                    : "bg-white text-slate-800 ring-1 ring-slate-200 hover:shadow-lg"
                }`}
              >
                <div
                  aria-hidden
                  className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden rounded-t-2xl"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={layeredBg(IMAGES[tier.imageKey])}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
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
                          tier.featured
                            ? "text-emerald-400"
                            : "text-emerald-600"
                        }`}
                        aria-hidden
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn-press mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
                    tier.featured
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                      : "bg-slate-900 text-white hover:bg-slate-700"
                  }`}
                >
                  {tier.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Plain-language guide to picking */}
        <Reveal className="mt-8">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 sm:p-8">
            <h3
              className="text-lg font-semibold text-slate-900"
              style={headingStyle}
            >
              Which plan fits your turf?
            </h3>
            <ul className="mt-4 space-y-3 leading-relaxed text-slate-700">
              <li>
                <strong>Just starting out?</strong> Our Kickoff plan costs
                nothing upfront. You only pay a 5% fee on direct website orders
                and for active platform usage.
              </li>
              <li>
                <strong>Getting busy?</strong> The Pro League plan charges a
                flat ৳500/month (which drops to ৳200 over time). You pay 0%
                commission and even own your database.
              </li>
              <li>
                <strong>Building a brand?</strong> Upgrade to the Champions plan
                to get your own custom web address with a small one-time setup
                fee.
              </li>
            </ul>
          </div>
        </Reveal>
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
        <Reveal>
          <h2
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            style={headingStyle}
          >
            Questions turf owners ask
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <div className="divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200">
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
        </Reveal>
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
        <Reveal>
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={headingStyle}
          >
            Tell us about your turf
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
            Send us a message and we will set up your custom booking website
            for free. You pay nothing until your first booking.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Message us on WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-slate-400/60 px-7 py-3.5 font-semibold text-white hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Email us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
