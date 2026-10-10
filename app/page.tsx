import Link from "next/link";
import {
  Briefcase,
  ChefHat,
  ChevronRight,
  Quote,
  ShoppingBag,
  Store,
  Trophy,
  Wrench,
} from "lucide-react";
import Reveal from "./components/Reveal";
import GoLiveTimeline from "./components/GoLiveTimeline";
import { TESTIMONIALS } from "./lib/content";
import { svgBg } from "./lib/images";
import { headingStyle } from "./lib/styles";

export default function Page() {
  return (
    <main>
      <Hero />
      <Sectors />
      <Testimonials />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Artwork with a slow, subtle zoom */}
      <div
        aria-hidden
        className="absolute inset-0 animate-slow-zoom"
        style={svgBg("/images/hero-overall.svg", "center bottom")}
      />
      {/* Keeps the text readable over the artwork */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-32">
        <div>
          <h1
            className="animate-fade-up text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ...headingStyle, animationDelay: "100ms" }}
          >
            Websites for local businesses and creators, with zero risk.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-200"
            style={{ animationDelay: "220ms" }}
          >
            We build your digital system for free. Start on our standard design and pay only when you make money. Want it fully yours? Pay the website off with a simple monthly fee.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "340ms" }}
          >
            <a
              href="#sectors"
              className="btn-press inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Find your solution
            </a>
            <a
              href="#contact"
              className="btn-press inline-flex items-center justify-center rounded-full border border-slate-400/60 px-7 py-3.5 font-semibold text-white hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Contact us
            </a>
          </div>
        </div>

        <GoLiveTimeline />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sectors                                                                   */
/* -------------------------------------------------------------------------- */

function Sectors() {
  return (
    <section
      id="sectors"
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
              Pick what you need built
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Each page below is built for a different kind of work, with its own
              features and plans. Open yours to see what is included and how
              the pricing works.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.href} delay={(i % 3) * 120} className="h-full">
              <SectorCard sector={sector} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type Sector = {
  href: string;
  title: string;
  body: string;
  image: string;
  icon: React.ReactNode;
  border: string;
  iconBox: string;
  cta: string;
  outline: string;
};

/*
 * Card order on the home page (three per row on desktop):
 *   Row 1: high-volume niches   - F-Commerce, Restaurants & Food Carts, Cloud Kitchens
 *   Row 2: specialised/broad    - Sports Turfs, Portfolio Websites, Custom Solutions
 */
const SECTORS: Sector[] = [
  {
    href: "/sectors/f-commerce",
    title: "F-Commerce Sellers",
    body: "Your own online store for your Facebook page, with orders, couriers and payments in one list.",
    image: "/images/hero-fcommerce.svg",
    icon: <ShoppingBag className="h-6 w-6" aria-hidden />,
    border: "border-blue-600",
    iconBox: "bg-blue-600",
    cta: "text-blue-700",
    outline: "focus-visible:outline-blue-600",
  },
  {
    href: "/sectors/restaurant",
    title: "Restaurants & Food Carts",
    body: "QR menus, table and takeaway orders, and daily sales in one place for restaurants, cafes and street food.",
    image: "/images/hero-restaurant.svg",
    icon: <Store className="h-6 w-6" aria-hidden />,
    border: "border-rose-600",
    iconBox: "bg-rose-600",
    cta: "text-rose-700",
    outline: "focus-visible:outline-rose-600",
  },
  {
    href: "/sectors/cloud-kitchen",
    title: "Cloud Kitchens",
    body: "A direct ordering website, a live kitchen board and bKash tracking for home and cloud kitchens.",
    image: "/images/hero-kitchen.svg",
    icon: <ChefHat className="h-6 w-6" aria-hidden />,
    border: "border-orange-600",
    iconBox: "bg-orange-600",
    cta: "text-orange-700",
    outline: "focus-visible:outline-orange-600",
  },
  {
    href: "/sectors/turf",
    title: "Sports Turfs",
    body: "Online booking, customer records and payment tracking for turf owners.",
    image: "/images/hero-night-turf.svg",
    icon: <Trophy className="h-6 w-6" aria-hidden />,
    border: "border-emerald-600",
    iconBox: "bg-emerald-600",
    cta: "text-emerald-700",
    outline: "focus-visible:outline-emerald-600",
  },
  {
    href: "/sectors/portfolio",
    title: "Portfolio Websites",
    body: "A personal website that shows your work, collects client enquiries and shows who visits.",
    image: "/images/hero-portfolio.svg",
    icon: <Briefcase className="h-6 w-6" aria-hidden />,
    border: "border-violet-600",
    iconBox: "bg-violet-600",
    cta: "text-violet-700",
    outline: "focus-visible:outline-violet-600",
  },
  {
    href: "/sectors/custom",
    title: "Custom Solutions",
    body: "Something else? Tell us how your work runs and we will build the system around it.",
    image: "/images/hero-custom.svg",
    icon: <Wrench className="h-6 w-6" aria-hidden />,
    border: "border-cyan-600",
    iconBox: "bg-cyan-600",
    cta: "text-cyan-700",
    outline: "focus-visible:outline-cyan-600",
  },
];

function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link
      href={sector.href}
      className={`group relative flex h-full flex-col items-start overflow-hidden rounded-2xl border-2 bg-white p-6 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sector.border} ${sector.outline}`}
    >
      {/* The zoom happens inside this clipped wrapper, so it can never
          cover the icon below. */}
      <div
        aria-hidden
        className="relative -mx-6 -mt-6 mb-5 h-32 w-[calc(100%+3rem)] overflow-hidden"
      >
        <div
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          style={svgBg(sector.image, "center 30%")}
        />
      </div>
      <span
        className={`relative z-10 -mt-12 mb-2 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${sector.iconBox}`}
      >
        {sector.icon}
      </span>
      <span
        className="mt-3 text-xl font-semibold text-slate-900"
        style={headingStyle}
      >
        {sector.title}
      </span>
      <span className="mt-2 flex-1 text-slate-600">{sector.body}</span>
      <span
        className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${sector.cta}`}
      >
        View plans and details
        <ChevronRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-16 border-y border-slate-200 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              What our customers say
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Quote className="h-6 w-6 text-emerald-600" aria-hidden />
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900">
                      {t.name}
                    </span>
                    <span className="block text-sm text-slate-500">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
