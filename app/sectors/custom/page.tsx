import type { Metadata } from "next";
import { BarChart3, Puzzle, Workflow } from "lucide-react";
import SectorPage, { type SectorConfig } from "../../components/SectorPage";
import { IMAGES } from "../../lib/images";

export const metadata: Metadata = {
  title: "Custom Solutions | Matra",
  description:
    "Does your work not fit a ready-made page? We build a custom website, database or automation around how your business runs. Start with a free first version and pay as it earns.",
};

const CONFIG: SectorConfig = {
  theme: "cyan",
  heroImage: IMAGES.cuHero,
  ctaImage: IMAGES.cuCta,
  plansBackground: "/images/pattern-cyan-light.svg",

  hero: {
    title: "Software built around the way you work",
    body: "Clinics, tuition centres, gyms, salons, shops, schools and small organisations: if your work does not fit a ready-made page, we build the website, database or automation you actually need. We build a first version for free, and you pay as it starts earning.",
  },

  sample: {
    caption: "Sample project, Blueprint Plan",
    badge: "Paid via bKash",
    itemLabel: "Clinic appointment fee",
    itemAmount: "৳500",
    feeLabel: "Agreed fee per booking (3%)",
    feeAmount: "৳15",
    keepLabel: "You keep",
    keepAmount: "৳485",
    note: "The fee is agreed with you first. No usage, no fee.",
  },

  features: {
    title: "What we build for you",
    intro:
      "Every project is different, but each one starts the same way: we learn how you work, then build only what you need.",
    items: [
      {
        icon: Puzzle,
        title: "Built around your workflow",
        body: "We start by listening. Then we build a website or system that matches how you already work, instead of making you change.",
        points: [
          "Booking, appointments, admissions, memberships and more",
          "Your branding, your language, your rules",
          "Works on any phone, tablet or laptop",
        ],
      },
      {
        icon: Workflow,
        title: "Automation & database",
        body: "Replace notebooks, spreadsheets and repeated messages with a proper database and automatic steps.",
        points: [
          "Customer, student, patient or member records in one place",
          "Automatic reminders, receipts and status updates",
          "Staff accounts with simple permissions",
        ],
      },
      {
        icon: BarChart3,
        title: "Data analysis & reports",
        body: "Turn your records into clear numbers, so you can see what is working and decide what to do next.",
        points: [
          "Dashboards for daily, weekly and monthly numbers",
          "Payment and bKash tracking where you need it",
          "Reports you can download and share",
        ],
      },
    ],
  },

  stepsTitle: "From first idea to first result",
  steps: [
    {
      title: "Tell us how you work",
      body: "Message us about your business, what takes up your time, and what you wish was easier. A short chat is enough.",
    },
    {
      title: "We plan it with you",
      body: "We suggest what to build first, keep it small and useful, and agree on how you will pay before we begin.",
    },
    {
      title: "We build a first version",
      body: "You get a working first version for free, so you can try it with real customers before you commit to anything.",
    },
    {
      title: "Grow it step by step",
      body: "Add features as you need them, and move to a flat plan when it works out cheaper than paying per use.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start with a free first version and pay as it earns. Move to a flat monthly price when your system is busy and it works out cheaper.",
    featuredBadge: "Best for most projects",
    tiers: [
      {
        name: "Blueprint Plan",
        image: IMAGES.cuBlueprint,
        price: "৳0",
        unit: "/mo",
        highlight: "Free first version",
        description:
          "Zero risk to start. We plan and build a first working version, and you pay only a small agreed fee when it is used.",
        features: [
          "Free planning call and first version",
          "Small fee per use, agreed before we start",
          "Hosting on a Matra subdomain",
          "No fixed monthly fees",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Builder Plan",
        image: IMAGES.cuBuilder,
        price: "৳1,500",
        unit: "/mo",
        highlight: "From, depending on scope",
        description:
          "For systems that are in daily use. Pay one flat price and stop paying per use, with the exact amount agreed up front.",
        features: [
          "0% fee on everything you earn through it",
          "Cost drops over time as the build is paid off",
          "Option to export code & database",
          "Free updates and small changes",
        ],
        cta: "Choose Builder",
        featured: true,
      },
      {
        name: "Partner Plan",
        image: IMAGES.cuPartner,
        price: "Let's talk",
        unit: "",
        highlight: "Custom domain & priority",
        description:
          "For larger or growing businesses. Your own domain, bigger projects, and a team that builds new features with you.",
        features: [
          "Your own domain (yourbusiness.com)",
          "Priority support and faster changes",
          "Larger features and integrations",
          "Everything in Builder",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits your project?",
    guide: [
      {
        lead: "Not sure what you need yet?",
        text: "Start on Blueprint. We plan it with you and build a first version for free.",
      },
      {
        lead: "Already using it every day?",
        text: "Builder gives you a flat monthly price, 0% fees and the option to take your code and database with you.",
      },
      {
        lead: "Growing fast?",
        text: "Partner adds your own domain, priority support and larger features. We agree the price together.",
      },
    ],
  },

  faq: {
    title: "Questions people ask",
    items: [
      {
        q: "What kind of things can you build?",
        a: "Booking and appointment systems, student or member management, order and inventory tools, simple CRMs, dashboards and reports, and automations that remove repeated work. If it can run in a browser, we can usually build it.",
      },
      {
        q: "Is the first version really free?",
        a: "Yes. We build a first working version at no cost, and agree how you will pay before we start. On the Blueprint plan you only pay a small fee when it is actually used.",
      },
      {
        q: "How do you decide the price?",
        a: "We look at what you need and agree on a plan together before building. You will never be surprised by a bill, and you can switch to a flat monthly price once it makes sense.",
      },
      {
        q: "Who owns the system?",
        a: "On the Builder and Partner plans you can take your code and database with you. On Blueprint, we host and run it for you.",
      },
      {
        q: "My work is already covered by another page. Should I use that one?",
        a: "Yes, if one of the other pages matches your work, it is the quickest way to start. Choose Custom when you need something different, or something extra on top.",
      },
      {
        q: "Do I need technical skills?",
        a: "No. You explain how your work runs in plain words, and we handle the technical side.",
      },
    ],
  },

  cta: {
    title: "Tell us what you need",
    body: "Send us a message about your work and we will suggest what to build first. Your first version is free.",
  },
};

export default function CustomPage() {
  return <SectorPage config={CONFIG} />;
}
