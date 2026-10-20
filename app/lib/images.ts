/**
 * To use a real photo instead of the illustration, drop it into
 * /public/images/fcommerce/ with the file name below. It replaces the
 * illustration automatically.
 */
export type Slot = { photo: string; fallback: string };

export const IMAGES = {
  hero: { photo: "/images/fcommerce/hero.jpg", fallback: "/images/hero-fcommerce.svg" },
  launch: { photo: "/images/fcommerce/launch.jpg", fallback: "/images/tier-launch.svg" },
  scale: { photo: "/images/fcommerce/scale.jpg", fallback: "/images/tier-scale.svg" },
  brand: { photo: "/images/fcommerce/brand.jpg", fallback: "/images/tier-brand.svg" },
} as const;

/** Phones get a still copy of each illustration (in /images/static/) to keep scrolling smooth. */
export function stillArt(path: string) {
  return path.replace("/images/", "/images/static/");
}

/** Two stacked backgrounds: the photo on top, the fallback art underneath. */
export function layeredBg(slot: Slot): React.CSSProperties {
  return {
    backgroundImage: `url(${slot.photo}), url(${slot.fallback})`,
    ["--bg-static" as string]: `url(${slot.photo}), url(${stillArt(slot.fallback)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}
