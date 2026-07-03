import React, { useState } from "react";
import { Settings, Menu, X } from "lucide-react";
import { NAV_MAP, NAVY, GREEN, COMPANY, scrollToId } from "../constants";
import logo from "../assets/techsail.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = Object.keys(NAV_MAP);

  const handleNavClick = (label) => {
    scrollToId(NAV_MAP[label]);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button className="flex items-center gap-2" onClick={() => scrollToId("home")}>
        <img
  src={logo}
  alt={COMPANY.name}
  className="h-12 w-auto object-contain"
/>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link, i) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                i === 0
                  ? "border-current"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              style={i === 0 ? { color: GREEN, borderColor: GREEN } : {}}
            >
              {link}
            </button>
          ))}
        </nav>

        <button
          className="hidden lg:block px-5 py-2.5 rounded-md text-sm font-semibold text-white"
          style={{ backgroundColor: NAVY }}
          onClick={() => scrollToId("quote")}
        >
          Get a Quote
        </button>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          {links.map((link, i) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium text-gray-700 text-left"
              style={i === 0 ? { color: GREEN } : {}}
            >
              {link}
            </button>
          ))}
          <button
            className="w-full px-5 py-2.5 rounded-md text-sm font-semibold text-white"
            style={{ backgroundColor: NAVY }}
            onClick={() => {
              scrollToId("quote");
              setOpen(false);
            }}
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
