/**
 * Photo slots for the sector pages.
 *
 * The pages use the illustrations in /public/images/ by default. To swap in a
 * real photo, drop it into the matching folder using these file names; it
 * then replaces the illustration automatically. To use .webp or .png, change
 * the extension here.
 *
 *   /public/images/turf/          sports turfs
 *   /public/images/fcommerce/     F-commerce
 *   /public/images/kitchen/       cloud kitchens
 *   /public/images/portfolio/     portfolio websites
 *   /public/images/restaurant/    restaurants and food carts
 */
export type Slot = { photo: string; fallback: string };

export const IMAGES = {
  /* ---- Sports turfs ---- */
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

  /* ---- F-commerce ---- */
  fcHero: {
    photo: "/images/fcommerce/hero.jpg",
    fallback: "/images/hero-fcommerce.svg",
  },
  fcCta: {
    photo: "/images/fcommerce/hero.jpg",
    fallback: "/images/hero-fcommerce.svg",
  },
  fcLaunch: {
    photo: "/images/fcommerce/launch.jpg",
    fallback: "/images/tier-launch.svg",
  },
  fcScale: {
    photo: "/images/fcommerce/scale.jpg",
    fallback: "/images/tier-scale.svg",
  },
  fcBrand: {
    photo: "/images/fcommerce/brand.jpg",
    fallback: "/images/tier-brand.svg",
  },

  /* ---- Cloud kitchens ---- */
  kitchenHero: {
    photo: "/images/kitchen/hero.jpg",
    fallback: "/images/hero-kitchen.svg",
  },
  kitchenCta: {
    photo: "/images/kitchen/hero.jpg",
    fallback: "/images/kitchen-2.svg",
  },
  kSimmer: {
    photo: "/images/kitchen/simmer.jpg",
    fallback: "/images/tier-simmer.svg",
  },
  kSizzle: {
    photo: "/images/kitchen/sizzle.jpg",
    fallback: "/images/tier-sizzle.svg",
  },
  kFeast: {
    photo: "/images/kitchen/feast.jpg",
    fallback: "/images/tier-feast.svg",
  },

  /* ---- Portfolio websites ---- */
  pfHero: {
    photo: "/images/portfolio/hero.jpg",
    fallback: "/images/hero-portfolio.svg",
  },
  pfCta: {
    photo: "/images/portfolio/hero.jpg",
    fallback: "/images/hero-portfolio.svg",
  },
  pfDraft: {
    photo: "/images/portfolio/draft.jpg",
    fallback: "/images/tier-draft.svg",
  },
  pfShowcase: {
    photo: "/images/portfolio/showcase.jpg",
    fallback: "/images/tier-showcase.svg",
  },
  pfSignature: {
    photo: "/images/portfolio/signature.jpg",
    fallback: "/images/tier-signature.svg",
  },

  /* ---- Restaurants & food carts ---- */
  rtHero: {
    photo: "/images/restaurant/hero.jpg",
    fallback: "/images/hero-restaurant.svg",
  },
  rtCta: {
    photo: "/images/restaurant/hero.jpg",
    fallback: "/images/hero-restaurant.svg",
  },
  rtCart: {
    photo: "/images/restaurant/cart.jpg",
    fallback: "/images/tier-cart.svg",
  },
  rtCounter: {
    photo: "/images/restaurant/counter.jpg",
    fallback: "/images/tier-counter.svg",
  },
  rtChefsTable: {
    photo: "/images/restaurant/chefs-table.jpg",
    fallback: "/images/tier-chefstable.svg",
  },
} as const;

/** Two stacked backgrounds: the photo on top, the fallback art underneath. */
export function layeredBg(slot: Slot) {
  return {
    backgroundImage: `url(${slot.photo}), url(${slot.fallback})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as const;
}
