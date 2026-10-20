/** F-commerce uses the blue theme. Classes are spelled out in full so Tailwind can see them. */
export const THEMES = {
  blue: {
    heroBg: "bg-blue-950",
    outline: "focus-visible:outline-blue-300",
    outlineDark: "focus-visible:outline-blue-400",
    outlineLight: "focus-visible:outline-blue-600",
    btn: "bg-blue-500 text-slate-950 hover:bg-blue-400",
    iconBox: "bg-blue-100 text-blue-700",
    check: "text-blue-600",
    checkDark: "text-blue-400",
    step: "bg-blue-600",
    featuredRing: "ring-blue-500",
    featuredBadge: "bg-blue-500 text-slate-950",
    chip: "bg-blue-50 text-blue-700",
    chipDark: "bg-blue-500/15 text-blue-300",
    liveBadge: "bg-blue-500/15 text-blue-300",
    ping: "bg-blue-400",
    keep: "text-blue-400",
  },
} as const;

export type ThemeKey = keyof typeof THEMES;
