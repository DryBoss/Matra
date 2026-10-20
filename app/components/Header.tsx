import { BRAND } from "../lib/content";
import { headingStyle } from "../lib/styles";

const LINKS = [
  { label: "What you get", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          style={headingStyle}
        >
          {BRAND}
        </a>
        <nav className="flex items-center gap-1 text-sm sm:gap-3">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hidden rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 sm:inline-block"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-4 py-2 font-medium text-slate-950 transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
