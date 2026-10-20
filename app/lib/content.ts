export const BRAND = "Matra";

/** Fill in your real details. These are placeholders. */
export const CONTACT = {
  email: "hello@matra.com",
  phone: "+880 1XXX-XXXXXX",
  /** Digits only, country code first (880...). */
  whatsappNumber: "8801XXXXXXXXX",
  location: "Chattogram, Bangladesh",
};

/**
 * Builds a WhatsApp link with a prefilled message. Every message ends with
 * "[Site]" so that, during the case study month, you can tell which enquiries
 * came from this website (and which plan button they pressed).
 */
export function waLink(message = "Hi Matra, I sell on Facebook and want an online store for my page.") {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(`${message} [Site]`)}`;
}

/**
 * Where "Create your store" should send people (your app or web dashboard sign-up).
 * Leave empty until it is ready: the buttons then fall back to WhatsApp.
 */
export const APP_URL = "";
