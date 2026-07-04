/* ---------------------------------------------
   Shared design tokens + helpers
--------------------------------------------- */

export const NAVY = "#0E2544";
export const NAVY_DARK = "#0A1B33";
export const NAVY_LIGHT = "#214B74";

export const GREEN = "#4C9A3F";
export const GREEN_DARK = "#3D8132";
export const GREEN_LIGHT = "#E8F3E3";

export const COMPANY = {
  name: "Techsail Engineering",
  tagline: "Reliable. Efficient. Engineered.",
  email: "info@techsailengineering.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  address: "Engineering College Road, Trivandrum, Kerala 695016, India",
  industry: "Facilities Services",
  companySize: "2–10 employees",
};

/* Contact Form */
export const FORM_ENDPOINT =
  "https://formspree.io/f/mdkgoljw";

/* Careers Form */
export const CAREERS_FORM_ENDPOINT =
  "https://formspree.io/f/mdkgoljw";

export const NAV_MAP = {
 
  
  
  Solutions: "services",
  Industries: "industries",
  Resources: "process",
  Careers: "careers",
  Contact: "contact",
};

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}