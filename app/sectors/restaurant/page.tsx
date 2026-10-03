import type { Metadata } from "next";
import { BarChart3, QrCode, ReceiptText } from "lucide-react";
import SectorPage, { type SectorConfig } from "../../components/SectorPage";
import { IMAGES } from "../../lib/images";

export const metadata: Metadata = {
  title: "Restaurants & Food Carts | Matra",
  description:
    "Get a QR menu and online ordering for your restaurant, cafe or food cart. Table and takeaway orders, a live order screen, and bKash and cash tracking. Start for free with our pay-per-order plan.",
};

const CONFIG: SectorConfig = {
  theme: "rose",
  heroImage: IMAGES.rtHero,
  ctaImage: IMAGES.rtCta,
  plansBackground: "/images/pattern-rose-light.svg",

  hero: {
    title: "QR menus and online ordering for restaurants and food carts",
    body: "Let customers scan, order and pay from their own phone, whether they are at a table, walking past your cart, or ordering ahead. See every order on one screen and every taka in one daily summary. Start for free and pay only a small fee per order.",
  },

  sample: {
    caption: "Sample order, Cart Plan",
    badge: "Paid via bKash",
    itemLabel: "2 beef burgers + 1 fries",
    itemAmount: "৳750",
    feeLabel: "Our fee for this order (3%)",
    feeAmount: "৳23",
    keepLabel: "You keep",
    keepAmount: "৳727",
    note: "No order, no fee. Set-up costs you nothing.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "The same full system on every plan. The plans only differ in how you pay and whether you get your own custom domain.",
    items: [
      {
        icon: QrCode,
        title: "QR menu & ordering",
        body: "Print one QR code for your tables, counter or cart. Customers scan it, see your menu with photos and prices, and order from their phone.",
        points: [
          "One QR code, no app to install",
          "Dine-in, takeaway and pre-order in one menu",
          "Mark a dish as sold out in one tap",
        ],
      },
      {
        icon: ReceiptText,
        title: "Live order screen",
        body: "Every order appears on a screen at your counter or kitchen, so nothing is forgotten and nobody shouts across the room.",
        points: [
          "New, preparing, ready and served",
          "Table number or pickup name on each order",
          "Works on any phone, tablet or laptop",
        ],
      },
      {
        icon: BarChart3,
        title: "Sales & payment tracking",
        body: "Know what sold, when you were busiest, and which payments are bKash and which are cash, without counting slips at night.",
        points: [
          "Top dishes and peak hours",
          "bKash and cash in one daily summary",
          "Regular customers and their favourite items",
        ],
      },
    ],
  },

  stepsTitle: "From first scan to first order",
  steps: [
    {
      title: "We build your menu",
      body: "Send us your dishes, prices, photos and opening hours. We build your online menu and set up your ordering system.",
    },
    {
      title: "Print your QR code",
      body: "We give you a ready-to-print QR code for your tables, counter or cart, and a link for Facebook and WhatsApp.",
    },
    {
      title: "Customers scan and order",
      body: "Orders appear on your live screen with the table number or pickup name, ready for your kitchen to cook.",
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
    featuredBadge: "Best for busy places",
    tiers: [
      {
        name: "Cart Plan",
        image: IMAGES.rtCart,
        price: "৳0",
        unit: "/mo",
        highlight: "Pay as you go",
        description:
          "Zero risk to start. You only pay when customers order through your QR menu or website.",
        features: [
          "3% fee on direct QR and website orders",
          "Pay only for active usage or extra features",
          "Full order screen & sales summary",
          "No fixed monthly fees",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Counter Plan",
        image: IMAGES.rtCounter,
        price: "৳500",
        unit: "/mo",
        highlight: "Zero setup fee & Data ownership",
        description:
          "The smartest choice once you are busy every day. Stop paying per order and eventually just pay for basic hosting.",
        features: [
          "0% fee on all orders",
          "Cost drops to ৳200/mo over time",
          "Option to export code & database",
          "Free custom Matra subdomain",
        ],
        cta: "Choose Counter",
        featured: true,
      },
      {
        name: "Chef's Table Plan",
        image: IMAGES.rtChefsTable,
        price: "৳1,000",
        unit: "/mo",
        highlight: "Custom domain",
        description:
          "Premium branding. A ৳2,000 one-time setup fee gets your restaurant its own web address.",
        features: [
          "Your own domain (yourrestaurant.com)",
          "Yearly domain renewal applies",
          "Cost drops over time like Counter",
          "Everything in Counter",
        ],
        cta: "Choose Chef's Table",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your place?",
    guide: [
      {
        lead: "Just starting out or running a cart?",
        text: "Our Cart plan costs nothing upfront. You only pay a 3% fee on direct QR and website orders.",
      },
      {
        lead: "Busy every day?",
        text: "The Counter plan charges a flat ৳500/month (which drops to ৳200 over time). You pay 0% fee and even own your database.",
      },
      {
        lead: "Building a brand?",
        text: "Upgrade to the Chef's Table plan to get your own web address with a small one-time setup fee.",
      },
    ],
  },

  faq: {
    title: "Questions restaurant owners ask",
    items: [
      {
        q: "Is it really free to start?",
        a: "Yes. Setting up your menu and ordering system costs nothing, and our base plan has no fixed monthly fee. You only pay a 3% fee on direct QR and website orders.",
      },
      {
        q: "Does it work for a small food cart?",
        a: "Yes. A cart only needs a printed QR code and a phone to see the orders. Customers can also pre-order from your link and just collect when it is ready.",
      },
      {
        q: "Do my customers need to install an app?",
        a: "No. They scan the QR code with their phone camera and your menu opens in the browser.",
      },
      {
        q: "Can customers still pay cash?",
        a: "Yes. Each order records whether it is paid by bKash or cash, so your daily summary always adds up.",
      },
      {
        q: "How is this different from the Cloud Kitchens page?",
        a: "Cloud kitchens sell only through delivery. This is for places where customers come to you, at a table, a counter or a cart, though takeaway and pre-orders are included too.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes. Many places begin on the pay-as-you-go plan and move to our flat Counter plan once they want 0% fees and complete data ownership.",
      },
      {
        q: "Do I need technical skills?",
        a: "No. We build the menu and set up the order screen for you. You only update your dishes and prices.",
      },
    ],
  },

  cta: {
    title: "Tell us about your restaurant or cart",
    body: "Send us a message and we will set up your QR menu and ordering system for free. You pay nothing until your first order.",
  },
};

export default function RestaurantPage() {
  return <SectorPage config={CONFIG} />;
}
