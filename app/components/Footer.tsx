import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, CONTACT } from "../lib/content";
import { headingStyle } from "../lib/styles";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_0.6fr]">
          <div>
            <p
              className="text-xl font-semibold text-white"
              style={headingStyle}
            >
              {BRAND}
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-slate-400">
              Free websites and software for local businesses and creators in Bangladesh. You pay only
              when you earn.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Contact us</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <Mail className="h-4 w-4 text-emerald-400" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s|-/g, "")}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <Phone className="h-4 w-4 text-emerald-400" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <MessageCircle
                    className="h-4 w-4 text-emerald-400"
                    aria-hidden
                  />
                  Message us on WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400" aria-hidden />
                {CONTACT.location}
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Explore</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Solutions", href: "/#sectors" },
                { label: "Sports Turfs", href: "/sectors/turf" },
                { label: "F-Commerce", href: "/sectors/f-commerce" },
                { label: "Cloud Kitchens", href: "/sectors/cloud-kitchen" },
                { label: "Restaurants & Food Carts", href: "/sectors/restaurant" },
                { label: "Portfolio Websites", href: "/sectors/portfolio" },
                { label: "Reviews", href: "/#reviews" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
