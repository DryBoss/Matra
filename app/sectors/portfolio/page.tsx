import type { Metadata } from "next";
import { BarChart3, Inbox, Palette } from "lucide-react";
import SectorPage, { type SectorConfig } from "../../components/SectorPage";
import { IMAGES } from "../../lib/images";

export const metadata: Metadata = {
  title: "Portfolio Websites | Matra",
  description:
    "Get a custom portfolio website that shows your work, collects client enquiries and tracks your visitors. Start for free with a Matra subdomain and upgrade to your own domain when you are ready.",
};

const CONFIG: SectorConfig = {
  theme: "violet",
  heroImage: IMAGES.pfHero,
  ctaImage: IMAGES.pfCta,
  plansBackground: "/images/pattern-violet-light.svg",

  hero: {
    title: "A portfolio website that gets you hired",
    body: "Designers, developers, photographers, students and freelancers: show your best work on a fast, professional website, let clients message you directly, and see who is visiting. Get live for free and upgrade when you are ready.",
  },

  sample: {
    caption: "Sample month, Draft Plan",
    badge: "Site is live",
    itemLabel: "Website build & set-up",
    itemAmount: "৳0",
    feeLabel: "Hosting on a Matra subdomain",
    feeAmount: "৳0",
    feePrefix: "",
    keepLabel: "You pay",
    keepAmount: "৳0",
    note: "Get online first. Upgrade only when you want your own domain.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "The same full website on every plan. The plans only differ in how it is hosted and whether you get your own custom domain.",
    items: [
      {
        icon: Palette,
        title: "Your work, beautifully shown",
        body: "A clean website designed around your projects, so visitors see your best work in the first few seconds.",
        points: [
          "Project pages with photos, links and short case studies",
          "About, skills, experience and a downloadable CV",
          "Looks great on phones, tablets and laptops",
        ],
      },
      {
        icon: Inbox,
        title: "Client enquiries in one place",
        body: "Visitors can message you straight from the site, and every enquiry is saved so no opportunity gets lost.",
        points: [
          "Contact form with email and WhatsApp buttons",
          "Every message saved in one inbox",
          "Links to your LinkedIn, GitHub, Behance or Instagram",
        ],
      },
      {
        icon: BarChart3,
        title: "Visitor analytics",
        body: "See which projects people open and where your visitors come from, so you know what is working.",
        points: [
          "Visits, top projects and traffic sources",
          "See which link or post brought each visitor",
          "Simple monthly summary, no tools to learn",
        ],
      },
    ],
  },

  stepsTitle: "From first idea to first enquiry",
  steps: [
    {
      title: "Tell us about you",
      body: "Send us your best projects, your story, your CV and the links you want to show. Tell us the style you like.",
    },
    {
      title: "We build your website",
      body: "We design and build your portfolio, set up hosting and put it live on a free Matra subdomain.",
    },
    {
      title: "Share it everywhere",
      body: "Add the link to your CV, LinkedIn, GitHub and Facebook. Clients find your work and message you directly.",
    },
    {
      title: "Upgrade when ready",
      body: "Keep the free plan as long as you like. Move to a flat plan for a cleaner site, your own code, or your own domain.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Go live for free. Upgrade to a flat monthly price when you want to remove our credit or use your own domain.",
    featuredBadge: "Best for freelancers",
    tiers: [
      {
        name: "Draft Plan",
        image: IMAGES.pfDraft,
        price: "৳0",
        unit: "/mo",
        highlight: "Free to start",
        description:
          "Zero risk to start. Get your portfolio live at no cost and see how it works for you.",
        features: [
          "Free custom Matra subdomain",
          "Small \"Built by Matra\" credit in the footer",
          "Project pages, contact form & enquiry inbox",
          "No fixed monthly fees",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Showcase Plan",
        image: IMAGES.pfShowcase,
        price: "৳300",
        unit: "/mo",
        highlight: "Zero setup fee & Data ownership",
        description:
          "The smartest choice once you start getting clients. A cleaner site that you fully own.",
        features: [
          "No Matra credit on your site",
          "Visitor analytics included",
          "Cost drops to ৳150/mo over time",
          "Option to export code & database",
        ],
        cta: "Choose Showcase",
        featured: true,
      },
      {
        name: "Signature Plan",
        image: IMAGES.pfSignature,
        price: "৳600",
        unit: "/mo",
        highlight: "Custom domain",
        description:
          "Premium branding. A ৳2,000 one-time setup fee gets your name its own web address.",
        features: [
          "Your own domain (yourname.com)",
          "Yearly domain renewal applies",
          "Cost drops over time like Showcase",
          "Everything in Showcase",
        ],
        cta: "Choose Signature",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits you?",
    guide: [
      {
        lead: "Just getting started?",
        text: "Our Draft plan costs nothing. You get a live portfolio on a Matra subdomain, with a small credit in the footer.",
      },
      {
        lead: "Starting to land clients?",
        text: "The Showcase plan is a flat ৳300/month (dropping to ৳150 over time). The credit is removed, you get analytics, and you own your code and database.",
      },
      {
        lead: "Building a personal brand?",
        text: "Upgrade to the Signature plan to get your own web address with a small one-time setup fee.",
      },
    ],
  },

  faq: {
    title: "Questions people ask",
    items: [
      {
        q: "Is it really free to start?",
        a: "Yes. Building and launching your portfolio on a Matra subdomain costs nothing, and the Draft plan has no monthly fee.",
      },
      {
        q: "Who is this for?",
        a: "Anyone who needs to show their work online: designers, developers, photographers, writers, video editors, architects, students and freelancers.",
      },
      {
        q: "Why not use a free website builder?",
        a: "Builders give you a template that you do everything inside yourself. We design and build the site for you, and it is fast, mobile-friendly and made around your projects. With the Showcase plan you can also take the code with you.",
      },
      {
        q: "Can I update my projects later?",
        a: "Yes. Send us new work any time and we add it. We can also set things up so you can add projects yourself.",
      },
      {
        q: "Can I use my own domain?",
        a: "Yes, on the Signature plan. You pay a small one-time setup fee, and the yearly domain renewal goes to the domain registrar.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes. Most people begin on Draft and move to Showcase or Signature when they want a cleaner site or their own domain.",
      },
      {
        q: "Do I need technical skills?",
        a: "No. We build and host everything for you. You only send us your work and watch the enquiries come in.",
      },
    ],
  },

  cta: {
    title: "Tell us about your work",
    body: "Send us a message and we will build your portfolio website for free. You pay nothing to go live.",
  },
};

export default function PortfolioPage() {
  return <SectorPage config={CONFIG} />;
}
