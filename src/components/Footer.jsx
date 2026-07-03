import React, { useState } from "react";
import { Linkedin, Facebook, Twitter, Instagram, Phone, Mail, MapPin, Settings } from "lucide-react";
import { NAV_MAP, NAVY_DARK, COMPANY, scrollToId } from "../constants";
import { PRIVACY_POLICY, TERMS_AND_CONDITIONS } from "../content/policyContent";
import LegalModal from "./LegalModal";

const COLUMNS = [
  {
    title: "Quick Links",
    items: Object.keys(NAV_MAP),
    onItemClick: (item) => scrollToId(NAV_MAP[item]),
  },
  {
    title: "Services",
    items: [
      "Hard Facility Services",
      "Soft Facility Services",
      "Technical & Support Services",
      "Project & Setup Support",
    ],
    onItemClick: () => scrollToId("services"),
  },
  {
    title: "Resources",
    items: ["Blog", "Case Studies", "Whitepapers", "FAQs", "Brochures"],
    onItemClick: () => scrollToId("process"),
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/techsail-engineering-compliance-private-limited/about/",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1BWGYKhLjK/",
  },
  {
    icon: Twitter,
    href: "https://x.com/your-company",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/techsailengineering/y",
  },
];

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(null); // null | "privacy" | "terms"

  return (
    <footer style={{ backgroundColor: NAVY_DARK }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 sm:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{COMPANY.name}</p>
              <p className="text-[10px] text-gray-400 -mt-0.5">{COMPANY.tagline}</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-gray-400 mb-5 max-w-xs">
            Affordable, quality-driven facility management and engineering
            solutions — simplifying how businesses and residential spaces are
            maintained, operated, and optimized.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({icon: Icon, href}, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
              >
                <Icon className="w-3.5 h-3.5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-white font-semibold text-sm mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => col.onItemClick(item)}
                    className="text-xs text-gray-400 hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-white font-semibold text-sm mb-4">Contact Us</p>
          <ul className="space-y-3 text-xs text-gray-400">
            <li>
              <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-3.5 h-3.5 shrink-0" /> {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="w-3.5 h-3.5 shrink-0" /> {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              {COMPANY.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-500">
          <p>© 2026 {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <button type="button" onClick={() => setLegalOpen("privacy")} className="hover:text-white">
              Privacy Policy
            </button>
            <button type="button" onClick={() => setLegalOpen("terms")} className="hover:text-white">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      <LegalModal
        open={legalOpen === "privacy"}
        onClose={() => setLegalOpen(null)}
        title="Privacy Policy"
        sections={PRIVACY_POLICY}
      />
      <LegalModal
        open={legalOpen === "terms"}
        onClose={() => setLegalOpen(null)}
        title="Terms & Conditions"
        sections={TERMS_AND_CONDITIONS}
      />
    </footer>
  );
}
