/**
 * Photo slots for the turf page.
 *
 * The pages use the illustrations in /public/images/ by default. To swap in a
 * real photo, drop it into /public/images/turf/ using these file names; it
 * then replaces the illustration automatically. To use .webp or .png, change the extension here.
 */
export const IMAGES = {
  turfHero: {
    photo: "/images/turf/hero.jpg",
    fallback: "/images/hero-night-turf.svg",
  },
  turfCta: {
    photo: "/images/turf/hero.jpg",
    fallback: "/images/turf-topdown.svg",
  },
  kickoff: {
    photo: "/images/turf/kickoff.jpg",
    fallback: "/images/tier-kickoff.svg",
  },
  proLeague: {
    photo: "/images/turf/pro-league.jpg",
    fallback: "/images/tier-pro-league.svg",
  },
  champions: {
    photo: "/images/turf/champions.jpg",
    fallback: "/images/tier-champions.svg",
  },
} as const;

/** Fixed illustration for each "Coming Soon" business type. */
export const COMING_SOON_IMAGES = {
  doctors: "/images/doctor-1.svg",
  kitchens: "/images/kitchen-2.svg",
};

/** Two stacked backgrounds: the photo on top, the fallback art underneath. */
export function layeredBg(slot: { photo: string; fallback: string }) {
  return {
    backgroundImage: `url(${slot.photo}), url(${slot.fallback})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as const;
}
