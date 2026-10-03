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

  sample: {
    caption: "Sample order, Launch Plan",
    badge: "Cash on delivery",
    itemLabel: "2 cotton kurtis",
    itemAmount: "৳2,400",
    feeLabel: "Our fee for this order (3%)",
    feeAmount: "৳72",
    keepLabel: "You keep",
    keepAmount: "৳2,328",
    note: "No order, no fee. Set-up costs you nothing.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "The same full system on every plan. The plans only differ in how you pay and whether you get your own custom domain.",
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
      title: "Pay per usage",
      body: "Start with our pay-as-you-go plan and pay a small percentage per order. Upgrade to a flat plan to keep 100% of your sales.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start free and pay per order. Switch to a flat monthly price when your sales grow and it works out cheaper.",
    featuredBadge: "Best for busy sellers",
    tiers: [
      {
        name: "Launch Plan",
        image: IMAGES.fcLaunch,
        price: "৳0",
        unit: "/mo",
        highlight: "Pay as you go",
        description:
          "Zero risk to start. You only pay when customers order through your store.",
        features: [
          "3% fee on direct store orders",
          "Pay only for active usage or extra features",
          "Full order manager & customer records",
          "No fixed monthly fees",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Scale Plan",
        image: IMAGES.fcScale,
        price: "৳500",
        unit: "/mo",
        highlight: "Zero setup fee & Data ownership",
        description:
          "The smartest choice once orders keep coming. Stop paying per order and eventually just pay for basic hosting.",
        features: [
          "0% fee on all orders",
          "Cost drops to ৳200/mo over time",
          "Option to export code & database",
          "Free custom Matra subdomain",
        ],
        cta: "Choose Scale",
        featured: true,
      },
      {
        name: "Brand Plan",
        image: IMAGES.fcBrand,
        price: "৳1,000",
        unit: "/mo",
        highlight: "Custom domain",
        description:
          "Premium branding. A ৳2,000 one-time setup fee gets your shop its own web address.",
        features: [
          "Your own domain (yourshop.com)",
          "Yearly domain renewal applies",
          "Cost drops over time like Scale",
          "Everything in Scale",
        ],
        cta: "Choose Brand",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your shop?",
    guide: [
      {
        lead: "Just starting out?",
        text: "Our Launch plan costs nothing upfront. You only pay a 3% fee on direct store orders and for active platform usage.",
      },
      {
        lead: "Getting busy?",
        text: "The Scale plan charges a flat ৳500/month (which drops to ৳200 over time). You pay 0% fee and even own your database.",
      },
      {
        lead: "Building a brand?",
        text: "Upgrade to the Brand plan to get your own web address with a small one-time setup fee.",
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
        a: "Yes. Many sellers begin on the pay-as-you-go plan and move to our flat Scale plan once they want 0% fees and complete data ownership.",
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
