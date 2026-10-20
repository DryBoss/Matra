import {
  Check,
  ChevronDown,
  ClipboardList,
  Mail,
  MapPin,
  MessageCircle,
  PackageX,
  Smartphone,
  Store,
  Truck,
} from "lucide-react";
import Reveal from "./components/Reveal";
import LaunchKit from "./components/LaunchKit";
import ProductVisuals from "./components/ProductVisuals";
import TrustSection from "./components/TrustSection";
import { APP_URL, CONTACT, waLink } from "./lib/content";
import { IMAGES, layeredBg } from "./lib/images";
import { headingStyle } from "./lib/styles";
import { THEMES } from "./lib/themes";

const t = THEMES.blue;

const BTN_BASE =
  "btn-press inline-flex items-center justify-center rounded-full font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const FEATURES = [
  {
    icon: Store,
    title: "Your own online store",
    body: "Set up a proper store in minutes and open it from your Facebook page, Messenger or WhatsApp, instead of asking for prices in the inbox.",
    points: [
      "Share one link everywhere you sell",
      "Photos, sizes, colours and prices in one place",
      "Customers order themselves, day or night",
    ],
  },
  {
    icon: ClipboardList,
    title: "Order & customer manager",
    body: "Every order lands in one list with its status, so nothing gets lost between comments, Messenger and WhatsApp.",
    points: [
      "New, confirmed, packed, shipped, delivered, returned",
      "See each customer's past orders at a glance",
      "Spot repeat buyers and customers who often return parcels",
    ],
  },
  {
    icon: Truck,
    title: "Courier & payment tracking",
    body: "Know which parcels are out, which cash is still with the courier, and which bKash payments have arrived.",
    points: [
      "Courier name and tracking number on every order",
      "Cash on delivery and bKash paid, in one list",
      "Daily sales and monthly records without Excel",
    ],
  },
  {
    icon: MapPin,
    title: "Automatic delivery fees",
    body: "Stop calculating delivery charges by hand. The right fee is added at checkout based on where your customer lives.",
    points: [
      "Separate Inside Dhaka and Outside Dhaka charges",
      "Set your rates once, applied to every order",
      "Customers see the full total before they order",
    ],
  },
  {
    icon: PackageX,
    title: "Automatic out-of-stock",
    body: "Sold your last piece? The product switches to Out of Stock by itself, so you never sell what you do not have.",
    points: [
      "Stock counts down with every order",
      "Sold-out items cannot be ordered",
      "Add stock and the product is back on sale",
    ],
  },
  {
    icon: Smartphone,
    title: "Run it all from your phone",
    body: "No laptop or PC needed. Manage your whole shop from the mobile app, or from the web dashboard when you prefer a bigger screen.",
    points: [
      "Update inventory and prices in a few taps",
      "Track and update orders on the go",
      "Set up, edit and sell without a PC",
    ],
  },
];

const STEPS = [
  {
    title: "Sign up in minutes",
    body: "Create your account on the mobile app or the web dashboard. No waiting, no appointment. Your store is ready to fill straight away.",
  },
  {
    title: "Add your products yourself",
    body: "Use the simple forms to add photos, prices, sizes, stock and your delivery charges. Change anything, any time, from your phone.",
  },
  {
    title: "Share one link",
    body: "Put your store link on your Facebook page, in Messenger auto-replies and on WhatsApp. Customers browse and order without waiting for a reply.",
  },
  {
    title: "Sell now, upgrade when ready",
    body: "Start on the free plan with our standard design. Move to Scale and pay the website off with a monthly fee, then keep it for hosting only.",
  },
];

