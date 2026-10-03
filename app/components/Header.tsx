import Link from "next/link";
import { BRAND } from "../lib/content";
import { headingStyle } from "../lib/styles";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
          style={headingStyle}
        >
          {BRAND}
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-3">
          <Link
            href="/#sectors"
            className="hidden rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 sm:inline-block"
          >
            Solutions
          </Link>
          <Link
            href="/#reviews"
            className="hidden rounded-full px-3 py-2 text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 sm:inline-block"
          >
            Reviews
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-emerald-500 px-4 py-2 font-medium text-slate-950 transition-colors hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
