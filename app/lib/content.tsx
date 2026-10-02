import { MessageCircle, UsersRound, WalletCards } from "lucide-react";

export const BRAND = "Matra";

export const CONTACT = {
  email: "hello@matra.com",
  phone: "+880 1XXX-XXXXXX",
  whatsappHref: "https://wa.me/8801XXXXXXXXX",
  location: "Chattogram, Bangladesh",
};

export const FEATURES = [
  {
    icon: MessageCircle,
    title: "WhatsApp booking",
    body: "Customers book a slot by sending a message. No app to install and no account to create.",
    points: [
      "Players book in a chat they already use",
      "No sign-up form, no password",
      "Fewer phone calls and notebook entries",
    ],
  },
  {
    icon: UsersRound,
    title: "Built-in CRM",
    body: "Every player and team is saved with their booking history, so regulars are easy to find and reward.",
    points: [
      "See each customer's past bookings",
      "Spot your most frequent teams",
      "Know who to contact for empty slots",
    ],
  },
  {
    icon: WalletCards,
    title: "bKash tracking",
    body: "See which bookings are paid, which are pending, and what you earned today.",
    points: [
      "Paid and pending bookings in one list",
      "Daily earnings at a glance",
      "Clean records at the end of the month",
    ],
  },
];

export const TIERS = [
  {
    name: "Kickoff Plan",
    imageKey: "kickoff" as const,
    price: "৳0",
    unit: "/mo",
    highlight: "৳30 per booking",
    description: "Start with no risk. You pay only when a booking comes in.",
    features: [
      "WhatsApp booking",
      "CRM for players and teams",
      "bKash payment tracking",
      "No monthly fee",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Pro League Plan",
    imageKey: "proLeague" as const,
    price: "৳1,499",
    unit: "/mo",
    highlight: "0% commission",
    description:
      "A flat fee for turfs with steady bookings. Keep every taka you earn.",
    features: [
      "Everything in Kickoff",
      "No per-booking fee",
      "Predictable monthly cost",
    ],
    cta: "Choose Pro League",
    featured: true,
  },
  {
    name: "Champions Plan",
    imageKey: "champions" as const,
    price: "৳3,999",
    unit: "/mo",
    highlight: "Custom domain",
    description: "Your turf, under your own web address.",
    features: [
      "Everything in Pro League",
      "Your own domain (yourturf.com)",
      "Your branding on the booking page",
    ],
    cta: "Choose Champions",
    featured: false,
  },
];

// Placeholder testimonials. Replace with real quotes before launch.
export const TESTIMONIALS = [
  {
    quote:
      "I didn't have to pay anything to get started. The first week, bookings came in over WhatsApp and I stopped writing slots in my notebook.",
    name: "Rafiq Ahmed",
    role: "Turf Manager, Chattogram",
  },
  {
    quote:
      "I was worried about hidden costs. Here I only paid when someone actually booked. After a few months I moved to the flat plan.",
    name: "Nusrat Jahan",
    role: "Turf Owner, Chattogram",
  },
  {
    quote:
      "My staff learned it in one afternoon. I can see every bKash payment without calling anyone to check.",
    name: "Imran Hossain",
    role: "Turf Manager, Dhaka",
  },
];
