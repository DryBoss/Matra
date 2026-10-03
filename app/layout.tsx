import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hind_Siliguri } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

/* Bricolage Grotesque for headings, Hind Siliguri for body (it also covers
   Bengali script and the ৳ sign, so prices render correctly everywhere). */
const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matra | Free websites and software for local businesses and creators in Bangladesh",
  description:
    "We build your digital system for free. You pay only when you make money. Online booking, ordering, CRM and bKash tracking for sports turfs, F-commerce sellers, cloud kitchens, restaurants and food carts, personal portfolio websites, and custom-built solutions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} min-h-screen bg-slate-50 text-slate-800 antialiased`}
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
