import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Mail,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import LaunchKit, { type LaunchKitProps } from "./LaunchKit";
import { CONTACT } from "../lib/content";
import { layeredBg, type Slot } from "../lib/images";
import { headingStyle } from "../lib/styles";
import { THEMES, type ThemeKey } from "../lib/themes";

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
};

export type Step = { title: string; body: string };

export type Tier = {
  name: string;
  image: Slot;
  price: string;
  unit: string;
  highlight: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export type SectorConfig = {
  theme: ThemeKey;
  heroImage: Slot;
  ctaImage: Slot;
  plansBackground: string;
  hero: { title: string; body: string };
  launch: LaunchKitProps;
  features: { title: string; intro: string; items: Feature[] };
  stepsTitle: string;
  steps: Step[];
  plans: {
    title: string;
    intro: string;
    featuredBadge: string;
    tiers: Tier[];
    guideTitle: string;
    guide: { lead: string; text: string }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; body: string };
};

const BTN_BASE =
  "btn-press inline-flex items-center justify-center rounded-full font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

/** One full sector page: hero, features, steps, plans, FAQ and closing CTA. */
export default function SectorPage({ config }: { config: SectorConfig }) {
  const t = THEMES[config.theme];
  const { hero, features, plans, faq, cta } = config;

  return (
    <main data-theme={config.theme}>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className={`relative overflow-hidden ${t.heroBg} text-white`}>
        <div
          aria-hidden
          className="absolute inset-0 animate-slow-zoom"
          style={layeredBg(config.heroImage)}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
          <Link
            href="/#sectors"
            className={`group animate-fade-up inline-flex items-center gap-2 rounded-full text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 ${t.outlineDark}`}
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
                {hero.title}
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-200"
                style={{ animationDelay: "220ms" }}
              >
                {hero.body}
              </p>

              <div
                className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
                style={{ animationDelay: "340ms" }}
              >
                <a
                  href="#plans"
                  className={`${BTN_BASE} ${t.btn} ${t.outline} px-7 py-3.5`}
                >
                  See plans
                </a>
                <a
                  href="#contact"
                  className={`${BTN_BASE} ${t.outline} border border-slate-400/60 px-7 py-3.5 text-white hover:border-white hover:bg-white/10`}
                >
                  Contact us
                </a>
              </div>
            </div>

            <LaunchKit theme={config.theme} kit={config.launch} />
          </div>
        </div>
      </section>

      {/* --------------------------- What you get -------------------------- */}
      <section id="features" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
                style={headingStyle}
              >
                {features.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {features.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.items.map(({ icon: Icon, title, body, points }, i) => (
              <Reveal key={title} delay={i * 120} className="h-full">
                <article className="group h-full rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${t.iconBox}`}
                  >
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
                          className={`mt-0.5 h-4 w-4 shrink-0 ${t.check}`}
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

      {/* ----------------------------- How it works ------------------------ */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
                style={headingStyle}
              >
                {config.stepsTitle}
              </h2>
            </div>
          </Reveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.steps.map((step, i) => (
              <li key={step.title} className="h-full">
                <Reveal delay={i * 140} className="h-full">
                  <div className="group relative h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110 ${t.step}`}
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

      {/* -------------------------------- Plans ---------------------------- */}
      <section
        id="plans"
        className="scroll-mt-16 py-16 sm:py-24"
        style={{
          backgroundImage: `url(${config.plansBackground})`,
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
                {plans.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {plans.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.tiers.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={i * 140}
                className={`h-full ${tier.featured ? "md:-mt-2" : ""}`}
              >
                <article
                  className={`group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                    tier.featured
                      ? `bg-slate-950 text-white shadow-xl ring-2 hover:shadow-2xl md:pb-8 ${t.featuredRing}`
                      : "bg-white text-slate-800 ring-1 ring-slate-200 hover:shadow-lg"
                  }`}
                >
                  <div
                    aria-hidden
                    className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden rounded-t-2xl"
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={layeredBg(tier.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                    {tier.featured && (
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow ${t.featuredBadge}`}
                      >
                        {plans.featuredBadge}
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
                      tier.featured ? t.chipDark : t.chip
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
                            tier.featured ? t.checkDark : t.check
                          }`}
                          aria-hidden
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`${BTN_BASE} mt-7 px-5 py-3 text-sm ${
                      tier.featured
                        ? `${t.btn} ${t.outline}`
                        : `bg-slate-900 text-white hover:bg-slate-700 ${t.outlineLight}`
                    }`}
                  >
                    {tier.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 sm:p-8">
              <h3
                className="text-lg font-semibold text-slate-900"
                style={headingStyle}
              >
                {plans.guideTitle}
              </h3>
              <ul className="mt-4 space-y-3 leading-relaxed text-slate-700">
                {plans.guide.map((g) => (
                  <li key={g.lead}>
                    <strong>{g.lead}</strong> {g.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------- FAQ ----------------------------- */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              {faq.title}
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            <div className="divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200">
              {faq.items.map((item) => (
                <details key={item.q} className="group px-5 py-4 sm:px-6">
                  <summary
                    className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded font-semibold text-slate-900 focus-visible:outline focus-visible:outline-2 [&::-webkit-details-marker]:hidden ${t.outlineLight}`}
                  >
                    {item.q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Closing CTA ------------------------ */}
      <section
        className={`relative overflow-hidden ${t.heroBg} text-white`}
        style={layeredBg(config.ctaImage)}
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
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              {cta.body}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_BASE} ${t.btn} ${t.outline} gap-2 px-7 py-3.5`}
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Message us on WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className={`${BTN_BASE} ${t.outline} gap-2 border border-slate-400/60 px-7 py-3.5 text-white hover:border-white hover:bg-white/10`}
              >
                <Mail className="h-5 w-5" aria-hidden />
                Email us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
