/* ---------------------------------------------
   Shared design tokens + helpers used across
   every component in this project.
--------------------------------------------- */

export const NAVY = "#0E2544";
export const NAVY_DARK = "#0A1B33";
export const GREEN = "#4C9A3F";
export const GREEN_LIGHT = "#E8F3E3";

export const COMPANY = {
  name: "Techsail Engineering",
  tagline: "Reliable. Efficient. Engineered.",
  // TODO: replace with your real contact details
  email: "info@techsailengineering.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  address: "Engineering College Road, Trivandrum, Kerala 695016, India",
  industry: "Facilities Services",
  companySize: "2–10 employees",
};

// TODO: sign up free at https://formspree.io, create a form, verify the
// email you want submissions sent to, then paste your form's endpoint URL
// here (looks like "https://formspree.io/f/xxxxxxxx"). Until you do this,
// the quote form will show an error instead of sending.
export const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

/* Maps nav labels to real section ids on the page. */
export const NAV_MAP = {
  "Home": "home",
  "About Us": "about",
  "Services": "services",
  "Solutions": "services",
  "Industries": "industries",
  "Resources": "process",
  "Careers": "contact",
  "Contact": "contact",
};

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
