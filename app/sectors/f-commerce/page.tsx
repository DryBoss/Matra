import type { Metadata } from "next";
import { ClipboardList, Store, Truck } from "lucide-react";
import SectorPage, { type SectorConfig } from "../../components/SectorPage";
import { IMAGES } from "../../lib/images";

export const metadata: Metadata = {
  title: "F-Commerce Sellers | Matra",
  description:
    "Get your own online store for your Facebook page. Orders from Facebook, Messenger and WhatsApp in one list, with courier and bKash tracking. Start for free with our pay-per-order plan.",
};

const CONFIG: SectorConfig = {
  theme: "blue",
  heroImage: IMAGES.fcHero,
  ctaImage: IMAGES.fcCta,
  plansBackground: "/images/pattern-blue-light.svg",

  hero: {
    title: "Your own online store for your Facebook page",
    body: "Stop typing the same price in every inbox. Give customers a proper store where they pick, order and choose how to pay, with every order tracked in one list. Start for free and pay only when you sell.",
  },

  launch: {
    caption: "Launch kit, Launch Plan",
    badge: "Store is live",
    items: [
      "Your store link for your Facebook page",
      "Orders in one list",
      "Courier and cash on delivery set up",
      "Customers see prices, no inbox typing",
    ],
    note: "Set-up costs you nothing. You pay only when you sell.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "Every plan runs on the same system. The free plan uses our standard design and has editing limits. The paid plans unlock full editing, customization and your own branding.",
    items: [
      {
        icon: Store,
        title: "Your own online store",
        body: "Give customers a proper store they can open from your Facebook page, Messenger or WhatsApp, instead of asking for prices in the inbox.",
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
    ],
  },

  stepsTitle: "From first message to first order",
  steps: [
    {
      title: "We build your store",
      body: "Send us your products, prices, sizes and delivery charges. We build your online store and set everything up for you.",
    },
    {
      title: "Share one link",
      body: "Put your store link on your Facebook page, in Messenger auto-replies and on WhatsApp. Customers browse and order without waiting for a reply.",
    },
    {
      title: "Orders arrive in one list",
      body: "Each order lands in your order manager with the customer's details, so you can confirm it, pack it and hand it to your courier.",
    },
    {
      title: "Start free, then own it",
      body: "Start on the free plan with our standard design. Move to Scale and pay the website off with a monthly fee, then keep it for hosting only.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start free on our standard design. When you want the website to be truly yours, pay it off with a monthly fee, and it drops to hosting only once it is covered.",
    featuredBadge: "Best for busy sellers",
    tiers: [
      {
        name: "Launch Plan",
        image: IMAGES.fcLaunch,
        price: "৳0",
        unit: "/mo",
        highlight: "Free forever",
        description:
          "Zero risk to start. Go live on our standard design and pay only when customers use it.",
        features: [
          "3% fee on direct store orders",
          "Standard Matra design with a \"Powered by Matra\" credit",
          "Edit text and prices, up to 15 products and 5 photos in the app",
          "Full order manager & customer records",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Scale Plan",
        image: IMAGES.fcScale,
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
        image: IMAGES.fcBrand,
        price: "৳1,000+",
        unit: "/mo",
        highlight: "Custom design",
        description:
          "For larger or growing businesses that want a design and features made just for them. The price depends on what we agree to build.",
        features: [
          "Fully custom design and extra features",
          "Deposit of 20 to 30%, the rest paid off through the monthly fee",
          "Priority support and faster changes",
          "Everything in Scale",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your shop?",
    guide: [
      {
        lead: "Just starting out?",
        text: "Our Launch plan costs nothing upfront. You get our standard design, edit the basics in the app, and pay only a 3% fee on direct store orders.",
      },
      {
        lead: "Ready to make it yours?",
        text: "Scale lets you customize the look, edit everything in the app and remove our credit. The website price is agreed up front, depends on your site, and is paid off through the monthly fee, with no per-order fee, then you only pay for hosting.",
      },
      {
        lead: "Need something special?",
        text: "Brand gets you a fully custom design and extra features. We agree the price and a small deposit first, and the rest is paid off through the monthly fee.",
      },
    ],
  },

  faq: {
    title: "Questions online sellers ask",
    items: [
      {
        q: "Is it really free to start?",
        a: "Yes. Setting up your store costs nothing, and our base plan has no fixed monthly fee. You only pay a 3% fee on direct store orders or for active platform usage.",
      },
      {
        q: "What are the limits of the free plan?",
        a: "The free plan uses our standard design with a small Matra credit, and you can edit text, prices and up to 15 products and 5 photos in the app. Scale removes those limits.",
      },
      {
        q: "What does \"pay it off\" mean?",
        a: "On Scale and Brand the website has a price that depends on the site you need, so a portfolio costs less than a full business system. We agree it with you before we start. Your monthly fee counts toward it until it is covered. Once it is paid off you only pay for hosting, and you can take your code and database with you.",
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
        q: "Can I change plans later?",
        a: "Yes. Most sellers begin on Launch and move to Scale when they want full editing, their own branding and no per-order fees. Brand is there if you want a custom design.",
      },
      {
        q: "Do I need technical skills?",
        a: "No. We build the store and set up the order manager for you. You only add products and watch the orders come in.",
      },
    ],
  },

  cta: {
    title: "Tell us about your shop",
    body: "Send us a message and we will set up your online store for free. You pay nothing until your first order.",
  },
};

export default function FCommercePage() {
  return <SectorPage config={CONFIG} />;
}
