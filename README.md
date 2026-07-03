# Techsail Engineering Website

A component-based React website for Techsail Engineering — an emerging
facility management and engineering services startup based in Trivandrum,
Kerala. Built with Vite + Tailwind CSS + lucide-react icons.

## Structure

```
techsail-engineering-website/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Composes all sections
    ├── index.css          # Tailwind directives
    ├── constants.js       # Colors, nav map, COMPANY details, scroll helper
    ├── content/
    │   └── policyContent.js  # Privacy Policy + Terms & Conditions text
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── ServiceCard.jsx
        ├── StatsBar.jsx
        ├── Industries.jsx
        ├── Process.jsx
        ├── ProcessStep.jsx
        ├── WhyChooseUs.jsx     # Value props (no fabricated testimonials)
        ├── QuoteCTA.jsx        # Quote request form
        ├── ContactSection.jsx  # Contact Us section with embedded Google Map
        ├── Footer.jsx
        ├── LegalModal.jsx      # Modal for Privacy Policy / Terms
        └── VideoModal.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

## Things to double-check before launch

- **Get form submissions emailed to you (important!)**: the quote form uses
  [Formspree](https://formspree.io) to deliver submissions straight to your
  inbox with no backend needed. To activate it:
  1. Sign up free at formspree.io and verify your email.
  2. Create a new form — it'll give you an endpoint like
     `https://formspree.io/f/xxxxxxxx`.
  3. Paste that URL into `FORM_ENDPOINT` in `src/constants.js`.
  Until you do this, the "Submit Request" button will show an error instead
  of sending. The free plan covers 50 submissions/month, which is plenty to
  start.
- **`src/constants.js` → `COMPANY` object**: the email (`info@techsailengineering.com`)
  and phone (`+91 98765 43210`) are placeholders — replace with your real
  contact details. Everything else (Footer, Contact section, legal pages)
  pulls from this one object, so updating it here updates the whole site.
- **Hero and CTA images** (`Hero.jsx`, `QuoteCTA.jsx`) are placeholder photos
  from picsum.photos — swap in real photos of your team/sites.
- **`WhyChooseUs.jsx`** intentionally avoids fabricated client testimonials
  since Techsail is a new company. Swap in real client quotes once you have
  them — a `TestimonialCard`-style component can easily be reintroduced.
- **`StatsBar.jsx`** uses honest, startup-appropriate stats (team size,
  response time, local presence) rather than inflated client/site counts —
  update these numbers as the company grows.
- **Google Map** in `ContactSection.jsx` uses a no-API-key embed pointed at
  `COMPANY.address`. Update the address in `constants.js` if it changes.
- **Privacy Policy / Terms & Conditions** (`src/content/policyContent.js`)
  are template legal text — have a lawyer review before publishing,
  especially if you'll serve customers outside India.
