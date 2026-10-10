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

  launch: {
    caption: "Launch kit, Cart Plan",
    badge: "Menu is live",
    items: [
      "QR code ready to print",
      "Menu with photos and prices",
      "Live order screen for your counter",
      "bKash and cash in one daily summary",
    ],
    note: "Set-up costs you nothing. You pay only per order.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "Every plan runs on the same system. The free plan uses our standard design and has editing limits. The paid plans unlock full editing, customization and your own branding.",
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
      title: "Start free, then own it",
      body: "Start on the free plan with our standard design. Move to Counter and pay the website off with a monthly fee, then keep it for hosting only.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start free on our standard design. When you want the website to be truly yours, pay it off with a monthly fee, and it drops to hosting only once it is covered.",
    featuredBadge: "Best for busy places",
    tiers: [
      {
        name: "Cart Plan",
        image: IMAGES.rtCart,
        price: "৳0",
        unit: "/mo",
        highlight: "Free forever",
        description:
          "Zero risk to start. Go live on our standard design and pay only when customers use it.",
        features: [
          "3% fee on direct QR and website orders",
          "Standard Matra design with a \"Powered by Matra\" credit",
          "Edit text and prices, up to 15 menu items and 5 photos in the app",
          "Full order screen & sales summary",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Counter Plan",
        image: IMAGES.rtCounter,
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
        cta: "Choose Counter",
        featured: true,
      },
      {
        name: "Chef's Table Plan",
        image: IMAGES.rtChefsTable,
        price: "৳1,000+",
        unit: "/mo",
        highlight: "Custom design",
        description:
          "For larger or growing businesses that want a design and features made just for them. The price depends on what we agree to build.",
        features: [
          "Fully custom design and extra features",
          "Deposit of 20 to 30%, the rest paid off through the monthly fee",
          "Priority support and faster changes",
          "Everything in Counter",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your place?",
    guide: [
      {
        lead: "Just starting out?",
        text: "Our Cart plan costs nothing upfront. You get our standard design, edit the basics in the app, and pay only a 3% fee on direct QR and website orders.",
      },
      {
        lead: "Ready to make it yours?",
        text: "Counter lets you customize the look, edit everything in the app and remove our credit. The website price is agreed up front, depends on your site, and is paid off through the monthly fee, with no per-order fee, then you only pay for hosting.",
      },
      {
        lead: "Need something special?",
        text: "Chef's Table gets you a fully custom design and extra features. We agree the price and a small deposit first, and the rest is paid off through the monthly fee.",
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
        q: "What are the limits of the free plan?",
        a: "The free plan uses our standard design with a small Matra credit, and you can edit text, prices and up to 15 menu items and 5 photos in the app. Counter removes those limits.",
      },
      {
        q: "What does \"pay it off\" mean?",
        a: "On Counter and Chef's Table the website has a price that depends on the site you need, so a portfolio costs less than a full business system. We agree it with you before we start. Your monthly fee counts toward it until it is covered. Once it is paid off you only pay for hosting, and you can take your code and database with you.",
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
        a: "Yes. Most places begin on Cart and move to Counter when they want full editing, their own branding and no per-order fees. Chef's Table is there if you want a custom design.",
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
