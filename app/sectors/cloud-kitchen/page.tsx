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

  sample: {
    caption: "Sample order, Simmer Plan",
    badge: "Paid via bKash",
    itemLabel: "2 chicken biryani combos",
    itemAmount: "৳900",
    feeLabel: "Our fee for this order (5%)",
    feeAmount: "৳45",
    keepLabel: "You keep",
    keepAmount: "৳855",
    note: "No order, no fee. Set-up costs you nothing.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "The same full system on every plan. The plans only differ in how you pay and whether you get your own custom domain.",
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
      title: "Pay per usage",
      body: "Start with our pay-as-you-go plan and pay a small percentage per order. Upgrade to a flat plan to keep 100% of your sales.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start free and pay per order. Switch to a flat monthly price when your orders grow and it works out cheaper.",
    featuredBadge: "Best for busy kitchens",
    tiers: [
      {
        name: "Simmer Plan",
        image: IMAGES.kSimmer,
        price: "৳0",
        unit: "/mo",
        highlight: "Pay as you go",
        description:
          "Zero risk to start. You only pay when customers order through your website.",
        features: [
          "5% fee on direct website orders",
          "Pay only for active usage or extra features",
          "Full kitchen board, CRM & analytics",
          "No fixed monthly fees",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Sizzle Plan",
        image: IMAGES.kSizzle,
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
        cta: "Choose Sizzle",
        featured: true,
      },
      {
        name: "Feast Plan",
        image: IMAGES.kFeast,
        price: "৳1,000",
        unit: "/mo",
        highlight: "Custom domain",
        description:
          "Premium branding. A ৳2,000 one-time setup fee gets your kitchen its own web address.",
        features: [
          "Your own domain (yourkitchen.com)",
          "Yearly domain renewal applies",
          "Cost drops over time like Sizzle",
          "Everything in Sizzle",
        ],
        cta: "Choose Feast",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your kitchen?",
    guide: [
      {
        lead: "Just starting out?",
        text: "Our Simmer plan costs nothing upfront. You only pay a 5% fee on direct website orders and for active platform usage.",
      },
      {
        lead: "Getting busy?",
        text: "The Sizzle plan charges a flat ৳500/month (which drops to ৳200 over time). You pay 0% fee and even own your database.",
      },
      {
        lead: "Building a brand?",
        text: "Upgrade to the Feast plan to get your own web address with a small one-time setup fee.",
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
        a: "Yes. Many kitchens begin on the pay-as-you-go plan and move to our flat Sizzle plan once they want 0% fees and complete data ownership.",
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