const TIERS = [
  {
    name: "Launch Plan",
    image: IMAGES.launch,
    price: "৳0",
    unit: "/mo",
    highlight: "Free forever",
    description:
      "Zero risk to start. Go live on our standard design and pay only when customers use it.",
    features: [
      "3% fee on direct store orders",
      'Standard Matra design with a "Powered by Matra" credit',
      "Edit text and prices, up to 15 products and 5 photos in the app",
      "Full order manager & customer records",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Scale Plan",
    image: IMAGES.scale,
    price: "৳500",
    unit: "/mo",
    highlight: "Pay it off over time",
    description:
      "Your site, on easy terms. The website price depends on what you need, and what you pay counts toward it until it is paid off.",
    features: [
      "Website price is agreed up front and paid off through the monthly fee, with no per-order fee",
      "Light customization: pick a layout, your logo, colours and sections",
      "Unlimited content editing in the app, no Matra credit",
      "Your own domain (yearly renewal applies)",
      "After it is paid off: hosting only (৳200/mo) and optional code & database export",
    ],
    cta: "Choose Scale",
    featured: true,
  },
  {
    name: "Brand Plan",
    image: IMAGES.brand,
    price: "৳1,000+",
    unit: "/mo",
    highlight: "Custom design",
    description:
      "For larger or growing businesses that want a design and features made just for them. The price depends on what we agree on together.",
    features: [
      "Fully custom design and extra features",
      "Deposit of 20 to 30%, the rest paid off through the monthly fee",
      "Priority support and faster changes",
      "Everything in Scale",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

const GUIDE = [
  {
    lead: "Just starting out?",
    text: "Launch costs nothing upfront. You get our standard design, edit the basics in the app, and pay only a 3% fee on direct store orders.",
  },
  {
    lead: "Ready to make it yours?",
    text: "Scale lets you customize the look, edit everything in the app and remove our credit. The website price is agreed up front and paid off through the monthly fee, with no per-order fee, then you only pay for hosting.",
  },
  {
    lead: "Need something special?",
    text: "Brand gets you a fully custom design and extra features. We agree the price and a small deposit first, and the rest is paid off through the monthly fee.",
  },
];

const FAQ = [
  {
    q: "Is it really free to start?",
    a: "Yes. Creating your store costs nothing, and our base plan has no fixed monthly fee. You only pay a 3% fee on direct store orders.",
  },
  {
    q: "What are the limits of the free plan?",
    a: "The free plan uses our standard design with a small Matra credit, and you can edit text, prices and up to 15 products and 5 photos in the app. Scale removes those limits.",
  },
  {
    q: 'What does "pay it off" mean?',
    a: "On Scale and Brand the website has a price that depends on the site you need. We agree it with you before we start. Your monthly fee counts toward it until it is covered. Once it is paid off you only pay for hosting, and you can take your code and database with you.",
  },
  {
    q: "Do I have to stop selling on Facebook?",
    a: "No. Keep your Facebook page, posts and ads exactly as they are. Your store simply gives customers one place to order, and you share its link wherever you already sell.",
  },
  {
    q: "Do my customers need to install an app?",
    a: "No. They open your store link in any browser on their phone or computer.",
  },
  {
    q: "Can I accept cash on delivery and bKash?",
    a: "Yes. Each order records how it will be paid, so you can see cash-on-delivery orders and bKash payments side by side.",
  },
  {
    q: "Which couriers can I use?",
    a: "Any courier you like. You enter the courier name and tracking number on each order, so you are never tied to one service.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. You set up and manage your store yourself with simple forms in the app: add a product name, photo, price and stock, and your store updates straight away. If you can post on Facebook, you can run your shop.",
  },
  {
    q: "Can I run my shop from my phone?",
    a: "Yes. Inventory, pricing and order tracking all work from your smartphone, so you do not need a PC. The web dashboard is there if you want a bigger screen.",
  },
  {
    q: "How are delivery charges handled?",
    a: "You set one charge for Inside Dhaka and one for Outside Dhaka. The right fee is added to each order at checkout automatically.",
  },
  {
    q: "What if I sell the last piece of a product?",
    a: "The product switches to Out of Stock automatically, so customers cannot order what you no longer have. Add stock and it goes back on sale.",
  },
];

export default function Home() {
  return (
    <main id="top" data-theme="blue" className="animate-fade-in">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className={`relative overflow-hidden ${t.heroBg} text-white`}>
        <div
          aria-hidden
          className="absolute inset-0 animate-slow-zoom"
          style={layeredBg(IMAGES.hero)}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p
                className={`animate-fade-up inline-flex rounded-full px-3 py-1 text-sm font-medium ${t.chipDark}`}
              >
                For Facebook sellers
              </p>
              <h1
                className="animate-fade-up mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
                style={{ ...headingStyle, animationDelay: "100ms" }}
              >
                Your own online store for your Facebook page
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-200"
                style={{ animationDelay: "220ms" }}
              >
                Stop typing the same price in every inbox. Set up your own store in minutes from the
                mobile app or web dashboard, no waiting and no developer. Customers pick, order and
                pay, and every order is tracked in one list. Free to start, you pay only when you
                sell.
              </p>

              <div
                className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
                style={{ animationDelay: "340ms" }}
              >
                <a
                  href={APP_URL || waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN_BASE} ${t.btn} ${t.outline} gap-2 px-7 py-3.5`}
                >
                  {APP_URL ? (
                    <Smartphone className="h-5 w-5" aria-hidden />
                  ) : (
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  )}
                  {APP_URL ? "Create your store free" : "Start for free on WhatsApp"}
                </a>
                <a
                  href="#plans"
                  className={`${BTN_BASE} ${t.outline} border border-slate-400/60 px-7 py-3.5 text-white hover:border-white hover:bg-white/10`}
                >
                  See plans
                </a>
              </div>
            </div>

            <LaunchKit
              theme="blue"
              kit={{
                caption: "Your store, Launch Plan",
                badge: "Set up in minutes",
                items: [
                  "Store link for your Facebook page",
                  "Delivery fees added automatically",
                  "Sold-out items switch off by themselves",
                  "Orders in one list, on your phone",
                ],
                note: "Set it up yourself from the app or web dashboard. Free to start, you pay only when you sell.",
              }}
            />
          </div>
        </div>
      </section>

      <ProductVisuals />

      {/* --------------------------- What you get -------------------------- */}
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
                Every plan runs on the same self-serve system, built for how Facebook sellers actually
                work. The free plan uses our standard design and has editing limits. The paid plans
                unlock full editing, customization and your own branding.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body, points }, i) => (
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
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.check}`} aria-hidden />
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
            <h2
              className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              From first message to first order
            </h2>
          </Reveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
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
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TrustSection />

      {/* -------------------------------- Plans ---------------------------- */}
      <section
        id="plans"
        className="scroll-mt-16 py-16 sm:py-24"
        style={{
          backgroundImage: "url(/images/pattern-blue-light.svg)",
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
                Start free on our standard design. When you want the website to be truly yours, pay
                it off with a monthly fee, and it drops to hosting only once it is covered.
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
                        Best for busy sellers
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
                    <span className={tier.featured ? "text-slate-400" : "text-slate-500"}>
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
                    href={waLink(`Hi Matra, I'm interested in the ${tier.name} for my Facebook shop.`)}
                    target="_blank"
                    rel="noopener noreferrer"
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
              <h3 className="text-lg font-semibold text-slate-900" style={headingStyle}>
                Which plan fits your shop?
              </h3>
              <ul className="mt-4 space-y-3 leading-relaxed text-slate-700">
                {GUIDE.map((g) => (
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
      <section id="faq" className="scroll-mt-16 border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              style={headingStyle}
            >
              Questions online sellers ask
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            <div className="divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200">
              {FAQ.map((item) => (
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
                  <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Closing CTA ------------------------ */}
      <section className={`relative overflow-hidden ${t.heroBg} text-white`} style={layeredBg(IMAGES.hero)}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <Reveal>
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={headingStyle}
            >
              Create your store in minutes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
              Sign up, add your products and share your link, all from your phone. Free to start,
              and you pay nothing until your first order. Questions? Message us any time.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {APP_URL && (
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN_BASE} ${t.btn} ${t.outline} gap-2 px-7 py-3.5`}
                >
                  <Smartphone className="h-5 w-5" aria-hidden />
                  Create your store free
                </a>
              )}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  APP_URL
                    ? `${BTN_BASE} ${t.outline} gap-2 border border-slate-400/60 px-7 py-3.5 text-white hover:border-white hover:bg-white/10`
                    : `${BTN_BASE} ${t.btn} ${t.outline} gap-2 px-7 py-3.5`
                }
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
