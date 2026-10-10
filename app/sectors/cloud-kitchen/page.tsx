import type { Metadata } from "next";
import { BarChart3, ChefHat, UtensilsCrossed } from "lucide-react";
import SectorPage, { type SectorConfig } from "../../components/SectorPage";
import { IMAGES } from "../../lib/images";

export const metadata: Metadata = {
  title: "Cloud Kitchens | Matra",
  description:
    "Get your own online ordering website for your cloud kitchen. Menu, live kitchen order board, customer records and bKash tracking. Start for free with our pay-per-order plan.",
};

const CONFIG: SectorConfig = {
  theme: "orange",
  heroImage: IMAGES.kitchenHero,
  ctaImage: IMAGES.kitchenCta,
  plansBackground: "/images/pattern-orange-light.svg",

  hero: {
    title: "Online ordering websites for cloud kitchens",
    body: "Take orders straight from your own website, see every order on a live kitchen board, and track bKash and cash payments automatically. Start for free and pay only a small fee per order.",
  },

  launch: {
    caption: "Launch kit, Simmer Plan",
    badge: "Kitchen is live",
    items: [
      "Your own ordering website",
      "Live kitchen board",
      "bKash and cash tracking",
      "Top dishes and peak hours report",
    ],
    note: "Set-up costs you nothing. You pay only per order.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "Every plan runs on the same system. The free plan uses our standard design and has editing limits. The paid plans unlock full editing, customization and your own branding.",
    items: [
      {
        icon: UtensilsCrossed,
        title: "Online menu & ordering",
        body: "Show your full menu with photos and prices, and let customers order directly from their phone.",
        points: [
          "Share your menu link on Facebook and WhatsApp",
          "Mark a dish as sold out in one tap",
          "Delivery areas and charges set up for you",
        ],
      },
      {
        icon: ChefHat,
        title: "Kitchen order board",
        body: "A live screen for your kitchen, so every order is seen, cooked and sent out in the right order.",
        points: [
          "New, preparing, ready and out for delivery",
          "Note the rider or courier on every order",
          "Works on any phone, tablet or laptop",
        ],
      },
      {
        icon: BarChart3,
        title: "Sales, customers & bKash tracking",
        body: "See which dishes sell, who your regular customers are, and which payments are paid or still cash on delivery.",
        points: [
          "Top dishes and peak ordering hours",
          "Repeat customers and their favourite items",
          "bKash and cash on delivery in one daily summary",
        ],
      },
    ],
  },

  stepsTitle: "From first dish to first order",
  steps: [
    {
      title: "We build your menu site",
      body: "Tell us your dishes, prices, delivery areas and opening hours. We build your ordering website and set everything up for you.",
    },
    {
      title: "Share your link",
      body: "Add it to your Facebook page, WhatsApp status and profile bio. Customers order without long chats in your inbox.",
    },
    {
      title: "Cook from one board",
      body: "Every order appears on your kitchen board and in your customer records the moment it is placed.",
    },
    {
      title: "Start free, then own it",
      body: "Start on the free plan with our standard design. Move to Sizzle and pay the website off with a monthly fee, then keep it for hosting only.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start free on our standard design. When you want the website to be truly yours, pay it off with a monthly fee, and it drops to hosting only once it is covered.",
    featuredBadge: "Best for busy kitchens",
    tiers: [
      {
        name: "Simmer Plan",
        image: IMAGES.kSimmer,
        price: "৳0",
        unit: "/mo",
        highlight: "Free forever",
        description:
          "Zero risk to start. Go live on our standard design and pay only when customers use it.",
        features: [
          "5% fee on direct website orders",
          "Standard Matra design with a \"Powered by Matra\" credit",
          "Edit text and prices, up to 15 dishes and 5 photos in the app",
          "Full kitchen board, CRM & analytics",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Sizzle Plan",
        image: IMAGES.kSizzle,
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
        cta: "Choose Sizzle",
        featured: true,
      },
      {
        name: "Feast Plan",
        image: IMAGES.kFeast,
        price: "৳1,000+",
        unit: "/mo",
        highlight: "Custom design",
        description:
          "For larger or growing businesses that want a design and features made just for them. The price depends on what we agree to build.",
        features: [
          "Fully custom design and extra features",
          "Deposit of 20 to 30%, the rest paid off through the monthly fee",
          "Priority support and faster changes",
          "Everything in Sizzle",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your kitchen?",
    guide: [
      {
        lead: "Just starting out?",
        text: "Our Simmer plan costs nothing upfront. You get our standard design, edit the basics in the app, and pay only a 5% fee on direct website orders.",
      },
      {
        lead: "Ready to make it yours?",
        text: "Sizzle lets you customize the look, edit everything in the app and remove our credit. The website price is agreed up front, depends on your site, and is paid off through the monthly fee, with no per-order fee, then you only pay for hosting.",
      },
      {
        lead: "Need something special?",
        text: "Feast gets you a fully custom design and extra features. We agree the price and a small deposit first, and the rest is paid off through the monthly fee.",
      },
    ],
  },

  faq: {
    title: "Questions kitchen owners ask",
    items: [
      {
        q: "Is it really free to start?",
        a: "Yes. Setting up your ordering website costs nothing, and our base plan has no fixed monthly fee. You only pay a 5% fee on direct website orders or for active platform usage.",
      },
      {
        q: "What are the limits of the free plan?",
        a: "The free plan uses our standard design with a small Matra credit, and you can edit text, prices and up to 15 dishes and 5 photos in the app. Sizzle removes those limits.",
      },
      {
        q: "What does \"pay it off\" mean?",
        a: "On Sizzle and Feast the website has a price that depends on the site you need, so a portfolio costs less than a full business system. We agree it with you before we start. Your monthly fee counts toward it until it is covered. Once it is paid off you only pay for hosting, and you can take your code and database with you.",
      },
      {
        q: "Do I need a restaurant or dining space?",
        a: "No. It is built for kitchens that run from a home, a rented kitchen or a small production space and sell through online orders.",
      },
      {
        q: "Do I have to leave other delivery apps?",
        a: "No. You can keep selling wherever you do now. Your own website simply gives regular customers a direct way to order from you.",
      },
      {
        q: "How do I deliver the orders?",
        a: "Use your own riders or any courier you like. You note the rider or courier on each order, so you always know who is carrying it.",
      },
      {
        q: "Do my customers need to install an app?",
        a: "No. They open your menu link in any browser on their phone and order in a few taps.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes. Most kitchens begin on Simmer and move to Sizzle when they want full editing, their own branding and no per-order fees. Feast is there if you want a custom design.",
      },
      {
        q: "Do I need technical skills?",
        a: "No. We build the website and set up the kitchen board for you. You only update your menu and watch the orders come in.",
      },
    ],
  },

  cta: {
    title: "Tell us about your kitchen",
    body: "Send us a message and we will set up your online ordering website for free. You pay nothing until your first order.",
  },
};

export default function CloudKitchenPage() {
  return <SectorPage config={CONFIG} />;
}
