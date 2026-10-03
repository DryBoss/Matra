import { Globe, BarChart3, WalletCards } from "lucide-react";

export const BRAND = "Matra";

export const CONTACT = {
  email: "hello@matra.com",
  phone: "+880 1XXX-XXXXXX",
  whatsappHref: "https://wa.me/8801XXXXXXXXX",
  location: "Chattogram, Bangladesh",
};

export const FEATURES = [
  {
    icon: Globe,
    title: "Custom booking website",
    body: "Give players a professional, easy-to-use website to view open slots and book instantly.",
    points: [
      "Players book online from any device",
      "Automated booking, no phone calls",
      "No double-bookings or messy notebooks",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM & Analytics",
    body: "Automatically save player profiles and track your turf's performance with built-in analytics tools.",
    points: [
      "Track peak hours and popular slots",
      "View each customer's past bookings",
      "Spot and reward your frequent teams",
    ],
  },
  {
    icon: WalletCards,
    title: "bKash tracking",
    body: "Keep track of revenue effortlessly. See exactly which bookings are paid or pending.",
    points: [
      "Paid and pending bookings in one list",
      "Daily earnings visible at a glance",
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
    highlight: "Pay as you go",
    description:
      "Zero risk to start. You only pay when the platform is actively used.",
    features: [
      "5% fee on direct website orders",
      "Pay only for active usage or extra features",
      "Full CRM & Analytics access",
      "No fixed monthly fees",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Pro League Plan",
    imageKey: "proLeague" as const,
    price: "৳500",
    unit: "/mo",
    highlight: "Zero setup fee & Data ownership",
    description:
      "The smartest choice. Stop paying commissions and eventually just pay for basic hosting.",
    features: [
      "0% commission on all bookings",
      "Cost drops to ৳200/mo over time",
      "Option to export code & database",
      "Free custom Matra subdomain",
    ],
    cta: "Choose Pro League",
    featured: true,
  },
  {
    name: "Champions Plan",
    imageKey: "champions" as const,
    price: "৳1,000",
    unit: "/mo",
    highlight: "Custom domain",
    description:
      "Premium branding. A ৳2,000 one-time setup fee gets your turf its own web address.",
    features: [
      "Your own domain (yourturf.com)",
      "Yearly domain renewal applies",
      "Cost drops over time like Pro League",
      "Everything in Pro League",
    ],
    cta: "Choose Champions",
    featured: false,
  },
];

// Placeholder testimonials. Replace with real quotes before launch.
export const TESTIMONIALS = [
  {
    quote:
      "I didn't have to pay anything to get started. My custom website was live in days, and I stopped writing slots in my notebook.",
    name: "Rafiq Ahmed",
    role: "Turf Manager, Chattogram",
  },
  {
    quote:
      "I was worried about fixed costs. Here I only paid when someone actually booked online. After a few months I moved to the flat plan.",
    name: "Nusrat Jahan",
    role: "Turf Owner, Chattogram",
  },
  {
    quote:
      "My staff learned it in one afternoon. The analytics dashboard shows every bKash payment without us manually checking.",
    name: "Imran Hossain",
    role: "Turf Manager, Dhaka",
  },
];
