/**
 * Social proof for the "Trusted by Facebook sellers" section.
 *
 * Add REAL quotes, numbers and pages here (and delete the samples).
 * Entries marked `placeholder: true` are samples: they show only in
 * `npm run dev`, never on the live site. If no real entries exist, the whole
 * section stays hidden in production.
 */
export const SHOW_SAMPLES = process.env.NODE_ENV !== "production";

export type Quote = { quote: string; name: string; page: string; placeholder?: boolean };
export type Metric = { value: string; label: string; placeholder?: boolean };
export type FbPage = { name: string; url?: string; logo?: string; placeholder?: boolean };

export const QUOTES: Quote[] = [
  {
    quote: "Sample quote: replace this with what a real seller told you.",
    name: "Seller name",
    page: "Their Facebook page",
    placeholder: true,
  },
];

export const METRICS: Metric[] = [
  { value: "00", label: "stores live (sample number)", placeholder: true },
  { value: "000", label: "orders handled (sample number)", placeholder: true },
  { value: "৳0", label: "sales processed (sample number)", placeholder: true },
];

/** Pages using the platform. `logo` is a path in /public, e.g. "/images/pages/rina.png". */
export const PAGES: FbPage[] = [
  { name: "Sample Page One", placeholder: true },
  { name: "Sample Page Two", placeholder: true },
  { name: "Sample Page Three", placeholder: true },
];
