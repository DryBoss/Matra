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

  launch: {
    caption: "Launch kit, Draft Plan",
    badge: "Site is live",
    items: [
      "Your work, shown professionally",
      "Client enquiry form",
      "Visitor stats",
      "Free Matra subdomain",
    ],
    note: "Get online first. Upgrade only when you want your own domain.",
  },

  features: {
    title: "Included in every plan",
    intro:
      "Every plan runs on the same system. The free plan uses our standard design and has editing limits. The paid plans unlock full editing, customization and your own branding.",
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
      body: "Keep the free plan as long as you like. Move to Showcase to remove our credit, customize your site and pay it off over time.",
    },
  ],

  plans: {
    title: "Flexible pricing",
    intro:
      "Start free on our standard design. When you want the website to be truly yours, pay it off with a monthly fee, and it drops to hosting only once it is covered.",
    featuredBadge: "Best for freelancers",
    tiers: [
      {
        name: "Draft Plan",
        image: IMAGES.pfDraft,
        price: "৳0",
        unit: "/mo",
        highlight: "Free forever",
        description:
          "Zero risk to start. Get your portfolio live at no cost, on our standard design.",
        features: [
          "Free Matra subdomain",
          "Standard Matra design with a \"Built by Matra\" credit",
          "Edit text and up to 3 projects in the app",
          "Project pages, contact form & enquiry inbox",
        ],
        cta: "Start for free",
        featured: false,
      },
      {
        name: "Showcase Plan",
        image: IMAGES.pfShowcase,
        price: "৳300",
        unit: "/mo",
        highlight: "Pay it off over time",
        description:
          "Your site, on easy terms. The website price depends on what you need, and what you pay counts toward it until it is paid off.",
        features: [
          "Website price is agreed up front and paid off through the monthly fee",
          "Light customization: pick a layout, your logo, colours and sections",
          "Unlimited content editing in the app, no Matra credit",
          "Your own domain (yearly renewal applies)",
          "After it is paid off: hosting only (৳150/mo) and optional code & database export",
        ],
        cta: "Choose Showcase",
        featured: true,
      },
      {
        name: "Signature Plan",
        image: IMAGES.pfSignature,
        price: "৳600+",
        unit: "/mo",
        highlight: "Custom design",
        description:
          "For larger or growing businesses that want a design and features made just for them. The price depends on what we agree to build.",
        features: [
          "Fully custom design and extra features",
          "Deposit of 20 to 30%, the rest paid off through the monthly fee",
          "Priority support and faster changes",
          "Everything in Showcase",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    guideTitle: "Which plan fits you?",
    guide: [
      {
        lead: "Just starting out?",
        text: "Our Draft plan costs nothing. You get a live portfolio on a Matra subdomain with our standard design, a small credit in the footer, and basic editing in the app.",
      },
      {
        lead: "Ready to make it yours?",
        text: "The Showcase plan lets you customize the look, edit everything in the app and remove our credit. The website price is agreed up front and depends on your site. It is paid off through the monthly fee, then you only pay hosting.",
      },
      {
        lead: "Need something special?",
        text: "Signature gets you a fully custom design and extra features. We agree the price and a small deposit first, and the rest is paid off through the monthly fee.",
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
        q: "What are the limits of the free plan?",
        a: "The free plan uses our standard design with a small Matra credit, and you can edit text, prices and up to 3 projects in the app. Showcase removes those limits.",
      },
      {
        q: "What does \"pay it off\" mean?",
        a: "On Showcase and Signature the website has a price that depends on the site you need, so a portfolio costs less than a full business system. We agree it with you before we start. Your monthly fee counts toward it until it is covered. Once it is paid off you only pay for hosting, and you can take your code and database with you.",
      },
      {
        q: "Who is this for?",
        a: "Anyone who needs to show their work online: designers, developers, photographers, writers, video editors, architects, students and freelancers.",
      },
      {
        q: "Why not use a free website builder?",
        a: "Builders give you a template that you do everything inside yourself. We design and build the site for you, and it is fast, mobile-friendly and made around your projects. Once Showcase is paid off you can also take the code with you.",
      },
      {
        q: "Can I update my projects later?",
        a: "Yes. On Draft you can edit text and add up to 3 projects yourself in the app. Showcase removes that limit, and you can always send us new work to add.",
      },
      {
        q: "Can I use my own domain?",
        a: "Yes, on the Showcase plan or higher. The yearly domain renewal goes to the domain registrar.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes. Most people begin on Draft and move to Showcase when they want full editing, their own branding and no per-order fees. Signature is there if you want a custom design.",
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
