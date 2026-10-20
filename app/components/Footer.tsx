import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, CONTACT, waLink } from "../lib/content";
import { headingStyle } from "../lib/styles";

const LINK =
  "inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xl font-semibold text-white" style={headingStyle}>
              {BRAND}
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-slate-400">
              Online stores for Facebook sellers in Bangladesh. Start free, pay only when you sell.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Contact us</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  <MessageCircle className="h-4 w-4 text-blue-400" aria-hidden />
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={LINK}>
                  <Mail className="h-4 w-4 text-blue-400" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s|-/g, "")}`} className={LINK}>
                  <Phone className="h-4 w-4 text-blue-400" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400" aria-hidden />
                {CONTACT.location}
              </li>
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
